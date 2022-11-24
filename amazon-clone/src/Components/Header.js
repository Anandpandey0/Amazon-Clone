import React from "react";
import "./header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Sign In" />
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Sign In" />
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Sign In" />
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Sign In" />
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <>
      <div className="header">
        <img
          className="header-logo"
          src="https://img.etimg.com/thumb/msid-59738992,width-480,height-360,imgsize-25499,resizemode-4/amazon.jpg"
          alt="logo"
        />
        <div className="header-search">
          <input type="text" className="header-search-input" />
          <SearchOutlinedIcon className="header-search-icon" />
        </div>
        <div className="header-nav">
          <div className="header-option">
            <span className="header-option-line-one">Hello Guest</span>
            <span className="header-option-line-two">Sign in</span>
          </div>
          <div className="header-option">
            <span className="header-option-line-one">Returns</span>
            <span className="header-option-line-two">& Orders</span>
          </div>
          <div className="header-option-basket">
            <ShoppingCartIcon fontSize="large" />
            <span className="header-option-line-two header-option-basket">
              0
            </span>
          </div>
        </div>
      </div>
      <div className="navbar-mobile">
        <div>
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)} className="sidemenu">
                <MenuIcon />
              </Button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
