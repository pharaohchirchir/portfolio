import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from 'react';

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  // Initialize darkMode from localStorage (if available) or default to false
  const [darkMode, setDarkMode] = useState(() => {
    const storedPref = localStorage.getItem('darkMode');
    return storedPref ? JSON.parse(storedPref) : false;
  });

  // Toggle dark mode with useCallback to memoize the function
  const toggleTheme = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  // Persist the darkMode state to localStorage on changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(() => ({ darkMode, toggleTheme }), [darkMode, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
