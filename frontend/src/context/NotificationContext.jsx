import React, { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type = 'info') => {
    setNotifications((prev) => [...prev, { message, type, id: Date.now() }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== Date.now()));
    }, 5000);
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      <div className="fixed bottom-4 right-4 space-y-2">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`p-2 rounded shadow-md text-white ${
              n.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {n.message}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};
