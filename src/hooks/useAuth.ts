"use client";

import { useState, useEffect } from 'react';

const AUTH_KEY = 'nh_auth_status';

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadAuth = () => {
      const stored = localStorage.getItem(AUTH_KEY);
      if (stored === 'true') {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    loadAuth();
    setIsLoaded(true);

    const handleUpdate = () => {
      loadAuth();
    };

    window.addEventListener('authUpdated', handleUpdate);
    return () => window.removeEventListener('authUpdated', handleUpdate);
  }, []);

  const login = () => {
    localStorage.setItem(AUTH_KEY, 'true');
    setIsLoggedIn(true);
    window.dispatchEvent(new Event('authUpdated'));
  };

  const logout = () => {
    localStorage.setItem(AUTH_KEY, 'false');
    setIsLoggedIn(false);
    window.dispatchEvent(new Event('authUpdated'));
  };

  return { isLoggedIn, isLoaded, login, logout };
}
