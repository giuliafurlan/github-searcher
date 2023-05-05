import Error from '@/components/molecules/error';
import { render, screen } from '@testing-library/react';

describe('Error', () => {
    it('displays the generic message ', async () => {
        render(<Error />);
        const genericMessage = screen.getByText('Ops! An error occurred');
        expect(genericMessage).toBeInTheDocument();
    });

    it('displays the custom message', () => {
        const message = '401 Unauthorized';
        render(<Error message={message} />);
        const customMessage = screen.getByText(message);
        expect(customMessage).toBeInTheDocument();
    });
});
