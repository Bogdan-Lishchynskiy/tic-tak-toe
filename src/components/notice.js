import { BackgroundPane } from "./background-page";
import { SimpleComponent } from "../libs/simple-component";

// Компонента для відображення повідомлень
export class Notice extends SimpleComponent {
    constructor(text, interval = 1000) {
        super("notice");

        // перевіряємо, чи існує попереднє повідомлення. Якщо існує, то видаляємо
        let element = document.querySelector(this.selector);
        if (element) this.removeElements();

        this.element.setAttribute(
            "style",
            "position: absolute; top: 20%; background-color: white; z-index: 11;" +
            "text-align: center; font-family: Monospace; font-size: 25px; width: 100%;"
        );
        this.element.textContent = text;
        this.backgroundPane = new BackgroundPane();

        document.body.appendChild(this.backgroundPane.element);
        document.body.appendChild(this.element);

        setTimeout(() => this.removeElements(), interval);
    }

    removeElements() {
        this.backgroundPane.destroy();
        this.destroy();
    }
}