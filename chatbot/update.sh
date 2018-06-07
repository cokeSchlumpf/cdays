#!/bin/bash

cd cdays-bot-gen
npm run deploy
cd ..

wsk package delete cdays-bot-ext
wsk package bind cdays-bot-gen cdays-bot-ext -P package.parameters.json

wsk package delete cdays-bot 
wsk package bind /wsk-chatbot-framework_prod/v1 cdays-bot -P package.parameters.json