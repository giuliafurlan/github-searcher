import Typography from './typography';

interface BadgeProps {
    label: string;
}

const Badge: React.FC<BadgeProps> = ({ label }) => {
    return (
        <div className="px-2 rounded-full bg-blue-400" data-testid="badge">
            <Typography variantName="p-sm" textColor="#1E40AF">
                {label}
            </Typography>
        </div>
    );
};

export default Badge;
