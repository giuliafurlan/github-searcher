import Dropdown from '@/components/atoms/dropdown';
import { SearchType } from '@/types/search-type';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Dropdown', () => {
    it('renders the dropdown with options', () => {
        const options = [
            { label: 'option 1', value: 'user' as SearchType },
            { label: 'option 2', value: 'repository' as SearchType },
        ];
        render(<Dropdown options={options} onChange={() => {}} />);
        const selectElement = screen.getByRole('combobox') as HTMLSelectElement;
        expect(selectElement).toBeInTheDocument();
        const optionElements = screen.getAllByRole(
            'option'
        ) as HTMLOptionElement[];
        expect(optionElements).toHaveLength(2);
        expect(optionElements[0]).toHaveValue('user');
        expect(optionElements[0]).toHaveTextContent('option 1');
    });

    it('calls the onChange function when an option is selected', () => {
        const options = [
            { label: 'option 1', value: 'user' as SearchType },
            { label: 'option 2', value: 'repository' as SearchType },
        ];
        const onChange = jest.fn();
        render(<Dropdown options={options} onChange={onChange} />);
        const selectElement = screen.getByRole('combobox') as HTMLSelectElement;
        expect(selectElement).toBeInTheDocument();
        const dropdown = screen
            .getByText('option 1')
            .closest('div') as HTMLElement;
        fireEvent.click(dropdown);

        const option = screen.getByText('option 2') as HTMLElement;
        fireEvent.click(option);
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith('repository');
    });
});
