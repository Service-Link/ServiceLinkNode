REPO="https://github.com/SudharakaP/Service-Link-Angular.git"

# Clone the existing Service-Link-Angular front-end
cd .. && git clone $REPO && cd Service-Link-Angular

# Run the install and build and copy the files over

npm install
npm run build
cp -rf dist/* ../ServiceLinkNode/public/

cd ../ServiceLinkNode

# Decrypt the key file
openssl aes-256-cbc -K $encrypted_cf2799375742_key -iv $encrypted_cf2799375742_iv -in secrets.tar.enc -out secrets.tar -d
tar xvf secrets.tar