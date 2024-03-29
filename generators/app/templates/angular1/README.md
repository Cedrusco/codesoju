# <%= appName %>

# CodeSoju Generated App

<img src="client/app/assets/images/readMe.png"></img>

## Pre-commit check
Check .hooks/commit-msg

Be sure to start the commit with the name of the project and the issue number, or 'Refactor' when you commit,
or your commit will fail. (i.e. SOJU-2819) or 'Refactor'.

## Setup
to properly set up your repo after downloading run:
```
$ ./setup.sh
```
This does several things:
- Install pre-commit hooks in your .git/hooks/ folder
- Install post-merge hooks which update the other hooks automatically after a pull/merge
- Installs gulp as a global CLI
- Installs npm modules from package.json
- ...

Run `npm install` and `bower install` to make sure you are up-to-date.
Have 2 tabs open in your terminal in the root of the app. Run `gulp` in one. It will watch for changes in js and html files on the frontend. Run `npm start` in the second tab to start the server.

## Development practices
- Work on issue/feature branches
- Pull request into develop branch when ready
- Pull request from develop branch into master branch periodically (after testing)

### Visit **[CodeSoju](http://codesoju.io)** for more information
