import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: " rgb(125, 158, 5)" }}>
      <Container>
        <Toolbar variant="dense">
          {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      <MenuIcon />
    </IconButton> */}
          <Typography variant="h5" color="rgb(206, 214, 179);">
            <Link to="/">Coins React</Link>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
