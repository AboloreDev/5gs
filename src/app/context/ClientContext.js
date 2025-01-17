"use client";

import { createContext, useState, useEffect } from "react";
import { product } from "../product";
import { redirect } from "next/dist/server/api-utils";

// Create context
export const ClientContext = createContext();

// Provider component
export const ClientProvider = (props) => {
  // States
  const [list, setList] = useState(() => {
    if (typeof window !== "undefined") {
      const savedList = localStorage.getItem("list");
      return savedList ? JSON.parse(savedList) : [];
    }
    return [];
  });
  const [message, setMessage] = useState("");
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Thank you for your comment. Go to appointment and services and provide the necessary details.",
      sender: "admin",
      date: "8th June, 2024",
    },
    {
      id: 2,
      text: "The scenic I would like to book for is my wedding next week. What can I do?",
      sender: "client",
      date: "8th June, 2024",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [previewFiles, setPreviewFiles] = useState([]);
  const [caption, setCaption] = useState("");
  const [currentDate, setCurrentDate] = useState(null);

  // Hydration fix: Only run once client is mounted (avoids SSR mismatch)
  useEffect(() => {
    // Ensure code runs only in the client-side
    if (typeof window !== "undefined") {
      setCurrentDate(new Date().toLocaleDateString());
    }
  }, []); // Empty dependency means it runs only once when component mounts

  const deliveryFee = 10;
  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = subTotal + deliveryFee;

  // Add product to the list
  function handleAddToList(product) {
    setList((prevList) => {
      const exist = prevList.some((item) => item.id === product.id);
      if (exist) {
        setMessage("Item already added to the list.");
        setTimeout(() => setMessage(""), 2000);
        return prevList;
      }
      return [...prevList, { ...product, quantity: 1 }];
    });
  }

  // Add product to the cart
  function handleAddToCart(product) {
    setCart((prevCart) => {
      const cartExist = prevCart.some((item) => item.id === product.id);
      if (cartExist) {
        setMessage("Item already added to the cart.");
        setTimeout(() => setMessage(""), 2000);
        return prevCart;
      }
      return [...prevCart, { ...product, quantity: 1, days: 1 }];
    });
  }

  // Update quantity and days with constraints
  function handleUpdateCart(productId, action, field) {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId) {
          const newValue =
            action === "increment"
              ? item[field] + 1
              : Math.max(1, item[field] - 1);
          return { ...item, [field]: newValue };
        }
        return item;
      })
    );
  }

  // Remove product from the list
  function handleRemoveFromList(productId) {
    setList((prevList) => prevList.filter((item) => item.id !== productId));
  }

  // Remove product from the cart
  function handleRemoveFromCart(productId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }

  // Search for product list query
  const filteredProducts = product.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  );

  // Message functionality

  // Sending message
  function sendMessage(e) {
    e.preventDefault();

    if (previewFiles.length > 0) {
      const fileMessages = previewFiles.map((file) => ({
        id: new Date().toISOString(),
        file: file.url,
        fileName: file.name,
        caption: file.caption || "", // Include caption
        sender: "client",
        date: currentDate || new Date().toLocaleDateString(),
      }));
      setMessages([...messages, ...fileMessages]);
      setPreviewFiles([]); // Clear preview files after sending
    }

    if (newMessage.trim()) {
      // Send text message
      setMessages([
        ...messages,
        {
          id: Date.now(),
          text: newMessage,
          sender: "client",
          date: currentDate || new Date().toLocaleDateString(),
        },
      ]);
      setNewMessage("");
    }
  }

  // Upload a file/form in message
  const uploadFile = (event) => {
    const uploadedFiles = Array.from(event.target.files).map((file) => ({
      url: URL.createObjectURL(file), // Preview URL
      name: file.name, // File name
      caption: "", // Empty caption by default
    }));
    setPreviewFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  // Update caption for a specific file
  const updateCaption = (index, caption) => {
    const updatedFiles = [...previewFiles];
    updatedFiles[index].caption = caption; // Update caption
    setPreviewFiles(updatedFiles);
  };

  // Remove a file from preview
  const removeFile = (index) => {
    const updatedFiles = previewFiles.filter((_, i) => i !== index); // Remove file at index
    setPreviewFiles(updatedFiles);
  };

  // Delete a message
  const deleteMessage = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  // Copy message text
  const copyMessage = (text) => {
    navigator.clipboard.writeText(text);
    alert("Message copied to clipboard!");
  };

  // Appointment context
  const [appointments, setAppointments] = useState([
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
  const [notifications, setNotifications] = useState([]);
  // add appointment function

  function addAppointment(appointment) {
    setAppointments((prev) => [...prev, appointment]);
    // Add corresponding notification
    const notification = {
      id: Date.now(),
      title: "Appointment Booked Successfully",
      details: ` You have successfully booked an appointment with 5GS.
                  Appointment scheduled on ${appointment.date}`,
      date: new Date().toLocaleString(),
      unread: true,
    };
    setNotifications((prev) => [...prev, notification]);
  }

  // Update appointment function
  const updateAppointment = (id, updatedData) => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === id ? { ...appointment, ...updatedData } : appointment
      )
    );
  };

  // Submit appointment function
  const submitAppointment = (e) => {
    e.preventDefault();

    if (
      !e.target.date.value ||
      !e.target.time.value ||
      !e.target.message.value
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const date = e.target.date.value;
    const time = e.target.time.value;
    const message = e.target.message.value;

    // Validate date and time
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    const timeRegex = /^\d{2}:\d{2}$/;

    if (!dateRegex.test(date)) {
      alert("Please enter a valid date in the format DD/MM/YYYY.");
      return;
    }

    if (!timeRegex.test(time)) {
      alert("Please enter a valid time in the format HH:MM.");
      return;
    }

    if (!message.trim()) {
      alert("Please provide a description for the appointment.");
      return;
    }

    // Generate a random ID
    const randomId = `5GS${Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0")}`;
    const newAppointment = {
      id: randomId,
      date,
      message,
      status: "Pending",
    };

    // Add the appointment
    addAppointment(newAppointment);

    // Reset the form
    e.target.reset();
  };

  // Edit appointment function
  function editAppointment(id, newDate, newTime, reason) {
    confirm(`Edit appointment: ${id}`);

    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, date: `${newDate} at ${newTime}`, reason }
          : appointment
      )
    );
  }

  // Cancel appointment function
  function cancelAppointment(id) {
    const appointment = appointments.find((a) => a.id === id);

    if (appointment.status === "Canceled") {
      alert("This appointment has already been canceled.");
      return;
    }

    const userConfirmed = confirm(
      `Are you sure you want to cancel appointment: ${id}?`
    );

    if (userConfirmed) {
      setAppointments(
        appointments.map((appointment) =>
          appointment.id === id
            ? { ...appointment, status: "Canceled" }
            : appointment
        )
      );
    }
  }

  // Notification
  // Update notification to "read"
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
  };

  // State to track selected notification details
  const [selectedNotification, setSelectedNotification] = useState(null);

  // Display notification details and mark as read
  const displayDetails = (notification) => {
    if (!notification || !notification.id) {
      console.error("Invalid notification object passed:", notification);
      return;
    }

    markAsRead(notification.id);
    setSelectedNotification(notification); // Open modal with details
  };

  // Close the notification modal
  const closeModal = () => {
    setSelectedNotification(null);
  };

  // Homepage context
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Book us for your makeup session",
      category: "Photography",
      type: "Picture",
      image: "/HomeImage.png",
      date: "2025-01-01",
      likes: 0,
      comments: 0,
      liked: false,
    },
    {
      id: 2,
      title: "Outdoor photography package",
      category: "Make-up",
      type: "Picture",
      image: "/HomeImage.png",
      date: "2025-01-02",
      likes: 0,
      comments: 0,
      liked: false,
    },
    {
      id: 3,
      title: "Book us for your makeup session",
      category: "Graphic design",
      type: "Picture",
      image: "/HomeImage.png",
      date: "2025-01-01",
      likes: 0,
      comments: 0,
      liked: false,
    },
    {
      id: 4,
      title: "Book us for your makeup session",
      category: "Photography",
      type: "Picture",
      image: "/HomeImage.png",
      date: "2025-01-01",
      likes: 0,
      comments: 0,
      liked: false,
    },
    {
      id: 5,
      title: "Book us for your makeup session",
      category: "Photography",
      type: "Picture",
      image: "/HomeImage.png",
      date: "2025-01-01",
      likes: 0,
      comments: 0,
      liked: false,
    },
    {
      id: 6,
      title: "Book us for your makeup session",
      category: "Photography",
      type: "Picture",
      image: "/HomeImage.png",
      date: "2025-01-01",
      likes: 0,
      comments: 0,
      liked: false,
    },
    {
      id: 7,
      title: "Book us for your makeup session",
      category: "Photography",
      type: "Picture",
      image: "/HomeImage.png",
      date: "2025-01-01",
      likes: 0,
      comments: 0,
      liked: false,
    },
  ]);

  // Filters state without LocalStorage persistence
  const [filters, setFilters] = useState({ category: "All", type: "All" });

  // Filter posts based on filters state
  const filterPosts = () => {
    let filteredPosts = posts;

    if (filters.category && filters.category !== "All") {
      filteredPosts = filteredPosts.filter(
        (post) => post.category === filters.category
      );
    }

    if (filters.type.length > 0 && filters.type !== "All") {
      filteredPosts = filteredPosts.filter((post) =>
        filters.type.includes(post.type)
      );
    }

    return filteredPosts;
  };

  // Handle like/unlike functionality
  const toggleLike = (postId) => {
    setPosts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id === postId) {
          const updatedLikes = post.liked ? post.likes - 1 : post.likes + 1;
          return { ...post, likes: updatedLikes, liked: !post.liked };
        }
        return post;
      });
    });
  };

  // feedback context
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [feedbackId, setFeedbackId] = useState(null);
  const [consent, setConsent] = useState("");

  // Submit feedback
  const submitFeedback = (event) => {
    event.preventDefault();
    if (rating > 0 && feedback.trim() && consent) {
      console.log({
        rating,
        feedback,
        consent,
      });
      alert("Thank you for your feedback!");
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  // Context value
  const value = {
    list,
    setList,
    handleAddToList,
    handleRemoveFromList,
    handleAddToCart,
    handleRemoveFromCart,
    handleUpdateCart,
    message,
    setMessage,
    cart,
    setCart,
    query,
    setQuery,
    filteredProducts,
    messages,
    setMessages,
    sendMessage,
    newMessage,
    setNewMessage,
    previewFiles,
    setPreviewFiles,
    uploadFile,
    updateCaption,
    removeFile,
    deleteMessage,
    copyMessage,
    addAppointment,
    cancelAppointment,
    updateAppointment,
    submitAppointment,
    editAppointment,
    posts,
    setPosts,
    filters,
    setFilters,
    filterPosts,
    toggleLike,
    currentDate,
    setCurrentDate,
    appointments,
    setAppointments,
    notifications,
    setNotifications,
    markAsRead,
    displayDetails,
    selectedNotification,
    setSelectedNotification,
    closeModal,
    rating,
    setRating,
    feedback,
    submitFeedback,
    feedbackId,
    setFeedbackId,
    setFeedback,
    total,
    subTotal,
    deliveryFee,
    consent,
    setConsent,
  };

  return (
    <ClientContext.Provider value={value}>
      {props.children}
    </ClientContext.Provider>
  );
};
