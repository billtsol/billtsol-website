'use client';

import { useEffect } from 'react';

export default function DynamicFavicon() {
  useEffect(() => {
    // Function to update favicon based on color scheme
    const updateFavicon = () => {
      const isDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      const faviconLink =
        (document.querySelector("link[rel='icon']") as HTMLLinkElement) ||
        document.createElement('link');

      faviconLink.type = 'image/svg+xml';
      faviconLink.rel = 'icon';
      faviconLink.href = isDarkMode ? '/favicon.svg' : '/favicon.svg';

      document.head.appendChild(faviconLink);
    };

    // Update favicon immediately
    updateFavicon();

    // Set up listener for theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateFavicon);

    // Clean up
    return () => mediaQuery.removeEventListener('change', updateFavicon);
  }, []);

  return null;
}
