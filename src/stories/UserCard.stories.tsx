import type { Meta, StoryObj } from '@storybook/react';
import UserCard from '../components/molecules/user-card';

const meta: Meta<typeof UserCard> = {
    title: 'Example/UserCard',
    component: UserCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UserCard>;

export const Default: Story = {
    args: {
        username: 'johndoe',
        imageSrc: 'https://images.app.goo.gl/K5tEi51HxAwDiGUYA',
        name: 'John Doe',
        bio: 'Lorem ipsum dolor sit amet.',
        location: 'New York, NY',
    },
};
