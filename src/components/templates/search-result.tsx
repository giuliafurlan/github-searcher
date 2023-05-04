import { ReactElement } from 'react';

interface Props {
    children: ReactElement;
}

const SearchResult: React.FC<Props> = ({ children }) => {
    return <div className="grid grid-cols-3 gap-x-8 mt-8">{children}</div>;
};

export default SearchResult;
