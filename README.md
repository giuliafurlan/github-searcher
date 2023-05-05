This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# How to run the project

## Setup

Before running the projet you need:

-   Generate a Github token on your account
-   create a file `.env.local` in the project's root directory
-   Run `npm install`

## Usage

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Test

```bash
npm run test
```

### Storybook

```bash
npm run storybook
```

# Solution

## Architecture

I followed the Atomic design principles as a way of splitting the components, under `/src/components` there is a folder per each level.

Inside the atom folder you can find:

-   badge
-   card
-   dropdown
-   input
-   typography

Inside the molecules folder you can find:

-   `repository-card`: use the card component to display the repository information
-   `user-card`: use the card component to display the user information
-   `search-bar`: includes the title, the input and the dropdown
-   `title`: includes the GitHub logo, the title and the subtitle of the search bar

Inside the organisms folder you can find:

-   `repository-cards`: takes a list of repositories and iterate over it to map each repo in a RepositoryCard
-   `user-cards`: takes a list of users and iterate over it to map each repo in a UserCard

Inside the templates folder you can find:

-   `search-result`: a template component to describe the layout
-   `repository-search-result`: takes the SearchResult templates and passes it the RepositoryCards
-   `user-search-result`: takes the SearchResult templates and passes them to the UserCards

All components within the preceding directories are stateless, which not only simplifies testing but also promotes reusability.

The entire application state is encapsulated within `index.tsx` located in the `pages` directory. This design allows for a smoother transition to alternative state management solutions, such as Redux, as the application logic evolves and becomes more intricate.

## API

In my commit history, you'll notice that my initial implementation utilized the REST APIs `/search/users` and `/search/repositories` from Github. It soon became clear that chaining multiple requests was necessary to obtain all the required information. This approach was suboptimal and led to wasted resources, as well as hitting the rate limit of the Github APIs. To address these issues, I decided to migrate to GraphQL APIs, which allowed me to retrieve all required data in a single HTTP call. This optimization greatly improved performance and ensured that the application remained within the rate limit.

I also want to emphasize the importance of mappers in my implementation. Mappers enable me to reshape the objects returned from the API and decouple the logic, which is crucial for maintaining flexibility and scalability in the codebase.

## Tech stack

I decided to use `apollo` as the library to query the API, `apollo` takes care of canceling the previous HTTP pending call if a new one is triggered.

# Future improvements

While I am satisfied with the current state of the project, there are several areas where it could be further improved. For example,

The queries currently return only the first 30 elements, so implementing proper pagination would be the next logical step to improve the user experience.

Another valuable improvement would be to add Cypress to the project for end-to-end testing.

Finally, it is important to note that the application is currently missing error handling for API call failures. This is a crucial feature that should be implemented in future iterations of the project.

If time had allowed, I would have addressed all of the points mentioned above that are currently missing from the project.
