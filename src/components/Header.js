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
       this.parentHeader =this.create('header');
       this.childDivOne = this.create('div');
       this.childH1 = this.create('h1');
    }
    #setClasses(){
        this.setClass(this.childDivOne,'icon');
        this.setClass(this.childDivOne,'red-pin');
        }
    #setText(){
        this.setTextContent(this.childH1,"Todo List");
    }
    #appendElement(){
        this.connect(this.childDivOne,this.parentHeader);
        this.connect(this.childH1,this.parentHeader);
    }
    getElement(){
        return this.parentHeader;
    }
}