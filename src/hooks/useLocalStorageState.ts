import { useEffect, useState } from "react";

export function useLocalStorageState(initialState: unknown, key: string) {
  const [state, setState] = useState(() => {
    const localStorageValue = localStorage.getItem(key);

    return localStorageValue ? JSON.parse(localStorageValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(state));
    },
    [state, key]
  );

  return [state, setState];
}
