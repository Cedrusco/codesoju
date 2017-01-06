chmod +x setup_hooks.sh
sh setup_hooks.sh
npm install -g gulp-cli
npm install
npm run build
echo "Setup complete, please run 'npm start' to start the application"
