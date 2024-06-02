'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from './icons';
export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <button
      className="border border-purple-500 rounded-2xl p-1 hover:bg-purple-500 hover:bg-opacity-10"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
