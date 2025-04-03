
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Toggle } from './ui/toggle';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Toggle 
      aria-label="Toggle theme" 
      pressed={theme === 'dark'}
      onPressedChange={toggleTheme}
      className="rounded-full p-2"
    >
      {theme === 'dark' ? (
        <Moon size={18} className="text-foreground"/>
      ) : (
        <Sun size={18} className="text-foreground"/>
      )}
    </Toggle>
  );
};

export default ThemeToggle;
