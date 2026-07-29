#!/usr/bin/env bash
set -e
mkdir -p public

echo "Downloading SHAHEEN branding images into public/ ..."

curl -L -o public/shaheen-logo.png "https://i.postimg.cc/m22gQSbf/SHAHEEN-YS.png"
curl -L -o public/shaheen-favicon.png "https://i.postimg.cc/FssHjx9s/SHAHEEN-Y.png"
curl -L -o public/shaheen-thumb.png "https://i.postimg.cc/ncchv1HZ/SHAHEEN-YSs.png"
curl -L -o public/shaheen-avatar.png "https://i.postimg.cc/sDDgpJVr/SHAHEEN.jpg"
curl -L -o public/YS.jpg "https://i.postimg.cc/jddSzhsT/YS.jpg"
curl -L -o public/YSS.jpg "https://i.postimg.cc/4NNxz1Js/YSS.jpg"

echo "Done. Commit the public/ files if you want them in the repo."
