import React, { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

const Messages = () => {
  const [msg, setMsg] = useState("");
  const [room, setRoom] = useState("");
  const [socketId, setSocketId] = useState("");
  const [messages, setMessages] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [notificationMsg, setNotificationMsg] = useState("");


  const socket = useMemo(() => io("http://localhost:5000"), []);

  useEffect(() => {

    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });


    socket.on("socket-id", (id) => {
      setSocketId(id);
    });


    socket.on("receive-notification", (notification) => {
      setNotifications((prev) => [...prev, notification]);
    });


    socket.on("receive-message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });


    return () => {
      socket.disconnect();
    };
  }, [socket]);


  const sendNotification = () => {
    socket.emit("send-notification", notificationMsg);
    setNotificationMsg("");
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    if (room) {
      socket.emit("join-room", room);
    }


    socket.emit("message", { msg, room });
    setMsg("");
  };

  return (
    <>
      <div className="bg-gray-400">
        <div>
          <div>
            <h6 className="text-xl">Socket ID: {socketId}</h6>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                value={msg}
                placeholder="Message"
                className="border p-2 rounded-lg border-green-700"
                onChange={(e) => setMsg(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                value={room}
                placeholder="Room"
                className="border p-2 rounded-lg border-green-700"
                onChange={(e) => setRoom(e.target.value)}
              />
            </div>
            <button className="border mt-2 mb-7 bg-gray-700 p-2 text-white rounded-lg" type="submit">Send Message</button>
          </form>
          <div className="">
            {messages.map((m, i) => (
              <div
                className={`border p-3 rounded-lg text-white inline-block w-full ${i % 2 === 0 ? 'bg-green-900 text-right' : 'bg-gray-700 text-white text-left'
                  }`}
                key={i}
              >
                {m}
              </div>
            ))}
          </div>




        </div>
        <div className="mt-6">
          <h1>Notification:</h1>
          <div>
            <h2>Real-Time Notifications</h2>

            <input
              type="text"
              value={notificationMsg}
              onChange={(e) => setNotificationMsg(e.target.value)}
              className="border p-2 rounded-lg border-green-700"
              placeholder="Enter notification message"
            />
            <button className="border bg-blue-500 p-2 ml-2 rounded-lg" onClick={sendNotification}>Send Notification</button>

            <div className="mb-[700px]">
              <h3 className="mb-5 mt-3">Notifications:</h3>
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="bg-green-800 text-white p-3 rounded-lg"
                  style={{
                    margin: "10px 0",
                    padding: "10px",
                    border: "1px solid black",
                  }}
                >
                  {notification}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Messages;
