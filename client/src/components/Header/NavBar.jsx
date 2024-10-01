import { MdAccountCircle, MdHome, MdOutlineSearch, MdOutlineShoppingCart } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation()
    const iconsBar = [
        {
            icon: <MdHome />,
            id: 1,
            path: "/",
        },
        {
            icon: <AiFillProduct />,
            id: 2,
            path: "/products/",

        },
        {
            icon: <MdOutlineSearch />,
            id: 3,
            path: "/search",

        },
        {
            icon: <MdOutlineShoppingCart />,
            id: 4,
            path: "/cart",

        },
        {
            icon: <MdAccountCircle />,
            id: 5,
            path: "/account",

        }
    ];



    return (
        <div>
            <div className="flex justify-around bg-black text-white h-20 w-full items-center text-2xl  fixed">
                <h1>miracle</h1>

                <ul className="flex gap-8 ">
                    {iconsBar.map(({ id, icon, path }) => (
                        <li key={id} className={location.pathname === path ? "text-yellow-500" : "text-white"}>
                            <Link to={path}>
                                {icon}</Link>

                        </li>
                    ))}
                </ul>
            </div>

            <hr />


        </div>
    );
}

export default NavBar;
