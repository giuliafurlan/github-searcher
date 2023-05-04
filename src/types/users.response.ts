export interface UserResponse {
    search: {
        edges: Item[];
    };
}

interface Item {
    node: {
        avatarUrl: string;
        bio: string | null;
        followers: { totalCounts: number };
        id: string;
        login: string;
        name: string | null;
        location: string | null;
        repositories: {
            totalCount: number;
        };
    };
}
