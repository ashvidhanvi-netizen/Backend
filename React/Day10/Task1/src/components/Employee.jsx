import React, { useState } from 'react';

const Employee = () => {

    const [employees, setEmployees] = useState([
        { id: 1, name: "Arun", salary: 25000 },
        { id: 2, name: "Bala", salary: 45000 },
        { id: 3, name: "Kumar", salary: 60000 },
        { id: 4, name: "Vijay", salary: 35000 },
        { id: 5, name: "Priya", salary: 55000 }
    ]);

    const [showFiltered, setShowFiltered] = useState(false);


    const filteredEmployees = employees.filter(
        (emp) => emp.salary > 40000
    );

    return (

        <div className="bg-white p-6 rounded-xl shadow-lg m-5">

            <h1 className="text-2xl font-bold text-center text-blue-600 mb-5">
                Employee Salary Details
            </h1>

            <button
                onClick={() => setShowFiltered(!showFiltered)}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg mb-5"
            >
                {showFiltered ? "Show All Employees" : "Filter Salary Above 40000"}
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {(showFiltered ? filteredEmployees : employees).map((emp) => (

                    <div key={emp.id} className="bg-blue-50 p-4 rounded-lg">

                        <h2 className="font-bold text-lg">{emp.name}</h2>

                        <p>ID: {emp.id}</p>

                        <p className="text-green-600 font-semibold">
                            Salary: {emp.salary}
                        </p>

                    </div>

                ))}

            </div>

        </div>

    );

};

export default Employee;