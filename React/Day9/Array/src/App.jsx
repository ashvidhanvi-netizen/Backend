import React, { useState } from 'react';

const App = () => {

    // TASK 1: Array - Display
    const [languages, setLanguages] = useState([
        "JavaScript",
        "Python",
        "Java",
        "React",
        "C++"
    ]);


    // TASK 2: Array - Add
    const [colors, setColors] = useState([
        "Red",
        "Green",
        "Blue"
    ]);

    const addColor = () => {
        setColors([...colors, "Yellow"]);
    };


    // TASK 3: Array - Update
    const [fruits, setFruits] = useState([
        "Apple",
        "Orange",
        "Banana",
        "Grapes"
    ]);

    const updateFruit = () => {
        setFruits(
            fruits.map((item) =>
                item === "Apple" ? "Mango" : item
            )
        );
    };


    // TASK 4: Array - Delete
    const [cities, setCities] = useState([
        "Chennai",
        "Bangalore",
        "Mumbai",
        "Delhi",
        "Hyderabad"
    ]);

    const deleteCity = () => {
        setCities(cities.filter((item) => item !== "Chennai"));
    };


    // TASK 5: Object - Add
    const [person, setPerson] = useState({
        name: "Ashvi",
        age: 22,
        city: "Chennai"
    });

    const addCountry = () => {
        setPerson({
            ...person,
            country: "India"
        });
    };


    // TASK 6: Object - Update and Delete
    const [mobile, setMobile] = useState({
        brand: "Samsung",
        model: "S24",
        price: 50000,
        color: "Black"
    });

    const updateMobile = () => {
        setMobile({
            brand: mobile.brand,
            model: mobile.model,
            price: 45000
        });
    };


    // TASK 7: Array of Objects - CRUD
    const [mobiles, setMobiles] = useState([
        { id: 1, brand: "Samsung", price: 30000 },
        { id: 2, brand: "Apple", price: 60000 },
        { id: 3, brand: "Vivo", price: 20000 }
    ]);

    const addMobile = () => {
        setMobiles([
            ...mobiles,
            { id: 4, brand: "OnePlus", price: 40000 }
        ]);
    };

    const updatePrice = () => {
        setMobiles(
            mobiles.map((item) =>
                item.id === 2
                    ? { ...item, price: 70000 }
                    : item
            )
        );
    };

    const deleteMobile = () => {
        setMobiles(
            mobiles.filter((item) => item.id !== 3)
        );
    };


    // TASK 8: Boolean - Toggle
    const [isActive, setIsActive] = useState(false);

    const toggleStatus = () => {
        setIsActive(!isActive);
    };


    // TASK 9: Nullish Operator
    const details = {
        name: "Ashvi",
        age: 0,
        city: null,
        phone: undefined
    };


    // TASK 10: Number - useState
    const [number, setNumber] = useState(10);


    return (

        <div className="p-6 space-y-8">

            <h1 className="text-3xl font-bold text-center">
                React JS - 10 Basic Tasks
            </h1>


            {/* TASK 1 */}

            <div className="border p-4 rounded">
                <h2 className="text-xl font-bold">Task 1: Array Display</h2>

                {languages.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>


            {/* TASK 2 */}

            <div className="border p-4 rounded">
                <h2 className="text-xl font-bold">Task 2: Array Add</h2>

                {colors.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}

                <button
                    onClick={addColor}
                    className="bg-blue-500 text-white p-2 rounded mt-2"
                >
                    Add Color
                </button>
            </div>


            {/* TASK 3 */}

            <div className="border p-4 rounded">
                <h2 className="text-xl font-bold">Task 3: Array Update</h2>

                {fruits.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}

                <button
                    onClick={updateFruit}
                    className="bg-green-500 text-white p-2 rounded mt-2"
                >
                    Update Fruit
                </button>
            </div>


            {/* TASK 4 */}

            <div className="border p-4 rounded">
                <h2 className="text-xl font-bold">Task 4: Array Delete</h2>

                {cities.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}

                <button
                    onClick={deleteCity}
                    className="bg-red-500 text-white p-2 rounded mt-2"
                >
                    Delete Chennai
                </button>
            </div>


            {/* TASK 5 */}

            <div className="border p-4 rounded">
                <h2 className="text-xl font-bold">Task 5: Object Add</h2>

                <p>Name: {person.name}</p>
                <p>Age: {person.age}</p>
                <p>City: {person.city}</p>
                <p>Country: {person.country}</p>

                <button
                    onClick={addCountry}
                    className="bg-blue-500 text-white p-2 rounded mt-2"
                >
                    Add Country
                </button>
            </div>


            {/* TASK 6 */}

            <div className="border p-4 rounded">
                <h2 className="text-xl font-bold">Task 6: Object Update and Delete</h2>

                <p>Brand: {mobile.brand}</p>
                <p>Model: {mobile.model}</p>
                <p>Price: {mobile.price}</p>
                <p>Color: {mobile.color}</p>

                <button
                    onClick={updateMobile}
                    className="bg-green-500 text-white p-2 rounded mt-2"
                >
                    Update Price and Delete Color
                </button>
            </div>


            {/* TASK 7 */}

            <div className="border p-4 rounded">
                <h2 className="text-xl font-bold">Task 7: Array of Objects CRUD</h2>

                {mobiles.map((item) => (
                    <div key={item.id}>
                        <p>ID: {item.id}</p>
                        <p>Brand: {item.brand}</p>
                        <p>Price: {item.price}</p>
                        <hr />
                    </div>
                ))}

                <button
                    onClick={addMobile}
                    className="bg-blue-500 text-white p-2 rounded m-2"
                >
                    Add Mobile
                </button>

                <button
                    onClick={updatePrice}
                    className="bg-green-500 text-white p-2 rounded m-2"
                >
                    Update ID 2 Price
                </button>

                <button
                    onClick={deleteMobile}
                    className="bg-red-500 text-white p-2 rounded m-2"
                >
                    Delete ID 3
                </button>
            </div>


            {/* TASK 8 */}

            <div className="border p-4 rounded">
                <h2 className="text-xl font-bold">Task 8: Boolean Toggle</h2>

                <h3>{isActive ? "Active" : "Inactive"}</h3>

                <button
                    onClick={toggleStatus}
                    className="bg-blue-500 text-white p-2 rounded mt-2"
                >
                    Toggle Status
                </button>
            </div>


            {/* TASK 9 */}

            <div className="border p-4 rounded">
                <h2 className="text-xl font-bold">Task 9: Nullish Operator</h2>

                <p>Name: {details.name ?? "Not Available"}</p>
                <p>Age: {details.age ?? "Not Available"}</p>
                <p>City: {details.city ?? "Not Available"}</p>
                <p>Phone: {details.phone ?? "Not Available"}</p>
            </div>


            {/* TASK 10 */}

            <div className="border p-4 rounded">
                <h2 className="text-xl font-bold">Task 10: Number useState</h2>

                <h3 className="text-2xl font-bold">{number}</h3>

                <p>
                    {number % 2 === 0 ? "Even Number" : "Odd Number"}
                </p>

                <button
                    onClick={() => setNumber(number + 5)}
                    className="bg-green-500 text-white p-2 rounded m-2"
                >
                    Increment +5
                </button>

                <button
                    onClick={() => setNumber(number - 2)}
                    className="bg-red-500 text-white p-2 rounded m-2"
                >
                    Decrement -2
                </button>

                <button
                    onClick={() => setNumber(number * 3)}
                    className="bg-blue-500 text-white p-2 rounded m-2"
                >
                    Multiply ×3
                </button>

                <button
                    onClick={() => setNumber(10)}
                    className="bg-gray-700 text-white p-2 rounded m-2"
                >
                    Reset
                </button>

            </div>

        </div>
    );
};

export default App;