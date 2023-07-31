(Credit to Raswonders for Template)

# Contributing to Pantry Pal 

This file works as source of information for devs with contributor role on this repo. 

## Table of Contents

1. [Development Setup](#development-setup)
2. [How to Contribute](#how-to-contribute-explained)
3. [Coding Guidelines](#coding-guidelines)
4. [License](#license)

## Development Setup

Pantry Pal is developed with:

1. Handlebars (Template) | React when implemented
2. CSS/Materialize
3. Javascript
4. Node.JS
5. Express.JS
6. MongoDB/Mongoose
7. Google OAuth (2.0)

# Linting

This project uses ESLint as the linter. Linters help catch common errors and enforce consistent code style.

Some benefits of using a linter:

- Catches syntax errors and bugs early during development
- Enforces consistent code style as per project guidelines
- Improves code readability and maintainability
- Helps avoid bugs induced by human error
- Reduces simple mistakes that can lead to complex bugs
- Catches insecure and deprecated code patterns

Linting improves code quality and reduces bugs!

To setup development environment follow:

# Dependencies

    Node.js v10+
    Express
    MongoDB
    Mongoose
    Passport.js
    Google OAuth 2.0
    HTML/CSS
    JavaScript
    ESLint - linter
    Prettier - code formatter

1. clone repo
```bash
git clone https://github.com/sleepGuyWD/pantryPal-collab.git
```
2. install npm packages
```bash
cd pantryPal-collab

npm install
npm install nodemon
npm install express
npm install env --save
npm install dotenv
npm install body-parser
npm install exphbs
npm install handlebars //Note: we can update to react later
npm install express-handlebars
npm install connect-mongo
npm install mongoose
npm install passport-google-oauth20
npm install passport
npm install express-session
npm install --save path
npm install --save-dev nodemon
``` 

3. start development live server
```bash
npm run dev
```

## How to Contribute explained 

### Project Planning 

Project planning is done via [Pantry Pal project board](https://github.com/users/sleepGuyWD/projects/2) on github and every contributor to the repo should have write privileges to this dashboard. Some important facts about this system:
- currently we have only one view and that's Kanban board
- Kanban has three columns: Todo, In Progress and Done
- Tasks which are available for grasp are placed in Todo column
- There are 3 types of tasks (Task, GigaTask and Bug)
- Task represents atomic unit of work done to project 
- Every type of task starts first as an Issue on repo
- It turns to task in project dashboard only after it's explicitly assigned to project  
- GigaTask represent bigger piece of Work, it consist of list of smaller Tasks
- Bug is specialized Task focused on problems in app

To create task we must create Issue in github repo first and assign it to Pantry Pal project.

### Project Implementation

To implement any change there are some actions required for tracking & planning.

Actions required in Kanban:
- before we start making changes, we have to make sure there is a Task in Kanban for it 
- after we pick a Task, we should make ourselfs assignee, and move Task to In progress column of Kanban
- when we are finished with the task and our Pull Request is merged, task should be autocompleted
- in case you want to create Task, GigaTask, Bug or Pull Request please use templates as their body (from .github/templates/)

Actions required in git
1. Before we start working on Task we create brand new branch for it:
```bash
git checkout -b "feature/something-new-is-coming"
```
2. We Keep implementing Task and commiting to our branch
3. Once we are done implementing the change we run linter to check for problems
```bash
npm run lint
```
4. If there are no issues we format the code last
```bash
npm run format
```
5. When we are ready we push our branch upstream
```bash
git push --set-upstream origin feature/something-new-is-coming
```
6. Once branch is upstream we login to github and create Pull Request in our repo
7. There should be PR review from sb now but due lack of time we merge ourselfs
8. Once branch is merged we click to delete it in github
9. We delete also our local one
```bash
git branch -d "feature/something-new-is-coming"
```

## Coding Guidelines

No guidelines really just make sure you run linter and formatter before every pull request.

## License

Pantry Pal is released under the Creative Commons License. By contributing to this project, you agree to abide by the terms of this license.
