import React, { useState } from 'react';

const Student = () => {

    const [students, setStudents] = useState([
        { id: 1, name: "Arun", marks: 75 },
        { id: 2, name: "Bala", marks: 85 },
        { id: 3, name: "Kumar", marks: 65 }
    ]);


    const addStudent = () => {

        const newStudent = {
            id: 4,
            name: "Priya",
            marks: 90
        };

        const duplicate = students.some(
            (student) => student.id === newStudent.id
        );

        if (duplicate) {

            alert("Student ID already exists!");

        }
        else {

            setStudents([...students, newStudent]);

        }

    };

    

    const updateStudent = () => {

        const updatedStudents = students.map((student) => {

            if (student.id === 2) {

                return { ...student, marks: 95 };

            }

            return student;

        });

        setStudents(updatedStudents);

    };

   

    const deleteStudent = () => {

        const updatedStudents = students.filter(
            (student) => student.id !== 3
        );

        setStudents(updatedStudents);

    };

    return (

        <div className="bg-white p-6 rounded-xl shadow-lg m-5">

            <h1 className="text-2xl font-bold text-center text-orange-600 mb-5">
                Student Records
            </h1>

           

            <div className="flex flex-wrap gap-3 mb-6">

                <button
                    onClick={addStudent}
                    className="bg-green-600 text-white px-5 py-2 rounded-lg"
                >
                    Add Student
                </button>

                <button
                    onClick={updateStudent}
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg"
                >
                    Update Marks
                </button>

                <button
                    onClick={deleteStudent}
                    className="bg-red-600 text-white px-5 py-2 rounded-lg"
                >
                    Delete Student
                </button>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {students.map((student) => (

                    <div key={student.id} className="bg-orange-50 p-4 rounded-lg">

                        <h2 className="text-lg font-bold">
                            {student.name}
                        </h2>

                        <p>ID: {student.id}</p>

                        <p className="text-blue-600 font-semibold">
                            Marks: {student.marks}
                        </p>

                    </div>

                ))}

            </div>

        </div>

    );

};

export default Student;