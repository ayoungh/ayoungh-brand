import React, { createContext, ReactNode, useCallback, useState, } from 'react';

interface ThemeContextValue {
  themeState: Boolean;
  setThemeState: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
ThemeContext.displayName = 'ThemeContext';

export const useThemeContext = (): ThemeContextValue => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  dark?: boolean;
  children: ReactNode;
}

export const ThemeProvider = ({
  children,
}: ThemeProviderProps) => {
    const [themeState, setThemeState] = useState(true);


  const createThemeContextValue = useCallback(() => {
    return {
      themeState,
      setThemeState,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeState]);    

  return (
    <ThemeContext.Provider value={createThemeContextValue()}>
      <div className={`${themeState ? "dark" : "light"}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
