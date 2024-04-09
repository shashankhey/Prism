import { Drawer, IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "./Icons/CloseIcon";

const MobileLinksDrawer = ({ onOpen, onHandleOpen }) => {
  return (
    <Drawer
      className="mobile-drawer hide-in-desktop"
      anchor="left"
      transitionDuration={400}
      open={onOpen}
      onClose={() => {
        onHandleOpen(false);
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        height: "100vh",
      }}
    >
      <div className="draw" style={{ width: "65vw" }}>
        <section className="closing">
          <IconButton
            disableRipple
            onClick={() => {
              onHandleOpen(false);
            }}
          >
            <CloseIcon fillColor={"#68707d"} />
          </IconButton>
        </section>
        <section className="mobile-links">
          <ul>
            <li>
              <button style={{backgroundColor: "#0064d2", padding: "10px", borderRadius: "5px"}}>Browse All Categories</button>
            </li>
          </ul>
        </section>
      </div>
    </Drawer>
  );
};

export default MobileLinksDrawer;
