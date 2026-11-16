const StudentProfile = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">

            <div className="bg-white max-w-sm mx-auto p-6 rounded-xl shadow-lg">

                <h1 className="text-2xl font-bold text-center text-yellow-600 mb-5">
                    Student Profile
                </h1>

                <hr />

                <h2 className="text-xl font-semibold text-center my-4">
                    Name : Ashvi
                </h2>

                <p className="text-gray-700 mb-3">
                    Age : 22
                </p>

                <p className="text-gray-700 mb-3">
                    Course : MERN
                </p>

                <p className="text-gray-700 mb-4">
                    City : Chennai
                </p>

                <button className="bg-green-600 text-white p-2 rounded-lg w-full hover:bg-blue-700">
                    View Profile
                </button>

            </div>

        </div>
    );
};

export default StudentProfile;