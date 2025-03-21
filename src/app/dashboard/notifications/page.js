"use client";

import React, { useContext, useState } from "react";
import { ClientContext } from "@/app/context/ClientContext";
import { CiCalendarDate } from "react-icons/ci";
import { BsX } from "react-icons/bs";

const Notification = () => {
  const { notifications, displayDetails, selectedNotification } =
    useContext(ClientContext);

  const [activeTab, setActiveTab] = useState("unread");
  const [showModal, setShowModal] = useState(false); // For small screen modal

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

  const openNotification = (notif) => {
    displayDetails(notif);
    setShowModal(true);
  };

  // Close notification modal
  const closeNotification = () => setShowModal(false);

  return (
    <div className="p-2 flex gap-4 flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:hidden bg-black overflow-y-auto max-h-screen">
        <div className="border-b-2 py-2 px-2 mt-5">
          <h1 className="text-lg font-bold text-white">Notifications</h1>
          <p className="text-gray-500 text-[12px]">
            Read your received notifications
          </p>
        </div>
        {/* Notifications List */}
        <div className={`${showModal ? "hidden" : "block"} lg:block`}>
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
          {notifications.length === 0 ? (
            <div className="flex justify-center items-center text-sm mt-20 text-gray-600">
              <p>
                No Messages, <br /> Please book an Appointment
              </p>
            </div>
          ) : (
            <>
              {activeTab === "unread" ? (
                unreadNotifications.length === 0 ? (
                  <div className="flex justify-center items-center mt-20 text-gray-600 text-sm">
                    <p>No unread messages</p>
                  </div>
                ) : (
                  unreadNotifications.map((notif, index) => (
                    <div
                      key={index}
                      className="flex flex-row-reverse px-2 py-2  text-gray-600 items-center justify-between gap-5 rounded-lg shadow-md cursor-pointer w-[500px]"
                      onClick={() => openNotification(notif)}
                    >
                      <div className="gap-2 w-[600px]">
                        <h4 className="font-bold text-sm">{notif.title}</h4>
                        <div className="flex justify-between items-center text-gray-600">
                          <p className="text-[12px]">
                            Click here to view details
                          </p>
                          <p className="text-[12px]">{notif.date}</p>
                        </div>
                      </div>
                      <div className="bg-red-500 h-3 w-3 rounded-full"></div>
                    </div>
                  ))
                )
              ) : readNotifications.length === 0 ? (
                <div className="flex justify-center items-center mt-20 text-sm text-gray-600">
                  <p>No read messages</p>
                </div>
              ) : (
                readNotifications.map((notif) => (
                  <div
                    key={notif.id}
                    className="flex items-center justify-between px-2 py-2 text-sm cursor-pointer w-[500px] rounded-lg shadow-md text-gray-500"
                    onClick={() => openNotification(notif)}
                  >
                    <div className="gap-2 w-[600px]">
                      <h4>{notif.title}</h4>
                      <p className="text-[12px]">{notif.date}</p>
                    </div>
                  </div>
                ))
              )}
            </>
          )}
        </div>
      </div>

      {/* Notification Details (Large Screens) */}
      <div className="hidden lg:block lg:w-1/3 bg-black overflow-y-auto overflow-hidden max-h-screen">
        <div className="border-b-2 py-2 px-2 mt-5">
          <h1 className="text-lg font-bold text-white">Notifications</h1>
          <p className="text-gray-500 text-[12px]">
            Read your received notifications
          </p>
        </div>
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
        {notifications.length === 0 ? (
          <div className="flex justify-center items-center text-sm mt-20 text-gray-600">
            <p>
              No Messages, <br /> Please book an Appointment
            </p>
          </div>
        ) : (
          <>
            {activeTab === "unread" ? (
              unreadNotifications.length === 0 ? (
                <div className="flex justify-center items-center mt-20 text-gray-600 text-sm">
                  <p>No unread messages</p>
                </div>
              ) : (
                unreadNotifications.map((notif, index) => (
                  <div
                    key={index}
                    className="flex flex-row-reverse px-2 py-2 items-center justify-between gap-5 rounded-lg shadow-md cursor-pointer w-[500px]"
                    onClick={() => openNotification(notif)}
                  >
                    <div className="gap-2 w-[600px]">
                      <h4 className="font-bold text-sm">{notif.title}</h4>
                      <div className="flex justify-between items-center text-gray-600">
                        <p className="text-[12px]">
                          Click here to view details
                        </p>
                        <p className="text-[12px]">{notif.date}</p>
                      </div>
                    </div>
                    <div className="bg-red-500 h-3 w-3 rounded-full"></div>
                  </div>
                ))
              )
            ) : readNotifications.length === 0 ? (
              <div className="flex justify-center items-center mt-20 text-sm text-gray-600">
                <p>No read messages</p>
              </div>
            ) : (
              readNotifications.map((notif) => (
                <div
                  key={notif.id}
                  className="flex items-center justify-between px-2 py-2 text-sm cursor-pointer w-[500px] rounded-lg shadow-md text-gray-500"
                  onClick={() => openNotification(notif)}
                >
                  <div className="gap-2 w-[600px]">
                    <h4>{notif.title}</h4>
                    <p className="text-[12px]">{notif.date}</p>
                  </div>
                </div>
              ))
            )}
          </>
        )}
      </div>

      <div className="hidden lg:block lg:w-2/3  bg-black text-white relative border-l-2 lg:sticky lg:top-0 lg:h-screen p-4">
        {selectedNotification && (
          <div className="w-3/4 px-10 py-8 bg-gray-50 border-l text-black border-gray-300">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-xl font-bold">
                {selectedNotification.title}
              </h2>
              <div className="flex gap-4 items-center text-gray-500">
                <CiCalendarDate />
                <p>{todayDate}</p>
              </div>
            </div>

            <div className="flex flex-col mx-auto gap-4 w-[300px] space-y-4">
              <h4>{selectedNotification.details}</h4>
              <p className="text-lg">
                <strong>ID:</strong> {selectedNotification.id}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Notification Modal (Small Screens) */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start lg:hidden">
          <div className="bg-white w-[80%] h-[80%]  p-6 overflow-y-auto">
            <div
              className="text-black flex justify-end items-end mb-20"
              onClick={closeNotification}
            >
              <button>
                <BsX size={40} />
              </button>
            </div>
            {selectedNotification && (
              <>
                <h2 className="text-xl font-bold mb-2">
                  {selectedNotification.title}
                </h2>
                <div className="flex gap-4 items-center text-gray-500 mb-6">
                  <CiCalendarDate />
                  <p>{todayDate}</p>
                </div>
                <p>{selectedNotification.details}</p>
                <p className="text-lg">
                  <strong>ID:</strong> {selectedNotification.id}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
