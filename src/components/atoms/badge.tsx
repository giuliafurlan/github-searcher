import Typography from './typography';

interface BadgeProps {
    label: string;
}

const Badge: React.FC<BadgeProps> = ({ label }) => {
    return (
        <div
            className="px-3 py-1 rounded-full bg-blue-300 w-fit"
            data-testid="badge"
        >
            <Typography variantName="p-sm" textColor="#1E40AF">
                {label}
            </Typography>
        </div>
    );
};

export default Badge;
