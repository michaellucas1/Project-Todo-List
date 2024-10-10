import idArray from "./IDArray.js"
export default class GenerateID{
    constructor(){
        this.existingID = idArray;
    }
    generateID(){
        let searching=true;
        while(searching){
            let newId = Math.random().toString(36).substring(2, 9);
            let result = this.#checkID(newId)
            if(result===false){
                searching = false;
                this.existingID.push(newId);
                return newId;
            }   
        }

    }
    #checkID(newId){
        return this.existingID.includes(newId);
    }
}