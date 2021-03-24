chmod +x webapp/build-webapp
chmod +x server/copy-assets.sh
docker-compose -f docker-compose.local-setup.yml up --build -d