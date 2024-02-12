import { addToCart, removeFromCart } from "../store/cart-slice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { store } from "../store/store";

type ItemProps = {
  id: string;
  title: string;
  price: number;
};

export default function CartItems() {
  const cartItems = useAppSelector((store) => store.cart.items);
  const dispatch = useAppDispatch();
  console.log(cartItems);

  function handleRemoveFromCart(id: string) {
    dispatch(removeFromCart(id));
  }

  function handleAddToCart(item: ItemProps) {
    dispatch(addToCart(item));
  }

  return (
    <div id="cart">
      {cartItems.length > 0 ? (
        <ul id="cart-items">
          {cartItems.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.title}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No items in cart!</p>
      )}

      {/* <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p> */}
    </div>
  );
}
