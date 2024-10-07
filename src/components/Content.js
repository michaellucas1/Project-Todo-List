import Element from "./Element.js";
export default class Content extends Element{
    constructor(){
        super();
        this.#createElements();
        this.#setClasses();
        this.#appendElement();
        this.#setText();

    }
    #createElements(){
        this.parentDiv =super.create('div');
        this.childH2 = super.create('h2');
        this.childDivOne = super.create('div');
    }
    #setClasses(){
        super.setClass(this.parentDiv,'main-content');
        super.setClass(this.childDivOne,'project-item-container');
    }
    #appendElement(){
        super.connect(this.childH2,this.parentDiv);
        super.connect(this.childDivOne,this.parentDiv);
    }
    #setText(){
        super.setTextContent(this.childH2,"Today");
    }
    getElement(){
        return this.parentDiv;
    }
}