import { useState, useEffect } from "react";

export const Storage = () => {
  const [webLocalStorage, setWebLocalStorage] = useState(0);

  const getData = () => {
    return JSON.parse(localStorage.getItem("webLocalStorage"));
  };

  useEffect(() => {
    setWebLocalStorage(getData());
    
  }, []);

  return <div>El precio del web es: {webLocalStorage}</div>;
};
