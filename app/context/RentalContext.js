"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../../utils/axiosInstance";

const RentalContext = createContext();

export const RentalProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalPages: 1,
    totalItems: 0,
  });
  const [loading, setLoading] = useState(false);

  const fetchRentalItems = async (customQuery = {}) => {
    setLoading(true);
    try {
      const params = {
        page: pagination.page,
        limit: pagination.limit,
        ...customQuery,
      };
      const response = await axiosInstance.get(
        "http://localhost:8080/api/items",
        { params }
      );

      if (response.data.success) {
        setItems(response.data.data);
        setPagination((prev) => ({
          ...prev,
          ...response.data.meta,
        }));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to load items");
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (itemId, quantity = 1, rentalDuration = 1) => {
    try {
      // Check if item already in cart
      const alreadyInCart = cart.some((item) => item.itemId === itemId);
      if (alreadyInCart) {
        toast.error("Item already in cart");
        return;
      }

      const response = await axiosInstance.post(
        "http://localhost:8080/api/cart",
        { itemId, quantity, rentalDuration }
      );

      const cartItemFromBackend = response.data.data;

      // Find matching product from already fetched items
      const product = items.find((p) => p._id === cartItemFromBackend.itemId);
      if (!product) {
        toast.error("Product not found");
        return;
      }

      const completeCartItem = {
        ...cartItemFromBackend,
        price: product.dailyRate,
        name: product.name,
        image: product.imageUrl,
        availableQuantity: product.availableQuantity,
        quantity: 1,
        rentalDuration: 1,
      };

      if (response.data.success) {
        toast.success(response.data.message);
        setCart((prev) => [...prev, completeCartItem]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message || "Failed to add item to cart"
      );
    }
  };

  const updateCartItem = async (cartItemId, action, type) => {
    try {
      const cartItem = cart.find((item) => item._id === cartItemId);
      if (!cartItem) {
        toast.error("Cart item not found");
        return;
      }

      let newQuantity = cartItem.quantity;
      let newRentalDuration = cartItem.rentalDuration;

      if (type === "quantity") {
        if (action === "increment") {
          if (cartItem.quantity < cartItem.availableQuantity) {
            newQuantity += 1;
          } else {
            toast.error("You have reached the maximum quantity available.");
            return;
          }
        } else if (action === "decrement") {
          newQuantity = Math.max(1, cartItem.quantity - 1);
        }
      } else if (type === "days") {
        if (action === "increment") {
          newRentalDuration += 1;
        } else if (action === "decrement") {
          newRentalDuration = Math.max(1, cartItem.rentalDuration - 1);
        }
      }

      const response = await axiosInstance.put(
        `http://localhost:8080/api/cart/${cartItemId}`,
        {
          quantity: newQuantity,
          rentalDuration: newRentalDuration,
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);

        // Update locally
        setCart((prevCart) =>
          prevCart.map((item) =>
            item._id === cartItemId
              ? {
                  ...item,
                  quantity: newQuantity,
                  rentalDuration: newRentalDuration,
                }
              : item
          )
        );
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Failed to update cart");
    }
  };

  const removeCartItem = async (cartItemId) => {
    try {
      const response = await axiosInstance.delete(
        `http://localhost:8080/api/cart/${cartItemId}`
      );

      if (response.data.success) {
        toast.success(response.data.message);

        setCart((prevCart) =>
          prevCart.filter((item) => item._id !== cartItemId)
        );
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Failed to remove item");
    }
  };

  const clearCart = async () => {
    try {
      const response = await axiosInstance.delete("/api/cart");
      if (response.data.success) {
        toast.success(response.data.message || "Cart cleared successfully!");
        setCart([]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Failed to clear cart");
    }
  };

  const fetchCartItems = async () => {
    try {
      const response = await axiosInstance.get(
        "http://localhost:8080/api/cart"
      );

      if (response.data.success) {
        const fetchedCartItems = response.data.data;
        console.log("Fetched cart items:", fetchedCartItems);
        setCart(fetchedCartItems);
      } else {
        toast.error(response.data.message || "Failed to fetch cart items");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message || "Failed to fetch cart items"
      );
    }
  };

  useEffect(() => {
    fetchRentalItems();
    fetchCartItems();
  }, []);

  return (
    <RentalContext.Provider
      value={{
        items,
        pagination,
        loading,
        fetchRentalItems,
        setPagination,
        query,
        setQuery,
        addToCart,
        cart,
        setCart,
        updateCartItem,
        removeCartItem,
        clearCart,
        fetchCartItems,
      }}
    >
      {children}
    </RentalContext.Provider>
  );
};

export const useRental = () => useContext(RentalContext);
