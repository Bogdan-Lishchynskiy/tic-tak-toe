import { GameRow } from "./game-row";
import { ListComponent } from "../libs/list-component";


export class GameField extends ListComponent {
    constructor(field) {
        super("game-field");
        let gameRow;
        this.items = [];
        this.element.setAttribute(
            "style",
            "font-family: Monospace; text-align: center"
        );

        // заповнюємо поле рядками
        field.forEach(row => {
            gameRow = new GameRow(row);
            this.element.appendChild(gameRow.element);
            this.items.push(gameRow);
        });
    }
}