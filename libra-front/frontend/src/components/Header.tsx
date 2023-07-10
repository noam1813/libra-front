import { AppBar, Toolbar, IconButton, Typography, Box} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1,ml:3 }}>
          <Box textAlign="left">Libra</Box>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
