import React, { createContext, useContext, useMemo } from "react";
import { io } from "socket.io-client";
const socketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(socketContext);
  return socket;
};

const url = "localhost:8000";

export const SocketProvider = (props) => {
  const socket = useMemo(() => io("https://vidoe-call-server.vercel.app/"), []);

  return (
    <socketContext.Provider value={socket}>
      {props.children}
    </socketContext.Provider>
  );
};
