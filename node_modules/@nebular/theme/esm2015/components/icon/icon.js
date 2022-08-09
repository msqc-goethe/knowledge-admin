export class NbFontIcon {
    constructor(name, content, params = {}) {
        this.name = name;
        this.content = content;
        this.params = params;
    }
    getClasses(options) {
        const classes = [];
        if (this.params.packClass) {
            classes.push(this.params.packClass);
        }
        const name = this.params.iconClassPrefix ? `${this.params.iconClassPrefix}-${this.name}` : this.name;
        classes.push(name);
        return classes;
    }
    getContent(options) {
        return this.content;
    }
}
export class NbSvgIcon {
    constructor(name, content, params = {}) {
        this.name = name;
        this.content = content;
        this.params = params;
    }
    getClasses(options) {
        const classes = [];
        if (this.params.packClass) {
            classes.push(this.params.packClass);
        }
        return classes;
    }
    getContent(options) {
        return this.content;
    }
}
//# sourceMappingURL=icon.js.map