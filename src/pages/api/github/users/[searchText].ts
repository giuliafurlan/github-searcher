import { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from 'octokit';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN });

    const query =
        typeof req.query.searchText === 'string'
            ? req.query.searchText
            : typeof req.query.searchText === 'object'
            ? req.query.searchText[0]
            : '';

    const response = await octokit.request(`GET /search/users`, {
        q: query,
    });

    const result = response.data.items.map((it) => ({
        username: it.login || '',
        imageSrc: it.avatar_url,
    }));

    return res.status(200).json(result);
};
