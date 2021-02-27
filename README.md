# slotted-element-modal-issue
Repo to reproduce an issue with the dialog-polyfill related to focusing slotted elements

Steps to reproduce:

    1. Clone repo 
    2. Run `npm install`
    3. Run a local http-server, e.g. `npx http-serve`
    4. Navigate to the server URL in Firefox (The default URL is http://127.0.0.1:8080 if using http-serve)
    5. Attempt to focus the textarea, notice that it won't focus.
    
I've forked dialog-polyfill and fixed the issue. The fix can be seen on another branch. Instructions below:

    1. Run `git checkout polyfill-fix`
    2. git `submodule update --init --recursive`
    3. Run a local http-server, e.g. `npx http-serve`
    3. Navigate to the server URL in Firefox (The default URL is http://127.0.0.1:8080 if using http-serve)
    4. Attempt to focus the textarea, notice that it does focus.
