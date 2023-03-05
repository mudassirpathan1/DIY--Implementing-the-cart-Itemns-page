 
import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem({ id });
  };
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          <div>
            <h2>{item.name}</h2>
            <div className={classes.summary}>
              <span className={classes.price}>${item.price.toFixed(2)}</span>
              <span className={classes.amount}>x {item.quantity}</span>
            </div>
          </div>
          <div className={classes.actions}>
            <button onClick={() => cartItemRemoveHandler(item.id)}>-Remove</button>
            <button onClick={() => cartItemAddHandler(item)}>+Add</button>
          </div>
          
        </li>
      ))}
            {!hasItems && <p>Your cart is empty.</p>}
    </ul>
  );

  const totalAmount = cartCtx.items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
          <span>Total amount</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close Cart
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
