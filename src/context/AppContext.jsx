import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [friends, setFriends] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFriends = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 5000));
      const { default: data } = await import("../data/friends.json");
      setFriends(data);
      setLoading(false);
    };
    loadFriends();

    const saved = localStorage.getItem("keen-keeper_timeline");
    if (saved) {
      setTimeline(JSON.parse(saved));
    }
  }, []);

  const addTimelineEntry = (type, friendName) => {
    const entry = {
      id: Date.now(),
      type,
      friendName,
      date: new Date().toISOString().split("T")[0],
    };
    setTimeline((prev) => {
      const updated = [entry, ...prev];
      localStorage.setItem("keen-keeper_timeline", JSON.stringify(updated));
      return updated;
    });
  };

  const showToast = (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <AppContext.Provider
      value={{ friends, timeline, loading, addTimelineEntry, showToast }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
