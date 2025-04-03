
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
      className="rounded-full p-2 hover:bg-muted/80 transition-colors"
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
