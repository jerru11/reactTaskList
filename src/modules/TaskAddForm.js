import React from 'react';


class TaskAddForm extends React.Component {
    state = {};


    render() {
        return (<form>
            <input type="text" id="titleAdd" />
            <select id="priorityAdd">
                <option>low</option>
                <option>medium</option>
                <option>high</option>
                <option>error</option>
            </select>
            <input type="date" id="dateAdd" />
            <textarea id="descriptionAdd" />
            <button>Add Task</button>
        </form>);
    }
}

export default TaskAddForm;
