const Product = () => {

    const product = {
        id: "P101",
        name: "Samsung Smartphone",
        price: 20000,
        brand: "Samsung",
        category: "Electronics"
    };

    return (
        <>
            <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">

                <div className="bg-white w-96 p-6 rounded-xl shadow-lg border border-gray-200">

                    <h1 className="bg-yellow-600 text-white text-2xl font-bold text-center p-3 rounded-lg">
                        {product.name}
                    </h1>

                    <h2 className="text-xl font-semibold text-gray-800 text-center mt-4">
                        {product.brand}
                    </h2>

                    <div className="bg-yellow-50 p-4 mt-4 rounded-lg">

                        <p className="text-gray-700 p-2">
                            Brand: {product.brand}
                        </p>

                        <p className="text-gray-700 p-2">
                            Category: {product.category}
                        </p>

                        <p className="text-gray-700 p-2">
                            Product ID: {product.id}
                        </p>

                    </div>

                    <div className="text-center mt-5">

                        <h2 className="text-3xl font-bold text-green-700">
                            ₹{product.price * 0.9}
                        </h2>

                        <p className="text-gray-500 line-through mt-2">
                            Original price: ₹{product.price}
                        </p>

                        <p className="bg-green-600 text-white p-2 rounded-lg mt-4 font-semibold">
                            10% Discount
                        </p>

                    </div>

                </div>

            </div>
        </>
    );
};

export default Product;