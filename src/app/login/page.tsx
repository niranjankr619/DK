'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Lock, ArrowRight, Sparkles, KeyRound, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [passcode, setPasscode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode: passcode.trim() }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.message || 'Access code is invalid. Please try again.');
        setIsLoading(false);
        return;
      }

      setIsSuccess(true);
      // Seamlessly redirect to the protected dashboard
      setTimeout(() => {
        router.push('/');
        router.refresh();
      }, 500);
    } catch (err) {
      console.error('Login error:', err);
      setError('Connection error. Please check your network and retry.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07080B] text-[#F3F4F6] flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br from-[#818cf8]/15 via-[#c084fc]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#22d3ee]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Login Card */}
      <div className="w-full max-w-md relative z-10">
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-[#818cf8]" />
            <span className="font-medium tracking-wide">DezinersKnot Security Vault</span>
          </div>
        </div>

        {/* Card */}
        <div className="p-8 rounded-3xl bg-[#0F1117]/85 border border-white/10 shadow-2xl backdrop-blur-xl relative">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#6366f1]/20 via-[#c084fc]/20 to-[#22d3ee]/20 border border-white/10 mx-auto flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-[#818cf8]" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white mb-2">
              Authorized Access
            </h1>
            <p className="text-sm text-gray-400">
              Enter your authorized organization passcode to unlock the escrow calculator and rate model.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Company Passcode
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <KeyRound className="w-4 h-4 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Enter passcode (e.g. DK2026)"
                  autoFocus
                  required
                  disabled={isLoading || isSuccess}
                  className="w-full pl-10 pr-20 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#818cf8] focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs animate-in fade-in slide-in-from-top-1">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{error}</span>
              </div>
            )}

            {/* Success Message */}
            {isSuccess && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Authenticated! Unlocking portal...</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || isSuccess || !passcode.trim()}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7] hover:from-[#4f46e5] hover:to-[#9333ea] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-indigo-500/40"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Verifying...</span>
                </>
              ) : isSuccess ? (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Access Granted</span>
                </>
              ) : (
                <>
                  <span>Unlock Workspace</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Footer note */}
          <div className="mt-6 pt-6 border-t border-white/5 text-center text-[11px] text-gray-500">
            Confidential &amp; Proprietary System &bull; DezinersKnot Pvt Ltd
          </div>
        </div>
      </div>
    </div>
  );
}
