import Element from "./Element";
export default class Header extends Element{
    constructor(){
        super();
        this.#createElements();
        this.#appendElement();
    }
    #createElements(){
       this.parentHeader =super.create('header');
       this.childDivOne = super.create('div');
       this.childH1 = super.create('h1');
       this.childDivTwo = super.create('div');
       this.childButtonOne=super.create('button');
       this.childButtonTwo=super.create('button');
       this.childButtonThree=super.create('button');
       this.#setClasses();
       this.#setText();
    }
    #setClasses(){
        super.setClass(this.childDivOne,'icon');
        super.setClass(this.childDivOne,'red-pin');
        super.setClass(this.childDivTwo,'user-container');
        super.setClass(this.childButtonOne,'profile-picture');
        super.setClass(this.childButtonTwo,'username');
        super.setClass(this.childButtonThree,'notification-button');
        }
    #setText(){
        super.setTextContent(this.childH1,"Todo List");
        super.setTextContent(this.childButtonOne,"Profile");
        super.setTextContent(this.childButtonTwo,"Name");
        super.setTextContent(this.childButtonThree,"Notifications");
    }
    #appendElement(){
        super.connect(this.childButtonOne,this.childDivTwo);
        super.connect(this.childButtonTwo,this.childDivTwo);
        super.connect(this.childButtonThree,this.childDivTwo);
        super.connect(this.childDivOne,this.parentHeader);
        super.connect(this.childH1,this.parentHeader);
        super.connect(this.childDivTwo,this.parentHeader);
        
        
    }
    getElement(){
        return this.parentHeader;
    }
}