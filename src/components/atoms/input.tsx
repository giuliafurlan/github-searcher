import { ChangeEvent } from 'react';

interface InputProps {
    value: string;
    onChange: (newValue: string) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <input
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder="Start typing to search .."
            className="p-2 w-80 text-sm"
        />
    );
};
export default Input;
