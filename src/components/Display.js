import Header from "./Header.js";
import ImageAttribution from "./AttributionElement.js";
import Connection from "./Connection.js";
 export default class Display extends Connection{
    constructor(){
        super();
        this.initialize();
    }
    initialize(){
        this.imageAttribution = new ImageAttribution();
        this.header = new Header();
        this.div = document.createElement('div');
        this.div.classList.add("content-wrapper");
        this.connect(this.imageAttribution.getElement());
        this.connect(this.header.getElement(),this.div);
        this.connect(this.div);
    }
   

} 