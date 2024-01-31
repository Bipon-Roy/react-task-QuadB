import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
const Navbar = () => {
    //Nav Menus
    const links = (
        <>
            <li className="mr-5 font-medium">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="mr-5 font-medium">
                <NavLink to="/about">About</NavLink>
            </li>
        </>
    );

    return (
        <div className="">
            <nav className="navbar max-w-7xl mx-auto pr-6 lg:px-0 lg:py-0">
                <div className="navbar-start">
                    {/* dropdown menu for small and medium screen */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost p-1 lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 25 25"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-white  rounded-box w-52"
                        >
                            {links}
                        </ul>
                    </div>
                    <div className="flex gap-1 items-center py-1">
                        <p className="text-base ml-2 lg:ml-0 md:text-2xl lg:text-3xl font-semibold">
                            React App
                        </p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal font-normal px-1 font">{links}</ul>
                </div>
                <div className="navbar-end">
                    <Link
                        to="/manageShows"
                        className="py-1 px-5 rounded bg-slate-100 font-semibold"
                    >
                        Manage Shows
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
