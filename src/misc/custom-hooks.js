import { useCallback, useReducer, useState } from 'react';

export function useModalState(defaultValue = false) {
  const [isOpen, setIsOpen] = useState(defaultValue);
  const open = useCallback(() => {
    setIsOpen(true);
  }, []);
  const close = useCallback(() => {
    setIsOpen(false);
  }, []);
  return { isOpen, open, close };
}
function showReducer(prevState, action) {
  switch (action.type) {
    case 'ADD': {
      return [...prevState, action.showId];
    }
    case 'REMOVE': {
      return prevState.filter(showId => showId !== action.showId);
    }
    case 'DECREASE': {
      const remain = prevState.filter(showId => showId !== action.showId);
      const res = prevState.filter(showId => showId === action.showId);
      if (res.length !== 1) {
        res.pop();
      }
      return [...remain, ...res];
    }
    default:
      return prevState;
  }
}

function usePersistedReducer(reducer, initialState, key) {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const persisted = localStorage.getItem(key);

    return persisted ? JSON.parse(persisted) : initial;
  });
  localStorage.setItem(key, JSON.stringify(state));
  // useEffect(() => {
  // }, [state, key]);
  return [state, dispatch];
}

export function useShows(key = 'shows') {
  return usePersistedReducer(showReducer, [], key);
}
