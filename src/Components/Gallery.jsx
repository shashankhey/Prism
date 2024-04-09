import React, { useState, useEffect } from "react";
import BackdropGallery from "./BackdropGallery";

import prod1 from "../Pictures/image-product-1.jpg";
import prod2 from "../Pictures/image-product-2.jpg";
import prod3 from "../Pictures/image-product-3.jpg";
import prod4 from "../Pictures/image-product-4.jpg";

import thumb1 from "../Pictures/image-product-1-thumbnail.jpg";
import thumb2 from "../Pictures/image-product-2-thumbnail.jpg";
import thumb3 from "../Pictures/image-product-3-thumbnail.jpg";
import thumb4 from "../Pictures/image-product-4-thumbnail.jpg";
import backIcon from "./Images/backIcon.png";

const IMAGES = [prod1, prod2, prod3, prod4];
const THUMBS = [thumb1, thumb2, thumb3, thumb4];

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(prod1);
  const [currentPassedImage, setCurrentPassedImage] = useState(prod1);

  const [open, setOpen] = useState(false);
  const handleClick = (index) => {
    setCurrentImage(IMAGES[index]);
  };
  const handleToggle = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const removeActivatedClass = (parent) => {
    parent.childNodes.forEach((node) => {
      node.childNodes[0].classList.contains("activated") &&
        node.childNodes[0].classList.remove("activated");
    });
  };
  useEffect(() => {
    setCurrentPassedImage(currentImage);
  }, [currentImage]);

  return (
    <div >
      <div
      className="product-header hide-in-mobile"
        style={{
          display: "flex",
          gap: "1em",
          // justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          marginBottom: "2em",
          marginLeft: "2.5em"
        }}
      >
        <img
          src={backIcon}
          style={{ display: "flex", height: "3em", width: "3em", gap: "0.5em" }}
        />
        <p style={{ width: "50%" }}>
          Back to previous page | Listed in category:{" "}
          <a href="#" style={{ color: "#0064d2" }}>
            Cell Phones & Accessories
          </a>
        </p>
        {/* <p style={{ alignItems: "center", marginLeft: "10em" }}>
          <a href="#" style={{ color: "#0064d2" }}>
            Cell Phones & Smartphones
          </a>
        </p> */}
      </div>

      <section className="gallery-holder hide-in-mobile" >
        <section className="gallery">
          <div className="image">
            <img
              src={currentImage}
              alt="product-1"
              onClick={handleToggle}
              style={{ width: "55%", height: "50%" }}
            />
          </div>
          <BackdropGallery
            handleClose={handleClose}
            open={open}
            currentPassedImage={currentPassedImage}
          />
          <div className="thumbnails">
            {THUMBS.map((th, index) => {
              return (
                <div
                  className="img-holder"
                  key={index}
                  onClick={(e) => {
                    handleClick(index);
                    removeActivatedClass(e.currentTarget.parentNode);
                    e.currentTarget.childNodes[0].classList.toggle("activated");
                  }}
                >
                  <div className={`outlay ${index === 0 && "activated"}`}></div>
                  <img src={th} alt={`product-${index + 1}`} />
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Gallery;
