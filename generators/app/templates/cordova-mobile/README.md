# <%= appName %>

## Pre-commit check
Be sure to include the name of the project and the issue number when you commit,
or your commit will fail. (e.i. SOJU-2819) or 'Refactor'.

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

Run `npm install` and `bower install` to make sure you are up-to-date. Then run `gulp serve` to run web app.

For Mobile Development:
- `gulp buildMobile`
- `cordova platform add android`
- `cordova platform add ios`
- `cordova build`
- `cordova run android`
- `cordova run ios`

## Development practices
- Work on issue/feature branches
- Pull request into develop branch when ready
- Pull request from develop branch into master branch periodically (after testing)
