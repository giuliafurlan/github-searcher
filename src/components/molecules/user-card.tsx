import { User } from '@/types/user';
import Image from 'next/image';
import Card from '../atoms/card';
import Typography from '../atoms/typography';

type UserCardProps = User;

const UserCard: React.FC<UserCardProps> = ({
    username,
    imageSrc,
    name,
    bio,
    location,
}) => {
    return (
        <Card>
            <>
                <Image
                    src={imageSrc}
                    alt={username}
                    width={40}
                    height={40}
                    className="rounded-full self-start"
                />
                <div>
                    <div className="flex gap-2">
                        <Typography
                            variantName="h4"
                            weight="bold"
                            textColor="blue"
                        >
                            {name}
                        </Typography>
                        <Typography
                            variantName="h4"
                            weight="medium"
                            textColor="grey"
                        >
                            {username}
                        </Typography>
                    </div>
                    <Typography variantName="p">{bio}</Typography>
                    <Typography variantName="p-sm" textColor="grey">
                        {location}
                    </Typography>
                </div>
            </>
        </Card>
    );
};

export default UserCard;
