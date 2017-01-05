#!/bin/bash

ARG_DEFS=(
  "[--version=(.*)]"
)
# $1 repo name
# $2 repo url git@github.com:Cedrusco/codesoju-angular
# $3 targetFolder ../generators/app/templates/angular1
function cloneRepo {
  echo "-- Cloning codesoju-$1..."
  git clone $2 $1 --depth=2
  rm -rf $1/.git
  replaceJsonProp "$1/package.json" "name" "<%= appName %>"
  replaceJsonProp "$1/bower.json" "name" "<%= appName %>"
  rm -rf $3 # ../generators/app/templates/angular1
  mkdir -p $3
  cp -R $1/ $3

}

function run {
  # Run from within outside Scripts
  cd ../

  rm -rf temp-repo/
  mkdir temp-repo
  cd temp-repo

  # Copy the template repo #
  cloneRepo "angular1" "git@github.com:Cedrusco/codesoju-angular"  "../generators/app/templates/angular1"

  # cloneRepo "angular2" "git@github.com:Cedrusco/codesoju-angular2"  "../generators/app/templates/angular2"

  # cloneRepo "mobile" "git@github.com:Cedrusco/codesoju-mobile"  "../generators/app/templates/cordova-mobile"


  # Clear the temp folder
  cd ../
  rm -rf temp-repo

  # echo "-- Committing and tagging..."
  if [[ ! $VERSION ]];
    then echo "Version does not exists";
    else replaceJsonProp "package.json" "version" "$VERSION"
  fi

  git add -A
  git commit -am "U: version $VERSION"
  git tag -f v$VERSION

  # echo "-- Pushing to codesoju"
  # git push -q origin master
  # git push -q origin v$VERSION

  echo "-- Version $VERSION pushed successfully to Cedrusco/codesoju!"

  # publish to npm
  # npm publish  -tag

  cd ../

}
echo "Directory: $(dirname $0)"
source $(dirname $0)/utils.inc
