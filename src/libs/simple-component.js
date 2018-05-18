export class SimpleComponent {
    // функціональність для додавання елемента в DOM
    constructor(selector) {
        if (!selector)
            throw Error("a SimpleComponent must be composed of a selector");
        this.selector = selector.toString();
        this.element = document.createElement(this.selector);
    }

    // видалаємо елемент
    destroy() {
        document.body.removeChild(this.element);
    }
}