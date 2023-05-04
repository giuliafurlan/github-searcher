import { gql } from '@apollo/client';

export const SEARCH_USERS = gql`
    query SearchUsers($queryString: String!) {
        search(query: $queryString, type: USER, first: 30) {
            userCount
            edges {
                node {
                    ... on User {
                        id
                        name
                        login
                        avatarUrl
                        bio
                        location
                        followers {
                            totalCount
                        }
                        repositories {
                            totalCount
                        }
                    }
                }
            }
        }
    }
`;

export const SEARCH_REPOSITORIES = gql`
    query SearchRepositories($queryString: String!) {
        search(query: $queryString, type: REPOSITORY, first: 30) {
            repositoryCount
            edges {
                node {
                    ... on Repository {
                        id
                        name
                        description
                        url
                        stargazers {
                            totalCount
                        }
                        updatedAt
                        repositoryTopics(first: 10) {
                            nodes {
                                topic {
                                    name
                                }
                            }
                        }
                        watchers {
                            totalCount
                        }
                    }
                }
            }
        }
    }
`;
