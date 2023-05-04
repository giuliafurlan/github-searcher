export interface RepositoryResponse {
    search: {
        edges: Item[];
    };
}

interface Item {
    node: {
        description: string;
        id: string;
        name: string;
        repositoryTopics: {
            nodes: Topic[];
        };
        updatedAt: string;
        stargazers: { totalCount: number };
    };
}

interface Topic {
    topic: {
        name: string;
    };
}
