import type { Meta, StoryObj } from '@storybook/react';
import Typography from '../components/atoms/typography';

const meta: Meta<typeof Typography> = {
    title: 'Example/Typography',
    component: Typography,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const H1: Story = {
    args: {
        variantName: 'h1',
        children: 'H1 typography',
    },
};
export const H2: Story = {
    args: {
        variantName: 'h2',
        children: 'H2 typography',
    },
};
export const H3: Story = {
    args: {
        variantName: 'h3',
        children: 'H3 typography',
    },
};
export const H4: Story = {
    args: {
        variantName: 'h4',
        children: 'H4 typography',
    },
};
export const H5: Story = {
    args: {
        variantName: 'h5',
        children: 'H5 typography',
    },
};
export const H6: Story = {
    args: {
        variantName: 'h6',
        children: 'H6 typography',
    },
};
export const P: Story = {
    args: {
        variantName: 'p',
        children: 'p typography',
    },
};
export const Psmall: Story = {
    args: {
        variantName: 'p-sm',
        children: 'p small typography',
    },
};
