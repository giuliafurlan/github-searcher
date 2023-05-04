import { User } from '@/types/user';
import UserCard from '../molecules/user-card';

interface Props {
    users: Array<User>;
}

const UserCards: React.FC<Props> = ({ users }) => {
    return (
        <>
            {users.map((user) => (
                <UserCard {...user} />
            ))}
        </>
    );
};

export default UserCards;
