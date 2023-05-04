import { SearchType } from '@/pages';
import { DropdownOption } from '../molecules/search-bar';

interface DropdownProps {
    value?: SearchType;
    options: DropdownOption[];
    onChange: (value: SearchType) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ value, options, onChange }) => {
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as SearchType);
    };

    return (
        <select value={value} onChange={handleSelect} className="p-2">
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
