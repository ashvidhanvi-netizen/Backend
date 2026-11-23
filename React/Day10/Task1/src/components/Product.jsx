import React, { useState } from 'react';

const Product = () => {

    const [products, setProducts] = useState([
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Mouse", price: 500 },
        { id: 3, name: "Keyboard", price: 1500 },
        { id: 4, name: "Monitor", price: 12000 },
        { id: 5, name: "Headphone", price: 2000 }
    ]);


    const totalPrice = products.reduce(
        (total, product) => total + product.price, 0
    );

    // Filter products above 2000

    const filteredProducts = products.filter(
        (product) => product.price > 2000
    );

    return (

        <div className="bg-white p-6 rounded-xl shadow-lg m-5">

            <h1 className="text-2xl font-bold text-center text-purple-600 mb-5">
                Product Price Details
            </h1>

            {/* Product Count */}

            <div className="bg-purple-100 p-4 rounded-lg mb-5">

                <h2 className="text-lg font-semibold">
                    Total Products: {products.length}
                </h2>

                <h2 className="text-xl font-bold text-green-700">
                    Total Price: ₹{totalPrice.toLocaleString("en-IN")}
                </h2>

            </div>

            {/* All Products */}

            <h2 className="text-xl font-bold mb-3">
                All Products
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {products.map((product) => (

                    <div key={product.id} className="bg-purple-50 p-4 rounded-lg">

                        <h3 className="font-bold text-lg">
                            {product.name}
                        </h3>

                        <p>
                            Price: ₹{product.price.toLocaleString("en-IN")}
                        </p>

                    </div>

                ))}

            </div>

            

            <h2 className="text-xl font-bold mt-6 mb-3">
                Products Above 2,000
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {filteredProducts.map((product) => (

                    <div key={product.id} className="bg-green-50 p-4 rounded-lg">

                        <h3 className="font-bold">
                            {product.name}
                        </h3>

                        <p>
                            Price: {product.price.toLocaleString("en-IN")}
                        </p>

                    </div>

                ))}

            </div>

        </div>

    );

};

export default Product;