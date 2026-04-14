import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [friends, setFriends] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const loadFriends = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1200));
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

  const showToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        friends,
        timeline,
        loading,
        addTimelineEntry,
        showToast,
        toasts,
        removeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
