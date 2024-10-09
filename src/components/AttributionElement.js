import Element from "./Element";
export default class AttributionElement extends Element {
    constructor(){
        super();
        this.#createElements();
        this.#setAttributes();
        this.#setText();
        this.#appendElement();
    }
    #createElements(){
       this.parentSpan =this.create('span');
       this.childA = this.create('a');
       this.childSpan = this.create('span');
       
    }
    #setAttributes(){
        this.setAttribute(this.parentSpan,'id',"image-attribution");
        this.setAttribute(this.childA,'rel',"noopener noreferrer");
        this.setAttribute(this.childA,'target',"_blank");
        this.setAttribute(this.childA,'href',"https://www.freepik.com/free-photo/wood-board-background_1247746.htm#query=brown%20cork%20board%20texture&position=1&from_view=keyword&track=ais_hybrid&uuid=09d05496-826e-4114-b8e3-671da1408d51");
    }
    #setText(){
        this.setTextContent(this.childA,"Image by topntp26");
        this.setTextContent(this.childSpan," on Freepik");
    }
    #appendElement(){
        this.connect(this.childA,this.parentSpan);
        this.connect(this.childSpan,this.parentSpan);
    }
    getElement(){
        return this.parentSpan;
    }
}