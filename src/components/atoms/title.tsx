import Image from 'next/image';
import githubMark from '../../assets/image/github-mark.svg';
import Typography from './typography';

const Title = () => {
    return (
        <div className="flex gap-2">
            <div>
                <Image
                    src={githubMark}
                    alt="Github mark"
                    height={40}
                    width={40}
                />
            </div>
            <div>
                <Typography variantName="h3" weight="bold">
                    GitHub Searcher
                </Typography>
                <Typography variantName="h5" textColor="#484848">
                    Search users or repository below
                </Typography>
            </div>
        </div>
    );
};

export default Title;
