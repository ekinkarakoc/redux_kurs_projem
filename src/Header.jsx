import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ display: "flex", alignItems: "center" }}>
        <Toolbar sx={{ width: "70%" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sepetim
          </Typography>
          <ShoppingBasketIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
