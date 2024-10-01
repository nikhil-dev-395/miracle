import { useState } from "react";
import SideBar from "../SideBar/SideBar";

const AddProduct = () => {
    const [url, setUrl] = useState(null);

    const onChangeImage = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setUrl(URL.createObjectURL(file));
        } else {
            alert("Please select a valid image file");
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <SideBar />
            <div className="flex-grow w-full py-28 px-72">
                <h1 className="text-2xl font-semibold mb-4">Add Your Product</h1>
                <hr className="border-gray-300 mb-6" />

                <form className="space-y-6">
                    <div>
                        <label htmlFor="productImg" className="block text-sm font-medium mb-2">
                            Product Image
                        </label>
                        <input
                            type="file"
                            name="productImg"
                            id="productImg"
                            onChange={onChangeImage}
                            accept="image/*"
                            className="file:bg-yellow-500 file:border-none file:rounded-md "
                        />
                        {url && (
                            <img
                                src={url}
                                alt="Product preview"
                                className="w-40 rounded pt-4"
                            />
                        )}
                    </div>

                    <div>
                        <label htmlFor="productName" className="block text-sm font-medium mb-2">
                            Product Name
                        </label>
                        <input
                            type="text"
                            id="productName"
                            name="productName"
                            placeholder="Enter product name"
                            className="w-full p-2 border border-black rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                        />
                    </div>

                    <div className="flex space-x-4">
                        <div className="w-full">
                            <label htmlFor="productPrice" className="block text-sm font-medium mb-2">
                                Price
                            </label>
                            <input
                                type="number"
                                id="productPrice"
                                name="productPrice"
                                placeholder="Enter price"
                                className="w-full p-2 border rounded-md border-gray-900 focus:outline-none focus:ring focus:ring-yellow-500"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="productDiscount" className="block text-sm font-medium mb-2">
                                Discount
                            </label>
                            <input
                                type="number"
                                id="productDiscount"
                                name="productDiscount"
                                placeholder="Enter discount in %"
                                className="w-full p-2 border rounded-md border-gray-900 focus:outline-none focus:ring focus:ring-yellow-500"
                            />
                        </div>
                    </div>

                    <button type="submit" className="bg-yellow-400 px-4 py-3 text-slate-900 rounded-md hover:bg-yellow-600">
                        Add New Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
