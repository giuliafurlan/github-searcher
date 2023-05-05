import Loader from '@/components/atoms/loader';
import Error from '@/components/molecules/error';
import SearchBar from '@/components/molecules/search-bar';
import RepositorySearchResult from '@/components/templates/repository-search-result';
import UserSearchResult from '@/components/templates/user-search-result';
import { useGithubApi } from '@/hooks/useGihtubAPI';
import { SearchParams } from '@/types/search-params';

import { useState } from 'react';

export default function Home() {
    const [params, setParams] = useState<SearchParams>({
        searchText: '',
        type: 'users',
    });

    const { data, error, loading } = useGithubApi(params);

    const ResultComponent =
        params.type === 'users' ? UserSearchResult : RepositorySearchResult;

    const showData = data && !loading;
    const showError = error && params.searchText && !loading;

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-center gap-16  content-center p-24 `}
        >
            <SearchBar params={params} onChangeParams={setParams} />
            {showData && <ResultComponent data={data} />}
            {showError && <Error message={error.message} />}
            {loading && <Loader />}
        </main>
    );
}
