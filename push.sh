#!/bin/sh
# this assumes you created the openshift directory in your home directory
# modify the script if this is not the case

echo "Building to prod"
meteor build prod
echo "Copying to ..openshift"
cp prod/app.tar.gz ../openshift
echo "Removing created app.tar.gz file"
rm prod/app.tar.gz
echo "Move to openshift directory"
cd ~/openshift
echo "Un-bundle tar file"
tar -xvf app.tar.gz -s '/^bundle//'
echo "Removing app.tar.gz file"
rm mymeteordemo.tar.gz
echo "Commiting new file"
git add .
git commit -am "a change"
echo "Push to openshift"
git push