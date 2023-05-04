import { User } from '@/types/user';
import React from 'react';
import UserCards from '../organisms/user-cards';
import SearchResult from './search-result';

interface Props {
    data: Array<User>;
}

const UserSearchResult: React.FC<Props> = ({ data }) => {
    return (
        <SearchResult>
            <UserCards users={data} />
        </SearchResult>
    );
};

export default UserSearchResult;
