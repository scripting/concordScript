# concordScript

The source code for the scripting functions in the Drummer outliner.

### What's here

<a href="https://github.com/scripting/concordScript/blob/main/scripting.js">scripting.js</a> contains one function, runScriptText, which is the equivalent of eval in JavaScript. 

<a href="https://github.com/scripting/concordScript/blob/main/verbs.js">verbs.js</a> defines all the verbs in the language, this is where most of the work went, and should continue.

<a href="https://github.com/scripting/concordScript/blob/main/jstokens.js">jstokens.js</a> -- part of the script compiler.

### Included files

These files must be included for the code to run.

* http://scripting.com/publicfolder/code/jsParserForLO2/acorn.js

* http://scripting.com/publicfolder/code/jsParserForLO2/escodegen.browser.js

* http://scripting.com/code/wpidentity/client/api.js

### How to read in Drummer

All this code is managed in Drummer of course. 

To read all the code, which is in source.opml:

1. Copy <a href="https://raw.githubusercontent.com/scripting/concordScript/refs/heads/main/source.opml">this URL</a> on the clipoard.

2. Open Drummer.

3. Choose Open URL from the File menu.

4. Paste the URL, click OK.

