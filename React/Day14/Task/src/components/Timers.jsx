import React, { useState, useEffect } from 'react';

const Timers = () => {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setSeconds((previous) => previous + 1);

        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);

    return (
        <div className="flex flex-col items-center justify-center mt-10">

            <h1 className="text-3xl font-bold mb-4">
                Timer
            </h1>

            <h2 className="text-5xl font-bold text-blue-600">
                {seconds}
            </h2>

            <p className="text-gray-500 mt-3">
                Seconds Passed
            </p>

        </div>
    );
};

export default Timers;