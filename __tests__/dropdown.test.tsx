import Dropdown from '@/components/atoms/dropdown';
import { render, screen } from '@testing-library/react';

describe('Dropdown', () => {
    it('renders the dropdown with options', () => {
        const options = ['option1', 'option2', 'option3'];
        render(<Dropdown options={options} onChange={() => {}} />);
        const selectElement = screen.getByRole('combobox') as HTMLSelectElement;
        expect(selectElement).toBeInTheDocument();
        const optionElements = screen.getAllByRole(
            'option'
        ) as HTMLOptionElement[];
        expect(optionElements).toHaveLength(3);
        expect(optionElements[0]).toHaveValue('option1');
        expect(optionElements[0]).toHaveTextContent('option1');
    });

    it('calls the onChange function when an option is selected', () => {
        const options = ['option1', 'option2'];
        const onChange = jest.fn();
        render(<Dropdown options={options} onChange={onChange} />);
        const selectElement = screen.getByRole('combobox') as HTMLSelectElement;
        expect(selectElement).toBeInTheDocument();
        selectElement.focus();
        selectElement.value = 'option2';
        selectElement.blur();
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith('option2');
    });
});
