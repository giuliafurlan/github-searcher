import Card from '@/components/atoms/card';
import { render, screen } from '@testing-library/react';

describe('Card component', () => {
    it('should render correctly', () => {
        const childText = 'Test child';
        render(
            <Card>
                <div>{childText}</div>
            </Card>
        );
        const card = screen.getByTestId('card');
        expect(card).toBeInTheDocument();
    });

    it('should render its children', () => {
        const childText = 'Test child';
        render(
            <Card>
                <div>{childText}</div>
            </Card>
        );
        const card = screen.getByTestId('card');
        expect(card).toHaveTextContent(childText);
    });
});
