import { Authenticatable } from "./Authenticatable";
import { MediaItems } from "./MediaItems";

export class Media extends Authenticatable {
    items: MediaItems;
    constructor() {
        super();
        this.items = new MediaItems();
    }
}
