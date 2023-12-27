import React, { useEffect, useState } from "react";

export const useDebounce = (searchText, delay = 3000) => {
  const [debouncedValue, setDebouncedValue] = useState(searchText);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(searchText);
    }, delay);

    // cleanup
    return () => clearTimeout(timer);
  }, [searchText, delay]);

  return debouncedValue;
};
