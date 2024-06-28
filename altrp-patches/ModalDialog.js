/**
 * ## ModalDialog Web Component
 * Custom dialog components using a Promise-based modal for user interaction.
 *
 * ## Example:
 * ```
 * // Replace the native javascript functions
 * const alert   = modal.alert,
 *       prompt  = modal.prompt,
 *       confirm = modal.confirm;
 *
 * let reset = async () => {
 *     let result = await confirm("Are you sure you want to reset the application? <br /><br /> This will erase all your saved data and cannot be undone.", "Reset Application?");
 *     if (result === true) {
 *         let done = await resetFunction();
 *         if (done) {
 *             alert("This application has been successfully reset!", "Finished!");
 *         } else {
 *             alert("Something went wrong! You're settings remain unchanged.", "Unexpected Error!");
 *         }
 *     } else if (result === false) {
 *         alert("This application was not reset! You're settings remain unchanged", "Reset Canceled!");
 *     }
 * }
 * ```
 */

 class ModalDialogElement extends HTMLElement {

    constructor() {
        super();
        this.build();
    }

    /**
     * Assigns and builds the dialog
     */
    build() {
        const self = this;
        this.attachShadow({ mode: "open" });
        const modalDialog = document.createElement("div");
        modalDialog.classList.add("modal-dialog-window");

        const dialogElement = document.createElement("div");
        const dialogHeader = document.createElement("div");
        const dialogBody = document.createElement("div");
        const dialogFooter = document.createElement("div");

        const ico = document.createElement("span");
        ico.classList.add("modal-dialog-header-icon");

        const p = document.createElement("p");
        p.classList.add("p-flex");

        const btnClose = document.createElement("button");
        btnClose.classList.add("modal-dialog-button-close");
        btnClose.innerHTML += '<span class="modal-dialog-header-icon"><svg data-icon="small-cross" height="16" role="img" viewBox="0 0 16 16" width="16"><path d="M188.2 160L234 205.8C237.8 209.4 240 214.4 240 220C240 231 231 240 220 240C214.4 240 209.4 237.8 205.8 234.2L160 188.2L114.2 234.2C110.6 237.8 105.6 240 100 240C89 240 80 231 80 220C80 214.4 82.2 209.4 85.8 205.8L131.8 160L86 114.2C82.2 110.6 80 105.6 80 100C80 89 89 80 100 80C105.6 80 110.6 82.2 114.2 85.8L160 131.8L205.8 86C209.4 82.2 214.4 80 220 80C231 80 240 89 240 100C240 105.6 237.8 110.6 234.2 114.2L188.2 160z" fill-rule="evenodd" transform-origin="center" transform="scale(0.05, -0.05) translate(-160, -160)"></path></svg></span>';
        
        dialogHeader.append(ico, p, btnClose);

        dialogElement.classList.add("modal-dialog");
        dialogHeader.classList.add("modal-dialog-header");
        dialogBody.classList.add("modal-dialog-body");
        dialogFooter.classList.add("modal-dialog-footer");
        dialogBody.append(document.createElement("p"));
        dialogElement.append(dialogHeader, dialogBody, dialogFooter);
        modalDialog.append(dialogElement);

        const style = document.createElement("style");
        style.textContent = this.setStyle();
        this.shadowRoot.append(style, modalDialog);
    }

    /**
     * Returns the CSS styles for the modal dialogs.
     * @param {string} cssPadding the amount of padding for the modal
     */
    setStyle(cssPadding= '1em') {
        const padding = cssPadding;
        return `
      .modal-dialog-window {
        user-select: none;
        font-family: inherit;
        font-size: inherit;
        z-index: 1099999;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: auto;
        position: fixed;
        top: 0;
        left: 0;
      }
      
      .modal-dialog {
        width: calc(100% - 2em);
        max-width: 400px;
        overflow: hidden;
        box-sizing: border-box;
        box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.5);
        border-radius: 0.3em;
        animation: modal-dialog-show 265ms cubic-bezier(0.18, 0.89, 0.32, 1.28)
      }
      
      .modal-dialog.modal-dialog-hide {
        opacity: 0;
        animation: modal-dialog-hide 265ms ease-in;
      }

      @keyframes modal-dialog-show {
        0% {
          opacity: 0;
          transform: translateY(-100%);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes modal-dialog-hide {
        0% {
          opacity: 1;
          transform: translateX(0);
        }
        100% {
          opacity: 0;
          transform: translateY(-50%);
        }
      }
      
      .modal-dialog-header {
        font-family: inherit;
        font-size: 1.25em;
        color: inherit;
        background-color: rgba(0, 0, 0, 0.05);
        padding: 0.1em;
        border-bottom: solid 1px rgba(0, 0, 0, 0.15);
        display: flex;
      }

      .modal-dialog-header-icon{
        color: #5f6b7c;
        margin-left: 7.5px;
        margin-right: 7.5px;
        margin-top: 5px;
        margin-bottom: 5px;
        display: inline-block;
        vertical-align: text-bottom;
        fill: currentcolor;
        display: flex;
        align-items: center;
      }

      .modal-dialog-button-close{
        background: none;
        box-shadow: none;
        padding: 0px;
        margin: 0px;
        border: none;
        cursor: pointer;
      }

      .modal-dialog-button-close:hover {
        background: rgba(143,153,168,.15);
        box-shadow: none;
        color: #1c2127;
        text-decoration: none; 
      }     

      .modal-dialog-header > p{
        margin: 5px;
      }
      
      .modal-dialog-body {
        color: inherit;
        padding: ${padding};
      }
      
      .modal-dialog-body > p {
        color: inherit;
        padding: 0;
        margin: 0;
      }

      .p-flex{
        flex: 1 1 auto;
      }
            
      .modal-dialog .error {
        color: #db2828;
      }

      .modal-dialog .success {
        color: #21ba45;
      }

      .modal-dialog .info {
        color: #31ccec;
      }
                  
      .modal-dialog .warning {
        color: #f2c037;
      }
      
      .modal-dialog-footer {
        color: inherit;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: end;
      }
      
      /*.modal-dialog-button {
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        background-color: rgba(0, 0, 0, 0);
        width: 100%;
        padding: 1em;
        border: none;
        border-top: solid 1px rgba(0, 0, 0, 0.15);
        outline: 0;
        border-radius: 0px;
        transition: background-color 225ms ease-out;
      }
      
      .modal-dialog-button:focus {
        background-color: rgba(0, 0, 0, 0.05);
      }
      
      .modal-dialog-button:active {
        background-color: rgba(0, 0, 0, 0.15);
      }*/

      .modal-dialog-button {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        border: none;
        border-radius: 4px;
        padding: 0 16px;
        margin: 5px;
        min-width: 64px;
        height: 36px;
        vertical-align: middle;
        text-align: center;
        text-overflow: ellipsis;
        text-transform: uppercase;
        color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
        background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        font-family: var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);
        font-size: 14px;
        font-weight: 500;
        line-height: 36px;
        overflow: hidden;
        outline: none;
        cursor: pointer;
        transition: box-shadow 0.2s;
    }
    .modal-dialog-button-cancel {
        background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
        color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    }
    
    .modal-dialog-button::-moz-focus-inner {
        border: none;
    }
    
    /* Overlay */
    .modal-dialog-button::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
        opacity: 0;
        transition: opacity 0.2s;
    }
    
    /* Ripple */
    .modal-dialog-button::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        border-radius: 50%;
        padding: 50%;
        width: 32px; /* Safari */
        height: 32px; /* Safari */
        background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
        opacity: 0;
        transform: translate(-50%, -50%) scale(1);
        transition: opacity 1s, transform 0.5s;
    }
    
    /* Hover, Focus */
    .modal-dialog-button:hover,
    .modal-dialog-button:focus {
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    }
    
    .modal-dialog-button:hover::before {
        opacity: 0.08;
    }
    
    .modal-dialog-button:focus::before {
        opacity: 0.24;
    }
    
    .modal-dialog-button:hover:focus::before {
        opacity: 0.3;
    }
    
    /* Active */
    .modal-dialog-button:active {
        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    }
    
    .modal-dialog-button:active::after {
        opacity: 0.32;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0s;
    }
    
    /* Disabled */
    .modal-dialog-button:disabled {
        color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
        background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.12);
        box-shadow: none;
        cursor: initial;
    }
    
    .modal-dialog-button:disabled::before {
        opacity: 0;
    }
    
    .modal-dialog-button:disabled::after {
        opacity: 0;
    }      

      
      .modal-dialog-input {
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        width: 100%;
        padding: 0.5em;
        border: solid 1px rgba(0, 0, 0, 0.15);
        margin-top: ${padding};
        outline: 0;
        box-sizing: border-box;
        border-radius: 0;
        box-shadow: 0 0 0 0 rgba(13, 134, 255, 0.5);
        transition: box-shadow 125ms ease-out, border 125ms ease-out;
      }
      
      .modal-dialog-input:focus {
        border: solid 1px rgba(13, 134, 255, 0.8);
        box-shadow: 0 0 0.1em 0.2em rgba(13, 134, 255, 0.5);
      }
      
      @media (prefers-color-scheme: dark) {
        .modal-dialog-window {
          background-color: rgba(31, 31, 31, 0.5);
        }
        
        .modal-dialog {
          color: #f2f2f2;
          background-color: #464646;
        }
        
        .modal-dialog-input {
          background-color: #2f2f2f;
        }
      }
      
      @media (prefers-color-scheme: light) {
        .modal-dialog-window {
          background-color: rgba(221, 221, 221, 0.5);
        }
        
        .modal-dialog {
          color: #101010;
          background-color: #ffffff;
        }
      }
    `;
    }

    /**
     * Creates a dialog with the specified content and optional title header.
     * @param {string} content the message to alert the client
     * @param {string} title optional title for the dialog modal
     */
    createDialog(content, title= undefined) {
        const dialogHeader = this.shadowRoot.querySelector(".modal-dialog-header > p");
        const dialogBody = this.shadowRoot.querySelector(".modal-dialog-body > p");
        dialogBody.innerHTML = content;
        if (title === undefined) {
            dialogHeader.remove();
        }
        else {
            dialogHeader.innerHTML = title;
        }
    }

    /**
     * Removes a dialog after listening for the 'animationend' event to trigger
     */
    disposeDialog() {
        const self = this;
        const dialogElement = self.shadowRoot.querySelector(".modal-dialog");
        dialogElement.classList.add("modal-dialog-hide");
        dialogElement.addEventListener("animationend", function dialogElementAnimationEnd(event) {
            if (event.animationName === "modal-dialog-hide") {
                dialogElement.removeEventListener("animationend", dialogElementAnimationEnd);
                self.remove();
            }
        });
    }
}

/**
 * Promised-based alert dialog
 */
class AlertModalDialog extends ModalDialogElement {

    constructor() {
        super();
        this.setDefault()
    }

    /**
     * Sets the default values for the modal dialog
     */
    setDefault() {
        let content = this.dataset.content;
        let title = this.dataset.title;
        if (typeof content === "undefined") {
            return;
        }
        if (typeof title === "undefined") {
            title = null;
        }
        this.setAlert(content, title);
    }

    /**
     * Creates an alert dialog modal that waits for user interaction.
     * @param {string} content the message to alert the client
     * @param {string} title optional title for the dialog modal
     * @returns {Promise<boolean>}
     */
    setAlert(content, title) {
        const self = this;
        self.createDialog(content, title);
        const dialogFooterElm = self.shadowRoot.querySelector(".modal-dialog-footer");
        const dialogConfirmBtn = document.createElement("button");
        dialogConfirmBtn.classList.add("modal-dialog-button");
        dialogConfirmBtn.innerText = "ОК";
        dialogFooterElm.append(dialogConfirmBtn);
        dialogConfirmBtn.focus();

        const ico = self.shadowRoot.querySelector(".modal-dialog-header-icon");
        ico.innerHTML += '&nbsp;<svg data-icon="info-sign" height="16" role="img" viewBox="0 0 16 16" width="16"><path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM7 3h2v2H7V3zm3 10H6v-1h1V7H6V6h3v6h1v1z" fill-rule="evenodd"></path></svg>';

        function dialogInputKeyDown(e) {
          if (e.key == 'Escape')
          dialogConfirmBtn.click(); 
        }
        self.addEventListener("keydown", dialogInputKeyDown);       
        function dialogCloseBtnClick(e) {
            dialogConfirmBtn.click();
        }
        const dialogCloseBtn = self.shadowRoot.querySelector(".modal-dialog-button-close");
        dialogCloseBtn.addEventListener("click", dialogCloseBtnClick);
        return new Promise(function (resolve) {
            dialogConfirmBtn.addEventListener("click", function dialogConfirmBtnClick() {
                dialogConfirmBtn.removeEventListener("click", dialogConfirmBtnClick);
                dialogCloseBtn.removeEventListener("click", dialogCloseBtnClick);
                self.removeEventListener("keydown", dialogInputKeyDown);       
                self.disposeDialog();
                resolve(true);
            });
        });
    }
}

// Declare the custom alert modal dialog element as a web component
customElements.define("modal-alert", AlertModalDialog);

class ConfirmModalDialog extends ModalDialogElement {

    constructor() {
        super();
        this.setDefault();
    }

    /**
     * Sets the default values for the modal dialog
     */
    setDefault() {
        let content = this.dataset.content;
        let title = this.dataset.title;
        if (typeof content === "undefined") {
            return;
        }
        if (typeof title === "undefined") {
            title = null;
        }
        this.setConfirm(content, title);
    }

    /**
     * Creates a confirm dialog modal that waits for user interaction.
     * @param {string} condition the message inquiry for the client 
     * @param {string} title optional title for the dialog modal
     * @returns {Promise<boolean>}
     */
    setConfirm(condition, title, ok = 'ОК', cancel = 'Отмена') {
        const self = this;
        self.createDialog(condition, title);
        const dialogFooter = self.shadowRoot.querySelector(".modal-dialog-footer");
        const dialogBtnCancel = document.createElement("button");
        const dialogBtnConfirm = document.createElement("button");
        dialogBtnCancel.classList.add("modal-dialog-button");
        dialogBtnCancel.classList.add("modal-dialog-button-cancel");
        dialogBtnCancel.innerText = cancel;
        dialogBtnConfirm.classList.add("modal-dialog-button");
        dialogBtnConfirm.innerText = ok;
        dialogFooter.append(dialogBtnConfirm, dialogBtnCancel);
        dialogBtnConfirm.focus();

        const ico = self.shadowRoot.querySelector(".modal-dialog-header-icon");
        ico.innerHTML += `&nbsp;<svg data-icon="info-sign" height="16" role="img" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8,0C3.58,0,0,3.58,0,8s3.58,8,8,8s8-3.58,8-8S12.42,0,8,0z M9,13H7v-2h2V13z
        M10.93,6.48c-0.14,0.32-0.35,0.64-0.62,0.97L9.25,8.83C9.13,8.98,9.01,9.12,8.97,9.25C8.93,9.38,8.88,9.55,8.88,9.77V10H7.12
       V8.88c0,0,0.05-0.51,0.21-0.71L8.4,6.73c0.22-0.26,0.35-0.49,0.44-0.68c0.09-0.19,0.12-0.38,0.12-0.58c0-0.3-0.1-0.55-0.28-0.75
       C8.5,4.53,8.24,4.44,7.92,4.44c-0.33,0-0.59,0.1-0.78,0.29c-0.19,0.19-0.33,0.46-0.4,0.81c-0.03,0.11-0.1,0.15-0.2,0.14l-1.7-0.25
       C4.72,5.42,4.68,5.35,4.7,5.24C4.82,4.42,5.16,3.77,5.73,3.3C6.3,2.82,7.05,2.58,7.98,2.58c0.47,0,0.9,0.07,1.29,0.22
       c0.39,0.15,0.72,0.34,1,0.59c0.28,0.25,0.49,0.55,0.65,0.89C11.07,4.63,11.14,5,11.14,5.4S11.07,6.15,10.93,6.48z"/></svg>`;

        function dialogInputKeyDown(e) {
            if (e.key == 'Escape')
              dialogBtnCancel.click(); 
        }
        self.addEventListener("keydown", dialogInputKeyDown);       
        function dialogCloseBtnClick(e) {
            dialogBtnCancel.click();
        }
        const dialogCloseBtn = self.shadowRoot.querySelector(".modal-dialog-button-close");
        if (cancel != 'Отмена')
            dialogCloseBtn.style.display = 'none'; //Если кастомная кнопка отмены, то прячем крестик
        dialogCloseBtn.addEventListener("click", dialogCloseBtnClick);
        return new Promise(function (resolve) {
            dialogBtnCancel.addEventListener("click", function dialogBtnCancelClick() {
                this.removeEventListener("click", dialogBtnCancelClick);
                dialogCloseBtn.removeEventListener("click", dialogCloseBtnClick);
                self.removeEventListener("keydown", dialogInputKeyDown);
                self.disposeDialog();
                resolve(false);
            });
            dialogBtnConfirm.addEventListener("click", function dialogBtnConfirmClick() {
                this.removeEventListener("click", dialogBtnConfirmClick);
                dialogCloseBtn.removeEventListener("click", dialogCloseBtnClick);
                self.removeEventListener("keydown", dialogInputKeyDown);
                self.disposeDialog();
                resolve(true);
            });
        });
    }
}

// Declare the custom confirm modal dialog element as a web component
customElements.define("modal-confirm", ConfirmModalDialog);

class PromptModalDialog extends ModalDialogElement {

    constructor() {
        super();
        this.setDefault();
    }

    /**
     * Sets the default values for the modal dialog
     */
    setDefault() {
        let content = this.dataset.content;
        let title = this.dataset.title;
        if (typeof content === "undefined") {
            return;
        }
        if (typeof title === "undefined") {
            title = null;
        }
        this.setPrompt(content, title);
    }

    /**
     * Creates a prompt dialog modal that waits for user interaction.
     * @param {string} content the message to prompt the client
     * @param {string} title optional title for the dialog modal
     * @returns {Promise<value>}
     */
    setPrompt(content, title) {
        const self = this;
        self.createDialog(content, title);
        const dialogBody = self.shadowRoot.querySelector(".modal-dialog-body");
        const dialogInputWrapper = document.createElement("p");
        const dialogInput = document.createElement("input");
        dialogInput.classList.add("modal-dialog-input");
        dialogInput.type = "text";
        dialogInputWrapper.append(dialogInput);
        dialogBody.append(dialogInputWrapper);
        const dialogFooter = self.shadowRoot.querySelector(".modal-dialog-footer");
        const dialogBtnCancel = document.createElement("button");
        const dialogBtnConfirm = document.createElement("button");
        dialogBtnCancel.classList.add("modal-dialog-button");
        dialogBtnCancel.classList.add("modal-dialog-button-cancel");
        dialogBtnCancel.innerText = "Отмена";
        dialogBtnConfirm.classList.add("modal-dialog-button");
        dialogBtnConfirm.innerText = "ОК";
        dialogFooter.append(dialogBtnConfirm, dialogBtnCancel);
        dialogInput.focus();

        const ico = self.shadowRoot.querySelector(".modal-dialog-header-icon");
        ico.innerHTML += `&nbsp;<svg data-icon="info-sign" height="16" role="img" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M9,10H2V6h7V4H1C0.45,4,0,4.45,0,5v6c0,0.55,0.45,1,1,1h8V10z M13,13h-1V3h1
        c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1h-1c-0.37,0-0.7,0.11-1,0.28C10.7,1.11,10.37,1,10,1H9C8.45,1,8,1.45,8,2c0,0.55,0.45,1,1,1
        h1v10H9c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h1c0.37,0,0.7-0.11,1-0.28c0.3,0.17,0.63,0.28,1,0.28h1c0.55,0,1-0.45,1-1
        C14,13.45,13.55,13,13,13z M15,4h-2v2h1v4h-1v2h2c0.55,0,1-0.45,1-1V5C16,4.45,15.55,4,15,4z"/></svg>`;

        /**
         * Listen for the <code>Enter</code> key press event.
         * @param {event} e handler for the key press event
         */
        function dialogInputKeyPress(e) {
            if (e.key === "Enter") {
                dialogBtnConfirm.click();
            }
        }
        dialogInput.addEventListener("keypress", dialogInputKeyPress);
        function dialogInputKeyDown(e) {
          if (e.key == 'Escape')
            dialogBtnCancel.click(); 
        }
        self.addEventListener("keydown", dialogInputKeyDown);  
        function dialogCloseBtnClick(e) {
            dialogBtnCancel.click();
        }
        const dialogCloseBtn = self.shadowRoot.querySelector(".modal-dialog-button-close");
        dialogCloseBtn.addEventListener("click", dialogCloseBtnClick);
        return new Promise(function (resolve) {
            let userInput = null;
            dialogBtnCancel.addEventListener("click", function dialogBtnCancelClick() {
                this.removeEventListener("click", dialogBtnCancelClick);
                dialogInput.removeEventListener("keypress", dialogInputKeyPress);
                dialogCloseBtn.removeEventListener("click", dialogCloseBtnClick);
                self.removeEventListener("keydown", dialogInputKeyDown);  
                self.disposeDialog();
                resolve(userInput);
            });
            dialogBtnConfirm.addEventListener("click", function dialogBtnConfirmClick() {
                this.removeEventListener("click", dialogBtnConfirmClick);
                dialogInput.removeEventListener("keypress", dialogInputKeyPress);
                dialogCloseBtn.removeEventListener("click", dialogCloseBtnClick);
                self.removeEventListener("keydown", dialogInputKeyDown);  
                self.disposeDialog();
                userInput = dialogInput.value;
                resolve(userInput);
            });
        });
    }
}

// Declare the custom prompt modal dialog element as a web component
customElements.define("modal-prompt", PromptModalDialog);

/**
 * Class to handle the rendering of the custom ModalDialog elements.
 */
class modal {
    static async alert(content, title = null) {
        const alertDialog = document.createElement("modal-alert");
        document.body.appendChild(alertDialog);
        return await alertDialog.setAlert(content, title);
    }
    static async confirm(content, title = null, ok = 'ОК', cancel = 'Отмена') {
        const confirmDialog = document.createElement("modal-confirm");
        document.body.appendChild(confirmDialog);
        return await confirmDialog.setConfirm(content, title, ok, cancel);
    }
    static async prompt(content, title = null) {
        const promptDialog = document.createElement("modal-prompt");
        document.body.appendChild(promptDialog);
        return await promptDialog.setPrompt(content, title);
    }
}

const alert   = modal.alert,
      prompt  = modal.prompt,
      confirm = modal.confirm;