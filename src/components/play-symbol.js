import { WritableComponent } from "../libs/writable-component";

// відображення поточного символу
export class PlaySymbol extends WritableComponent {
    constructor() {
        super("symbol");
        this.element.setAttribute("style", "float: right");
    }
    set textContent(v) {
        super.textContent = `playing: ${v}`;
    }
}