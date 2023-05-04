import { ReactElement } from 'react';

interface Props {
    children: ReactElement;
}

const SearchResult: React.FC<Props> = ({ children }) => {
    return <div className="grid grid-cols-3">{children}</div>;
};

export default SearchResult;
