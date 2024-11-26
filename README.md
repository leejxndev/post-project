# Twinkl React Tech Test

# Post Project Documentation

Author: Lee Jackson  
Date: 25/11/2024

## Set Up Instructions

Create a .env file in the root folder with the following:

VITE_API_URL = https://jsonplaceholder.typicode.com

## Project Overview

The project is a React-based web app that allows users to view, search, and delete posts from an external API.

The web app fetches posts from an external API and displays them in a clean and responsive UI built for both desktop and mobile. It also offers real-time search functionality, allowing users to filter posts by title as they type in the search box.

## Architecture/Folder Structure

The project is structured as below:

src/
├── assets/
├── components/
│ ├── post/
│ ├── searchBar/
│ └── shared/
│ └── primaryButton/
├── helpers/
└── hooks/

### Notable Folders:

- Components
  Contains all the custom components the app uses, from the `Post` component to the `SearchBar` component. There is also a `shared` folder for reusable components, such as the primary button.

- Helpers  
  Contains helper functions, reusable functions designed to simplify and modularize tasks and logic. This improves maintainability of the codebase.

- Hooks  
  As the app uses the 'Custom Hooks' design pattern, this folder contains all the custom hooks used in the application.

# Design Pattern

The project uses the Custom Hooks design pattern. This builds upon React's predefined hooks and allows us to create our own hooks for specific use cases.

For example, the `usePost` hook includes several functionalities:

- Fetching posts
- Searching posts
- Counting posts
- Deleting posts

Custom hooks allow us to keep logic separate from components, improving code reusability and maintainability.

## State Management

The app uses several pieces of state:

- `allPosts`  
  Stores the complete list of posts fetched from the API. This is used initially and when the user deletes some or all of their search terms.

- `filteredPosts`
  Stores the list of posts filtered based on the user's current search input.

- `isLoading`  
  Tracks whether the application is currently fetching or deleting posts and shows a loading message to the user.

This approach ensures that each piece of state is handled independently, promoting a clear separation of concerns and triggering component re-renders only when the relevant state is updated.

## API

The application interacts with two API endpoints:

- `GET /posts`  
  Used to fetch the complete list of posts, which are displayed and filtered within the app.

- `DELETE /posts/:id`
  Allows the app to delete a specific post by its unique ID.

## Theme

The app uses a theme system defined with CSS variables\*\*, stored in the `global.css` file. These variables provide a consistent set of colors (e.g., `--off-black`, `--white`, `--twinkl-blue`) that are used throughout the application for easy theming and maintainability.

Additionally, the app uses the Google Font `Rubik`, applied globally for a modern and clean style.

## Performance

To improve the app's performance, certain optimizations were implemented:

- `useCallback` Hook
  The `useCallback` hook was applied to the "Remove" button's functionality. React recreates functions on every render by default, which could cause unnecessary re-renders in child components.

  By using `useCallback`, the delete function maintains the same reference between renders, preventing unnecessary re-renders and improving performance. This is particularly useful for scalability as the number of posts increases.

## Future Enhancements

With additional time, the app could be improved in several ways:

1. Enhance Delete Functionality

   - Immediately remove the deleted post from the `filteredPosts` list, so it no longer appears to the user.

2. Integrate Comments

   - Use the available `/posts/1/comments` endpoint to fetch and display comments for each post, perhaps with an expandable section under each post.

3. Add Pagination or Infinite Scrolling
   - Efficiently handle large numbers of posts, improving performance and user experience.

## Task description

You are tasked with creating a React application that interacts with a Posts management API (https://jsonplaceholder.typicode.com/posts) to perform CRUD operations (Create, Read, Update, Delete). The application should be implemented using TypeScript and designed to be production-ready.

Refer to the guide on how to use the jsonplaceholder API:
https://jsonplaceholder.typicode.com/guide/

#### Time Limit: We don't expect you to spend longer than 3 hours on this task. If you'd like to capture any decisions, thoughts, or next steps you would take, feel free to do so.

#### Requirements

##### Fetch and display posts

- Implement a component that fetches the list of posts from https://jsonplaceholder.typicode.com/posts - [x]
- Display all fetched posts in a list format. - [x]

##### Search mechanism

- Implement a search bar that allows a user to search for posts by title and display only the desired posts. The search should be triggered on change. - [x]

##### Delete post

- For each post in the list, provide a "Remove" button. - [x]
- Implement the functionality to delete a post when the "Remove" button is clicked, using the appropriate server-side REST API method DELETE. - [x]

##### Testing

- Write sufficient tests to satisfy a production-ready application. - [x]

##### Documentation

- Add appropriate documentation for your application. - [x]

#### Wireframes

##### Mobile

![mobile_view](src/assets/mobile_view.png?raw=true)

##### Desktop

![pc_view](src/assets/pc_view.png?raw=true)

## Getting Started

### Prerequisites

- Node.js: Ensure you have Node.js version 20 or higher installed.

### Installation

#### Clone the repository:

```
git clone https://github.com/twinkltech/twinkl-react-tech-test.git
```

```
cd twinkl-react-tech-test
```

#### Install dependencies:

```
yarn
```

### Scripts

#### Development Server: Start the development server.

```
yarn dev
```

#### Lint: Lint the codebase.

```
yarn lint
```

#### Lint & Fix: Lint and automatically fix issues in the codebase.

```
yarn lint:fix
```

#### Format: Format the codebase using Prettier.

```
yarn format
```

#### Test: Run the test suite.

```
yarn test
```
