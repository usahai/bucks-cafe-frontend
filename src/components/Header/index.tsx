import { AppBar, Toolbar } from "@mui/material";
import { Link } from "@tanstack/react-router";
import styles from "./index.module.css";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>
        <div className={styles.links}>
          <Link to="/cafes" className={styles.link}>
            Cafes
          </Link>
          <Link to="/employees" className={styles.link}>
            Employees
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
