"use client";

import { createContext, useEffect, useState } from "react";

// Create Context
export const AdminContext = createContext();

// Provider Component
export const AdminProvider = (props) => {
  // Original Posts (all posts)
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "5GS Admin (You)",
      content: "Hello, I'm 5GS Admin (You). This is a test post.",
      type: "picture",
      category: "makeup",
      likes: 10,
      image: "/HomeImage.png",
    },
    // Add more posts here...
  ]);

  // Filtered Posts (for dynamic filtering)
  const [filteredPosts, setFilteredPosts] = useState(posts);

  // Function to add a new post
  const addPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
    setFilteredPosts((prevFilteredPosts) => [newPost, ...prevFilteredPosts]);
  };

  // Function to delete a post by ID
  const deletePost = (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      setFilteredPosts((prevFilteredPosts) =>
        prevFilteredPosts.filter((post) => post.id !== postId)
      );
    }
  };

  // Function to like a post by ID
  const likePost = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );

    setFilteredPosts((prevFilteredPosts) =>
      prevFilteredPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  // Function to filter posts by type or category
  const filterPosts = (filter) => {
    if (filter === "all") {
      setFilteredPosts(posts); // Show all posts
    } else {
      const filtered = posts.filter(
        (post) => post.type === filter || post.category === filter
      );
      setFilteredPosts(filtered);
    }
  };

  // rental context
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Studio Light",
      price: 200,
      isAvailable: true,
      image: "/frame.png",
    },
    {
      id: 2,
      name: "Camera Lens",
      price: 150,
      isAvailable: false,
      image: "/camera.png",
    },
  ]);

  const [query, setQuery] = useState("");

  // Search for product list query
  const filteredProducts = products.filter(
    (item) => item.name.toLowerCase().includes(query.toLowerCase())
    // item.description.toLowerCase().includes(query.toLowerCase())
  );

  // Function to add a new product
  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  // Function to remove a product
  const removeProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  // Update Product Function
  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  // Mark as Available
  const markAsAvailable = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, isAvailable: true } : product
      )
    );
  };

  // Calculate summary
  const totalItems = products.length;
  const availableItems = products.filter(
    (product) => product.isAvailable === true
  ).length;
  const rentedItems = totalItems - availableItems;

  // requested product
  const [selectedRequest, setSelectedRequest] = useState(null);
  // Sample user data from sign-up
  const [users] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);

  // Sample requests
  const [requests, setRequests] = useState([
    {
      id: 1,
      email: "john@example.com",
      item: "Laptop",
      status: "Pending",
      days: 3,
      date: "2025-01-10",
    },
    {
      id: 2,
      email: "jane@example.com",
      item: "Headphones",
      status: "Approved",
      days: 5,
      date: "2025-01-11",
    },
  ]);

  // Function to update request status
  const updateRequestStatus = (id, newStatus) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: newStatus } : request
      )
    );
  };

  const updateRequest = (updatedRequest) => {
    const updatedRequests = requests.map((request) =>
      request.id === updatedRequest.id ? updatedRequest : request
    );
    setRequests(updatedRequests);
  };

  const selectRequest = (id) => {
    const request = requests.find((req) => req.id === id);
    const user = users.find((user) => user.email === request.email);
    setSelectedRequest({ ...request, name: user?.name });
  };

  // Appointment Ciontext
  const [appointment, setAppointment] = useState([
    {
      id: "5GS0001",
      date: "2025-01-12",
      status: "Approved",
    },
    {
      id: "5GS0002",
      date: "2025-01-12",
      status: "Pending",
    },
  ]);

  // Function to update request status
  const updateAppointmentStatus = (id, newStatus) => {
    setAppointment((appointment) =>
      appointment.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );
  };

  const updateAppointment = (updatedAppointment) => {
    const updatedAppointments = appointment.map((app) =>
      app.id === updatedAppointment.id ? updatedAppointment : app
    );
    setAppointment(updatedAppointments);
  };
  // Context value to be consumed in other components
  const value = {
    posts: filteredPosts,
    addPost,
    deletePost,
    likePost,
    filterPosts,
    products,
    addProduct,
    removeProduct,
    totalItems,
    availableItems,
    query,
    setQuery,
    filteredProducts,
    updateProduct,
    markAsAvailable,
    rentedItems,
    requests,
    updateRequestStatus,
    setRequests,
    updateRequest,
    selectRequest,
    selectedRequest,
    appointment,
    setAppointment,
    updateAppointmentStatus,
    updateAppointment,
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};
