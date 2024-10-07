export default class EntryForm {
    constructor(){
        this.htmlData = `
            <dialog class="dialog">
                <div class="modal-container">
                    <button type="button" class="close-modal">&#10006;</button>
                    <form class="book-form">
                        <h1>New Task</h1>
                        <div class="form-control-container">
                            <div class="form-control">
                                <label for="title">Title:</label>
                                <input type="text" id="title" name="title" maxlength="64" required>
                            </div>
                            <div class="form-control">
                                <label for="due">Due Date:</label>
                                <input type="date" id="due" name="due" required>
                            </div>
                            <div class="form-control">
                                <label for="description">Description:</label>
                                <textarea id="description" name="description" maxlength="64" required rows="5" cols="33"></textarea>
                            </div>

                            <div class="form-control">
                                <label for="priority">Priority</label>
                                <select name="priority" id="priority">
                                    <option value="High-Priority">High Priority</option>
                                    <option value="Neutral">Neutral</option>
                                    <option value="Low-Priority">Low Priority</option>
                                </select>
                            </div>
                        </div>
                        <button class="submit-button" type=submit>Submit</button>
                    </form>
                </div>
            </dialog>`
    }
    getData(){
        return this.htmlData;
    }

}