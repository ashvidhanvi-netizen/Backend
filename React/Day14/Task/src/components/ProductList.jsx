import React, { useState, useEffect } from 'react';

const ProductList = () => {

    const [showDatas, setShowDatas] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch("https://dummyjson.com/products?limit=3");

                const data = await res.json();

                setShowDatas(data.products);

            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, []);

    return (
        <div className="p-8">

            <h1 className="text-3xl font-bold text-center mb-6">
                Product List
            </h1>

        
            <h2 className="text-xl font-semibold text-center mb-6">
                Total products: {showDatas.length}
            </h2>

            <div className="grid grid-cols-3 gap-6">

                {showDatas.map((item) => (

                    <div key={item.id}
                        className="bg-white shadow-lg rounded-xl p-4">

                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-48 object-contain"
                        />

                        <h2 className="text-lg font-bold mt-3">
                            {item.title}
                        </h2>

                        <p className="text-green-600 font-semibold mt-2">
                            ${item.price}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default ProductList;