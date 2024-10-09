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
        this.parentNav =this.create('nav');
        this.projectNav = this.create('div');

        this.childDivOne = this.create('div');

        this.childDivTwo= this.create('div');
        this.childDivThree = this.create('div');
        this.childButtonOne=this.create('button');

        this.childDivFour=this.create('div');
        this.childDivFive= this.create('div');
        this.childButtonTwo=this.create('button');

        this.childDivSix=this.create('div');
        this.childDivSeven= this.create('div');
        this.childButtonThree=this.create('button');

        this.childDivEight=this.create('div');
        this.childDivNine= this.create('div');
        this.childButtonFour=this.create('button');

        this.childDivTen=this.create('div');
        this.childDivEleven= this.create('div');
        this.childButtonFive=this.create('button');
    }
    #setClasses(){
        this.setClass(this.childDivOne,'project-control');
        this.setClass(this.projectNav,'project-nav');

        this.setClass(this.childDivTwo,'control-items'); 
        this.setClass(this.childDivThree,'icon');
        this.setClass(this.childDivThree,'add-task-icon');
        this.setClass(this.childButtonOne,'add-project-button');

        this.setClass(this.childDivFour,'control-items');
        this.setClass(this.childDivFive,'icon');
        this.setClass(this.childDivFive,'add-task-icon');
        this.setClass(this.childButtonTwo,'add-task-button');

        this.setClass(this.childDivSix,'control-items');
        this.setClass(this.childDivSeven,'icon');
        this.setClass(this.childDivSeven,'today-icon');

        this.setClass(this.childDivEight,'control-items');
        this.setClass(this.childDivNine,'icon');
        this.setClass(this.childDivNine,'upcoming-icon');

        this.setClass(this.childDivTen,'control-items');
        this.setClass(this.childDivEleven,'icon');
        this.setClass(this.childDivEleven,'complete-icon');
    }
    #setText(){
        this.setTextContent(this.childButtonOne,"Add Project");
        this.setTextContent(this.childButtonTwo,"Add Task");
        this.setTextContent(this.childButtonThree,"Today");
        this.setTextContent(this.childButtonFour,"Upcoming");
        this.setTextContent(this.childButtonFive,"Completed");
        this.setTextContent(this.projectNav,'Hello');
    }
    #appendElement(){
        this.connect(this.childDivThree,this.childDivTwo);
        this.connect(this.childButtonOne,this.childDivTwo);
        this.connect(this.childDivTwo,this.childDivOne);

        this.connect(this.childDivFive,this.childDivFour);
        this.connect(this.childButtonTwo,this.childDivFour);
        this.connect(this.childDivFour,this.childDivOne);

        this.connect(this.childDivSeven,this.childDivSix);
        this.connect(this.childButtonThree,this.childDivSix);
        this.connect(this.childDivSix,this.childDivOne);

        this.connect(this.childDivNine,this.childDivEight);
        this.connect(this.childButtonFour,this.childDivEight);
        this.connect(this.childDivEight,this.childDivOne);

        this.connect(this.childDivEleven,this.childDivTen);
        this.connect(this.childButtonFive,this.childDivTen);
        this.connect(this.childDivTen,this.childDivOne); 
        
        this.connect(this.childDivOne,this.parentNav); 
        this.connect(this.projectNav,this.parentNav);
    }
    getElement(){
        return this.parentNav;
    }
}