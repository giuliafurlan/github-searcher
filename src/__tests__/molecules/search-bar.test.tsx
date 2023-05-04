import SearchBar from '@/components/molecules/search-bar';
import { SearchParams } from '@/types/search-params';
import { fireEvent, render } from '@testing-library/react';

describe('SearchBar', () => {
    const setSearchParams = jest.fn();
    const params: SearchParams = { searchText: '', type: 'users' };

    it('should update search text on input change', () => {
        const { getByRole } = render(
            <SearchBar params={params} onChangeParams={setSearchParams} />
        );

        const input = getByRole('textbox');
        fireEvent.change(input, { target: { value: 'react' } });

        expect(setSearchParams).toHaveBeenCalled();
    });

    it('should update search type on dropdown change', () => {
        const { getByText } = render(
            <SearchBar params={params} onChangeParams={setSearchParams} />
        );

        const dropdown = getByText('Users').closest('div') as HTMLElement;
        fireEvent.click(dropdown);

        const option = getByText('Repository') as HTMLElement;
        fireEvent.click(option);

        expect(setSearchParams).toHaveBeenCalled();
    });
});
