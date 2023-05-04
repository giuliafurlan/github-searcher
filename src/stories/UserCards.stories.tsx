import type { Meta, StoryObj } from '@storybook/react';
import UserCards from '../components/organisms/user-cards';

const meta: Meta<typeof UserCards> = {
    title: 'Example/UserCards',
    component: UserCards,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UserCards>;

export const Default: Story = {
    args: {
        users: [
            {
                username: 'johndoe',
                imageSrc: 'https://images.app.goo.gl/K5tEi51HxAwDiGUYA',
                name: 'John Doe',
                bio: 'Lorem ipsum dolor sit amet.',
                location: 'New York, NY',
            },
            {
                username: 'johndoe',
                imageSrc: 'https://images.app.goo.gl/K5tEi51HxAwDiGUYA',
                name: null,
                bio: null,
                location: null,
            },
        ],
    },
};
