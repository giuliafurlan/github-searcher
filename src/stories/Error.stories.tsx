import type { Meta, StoryObj } from '@storybook/react';
import Error from '../components/molecules/error';

const meta: Meta<typeof Error> = {
    title: 'Example/Error',
    component: Error,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Error>;

export const Default: Story = {};

export const WithMesssage: Story = {
    args: {
        message: '401 Unauthorized',
    },
};
