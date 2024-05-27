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
          <Typography
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: 40,
            }}
          >
            <Typography
              component="h3"
              sx={{
                backgroundColor: "white",
                color: "#1976d2",
                width: 20,
                textAlign: "center",
                borderRadius: "10px",
                marginLeft: "auto",
              }}
            >
              0
            </Typography>
            <ShoppingBasketIcon />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
