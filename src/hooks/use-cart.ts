import {
  addResourceInstance,
  closeCart,
  openCart,
  removeResourceInstance,
  selectLoansCart,
  syncCart,
} from "@/config/redux/reducers/loans-cart.reducer";
import { useAppDispatch } from "@/config/redux/store.config";
import { InstanceLang } from "@/interfaces/instance/Instance";
import { Resource } from "@/interfaces/resource/Resource";
import { confirmBorrowAllItemsMiddleware } from "@/middleware/loans.middleware";
import { useSelector } from "react-redux";

export const useCart = () => {
  const { items, open } = useSelector(selectLoansCart);
  const dispatch = useAppDispatch();

  const addItemToCart = (resource: Resource, lang: InstanceLang) => {
    dispatch(addResourceInstance({ resource, lang }));
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

  const syncCartItems = () => {
    dispatch(syncCart());
  };

  const confirmAllItems = () => {
    dispatch(
      confirmBorrowAllItemsMiddleware(
        items.map((item) => ({
          resourceId: item.resource.id,
          lang: item.lang,
        }))
      )
    );
  };

  return {
    open,
    items,
    addItemToCart,
    removeItemFromCart,
    confirmAllItems,
    isItemOnCart,
    showCart,
    hideCart,
    syncCartItems,
  };
};
