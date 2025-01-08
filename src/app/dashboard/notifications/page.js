"use client";

import React, { useContext, useState } from "react";
import Notifications from "./Notifications";
import { ClientContext } from "@/app/context/ClientContext";
import { CiCalendarDate } from "react-icons/ci";

const Notification = () => {
  const { notifications, displayDetails, selectedNotification, closeModal } =
    useContext(ClientContext);

  const [activeTab, setActiveTab] = useState("unread");

  // Filter notifications
  const unreadNotifications = notifications.filter(
    (notification) => notification.unread
  );
  const readNotifications = notifications.filter(
    (notification) => !notification.unread
  );

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const todayDate = `${day}/${month}/${year}`;

  return (
    <div>
      <div className="border-b-2 py-2 px-2">
        <h1 className="text-lg font-bold"> Appointment</h1>
        <p className="text-gray-500 text-sm">
          Read your received notifications
        </p>
      </div>

      <div className="grid grid-cols-[1fr_3fr] p-4">
        <div className="flex flex-col">
          <div className="flex gap-4 p-3 text-gray-500">
            <button
              className={`px-4 py-2 ${
                activeTab === "unread" ? "border-b-2 text-white" : ""
              }`}
              onClick={() => setActiveTab("unread")}
            >
              Unread
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "read" ? "border-b-2 text-white" : ""
              }`}
              onClick={() => setActiveTab("read")}
            >
              Read
            </button>
          </div>

          <div className="space-y-4 overflow-y-auto h-[1200px]">
            {notifications.length === 0 ? (
              <div className="flex justify-center items-center h-screen text-gray-600 text-2xl">
                <p>
                  No Messages, <br /> Please book an Appointment
                </p>
              </div>
            ) : (
              <>
                {activeTab === "unread" ? (
                  unreadNotifications.length === 0 ? (
                    <div className="flex justify-center items-center h-screen text-gray-600 text-2xl">
                      <p>No unread messages</p>
                    </div>
                  ) : (
                    unreadNotifications.map((notif, index) => (
                      <div
                        key={index}
                        className="flex flex-row-reverse  px-4 py-2 items-center justify-between gap-5 rounded-lg shadow-md cursor-pointer w-[500px]"
                        onClick={() => displayDetails(notif)}
                      >
                        <div className="gap-2 w-[600px]">
                          <h4 className="font-bold text-lg">{notif.title}</h4>
                          <div className="flex justify-between items-center text-gray-600">
                            <p className="text-sm">
                              Click here to view details
                            </p>
                            <p className="text-sm">{notif.date}</p>
                          </div>
                        </div>
                        <div className="bg-red-500 h-3 w-3 rounded-full"></div>
                      </div>
                    ))
                  )
                ) : activeTab === "read" ? (
                  readNotifications.length === 0 ? (
                    <div className="flex justify-center items-center h-screen text-gray-600 text-2xl">
                      <p>No read messages</p>
                    </div>
                  ) : (
                    readNotifications.map((notif) => (
                      <div
                        key={notif.id}
                        className="flex items-center justify-between px-4 py-2 cursor-pointer w-[500px] p-4 rounded-lg shadow-md text-gray-500"
                        onClick={() => displayDetails(notif)}
                      >
                        <div className="gap-2 w-[600px]">
                          <h4 className="text-lg">{notif.title}</h4>
                          <p className="text-sm">{notif.date}</p>
                        </div>
                      </div>
                    ))
                  )
                ) : null}
              </>
            )}
          </div>
        </div>

        <div className="border-l-2 px-6 py-6">
          {selectedNotification && (
            <div className="w-3/4 px-10 py-8  bg-gray-50 border-l text-black  border-gray-300">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-xl font-bold">
                  {selectedNotification.title}
                </h2>
                {/* <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  Close
                </button> */}
                <div className="flex gap-4 items-center text-gray-500">
                  <CiCalendarDate />
                  <p>{todayDate}</p>
                </div>
              </div>

              <div className="flex flex-col mx-auto  gap-4 w-[300px] space-y-4">
                <h4>{selectedNotification.details}</h4>

                <p className="text-lg">
                  <strong>ID:</strong> {selectedNotification.id}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;
