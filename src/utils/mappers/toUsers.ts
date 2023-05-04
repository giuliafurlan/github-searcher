import { User } from '@/types/user';
import { UserResponse } from '@/types/users.response';

export const toUsers = (response: UserResponse): User[] => {
    return response.search.edges.map((user) => {
        return {
            name: user.node.name,
            username: user.node.login,
            imageSrc: user.node.avatarUrl,
            bio: user.node.bio,
            location: user.node.location,
        };
    });
};
