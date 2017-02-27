#!/bin/bash

# Automated deploy script with Circle CI.

# Exit if any subcommand fails.
set -e

# Variables
ORIGIN_URL=`git config --get remote.origin.url`

echo "Started deploying"

# Checkout gh-pages branch.
if [ `git branch | grep gh-pages` ]
then
  git branch -D gh-pages
fi
git checkout -b gh-pages


# Delete and move files.
find . -maxdepth 1 ! -name 'public' ! -name '.git' ! -name '.gitignore' -exec rm -rf {} \;
mv public/* .
rm -R public/

# Push to gh-pages.
git config --global user.email circleci@circleci
git config --global user.name CircleCI

git add -fA
git commit --allow-empty -m "$(git log -1 --pretty=%B) [ci skip]"
git push -f $ORIGIN_URL gh-pages

echo "Deployed Successfully!"

exit 0