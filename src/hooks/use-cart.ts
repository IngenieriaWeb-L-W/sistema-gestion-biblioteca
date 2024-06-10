import {
  addResourceInstance,
  closeCart,
  openCart,
  removeResourceInstance,
  selectLoansCart,
} from "@/config/redux/reducers/loans-cart.reducer";
import { useAppDispatch } from "@/config/redux/store.config";
import { InstanceLang } from "@/interfaces/instance/Instance";
import { Resource } from "@/interfaces/resource/Resource";
import { useSelector } from "react-redux";

export const useCart = () => {
  const { items, open } = useSelector(selectLoansCart);
  const dispatch = useAppDispatch();

  const addItemToCart = (resource: Resource, lang: InstanceLang) => {
    dispatch(addResourceInstance({ resource, lang }));
    localStorage.setItem("cart", JSON.stringify(items));
  };

  const removeItemFromCart = (resource: Resource) => {
    dispatch(removeResourceInstance(resource.id));
  };

  const isItemOnCart = (resource: Resource) => {
    return items.some((item) => item.resource.id === resource.id);
  };

  const showCart = () => {
    dispatch(openCart());
  };

  const hideCart = () => {
    dispatch(closeCart());
  };

  return {
    open,
    items,
    addItemToCart,
    removeItemFromCart,
    isItemOnCart,
    showCart,
    hideCart,
  };
};
