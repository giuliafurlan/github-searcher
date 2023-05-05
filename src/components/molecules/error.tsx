import Typography from '../atoms/typography';

interface ErrorProps {
    message?: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
    return (
        <div className="grid gap-3 text-center">
            <Typography variantName="h1" weight="bold" textColor="red">
                Ops! An error occurred
            </Typography>
            {message && (
                <Typography variantName="h3" weight="medium">
                    Message: <i>{message}</i>
                </Typography>
            )}
        </div>
    );
};

export default Error;
