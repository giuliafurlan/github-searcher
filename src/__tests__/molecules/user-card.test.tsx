import UserCard from '@/components/molecules/user-card';
import { render, screen } from '@testing-library/react';
import useSWR from 'swr';

jest.mock('next/image', () => ({
    __esModule: true,
    default: jest.fn(),
}));

jest.mock('swr');

const mockedSWR = useSWR as jest.MockedFunction<typeof useSWR>;

const mockedSWRResult = {
    data: null,
    error: null,
    mutate: jest.fn(),
    isValidating: false,
    isLoading: false,
};

describe('UserCard', () => {
    const user = {
        username: 'johndoe',
        imageSrc: 'https://example.com/avatar.jpg',
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('displays the user name and bio', async () => {
        const userData = {
            name: 'John Doe',
            bio: 'Lorem ipsum dolor sit amet.',
            location: 'New York, NY',
        };
        mockedSWR.mockReturnValue({
            ...mockedSWRResult,
            data: userData,
        });

        render(<UserCard {...user} />);
        expect(await screen.findByText('John Doe')).toBeInTheDocument();
        expect(
            screen.getByText('Lorem ipsum dolor sit amet.')
        ).toBeInTheDocument();
        expect(screen.getByText('New York, NY')).toBeInTheDocument();
    });
});
