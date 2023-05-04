import { Repository } from '@/types/repository';
import RepositoryCard from '../molecules/repository-card';

interface Props {
    repositories: Array<Repository>;
}

const RepositoryCards: React.FC<Props> = ({ repositories }) => {
    return (
        <>
            {repositories.map((repo) => (
                <RepositoryCard {...repo} />
            ))}
        </>
    );
};

export default RepositoryCards;
