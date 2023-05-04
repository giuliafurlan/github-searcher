import RepositoryCard from '@/components/molecules/repository-card';
import { Repository } from '@/types/repository';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import moment from 'moment';

jest.mock('next/image', () => ({
    __esModule: true,
    default: jest.fn(),
}));

describe('RepositoryCard', () => {
    const repository: Repository = {
        name: 'test-repo',
        description: 'test description',
        lastUpdate: '2022-01-01T00:00:00Z',
        topics: ['test-topic'],
        followers: 5,
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render repository name', () => {
        render(<RepositoryCard {...repository} />);
        expect(screen.getByText(repository.name)).toBeInTheDocument();
    });

    it('should render repository description', () => {
        render(<RepositoryCard {...repository} />);
        expect(screen.getByText(repository.description)).toBeInTheDocument();
    });

    it('should render repository topics', () => {
        render(<RepositoryCard {...repository} />);
        expect(screen.getByText(repository.topics[0])).toBeInTheDocument();
    });

    it('should render last update date', () => {
        render(<RepositoryCard {...repository} />);
        const formattedDate = moment(repository.lastUpdate).format(
            'MMM D, YYYY'
        );
        expect(
            screen.getByText(`Updated on ${formattedDate}`)
        ).toBeInTheDocument();
    });

    it('should render star count if data is available', () => {
        render(<RepositoryCard {...repository} />);
        expect(screen.getByText(`5`)).toBeInTheDocument();
    });

    it('should not render star count if data is not available', () => {
        const repoData = { ...repository, followers: 0 };
        render(<RepositoryCard {...repoData} />);
        expect(screen.queryByTestId('followers')).not.toBeInTheDocument();
    });
});
