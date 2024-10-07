import Element from "./Element";
export default class Header extends Element{
    constructor(){
        super();
        this.#createElements();
        this.#setClasses();
        this.#setText();
        this.#appendElement();
    }
    #createElements(){
       this.parentHeader =super.create('header');
       this.childDivOne = super.create('div');
       this.childH1 = super.create('h1');
    }
    #setClasses(){
        super.setClass(this.childDivOne,'icon');
        super.setClass(this.childDivOne,'red-pin');
        }
    #setText(){
        super.setTextContent(this.childH1,"Todo List");
    }
    #appendElement(){
        super.connect(this.childDivOne,this.parentHeader);
        super.connect(this.childH1,this.parentHeader);
    }
    getElement(){
        return this.parentHeader;
    }
}