import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col">
      <nav className="bg-[#0074b9] p-4">
        <ul className="flex justify-end ">
          <li>
            <Link to="/" className="text-white text-xl font-bold mx-4">
              Home
            </Link>
          </li>
          <li>
            <Link to="/owner" className="text-white text-xl font-bold mx-4">
              Owner
            </Link>
          </li>
        </ul>
      </nav>
      <div className="">
        {/* placeholder for react components */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;