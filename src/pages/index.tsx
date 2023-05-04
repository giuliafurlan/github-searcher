import SearchBar from '@/components/molecules/search-bar';
import RepositorySearchResult from '@/components/templates/repository-search-result';
import UserSearchResult from '@/components/templates/user-search-result';
import { Repository } from '@/types/repository';
import { SearchParams } from '@/types/search-params';
import { User } from '@octokit/webhooks-types';
import { useEffect, useState } from 'react';

export default function Home() {
    const [data, setData] = useState<User[] | Repository[] | null>(null);
    const [params, setParams] = useState<SearchParams>({
        searchText: '',
        type: 'repository',
    });

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (params.searchText) {
            timeout = setTimeout(handleSearchSubmit, 1000);
        } else {
            setData(null);
        }
        return () => clearTimeout(timeout);
    }, [params]);

    const handleSearchSubmit = () => {
        fetch(`api/github/${params.type}/${params.searchText}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    };

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
