import { useState } from 'react';
import Dropdown from '../atoms/dropdown';
import Input from '../atoms/input';
import Title from '../atoms/title';

const dropdownOptions = ['Users', 'Repository'];

const SearchBar = () => {
    const [input, setInput] = useState('');
    const [type, setType] = useState(dropdownOptions[0]);

    const handleInputChange = (newInput: string) => {
        setInput(newInput);
    };

    const handleTypeChange = (selectedEl: string) => {
        setType(selectedEl);
    };

    return (
        <div className="grid gap-4">
            <Title />
            <div className="flex gap-4">
                <Input value={input} onChange={handleInputChange} />
                <Dropdown
                    value={type}
                    options={dropdownOptions}
                    onChange={handleTypeChange}
                />
            </div>
        </div>
    );
};

export default SearchBar;
