import type { Meta, StoryObj } from '@storybook/react';
import Badge from '../components/atoms/badge';

const meta: Meta<typeof Badge> = {
    title: 'Example/Badge',
    component: Badge,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
        label: 'github',
    },
};
