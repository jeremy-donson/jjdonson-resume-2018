#!/bin/bash

# components: http://reactstrap.github.io/components/{collapse,navbar,form,tabs}/
# modernizr
# https://www.npmjs.com/package/node-linkedin


REACTSTRAP_COMPONENTS=(collapse navbar form tabs)

SECONDS=0

create-react-app ${1}       # default and unique

cd ${1}

# npm install  react react-dom --save-dev
npm install bootstrap@4.0.0-beta.3 --save-dev
npm install reactstrap@next --save-dev

npm install jquery                  # Proper version??
# + jquery@3.2.1 installed; bootstrap@4.0.0-beta.3 requires a peer of jquery@1.9.1 - 3
# https://www.npmjs.com/package/jquery

#  --save-dev vs --dev vs --production => pruneTime?
# https://stackoverflow.com/questions/22891211/what-is-the-difference-between-save-and-save-dev
# npm run build

cp App.js App-bkp.js

for COMPONENT in REACTSTRAP_COMPONENTS[@]
do
echo ${1} > ${COMPONENT}.js EOF
import 'bootstrap/dist/css/bootstrap.css';
import { ${COMPONENT} } from 'reactstrap';

EOF

# add new script to App.js
# Add new script to Content dictionary.

# $(<)
done

echo ${SECONDS}

npm start

# What determines npm port?  How to test and edit that?

echo alias chrome='/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'
echo alias chromel='/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'  --kiosk
open -a "Google Chrome" --args --kiosk http://www.example.com
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --foo --bar=2


