#!/bin/sh
# this assumes you created the openshift directory in your home directory
# modify the script if this is not the case

echo "meteor bundle"
meteor build ../bundle.tar.gz
echo "unzip"
tar -xvf ../bundle.tar.gz --transform 's|^bundle/||' -C ../meteor/

echo "commit"
cd ../meteor
git add .
git commit -am "Adding a meteor.js application bundle"

echo "deploy"
git push
# echo "Building to prod RUN: 'meteor build prod'"
# meteor build ../prod
# echo "Copying to ..openshift"
# cp ../prod/app.tar.gz ../openshift
# echo "Removing created app.tar.gz file"
# rm ../prod/app.tar.gz
# echo "Move to openshift directory"
# cd ../openshift
# echo "Un-bundle tar file"
# tar -xvf app.tar.gz --transform 's|^bundle/||' -C ../meteor/
# echo "Removing app.tar.gz file"
# rm app.tar.gz
# echo "Commiting new file"
# git add .
# git commit -am "a change"
# echo "Push to openshift"
# git push origin master