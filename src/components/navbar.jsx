import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar color="default" position="static">
        <Toolbar>
          <Button>
            <Link to={"/"}>TODOS</Link>
          </Button>
          <Button>
            <Link to="/Posts">POSTS</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
