import UserCard from '@/components/molecules/user-card';
import { render, screen } from '@testing-library/react';

jest.mock('next/image', () => ({
    __esModule: true,
    default: jest.fn(),
}));

describe('UserCard', () => {
    const user = {
        username: 'johndoe',
        imageSrc: 'https://example.com/avatar.jpg',
        name: 'John Doe',
        bio: 'Lorem ipsum dolor sit amet.',
        location: 'New York, NY',
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('displays the user name ', async () => {
        render(<UserCard {...user} />);
        expect(await screen.findByText('John Doe')).toBeInTheDocument();
    });

    it('displays the user  description', async () => {
        render(<UserCard {...user} />);
        expect(
            screen.getByText('Lorem ipsum dolor sit amet.')
        ).toBeInTheDocument();
    });

    it('displays the user location', async () => {
        render(<UserCard {...user} />);
        expect(screen.getByText('New York, NY')).toBeInTheDocument();
    });
});
