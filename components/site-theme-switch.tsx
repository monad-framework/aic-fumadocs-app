'use client';

import { Monitor, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

type ThemePreference = 'light' | 'dark' | 'system';

type ThemeSwitchProps = {
  className?: string;
  mode?: 'light-dark' | 'light-dark-system';
};

const STORAGE_KEY = 'theme';

function resolvedTheme(theme: ThemePreference): 'light' | 'dark' {
  if (theme !== 'system') return theme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: ThemePreference) {
  const resolved = resolvedTheme(theme);
  const root = document.documentElement;

  root.classList.toggle('dark', resolved === 'dark');
  root.style.colorScheme = resolved;
  root.dataset.theme = theme;
}

export function ThemeSwitch({ className, mode = 'light-dark' }: ThemeSwitchProps) {
  const [theme, setTheme] = useState<ThemePreference>('system');
  const includeSystem = mode === 'light-dark-system';

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const initial: ThemePreference =
      stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system';

    const normalized = includeSystem || initial !== 'system' ? initial : resolvedTheme('system');
    setTheme(normalized);
    applyTheme(normalized);
  }, [includeSystem]);

  useEffect(() => {
    if (theme !== 'system') return;

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => applyTheme('system');
    media.addEventListener('change', handleChange);

    return () => media.removeEventListener('change', handleChange);
  }, [theme]);

  const setPreference = (next: ThemePreference) => {
    localStorage.setItem(STORAGE_KEY, next);
    setTheme(next);
    applyTheme(next);
  };

  const cycleTheme = () => {
    if (includeSystem) {
      setPreference(theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light');
      return;
    }

    setPreference(theme === 'dark' ? 'light' : 'dark');
  };

  const Icon = theme === 'dark' ? Moon : theme === 'light' ? Sun : Monitor;
  const nextTheme = includeSystem
    ? theme === 'light'
      ? 'dark'
      : theme === 'dark'
        ? 'system'
        : 'light'
    : theme === 'dark'
      ? 'light'
      : 'dark';

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label={`Theme is ${theme}. Switch to ${nextTheme}.`}
      title={`Theme: ${theme}`}
      className={cn(
        'inline-flex size-9 items-center justify-center rounded-md text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring motion-reduce:transition-none',
        className,
      )}
    >
      <Icon aria-hidden="true" className="size-4.5" />
    </button>
  );
}
