export const SetToLocalStorage = (storageKey: string, itemToStore: string) => {
  if (itemToStore)
    localStorage.setItem(storageKey, JSON.stringify(itemToStore));
};

export const GetFromLocalStorage = (storageKey: string) => {
  if (typeof window !== "undefined") {
    const storedItem = localStorage.getItem(storageKey);
    return storedItem ? JSON.parse(storedItem) : null;
  }
  return null;
};
