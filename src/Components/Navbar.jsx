import React, { useState } from "react";
import menu from "../Pictures/icon-menu.svg";
import logo from "../Pictures/logo.svg";
import avatar from "../Pictures/image-avatar.png";
import { Badge, IconButton } from "@mui/material";
import Cart from "./Cart";
import MobileLinksDrawer from "./MobileLinksDrawer";
import "./Navbar.css";
import searchImg from './Images/search.png'

const Navbar = ({ onOrderedQuant, onReset }) => {
  const [showCart, setShowCart] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = (val) => {
    setOpen(val);
  };

  return (
    <header style={{display: "flex", marginTop: "3em", gap: "10px", justifyContent: "space-between", marginLeft: "3em"}}>
      {/* <nav style={{marginLeft: "4em"}}> */}
        <section className="left " style={{width: "50%", display: "flex", gap: "5em"}}>
          <div className="imgs">
            <img
              className="hide-in-desktop"
              src={menu}
              alt="icon-menu"
              onClick={() => {
                handleOpen(true);
              }}
            />
            <MobileLinksDrawer onHandleOpen={handleOpen} onOpen={open} />
            <div className="logo">LOGO</div>
          </div>
          <div className="links hide-in-mobile" style={{width: "100%"}}>
            <div className="search-container-div" style={{border: "1px solid #ccc", padding: "0px", height: "3.5em", backgroundColor: "#ccc", borderRadius: "10px"}}>
              <form
                className="search-container"
              >
                <div className="ps-form__categories">
                  <select className="select-dropdown hide-in-mobile">
                    <option>All Categories</option>
                    <option>Nike</option>
                    <option>Puma</option>
                    <option>Adidas</option>
                    <option>Air</option>
                  </select>
                </div>
                <div className="search-input-div">
                  <input
                    className="search-input"
                    type="text"
                    placeholder="I'm shopping for..."
                  />
                </div>
                <button className="search-btn"><img src={searchImg} /></button>
                <div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <div className="right hide-in-mobile">
          <div className="div-11 hide-in-mobile">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7355257c666630076711e20163ae6a1120d9e6e81dbc5e22c0379d3661cc5481?apiKey=1823fe6d8b2e49fab351d5480143daeb&"
              className="img-4 hide-in-mobile"
            />
            <div className="div-12 hide-in-mobile">Browse All Categories</div>
          </div>
        </div>
      {/* </nav> */}
    </header>
  );
};

// import * as React from "react";

// function MyComponent() {
//   return (
//     <>
//       <div className="div">
//         <div className="div-2">
//           <div className="div-3">All Categories</div>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/36e9b04ef6a6c9f8f35bbb4c24a305d645762e26b2d6b9fd06530b11f9e5fff0?apiKey=1823fe6d8b2e49fab351d5480143daeb&"
//             className="img"
//           />
//         </div>
//         <div className="div-4">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/c88f867bb998fc2e2d771aad952fe51257a27342c604db274dabf5df1f05fc84?apiKey=1823fe6d8b2e49fab351d5480143daeb&"
//             className="img-2"
//           />
//           <div className="div-5">Search for items...</div>
//         </div>
//       </div>
//       <style jsx>{`
//         .div {
//           border-radius: 8px 0px 0px 8px;
//           background-color: #f3f3f3;
//           display: flex;
//           gap: 12px;
//           font-size: 14px;
//           color: var(--Main-color, #2f294d);
//           flex-grow: 1;
//           flex-basis: auto;
//           padding: 12px;
//         }
//         @media (max-width: 991px) {
//           .div {
//             flex-wrap: wrap;
//             padding-right: 20px;
//           }
//         }
//         .div-2 {
//           justify-content: center;
//           display: flex;
//           gap: 1px;
//           font-weight: 500;
//         }
//         .div-3 {
//           font-family: Poppins, sans-serif;
//         }
//         .img {
//           aspect-ratio: 1;
//           object-fit: auto;
//           object-position: center;
//           width: 18px;
//           margin: auto 0;
//         }
// .div-4 {
//   justify-content: center;
//   display: flex;
//   gap: 11px;
//   font-weight: 400;
// }
//         .img-2 {
//           aspect-ratio: 0.08;
//           object-fit: auto;
//           object-position: center;
//           width: 1px;
//           stroke-width: 1px;
//           stroke: var(--Main-color, #2f294d);
//           border-color: rgba(47, 41, 77, 1);
//           border-style: solid;
//           border-width: 1px;
//           margin: auto 0;
//         }
//         .div-5 {
//           font-family: Poppins, sans-serif;
//         }
//       `}</style>
//     </>
//   );
// }

export default Navbar;
