import React from "react";

function Navbar() {
  return (
    <header className=" flex justify-between fixed w-full bg- backdrop-blur-md	">
      <a href="/" className=" ml-10 my-3 text-xl py-4">
      <p>TRULLY</p>

      </a>
      <nav className="  font-ZCOOL-XiaoWei flex-row py-4 ">
        <ul className=" flex justify-end space-x-5 text-xl my-3">
          <li className=" hover:text-[#2d8d78]">
          About
          </li>
          <li className=" hover:text-[#2d8d78]">
          Search
          </li>
          <li className=" hover:text-[#2d8d78]">
          Submit Info
          </li>
          <li className=" hover:text-[#2d8d78]"
          >Contact
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
