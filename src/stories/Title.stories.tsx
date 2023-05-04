import type { Meta, StoryObj } from '@storybook/react';
import Title from '../components/molecules/title';

const meta: Meta<typeof Title> = {
    title: 'Example/Title',
    component: Title,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {};
