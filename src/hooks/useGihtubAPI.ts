import { SearchParams } from '@/types/search-params';
import { SEARCH_REPOSITORIES, SEARCH_USERS } from '@/utils/graphql-queries';
import { toRepositories } from '@/utils/mappers/toRespositories';
import { toUsers } from '@/utils/mappers/toUsers';
import { useQuery } from '@apollo/client';

export const useGithubApi = ({ searchText, type }: SearchParams) => {
    const userSearch = type === 'users';
    const { data, error } = useQuery(
        userSearch ? SEARCH_USERS : SEARCH_REPOSITORIES,
        {
            variables: { queryString: searchText },
            skip: !searchText,
        }
    );

    const mapper = userSearch ? toUsers : toRepositories;
    return { data: data ? mapper(data) : undefined, error };
};
