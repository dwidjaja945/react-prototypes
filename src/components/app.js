import React from 'react'
import Table from './table'

const students = [
    {student: 'Dylan Widjaja', course: 'Jazz Piano', grade: 86},
    {student: 'Sean McCrea', course: 'Rowing Coach', grade: 93},
    {student: 'Jasmine Li', course: 'Adopting Cats', grade: 10}
];

function App () {
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    );
}

export default App;