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

    const response = await octokit.request(`GET /search/repositories`, {
        q: query,
    });

    const result = response.data.items.map(async (it) => {
        return {
            name: it.full_name,
            description: it.description,
            lastUpdate: it.updated_at,
            topics: it.topics,
            owner: it.owner?.login,
        };
    });

    return res.status(200).json(result);
};
