REPO="https://github.com/SudharakaP/Service-Link-Angular.git"

# Clone the existing Service-Link-Angular front-end
cd .. && git clone $REPO && cd Service-Link-Angular

# Run the install and build and copy the files over

npm install && npm rebuild
npm run build
cp -rf dist/* ../ServiceLinkNode/public/

cd ../ServiceLinkNode

# Decrypt the key file
openssl aes-256-cbc -K $encrypted_76bf75918cf2_key -iv $encrypted_76bf75918cf2_iv -in gcloudkey.json.enc -out gcloudkey.json -d
