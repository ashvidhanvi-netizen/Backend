const StudentList = () => {

    const students = ["Arun", "Priya", "Karthik", "Divya", "Sanjay"];

    return (
        <>
            <div className="min-h-screen bg-gray-100 flex justify-center items-center">

                <div className="bg-white p-6 w-96 rounded-lg shadow-lg">

                    <h1 className="bg-yellow-600 text-white text-2xl font-bold text-center p-3 rounded-lg">
                        Student List
                    </h1>

                    <ul className="mt-4">

                        {students.map((name, index) => (
                            <li key={index} className="bg-yellow-100 p-3 mb-2 rounded-md text-center text-lg font-semibold">
                                {name}
                            </li>
                        ))}

                    </ul>

                </div>

            </div>
        </>
    );
};

export default StudentList;