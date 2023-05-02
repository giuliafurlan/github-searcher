import { useState } from 'react';
import Dropdown from '../atoms/Dropdown';
import Input from '../atoms/Input';

const dropdownOptions = ['Users', 'Repository'];

const SearchBar = ({}) => {
    const [input, setInput] = useState('');
    const [type, setType] = useState(dropdownOptions[0]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setType(event.target.value);
    };

    return (
        <div className="flex gap-12">
            <Input value={input} onChange={handleInputChange} />
            <Dropdown
                value={type}
                options={dropdownOptions}
                onChange={handleTypeChange}
            />
        </div>
    );
};

export default SearchBar;
