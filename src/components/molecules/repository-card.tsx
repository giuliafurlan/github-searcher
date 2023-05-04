import { Repository } from '@/types/repository';
import { fetcher } from '@/utils/api';
import moment from 'moment';
import Image from 'next/image';
import useSWR from 'swr';
import repositoryIcon from '../../assets/image/github-mark.svg';
import starIcon from '../../assets/image/star.svg';
import Badge from '../atoms/badge';
import Card from '../atoms/card';
import Typography from '../atoms/typography';

type RepositoryCardProps = Repository;

const RepositoryCard: React.FC<RepositoryCardProps> = ({
    name,
    description,
    lastUpdate,
    topics,
    owner,
}) => {
    const { data } = useSWR(
        name ? `https://api.github.com/users/${owner}/followers/` : null,
        fetcher
    );

    return (
        <Card>
            <>
                <Image
                    src={repositoryIcon}
                    alt="repository icon"
                    className="self-start"
                />
                <div className="grid gap-2">
                    <Typography variantName="h4" weight="bold" textColor="blue">
                        {name}
                    </Typography>

                    <Typography variantName="p" className="truncate">
                        {description}
                    </Typography>
                    <div className="flex gap-1 flex-wrap">
                        {topics?.map((t) => (
                            <Badge label={t} key={t} />
                        ))}
                    </div>

                    <div className="text-slate-500 flex gap-2 items-center">
                        {data && (
                            <div
                                className="flex items-center"
                                data-testid="followers"
                            >
                                <Image
                                    src={starIcon}
                                    alt="star icon"
                                    width={16}
                                />
                                <Typography variantName="p-sm">
                                    {data.length}
                                </Typography>
                            </div>
                        )}
                        <Typography variantName="p-sm">
                            Updated on{' '}
                            {moment(lastUpdate).format('MMM D, YYYY')}
                        </Typography>
                    </div>
                </div>
            </>
        </Card>
    );
};

export default RepositoryCard;
