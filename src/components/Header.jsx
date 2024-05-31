import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useSelector } from "react-redux";

const Header = () => {
  const { quantity } = useSelector((store) => store.card);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <AppBar
        position="relative"
        sx={{
          display: "flex",
          alignItems: "center",
          height: 110,
          justifyContent: "center",
        }}
      >
        <Toolbar sx={{ width: "65%" }}>
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
                width: 25,
                textAlign: "center",
                borderRadius: "50%",
                marginLeft: "auto",
              }}
            >
              {quantity}
            </Typography>
            <ShoppingBasketIcon />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
