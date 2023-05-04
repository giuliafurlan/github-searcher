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

    const { data } = useGithubApi(params);

    const ResultComponent =
        params.type === 'users' ? UserSearchResult : RepositorySearchResult;

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-center content-center p-24 `}
        >
            <SearchBar params={params} onChangeParams={setParams} />
            {data && <ResultComponent data={data} />}
        </main>
    );
}
