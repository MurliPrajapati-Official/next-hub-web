"use client";

import { useState, useEffect } from 'react';

const BOOKMARKS_KEY = 'nh_bookmarks';

export function useBookmarks() {
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load initial bookmarks from local storage
    const loadBookmarks = () => {
      const stored = localStorage.getItem(BOOKMARKS_KEY);
      if (stored) {
        try {
          setBookmarkedIds(JSON.parse(stored));
        } catch (e) {
          console.error("Failed to parse bookmarks");
        }
      }
    };

    loadBookmarks();
    setIsLoaded(true);

    // Listen for custom event in case other components change it
    const handleUpdate = () => {
      loadBookmarks();
    };

    window.addEventListener('bookmarksUpdated', handleUpdate);
    return () => window.removeEventListener('bookmarksUpdated', handleUpdate);
  }, []);

  const toggleBookmark = (id: string) => {
    const stored = localStorage.getItem(BOOKMARKS_KEY);
    let prev: string[] = [];
    if (stored) {
      try { prev = JSON.parse(stored); } catch (e) {}
    }
    const newIds = prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id];
    
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(newIds));
    setBookmarkedIds(newIds);
    window.dispatchEvent(new Event('bookmarksUpdated'));
  };

  const removeBookmark = (id: string) => {
    const stored = localStorage.getItem(BOOKMARKS_KEY);
    let prev: string[] = [];
    if (stored) {
      try { prev = JSON.parse(stored); } catch (e) {}
    }
    const newIds = prev.filter((i) => i !== id);
    
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(newIds));
    setBookmarkedIds(newIds);
    window.dispatchEvent(new Event('bookmarksUpdated'));
  };

  const isBookmarked = (id: string) => bookmarkedIds.includes(id);

  return { bookmarkedIds, toggleBookmark, removeBookmark, isBookmarked, isLoaded };
}
