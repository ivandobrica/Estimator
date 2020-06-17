# Project Estimator React App

A ready to use simple bolierplate for React app with Webpack.

## Table of contents

- [Instructions](#markdown-header-instructions)
- [React architecture](#markdown-header-react-architecture)
- [Css architecture](#markdown-header-css-architecture)
- [Git commit message style guide](#markdown-header-git-commit-message-style-guide)

## Instructions

Clone this repository and use npm to install the dependencies and devDependencies and start the server.

1. Clone this repo
2. Run `npm install`
3. Run `npm start`, **localhost:8080** will open up in your default browser

For production environments…

1. Clone this repo
2. Run `npm install`
3. Run `npm build`, **dist** folder should change

## React architecture

### Assets

Stores all assets (images, css, [scss](#markdown-header-css-architecture)…) that will not be imported via Javascript.

### Routes

Every route should have it’s own folder with two files – index.js and routeName.js. Index.js is used only for exporting routeName.js

### Packages

Home for all external packages.

### Components

Each component should have it’s own folder with two files – index.js for exporting the component and componentName.js. If a component is not reusable you should nest it directly in its parent component’s directory. Note that subdirectories are capped at a depth of 1.

### Utils

Used for storing helper functions that are used globally.

> Learn more about React structure [here](https://medium.com/@Charles_Stover/optimal-file-structure-for-react-applications-f3e35ad0a145).

## Css architecture

Base on ITCSS methodology

- **Settings**
 - Lowest specificity value used for storing scss settings like variables.
- **Tools**
 - Used for storing scss tools like functions and mixins.
- **Generic**
 - Files that have global impact with small specificity value like normalize.css, reset.css or global box-sizing rules
- **Elements**
 - All CSS that is dedicated to styling HTML element by tag names. For example, how would h1 element look like without any class on it? How would the site look like if it had no classes?
- **Objects**
 - The first layer in which we find class-level specificity. It is used for structure objects like grid system.
- **Components**
 - The most important layer used for styling the pieces of UI.
- **Utilities**
 - The most inelegant and heavy-handed layer containing utility and helper classes, hacks and overrides. Reserved for nasty css with highest specificity value like !important.
 - **Use as little as possible**.

> [Specificity graph](https://jonassebastianohlsson.com/specificity-graph/) is used to visualize your css code specificity.

## Git commit message style guide

Explain the **what** and **why** of a commit, not the how! The best way for writting commit message is to finish this phrase, "_This commit will_...". However, you finish that phrase, use that as your commit message.

The type is contained within the title and can be one of these types:

- **feat**: a new feature
- **fix**: a bug fix
- **docs**: changes to documentation
- **style**: formatting, missing semi colons, etc; no code change
- **refactor**: refactoring production code
- **test**: adding tests, refactoring test; no production code change
- **chore**: updating build tasks, package manager configs, etc; no production code change
