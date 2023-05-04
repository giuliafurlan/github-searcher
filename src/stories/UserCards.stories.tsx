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
                username: 'John Doe',
                imageSrc: 'https://example.com/avatar.jpg',
            },
            {
                username: 'Johnny Doe',
                imageSrc: 'https://example.com/avatar.jpg',
            },
        ],
    },
};
