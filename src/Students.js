import React from 'react';

function Students(props) {

    console.log(props)

    return (
        <div>

            <h2>Student{props.name}</h2>
            <h2>Student Email{props.email}</h2>

        </div>
    );
}

export default Students;