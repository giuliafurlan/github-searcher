interface DropdownProps {
    value?: string;
    options: string[];
    onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ value, options, onChange }) => {
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    };

    return (
        <select value={value} onChange={handleSelect} className="p-2">
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
