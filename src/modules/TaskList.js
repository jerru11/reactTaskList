import React from 'react';


class TaskList extends React.Component {
    state = {};

    render() {
        return (<table className="table-bordered">
            <thead>
                <tr>
                    <td>Done</td>
                    <td>Title</td>
                    <td>Priority</td>
                    <td>Date</td>
                </tr>
            </thead>
            <tbody>{this.props.taskList.toString()}</tbody>
        </table>);
    }
}

export default TaskList;
