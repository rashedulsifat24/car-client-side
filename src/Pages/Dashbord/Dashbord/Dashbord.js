import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import MakeAdmin from "./../MakeAdmin/MakeAdmin";
import ManageAllOrder from "./../ManageAllOrder/ManageAllOrder";
import ManageProduct from "./../ManageProduct/ManageProduct";
import AddProduct from "./../AddProduct/AddProduct";
import MyOrder from "./../../MyOrder/MyOrder";
import Review from "./../Review/Review";
import Pay from "./../Pay/Pay";
import { Button } from "@mui/material";
import useFirebase from "./../../../Hooks/useFirebase";
import { CircularProgress } from "@mui/material";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const drawerWidth = 240;
function Dashbord(props) {
  let { path, url } = useRouteMatch();
  const { isAdmin, logOut, user, loding } = useFirebase();

  if (loding) {
    <CircularProgress />;
  }
  console.log(isAdmin);
  // console.log(isAdmin);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to={`${url}`}>Dashbord </Link> <br />
      <Box>
        <Link to={`${url}/makeadmin`}>
          <Button>Make admin </Button>
        </Link>
        <br />
        <Link to={`${url}/manageorder`}>
          <Button>Manage all orders </Button>{" "}
        </Link>
        <br />
        <Link to={`${url}/manageproduct`}>
          <Button>Manage car </Button>{" "}
        </Link>
        <br />
        <Link to={`${url}/addproduct`}>
          <Button>Add Car</Button>
        </Link>
      </Box>
      <br />
      <Box>
        <Link to={`${url}/myorder`}>
          <Button>My Order </Button>{" "}
        </Link>
        <br />
        <Link to={`${url}/review`}>
          <Button>Rating </Button>{" "}
        </Link>
        <br />
        <Link to={`${url}/pay`}>
          <Button>Pay </Button>
        </Link>
        <br />
      </Box>
      <Button variant="contained" onClick={logOut}>
        Logout{" "}
      </Button>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashbord
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}></Route>

          <Route path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>

          <Route path={`${path}/manageorder`}>
            <ManageAllOrder></ManageAllOrder>
          </Route>
          <Route path={`${path}/manageproduct`}>
            <ManageProduct></ManageProduct>
          </Route>
          <Route path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </Route>

          <Route path={`${path}/myorder`}>
            <MyOrder></MyOrder>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashbord.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashbord;
