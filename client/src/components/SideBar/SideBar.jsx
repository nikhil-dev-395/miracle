import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
    const [selected, setSelected] = useState(""); // Initialize selected

    const sortValue = [
        {
            id: 1,
            name: "Popular",
        },
        {
            id: 2,
            name: "Average",
        },
        {
            id: 3,
            name: "Worst",
        },
    ];
    return (
        <div>

            <div
                className="bg-slate-800 text-slate-100 w-[20%] h-[calc(100vh)] py-10 px-3 fixed top-20 left-0"
                id="sidebar"
            >
                <div className="flex gap-2">
                    <h2 className="text-xl font-bold">Sort by</h2>

                    <select
                        className="rounded outline-none text-slate-900"
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                    >
                        {sortValue.map(({ id, name }) => (
                            <option key={id} value={name} className="outline-none text-slate-700">
                                {name}
                            </option>
                        ))}
                    </select>



                </div>
                {/* Sidebar Links */}
                <ul className="space-y-3 mt-10">
                    <li><Link to="/admin/addProduct">create new product</Link></li>
                    <li><Link to="/admin/adminPanel">All Products</Link></li>
                    <li><Link to="/admin/discountedProduct">Discounted Products</Link></li>



                </ul>

            </div>

        </div>
    )
}

export default SideBar