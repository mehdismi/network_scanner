#!/bin/bash
set -e
BASE_DIR=$(pwd)

sudo apt update
sudo apt install -y python3 python3-pip python3-venv

if ! command -v npm &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt install -y nodejs
fi

sudo apt install -y postgresql postgresql-contrib
sudo apt install -y nmap

cd /tmp


sudo -u postgres psql -c "DO \$\$ BEGIN IF NOT EXISTS (SELECT FROM pg_catalog.pg_user WHERE usename = 'netscan') THEN CREATE USER netscan WITH PASSWORD 'netscan'; END IF; END \$\$;"
sudo -u postgres psql -tAc "SELECT 1 FROM pg_database WHERE datname='netscan'" | grep -q 1 || sudo -u postgres createdb -O netscan netscan

cd "$BASE_DIR/network_scanner"
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
python manage.py migrate
nohup python manage.py runserver 0.0.0.0:8000 &
deactivate

cd "$BASE_DIR/network_scanner/netscan-frontend"
npm install
nohup env HOST=0.0.0.0 PORT=3000 npm start &

echo "Open your browser and use: http://<Server IP>:3000"
