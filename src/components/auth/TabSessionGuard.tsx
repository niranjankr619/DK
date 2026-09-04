'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TabSessionGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // 1. Check if active unlock token exists in memory/sessionStorage
    const tabUnlocked = sessionStorage.getItem('dk_tab_unlocked');

    if (tabUnlocked !== 'true') {
      // Not unlocked -> force logout & redirect to login
      fetch('/api/auth/logout', { method: 'POST' }).finally(() => {
        router.replace('/login');
      });
      return;
    }

    setIsUnlocked(true);

    // 2. Clear session immediately when page is reloaded or unloaded (F5 / Refresh / Tab Close)
    const handleUnload = () => {
      sessionStorage.removeItem('dk_tab_unlocked');
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/auth/logout');
      }
    };

    window.addEventListener('beforeunload', handleUnload);
    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, [router]);

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-[#07080B] flex items-center justify-center">
        <div className="w-5 h-5 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
}
