export APPROVAL_PROCESS_LIST=5
export SOFIEBIO_USERID=1
export SOFIEBIO_ACCOUNTID=1
export SOFIE_AUTO_FOLLOWING_USERS=1,2,3,4
export SOFIE_PROBE_DOMAIN='http://localhost:8080'
export DATABASE_URL=sqlite:////tmp/flaskauthenticationdemo.db
export SPARKPOST_API_KEY='klsfjlksdjflsadlfkj'
export SPARKPOST_SANDBOX_DOMAIN=''
export GIT_TOKEN=''
export SFDC_URL='https://na30.salesforce.com/'
export SFDC_USERNAME=''
export SFDC_PASSWORD=''
export SFDC_SECURITY_TOKEN=''
export SOFIE_ISSUE_EMAIL_USERS='justin.catterson@sofiebio.com'
export SESSION_KEY='1540399142ae3395451770f811aeb63a290c31033cdd730d'
export SIM_PRODUCTS=True
source ../bin/activate
python generate_db.py
python chat_server.py -m no
#foreman start
