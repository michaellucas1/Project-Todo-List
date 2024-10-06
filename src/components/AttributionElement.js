import Element from "./Element";
export default class AttributionElement extends Element {
    constructor(){
        super();
        this.#createElements();
        this.#appendElement();
    }
    #createElements(){
       this.parentSpan =super.create('span');
       this.childA = super.create('a');
       this.childSpan = super.create('span');
       this.#setAttributes();
       this.#setText();
    }
    #setAttributes(){
        super.setAttribute(this.parentSpan,'id',"image-attribution");
        super.setAttribute(this.childA,'rel',"noopener noreferrer");
        super.setAttribute(this.childA,'target',"_blank");
        super.setAttribute(this.childA,'href',"https://www.freepik.com/free-photo/wood-board-background_1247746.htm#query=brown%20cork%20board%20texture&position=1&from_view=keyword&track=ais_hybrid&uuid=09d05496-826e-4114-b8e3-671da1408d51");
    }
    #setText(){
        super.setTextContent(this.childA,"Image by topntp26");
        super.setTextContent(this.childSpan," on Freepik");
    }
    #appendElement(){
        super.connect(this.childA,this.parentSpan);
        super.connect(this.childSpan,this.parentSpan);
    }
    getElement(){
        return this.parentSpan;
    }
}