const CourseDetails = () => {

    return (
        <>
            <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">

                <div className="bg-white w-96 p-6 rounded-xl shadow-lg">

                    <h1 className="bg-blue-600 text-white text-2xl font-bold text-center p-3 rounded-lg">
                        Course Details
                    </h1>

                    <div className="mt-4 space-y-3">

                        <p className="bg-yellow-100 p-3 rounded-lg">
                            <b>Course:</b> Full Stack MERN
                        </p>

                        <p className="bg-yellow-100 p-3 rounded-lg">
                            <b>Trainer:</b> React JS Trainer
                        </p>

                        <p className="bg-yellow-100 p-3 rounded-lg">
                            <b>Duration:</b> 6 Months
                        </p>

                        <p className="bg-yellow-100 p-3 rounded-lg">
                            <b>Fees:</b> ₹30,000
                        </p>

                    </div>

                </div>

            </div>
        </>
    );
};

export default CourseDetails;