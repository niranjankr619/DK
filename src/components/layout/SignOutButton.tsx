'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, ShieldCheck } from 'lucide-react';

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
    <div className="flex items-center gap-2">
      <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-400">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>Vault Active</span>
      </div>

      <button
        onClick={handleLogout}
        disabled={isLoggingOut}
        title="Lock Workspace & Sign Out"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-rose-500/15 border border-white/10 hover:border-rose-500/30 text-gray-400 hover:text-rose-300 text-xs font-medium transition-all group"
      >
        <LogOut className="w-3.5 h-3.5 text-gray-400 group-hover:text-rose-400 transition-colors" />
        <span className="hidden sm:inline">Lock</span>
      </button>
    </div>
  );
}
