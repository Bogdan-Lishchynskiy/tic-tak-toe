import { SimpleComponent } from "./simple-component";

// функціональність для одержання/запису textContent (інформації)
export class WritableComponent extends SimpleComponent {
    constructor(selector) {
        super(selector);
    }

    // отримання textContent
    get textContent() {
        return this.element.textContent;
    }

    // за запис xtContent
    set textContent(v) {
        return (this.element.textContent = v);
    }
}