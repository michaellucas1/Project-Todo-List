import "./styles/index.css";
import "./styles/css-reset.css";
import "./styles/modern-normalize.css";
import Display from "./components/Display.js";

new Display();
const addTask = document.querySelector(".project-control >.control-items:nth-child(1)");
const dialog = document.querySelector('dialog');
const form= document.querySelector('.book-form'); 
addTask.addEventListener('click',add);
function add(){
    dialog.showModal();
}

function open(){
    dialog.showModal();
}
function close(){
    dialog.close();
}

const closeModal=document.querySelector(".close-modal");  
console.log(closeModal);
closeModal.addEventListener("click",close);
form.addEventListener("submit",submit);
function submit(event){
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const formDataObject = {};
    myFormData.forEach((value,key)=>(formDataObject[key]=value));
    console.log(formDataObject);
    form.reset();
    dialog.close();
} 
