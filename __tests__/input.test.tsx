import Input from '@/components/atoms/Input';
import { fireEvent, render } from '@testing-library/react';

describe('Input', () => {
    it('should render the input with the correct value', () => {
        const { getByRole } = render(
            <Input value="hello" onChange={() => {}} />
        );
        const input = getByRole('textbox');
        expect(input).toHaveValue('hello');
    });

    it('should call onChange when the input value changes', () => {
        const onChangeMock = jest.fn();
        const { getByRole } = render(
            <Input value="hello" onChange={onChangeMock} />
        );
        const input = getByRole('textbox');
        fireEvent.change(input, { target: { value: 'world' } });
        expect(onChangeMock).toHaveBeenCalledWith('world');
    });
});
