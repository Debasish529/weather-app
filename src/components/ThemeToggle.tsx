import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import type { RootState } from '../store/store';

export const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <Sun className="w-6 h-6 text-yellow-500" />
      ) : (
        <Moon className="w-6 h-6 text-gray-700" />
      )}
    </button>
  );
};