import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from '../components/molecules/search-bar';

const meta: Meta<typeof SearchBar> = {
    title: 'Example/SearchBar',
    component: SearchBar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
    args: {
        params: {
            searchText: '',
            type: 'users',
        },
    },
};
