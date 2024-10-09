export default class EntryForm {
    constructor(){
        this.projectForm = `
            <dialog class="project-dialog">
                <div class="modal-container">
                    <button type="button" class="close-project-modal">&#10006;</button>
                    <form class="project-form">
                        <h1>New Project</h1>
                        <div class="form-control-container">
                            <div class="form-control">
                                <label for="project">Project Name:</label>
                                <input type="text" id="project" name="project" maxlength="64" required>
                            </div>
                        </div>
                        <button class="submit-button" type=submit>Submit</button>
                    </form>
                </div>
            </dialog>`
        this.createForm(this.projectForm);
    }
    createForm(formData){
        this.parser = new DOMParser();
        this.doc = this.parser.parseFromString(formData, 'text/html');
        this.div =document.createElement('div');
        this.div.innerHTML= this.doc.body.innerHTML;
    }
    getElement(){
        return this.div;
    }

} 