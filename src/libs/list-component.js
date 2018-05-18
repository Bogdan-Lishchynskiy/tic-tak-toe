import { SimpleComponent } from "./simple-component";

// компонента для об'єднання елементав в масив (слоти в рядок, рядки в поле)
export class ListComponent extends SimpleComponent {
    constructor(selector) {
        super(selector);
        this.items = [];
    }

    getItem(index) {
        if (typeof index !== "number")
            throw Error("getRow must have a number as an argument");
        if (index < 0 || index > this.items.length) throw Error("Out of Bounds");
        return this.items[index];
    }
}