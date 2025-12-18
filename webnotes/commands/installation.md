python installation:pip3 install -r ./requirements.txt
for linux:
python3 -m venv venv
You must activate the venv first:
source venv/bin/activate
pip install -r requirements.txt
for deactivation:deactivate
Add venv/ to .gitignore so it’s not committed to Git:
venv/
