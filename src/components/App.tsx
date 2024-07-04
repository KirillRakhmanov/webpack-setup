import React from "react";
import styles from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import emptyCart from "@/assets/empty-cart.png";
import PizzaLogo from "@/assets/pizza-logo.svg";
import IconTime from "@/assets/icon-time.svg";

export const App = () => {
  const [count, setCount] = React.useState<number>(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div data-testId="App">
      <h1 data-testId="Platform">PLATFORM {__PLATFORM__}</h1>
      <img src={emptyCart} alt="" />
      <div>
        <IconTime className={styles.logo} width={200} height={200} />
      </div>
      <Link to={"/about"}>About</Link>
      <br />
      <Link to={"/shop"}>Shop</Link>
      <h1 className={styles.header}>{count}</h1>
      <button
        data-testId="Button"
        className={styles.button}
        onClick={increment}
      >
        click
      </button>
      <Outlet />
    </div>
  );
};
