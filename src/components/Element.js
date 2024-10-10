import Connection from "./Display.js";
export default class Element extends Connection{
    constructor(){
        super();
    }
    create(element){
        return document.createElement(`${element}`);
    }
    setAttribute(element,type,attribute){
        element.setAttribute(`${type}`,`${attribute}`); 
    }
    resetAttribute(element){
        while (element.attributes.length > 0) {
            element.removeAttribute(element.attributes[0].name);
          }
    }
    setClass(element,className){
        element.classList.add(`${className}`);
    }
    resetClass(element){
        element.className='';
    }
    setTextContent(element,text){
        element.textContent=`${text}`;
    }
}