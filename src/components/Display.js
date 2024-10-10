export default class Display{
    constructor(){
        this.body = document.querySelector('body');
    }
    disconnect(child, parent){
        parent = parent ?? this.body;
        parent.removeChild(child);
    }
    connect(child, parent){
        parent = parent ?? this.body;
        parent.appendChild(child);
    }
}