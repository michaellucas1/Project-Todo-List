import Header from "./Header.js";
import ImageAttribution from "./AttributionElement.js";
import Connection from "./Connection.js";
import Nav from "./Nav.js";
import EntryForm from "./EntryForm.js";
import Content from "./Content.js";
 export default class Display extends Connection{
    constructor(){
        super();
        this.initialize();
    }
    initialize(){
        this.imageAttribution = new ImageAttribution();
        this.header = new Header();
        this.nav = new Nav();
        this.content = new Content();

        this.div = document.createElement('div');
        this.main = document.createElement('main');
        this.div.classList.add("content-wrapper");

        this.connect(this.imageAttribution.getElement());
        this.connect(this.header.getElement(),this.div);

        this.connect(this.nav.getElement(),this.main);
        this.connect(this.content.getElement(),this.main);
        this.connect(this.main,this.div);
        this.connect(this.div);

        this.entry = new EntryForm();
        let parser = new DOMParser();
        let doc = parser.parseFromString(this.entry.getData(), 'text/html');
        const body = document.querySelector("body");
        let fragment = document.createDocumentFragment();
        let div =document.createElement('div');
        div.innerHTML= doc.body.innerHTML;
        fragment.appendChild(div);
        body.appendChild(fragment);
    }
   

} 