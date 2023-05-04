import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/atoms/card';

const meta: Meta<typeof Card> = {
    title: 'Example/Card',
    component: Card,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        children: <div>Child</div>,
    },
};
