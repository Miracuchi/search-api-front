export default function UseLocalStorage() {
  const setToLocalStorage = (storageKey: string, itemToStore: string) => {
    if (itemToStore)
      localStorage.setItem(storageKey, JSON.stringify(itemToStore));
  };

  const getFromLocalStorage = (storageKey: string) => {
    if (typeof window !== "undefined") {
      const storedItem = localStorage.getItem(storageKey);
      return storedItem ? JSON.parse(storedItem) : null;
    }
    return null;
  };

  return { setToLocalStorage, getFromLocalStorage };
}
