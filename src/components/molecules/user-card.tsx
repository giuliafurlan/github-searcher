import { User } from '@/types/user';
import Image from 'next/image';
import useSWR from 'swr';
import { fetcher } from '../../utils/api';
import Card from '../atoms/card';
import Typography from '../atoms/typography';

type UserCardProps = User;

const UserCard: React.FC<UserCardProps> = ({ username, imageSrc }) => {
    const { data } = useSWR(
        username ? `https://api.github.com/users/${username}` : null,
        fetcher
    );
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
                            {data && data.name}
                        </Typography>
                        <Typography
                            variantName="h4"
                            weight="medium"
                            textColor="grey"
                        >
                            {username}
                        </Typography>
                    </div>
                    <Typography variantName="p">{data && data.bio}</Typography>
                    <Typography variantName="p-sm" textColor="grey">
                        {data && data.location}
                    </Typography>
                </div>
            </>
        </Card>
    );
};

export default UserCard;
