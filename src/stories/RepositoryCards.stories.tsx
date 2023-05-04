import type { Meta, StoryObj } from '@storybook/react';
import RepositoryCards from '../components/organisms/repository-cards';

const meta: Meta<typeof RepositoryCards> = {
    title: 'Example/RepositoryCards',
    component: RepositoryCards,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RepositoryCards>;

export const Default: Story = {
    args: {
        repositories: [
            {
                name: 'test-repo',
                description: 'test description',
                lastUpdate: '2022-01-01T00:00:00Z',
                topics: ['test-topic'],
                followers: 7,
            },
            {
                name: 'test-repo2',
                description: 'test description22',
                lastUpdate: '2022-11-01T00:00:00Z',
                topics: ['test-topic'],
                followers: 0,
            },
        ],
    },
};
