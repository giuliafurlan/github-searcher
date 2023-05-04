import { ReactElement } from 'react';

interface CardProps {
    children: ReactElement;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return <div className="flex gap-2 p-16">{children}</div>;
};

export default Card;
