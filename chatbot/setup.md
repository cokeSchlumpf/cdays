# Some commands

wsk action create cdays-bot-api/core-input \
  --sequence cdays-bot/core-input \
  --web true

wsk package bind cdays-bot-gen cdays-bot-ext -P package.parameters.json

wsk package delete cdays-bot && wsk package bind /wsk-chatbot-framework_prod/v1 cdays-bot -P package.parameters.json

curl https://openwhisk.eu-de.bluemix.net/api/v1/web/michael.wellner@googlemail.com_cdays2018-blue-unity/cdays-bot-api/core-input?message=Hello