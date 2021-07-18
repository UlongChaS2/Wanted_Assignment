import { useState, useRef, useCallback, useEffect } from 'react';

export const useOutSideHover = () => {
  const [isActive, setIsActive] = useState(false);
  const inputEl = useRef(null);

  const onOutSideClick = useCallback((e) => {
    if (inputEl.current && !inputEl.current.contains(e.target)) {
      setIsActive(!isActive);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('onclick', onOutSideClick);

    return () => {
      document.removeEventListener('onclick', onOutSideClick);
    };
  }, []);

  return {
    isActive,
    setIsActive,
    inputEl,
  };
};
