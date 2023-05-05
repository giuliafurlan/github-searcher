import { SearchParams } from '@/types/search-params';
import { SEARCH_REPOSITORIES, SEARCH_USERS } from '@/utils/graphql-queries';
import { toRepositories } from '@/utils/mappers/toRespositories';
import { toUsers } from '@/utils/mappers/toUsers';
import { useLazyQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

export const useGithubApi = ({ searchText, type }: SearchParams) => {
    const userSearch = type === 'users';
    const [fetchData, { data, error, loading }] = useLazyQuery(
        userSearch ? SEARCH_USERS : SEARCH_REPOSITORIES
    );
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (searchText) {
            setLoading(true);
            timeout = setTimeout(() => {
                fetchData({ variables: { queryString: searchText } });
                setLoading(false);
            }, 500);
        }
        return () => clearTimeout(timeout);
    }, [searchText, type]);

    const mapper = userSearch ? toUsers : toRepositories;
    return {
        data: searchText && data ? mapper(data) : undefined,
        error,
        loading: loading || isLoading,
    };
};
