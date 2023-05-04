import { useState, useEffect } from 'react'

export default function useLocalStorage<T>(key: string, initialValue: T) {

  const [value, setValue] = useState((): T => {
    const restoredItem = localStorage.getItem(key);
    return restoredItem ? JSON.parse(restoredItem) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}