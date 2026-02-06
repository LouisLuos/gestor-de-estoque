import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const StockContext = createContext({});

export default function StockContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("react-stock-data");
    if (!storedItems) return [];
    const items = JSON.parse(storedItems);
    items.forEach((item) => {
      item.createdAt = new Date(item.createdAt);
      item.updatedAt = new Date(item.updatedAt);
    });
    return items;
  });

  useEffect(() => {
    localStorage.setItem("react-stock-data", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    const newItem = {
      ...item,
      id: Math.floor(Math.random() * 1000000),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setItems((state) => [...state, newItem]);
  };

  const getItem = (id) => items.find((i) => i.id === Number(id));

  const updateItem = (id, newAttributes) => {
    setItems((state) => {
      return state.map((item) => {
        if (item.id === Number(id)) {
          return { ...item, ...newAttributes, updatedAt: new Date() };
        }
        return item;
      });
    });
  };

  const deleteItem = (id) => {
    setItems((state) => state.filter((item) => item.id !== id));
  };

  const stock = {
    items,
    addItem,
    getItem,
    updateItem,
    deleteItem,
  };

  return (
    <StockContext.Provider value={stock}>
      {children}
    </StockContext.Provider>
  );
};