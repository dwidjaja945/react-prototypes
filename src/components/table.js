import React from 'react';

function Table(props) {
    // when used on an array, .map() iterates through entire array, returns each array item, and it's index
    const tableRows = props.data.map( (arrayItem, arrayIndex) => {
        return (
            <tr key={arrayIndex}> 
            {/* Keys are to help React identify which items have been changed via index, in this case*/}
                <td>{arrayItem.student}</td>
                <td>{arrayItem.course}</td>
                <td>{arrayItem.grade}</td>
            </tr>
        )
    });
    return (
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
}

export default Table;