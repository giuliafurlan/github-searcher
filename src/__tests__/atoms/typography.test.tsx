import Typography from '@/components/atoms/typography';
import { render, screen } from '@testing-library/react';

describe('Typography component', () => {
    it('should render correctly', () => {
        render(<Typography variantName="h1">Test</Typography>);
        const typography = screen.getByText('Test');
        expect(typography).toBeInTheDocument();
        expect(typography).toHaveStyle('font-weight: 400;');
    });

    it('should apply the correct styles based on its props', () => {
        render(
            <Typography variantName="h1" weight="bold" textColor="#f00">
                Test
            </Typography>
        );
        const typography = screen.getByText('Test');
        expect(typography).toHaveStyle(`
      color: #f00;
      font-size: 35px;
      line-height: 38px;
      font-weight: 700;
    `);
    });

    it('should apply the correct weight', () => {
        render(
            <Typography variantName="h1" weight="medium" textColor="#f00">
                Test
            </Typography>
        );
        const typography = screen.getByText('Test');
        expect(typography).toHaveStyle('font-weight: 500;');
    });
});
