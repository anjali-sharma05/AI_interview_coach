import React from 'react';
import { LayoutDashboard, Star, Trophy, RefreshCcw } from 'lucide-react';

export default function Sidebar({ config, score, onReset }) {
    return (
        <aside className="w-64 flex flex-col h-full hidden md:flex"
            style={{ background: 'linear-gradient(180deg, #0f0c29, #302b63, #24243e)' }}>
            {/* Logo */}
            <div className="p-6 border-b border-white/10">
                <div className="flex items-center gap-3 mb-1">
                    <div className="p-2 rounded-xl" style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}>
                        <LayoutDashboard className="w-5 h-5 text-white" />
                    </div>
                    <h1 className="font-bold text-xl text-white tracking-tight">Interview<br />Coach</h1>
                </div>
            </div>

            <div className="p-6 flex-1 space-y-8">
                {/* Role Info */}
                <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest mb-3"
                        style={{ color: '#a78bfa' }}>Current Session</h3>
                    <div className="rounded-xl p-4 border border-white/10"
                        style={{ background: 'rgba(255,255,255,0.06)' }}>
                        <div className="font-semibold text-white">{config?.role || 'Not Set'}</div>
                        <div className="text-sm mt-1" style={{ color: '#c4b5fd' }}>
                            {config?.level || '-'} • {config?.type || '-'}
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest mb-3"
                        style={{ color: '#a78bfa' }}>Performance</h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 rounded-xl border border-violet-500/30"
                            style={{ background: 'rgba(124,58,237,0.15)' }}>
                            <div className="flex items-center gap-2 text-violet-300">
                                <Star className="w-4 h-4" />
                                <span className="font-medium text-sm">Current Score</span>
                            </div>
                            <span className="font-bold text-white">{score > 0 ? score : '-'}</span>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-xl border border-emerald-500/30"
                            style={{ background: 'rgba(16,185,129,0.12)' }}>
                            <div className="flex items-center gap-2 text-emerald-300">
                                <Trophy className="w-4 h-4" />
                                <span className="font-medium text-sm">Best Streak</span>
                            </div>
                            <span className="font-bold text-white">-</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6 border-t border-white/10">
                <button
                    onClick={onReset}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}
                >
                    <RefreshCcw className="w-4 h-4" />
                    New Interview
                </button>
            </div>
        </aside>
    );
}
