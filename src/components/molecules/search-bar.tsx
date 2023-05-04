import { SearchParams } from '@/types/search-params';
import { SearchType } from '@/types/search-type';
import { Dispatch, SetStateAction } from 'react';
import Dropdown from '../atoms/dropdown';
import Input from '../atoms/input';
import Title from './title';

export type DropdownOption = { label: string; value: SearchType };

const dropdownOptions: DropdownOption[] = [
    { label: 'Users', value: 'users' },
    { label: 'Repository', value: 'repository' },
];

interface SearchBarProps {
    params: SearchParams;
    onChangeParams: Dispatch<SetStateAction<SearchParams>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ params, onChangeParams }) => {
    const handleInputChange = (newInput: string) => {
        onChangeParams((prevState: SearchParams) => ({
            ...prevState,
            searchText: newInput,
        }));
    };

    const handleTypeChange = (selectedEl: SearchType) => {
        onChangeParams({
            searchText: '',
            type: selectedEl,
        });
    };

    return (
        <div className="grid gap-4">
            <Title />
            <div className="flex gap-4">
                <Input value={params.searchText} onChange={handleInputChange} />
                <Dropdown
                    value={params.type}
                    options={dropdownOptions}
                    onChange={handleTypeChange}
                />
            </div>
        </div>
    );
};

export default SearchBar;
