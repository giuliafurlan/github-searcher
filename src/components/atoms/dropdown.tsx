import { ChangeEventHandler } from 'react';

interface DropdownProps {
    value: string;
    options: string[];
    onChange: ChangeEventHandler<HTMLSelectElement>;
}

const Dropdown: React.FC<DropdownProps> = ({ value, options, onChange }) => {
    return (
        <select value={value} onChange={onChange}>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
