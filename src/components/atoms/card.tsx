import { ReactElement } from 'react';

interface CardProps {
    children: ReactElement;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div
            className="flex gap-2 p-6 my-3"
            data-testid="card"
            style={{ borderTop: '1px solid' }}
        >
            {children}
        </div>
    );
};

export default Card;
