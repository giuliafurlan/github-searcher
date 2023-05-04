import { Repository } from '@/types/repository';
import React from 'react';
import RepositoryCards from '../organisms/repository-cards';
import SearchResult from './search-result';

interface Props {
    data: Array<Repository>;
}

const RepositorySearchResult: React.FC<Props> = ({ data }) => {
    return (
        <SearchResult>
            <RepositoryCards repositories={data} />
        </SearchResult>
    );
};

export default RepositorySearchResult;
