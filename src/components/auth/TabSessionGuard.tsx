'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TabSessionGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // Check if this specific browser tab has been unlocked in sessionStorage
    const tabUnlocked = sessionStorage.getItem('dk_tab_unlocked');

    if (tabUnlocked !== 'true') {
      // Tab is new/reopened without active unlock -> force logout & redirect to login
      fetch('/api/auth/logout', { method: 'POST' }).finally(() => {
        router.replace('/login');
      });
    } else {
      setIsUnlocked(true);
    }
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
