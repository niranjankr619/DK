'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

export default function SignOutButton() {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/login');
      router.refresh();
    } catch (err) {
      console.error('Logout error:', err);
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleLogout}
        disabled={isLoggingOut}
        title="Sign Out"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/25 hover:border-rose-500/40 text-rose-300 hover:text-rose-200 text-xs font-medium transition-all group shadow-sm disabled:opacity-50"
      >
        <LogOut className="w-3.5 h-3.5 text-rose-400 group-hover:text-rose-300 transition-colors" />
        <span>{isLoggingOut ? 'Logging out...' : 'Logout'}</span>
      </button>
    </div>
  );
}
