"use client";

import { ClientContext } from "@/app/context/ClientContext";
import React, { useContext, useState } from "react";

const Notifications = () => {
  const { notifications, markAsRead } = useContext(ClientContext);

  return <div></div>;
};

export default Notifications;
