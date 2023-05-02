import { ChangeEventHandler } from 'react';

interface InputProps {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Start typing to search .."
        />
    );
};
export default Input;
