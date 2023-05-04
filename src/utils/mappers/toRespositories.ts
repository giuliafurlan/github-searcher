import { Repository } from '@/types/repository';
import { RepositoryResponse } from '@/types/repository.response';

export const toRepositories = (response: RepositoryResponse): Repository[] => {
    return response.search.edges.map((repo) => {
        return {
            name: repo.node.name,
            description: repo.node.description,
            lastUpdate: repo.node.updatedAt,
            topics: repo.node.repositoryTopics.nodes.map((t) => t.topic.name),
            followers: repo.node.stargazers.totalCount,
        };
    });
};
