import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from '../components/atoms/dropdown';
import { SearchType } from '../types/search-type';

const meta: Meta<typeof Dropdown> = {
    title: 'Example/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
    args: {
        options: [
            { label: 'option 1', value: 'user' as SearchType },
            { label: 'option 2', value: 'repository' as SearchType },
        ],
    },
};
