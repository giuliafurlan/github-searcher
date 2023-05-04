import type { Meta, StoryObj } from '@storybook/react';
import RepositoryCard from '../components/molecules/repository-card';

const meta: Meta<typeof RepositoryCard> = {
    title: 'Example/RepositoryCard',
    component: RepositoryCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RepositoryCard>;

export const Default: Story = {
    args: {
        name: 'test-repo',
        description: 'test description',
        lastUpdate: '2022-01-01T00:00:00Z',
        topics: ['test-topic'],
        followers: 7,
    },
};
