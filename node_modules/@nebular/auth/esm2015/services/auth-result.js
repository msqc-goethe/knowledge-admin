export class NbAuthResult {
    // TODO: better pass object
    constructor(success, response, redirect, errors, messages, token = null) {
        this.success = success;
        this.response = response;
        this.redirect = redirect;
        this.errors = [];
        this.messages = [];
        this.errors = this.errors.concat([errors]);
        if (errors instanceof Array) {
            this.errors = errors;
        }
        this.messages = this.messages.concat([messages]);
        if (messages instanceof Array) {
            this.messages = messages;
        }
        this.token = token;
    }
    getResponse() {
        return this.response;
    }
    getToken() {
        return this.token;
    }
    getRedirect() {
        return this.redirect;
    }
    getErrors() {
        return this.errors.filter(val => !!val);
    }
    getMessages() {
        return this.messages.filter(val => !!val);
    }
    isSuccess() {
        return this.success;
    }
    isFailure() {
        return !this.success;
    }
}
//# sourceMappingURL=auth-result.js.map