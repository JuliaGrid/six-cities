import { RefObject, useEffect } from 'react';

export function useDetectOutsideClick<T extends HTMLElement>(ref: RefObject<T>, isOpen: boolean, setIsOpen: (value: React.SetStateAction<boolean>) => void) {
  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isOpen && ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isOpen, setIsOpen, ref]);
}
