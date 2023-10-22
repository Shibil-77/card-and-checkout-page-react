/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
     <nav>
      <a class="item">Home</a>
      <a class="item">About</a>
      <div class="item">
        Shop
        <div class="dropdown">
          <div>
            <a>T-shirt</a>
            <a>Shirt</a>
            <a>T-Shirt</a>
          </div>
        </div>
      </div>
      <a class="item">Contact</a>
      <div class="underline"></div>
    </nav>
    </>
  );
};

export default Navbar;
