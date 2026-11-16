const Employee = () => {

    const name = "Priya";
    const id = "EMP101";
    const designation = "React Developer";
    const salary = "₹35,000";
    const company = "TCS";

    return (

        <div className="flex justify-center items-center min-h-screen bg-gray-100">

            <div className="bg-white w-96 p-6 rounded-xl shadow-lg">

                <h1 className="text-2xl font-bold text-center text-red-600 mb-5">
                    Employee Details
                </h1>

                <hr />

                <h2 className="text-xl font-semibold text-center my-4">
                    {name}
                </h2>

                <p className="text-gray-700 mb-3">
                    Employee ID: {id}
                </p>

                <p className="text-gray-700 mb-3">
                    Designation: {designation}
                </p>

                <p className="text-gray-700 mb-3">
                    Salary: {salary}
                </p>

                <p className="text-gray-700 mb-4">
                    Company: {company}
                </p>

                <button className="bg-green-600 text-white p-2 rounded-lg w-full hover:bg-blue-700">
                    View Details
                </button>

            </div>

        </div>
    );
};

export default Employee;