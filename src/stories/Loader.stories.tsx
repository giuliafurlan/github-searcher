import type { Meta, StoryObj } from '@storybook/react';
import Loader from '../components/atoms/loader';

const meta: Meta<typeof Loader> = {
    title: 'Example/Loader',
    component: Loader,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {};
