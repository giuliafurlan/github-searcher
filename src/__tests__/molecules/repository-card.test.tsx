import RepositoryCard from '@/components/molecules/repository-card';
import { Repository } from '@/types/repository';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import moment from 'moment';
import Image from 'next/image';
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

describe('RepositoryCard', () => {
    const repository: Repository = {
        name: 'test-repo',
        description: 'test description',
        lastUpdate: '2022-01-01T00:00:00Z',
        topics: ['test-topic'],
        owner: 'test-user',
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render repository name', () => {
        mockedSWR.mockReturnValue(mockedSWRResult);
        render(<RepositoryCard {...repository} />);
        expect(screen.getByText(repository.name)).toBeInTheDocument();
    });

    it('should render repository description', () => {
        mockedSWR.mockReturnValue(mockedSWRResult);
        render(<RepositoryCard {...repository} />);
        expect(screen.getByText(repository.description)).toBeInTheDocument();
    });

    it('should render repository topics', () => {
        mockedSWR.mockReturnValue(mockedSWRResult);
        render(<RepositoryCard {...repository} />);
        expect(screen.getByText(repository.topics[0])).toBeInTheDocument();
    });

    it('should render last update date', () => {
        mockedSWR.mockReturnValue(mockedSWRResult);
        render(<RepositoryCard {...repository} />);
        const formattedDate = moment(repository.lastUpdate).format(
            'MMM D, YYYY'
        );
        expect(
            screen.getByText(`Updated on ${formattedDate}`)
        ).toBeInTheDocument();
    });

    it('should render star count if data is available', () => {
        const followers = [{}, {}, {}];
        mockedSWR.mockReturnValue({
            ...mockedSWRResult,
            data: followers,
        });

        render(<RepositoryCard {...repository} />);
        expect(screen.getByText(`${followers.length}`)).toBeInTheDocument();
    });

    it('should not render star count if data is not available', () => {
        mockedSWR.mockReturnValue(mockedSWRResult);

        render(<RepositoryCard {...repository} />);
        expect(screen.queryByTestId('followers')).not.toBeInTheDocument();
    });

    it('should render the repository icon', () => {
        render(<RepositoryCard {...repository} />);
        expect(Image).toHaveBeenCalledWith(
            {
                alt: 'repository icon',
                className: 'self-start',
                src: {},
            },
            {}
        );
    });
});
