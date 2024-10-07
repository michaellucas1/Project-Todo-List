import Element from "./Element";
export default class Nav extends Element {
    constructor(){
        super();
        this.#createElements();
        this.#setClasses();
        this.#setText();
        this.#appendElement();
    }
    #createElements(){
        this.parentNav =super.create('nav');
        this.projectNav = super.create('div');

        this.childDivOne = super.create('div');

        this.childDivTwo= super.create('div');
        this.childDivThree = super.create('div');
        this.childButtonOne=super.create('button');

        this.childDivFour=super.create('div');
        this.childDivFive= super.create('div');
        this.childButtonTwo=super.create('button');

        this.childDivSix=super.create('div');
        this.childDivSeven= super.create('div');
        this.childButtonThree=super.create('button');

        this.childDivEight=super.create('div');
        this.childDivNine= super.create('div');
        this.childButtonFour=super.create('button');

        this.childDivTen=super.create('div');
        this.childDivEleven= super.create('div');
        this.childButtonFive=super.create('button');
    }
    #setClasses(){
        super.setClass(this.childDivOne,'project-control');
        super.setClass(this.projectNav,'project-nav');

        super.setClass(this.childDivTwo,'control-items'); 
        super.setClass(this.childDivThree,'icon');
        super.setClass(this.childDivThree,'add-task-icon');

        super.setClass(this.childDivFour,'control-items');
        super.setClass(this.childDivFive,'icon');
        super.setClass(this.childDivFive,'search-icon');

        super.setClass(this.childDivSix,'control-items');
        super.setClass(this.childDivSeven,'icon');
        super.setClass(this.childDivSeven,'today-icon');

        super.setClass(this.childDivEight,'control-items');
        super.setClass(this.childDivNine,'icon');
        super.setClass(this.childDivNine,'upcoming-icon');

        super.setClass(this.childDivTen,'control-items');
        super.setClass(this.childDivEleven,'icon');
        super.setClass(this.childDivEleven,'complete-icon');
    }
    #setText(){
        super.setTextContent(this.childButtonOne,"Add Project");
        super.setTextContent(this.childButtonTwo,"Search");
        super.setTextContent(this.childButtonThree,"Today");
        super.setTextContent(this.childButtonFour,"Upcoming");
        super.setTextContent(this.childButtonFive,"Completed");
        super.setTextContent(this.projectNav,'Hello');
    }
    #appendElement(){
        super.connect(this.childDivThree,this.childDivTwo);
        super.connect(this.childButtonOne,this.childDivTwo);
        super.connect(this.childDivTwo,this.childDivOne);

        super.connect(this.childDivFive,this.childDivFour);
        super.connect(this.childButtonTwo,this.childDivFour);
        super.connect(this.childDivFour,this.childDivOne);

        super.connect(this.childDivSeven,this.childDivSix);
        super.connect(this.childButtonThree,this.childDivSix);
        super.connect(this.childDivSix,this.childDivOne);

        super.connect(this.childDivNine,this.childDivEight);
        super.connect(this.childButtonFour,this.childDivEight);
        super.connect(this.childDivEight,this.childDivOne);

        super.connect(this.childDivEleven,this.childDivTen);
        super.connect(this.childButtonFive,this.childDivTen);
        super.connect(this.childDivTen,this.childDivOne); 
        
        super.connect(this.childDivOne,this.parentNav); 
        super.connect(this.projectNav,this.parentNav);
    }
    getElement(){
        return this.parentNav;
    }
    add(elementData){

    }
    remove(elementData){

    }
}