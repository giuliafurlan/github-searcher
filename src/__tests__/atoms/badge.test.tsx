import Badge from '@/components/atoms/badge';
import { render, screen } from '@testing-library/react';

describe('Badge component', () => {
    it('should render correctly', () => {
        render(<Badge label="test" />);
        const badge = screen.getByTestId('badge');
        expect(badge).toBeInTheDocument();
    });

    it('should display the correct label', () => {
        const label = 'test';
        render(<Badge label={label} />);
        const badge = screen.getByTestId('badge');
        expect(badge).toHaveTextContent(label);
    });
});
