import React from 'react'
import Spline from '@splinetool/react-spline'
import { Trophy, Users, Sword, Zap, Flame, Menu, Search, ChevronRight, Target, Shield, Crown, Medal } from 'lucide-react'

function StatCard({ icon: Icon, label, value, trend, color }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-5 hover:bg-white/15 transition-colors">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="flex items-center gap-3">
        <div className={`p-2.5 rounded-xl ${color} text-white`}> 
          <Icon size={20} />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-white/70">{label}</p>
          <p className="text-2xl font-semibold text-white">{value}</p>
        </div>
        {trend && (
          <span className="ml-auto text-emerald-400 text-sm">{trend}</span>
        )}
      </div>
    </div>
  )
}

function ModeCard({ title, desc, icon: Icon, accent }) {
  return (
    <button className="text-left rounded-2xl bg-white/10 border border-white/20 p-5 hover:bg-white/15 transition-colors backdrop-blur-xl">
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2.5 rounded-xl ${accent} text-white`}>
          <Icon size={20} />
        </div>
        <h4 className="text-white font-semibold text-lg">{title}</h4>
        <ChevronRight className="ml-auto text-white/60" size={18} />
      </div>
      <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
    </button>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-[radial-gradient(1000px_600px_at_20%_-10%,rgba(99,102,241,0.25),transparent),radial-gradient(800px_500px_at_90%_10%,rgba(236,72,153,0.25),transparent)]">
      {/* Top nav */}
      <header className="relative z-20">
        <div className="max-w-6xl mx-auto px-4 py-5 flex items-center gap-4">
          <button className="md:hidden text-white/80"><Menu /></button>
          <div className="flex items-center gap-2">
            <Flame className="text-pink-400" />
            <span className="text-white font-semibold tracking-wide">BattleHub</span>
          </div>
          <div className="ml-auto hidden md:flex items-center gap-6 text-white/70">
            <a href="#" className="hover:text-white">Overview</a>
            <a href="#" className="hover:text-white">Matches</a>
            <a href="#" className="hover:text-white">Loadout</a>
            <a href="#" className="hover:text-white">Store</a>
          </div>
          <div className="ml-4 flex items-center gap-3">
            <div className="hidden sm:flex items-center bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white/70">
              <Search size={16} className="mr-2" />
              <input placeholder="Search players, clans..." className="bg-transparent outline-none placeholder:text-white/50 text-sm w-40" />
            </div>
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-400 to-pink-400 border border-white/30" />
          </div>
        </div>
      </header>

      {/* Hero section with Spline */}
      <section className="relative h-[70vh] md:h-[75vh]">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/nnNYb3ZFbRxKghMM/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        <div className="relative z-10 max-w-6xl mx-auto h-full px-4 flex items-end">
          <div className="w-full grid md:grid-cols-2 gap-6 pb-8">
            <div className="pointer-events-auto">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Enter the Arena
              </h1>
              <p className="mt-3 text-white/80 max-w-xl">
                Squad up, drop in, and dominate the battlefield. Track your stats, manage loadouts, and climb the leaderboard.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="px-5 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-semibold shadow-lg shadow-pink-500/30">Play Now</button>
                <button className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold">Customize Loadout</button>
              </div>
            </div>

            {/* Quick stats */}
            <div className="pointer-events-auto grid grid-cols-2 md:grid-cols-3 gap-4">
              <StatCard icon={Trophy} label="Rank" value="#248" trend="+12" color="bg-amber-500" />
              <StatCard icon={Users} label="Squad" value="4/4" color="bg-indigo-500" />
              <StatCard icon={Sword} label="Kills" value="1,237" trend="+4%" color="bg-rose-500" />
              <StatCard icon={Shield} label="Win Rate" value="18%" trend="+1.2%" color="bg-emerald-500" />
              <StatCard icon={Target} label="K/D" value="2.14" color="bg-cyan-500" />
              <StatCard icon={Zap} label="Avg. Damage" value="742" color="bg-violet-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard grid */}
      <main className="relative z-10 -mt-8 md:-mt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-6">
          {/* Modes */}
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">Game Modes</h3>
                <a className="text-sm text-white/70 hover:text-white" href="#">View all</a>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <ModeCard title="Battle Royale" desc="100 players. 1 winner. Classic mode with shrinking zone." icon={Crown} accent="bg-indigo-500" />
                <ModeCard title="Clash Squad" desc="4v4 fast rounds. Buy weapons, outplay the enemy." icon={Sword} accent="bg-rose-500" />
                <ModeCard title="Ranked" desc="Rise through tiers and claim seasonal rewards." icon={Medal} accent="bg-amber-500" />
              </div>
            </div>

            {/* Recent matches */}
            <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">Recent Matches</h3>
                <a className="text-sm text-white/70 hover:text-white" href="#">Match history</a>
              </div>
              <div className="space-y-3">
                {[
                  { result: 'Victory', map: 'Neon Dunes', k: 9, d: 2, dmg: 1780 },
                  { result: 'Top 5', map: 'Cobalt City', k: 6, d: 3, dmg: 1224 },
                  { result: 'Eliminated', map: 'Crimson Peaks', k: 3, d: 1, dmg: 610 },
                ].map((m, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-black/20 border border-white/10">
                    <div className={`text-sm font-medium px-3 py-1 rounded-full ${m.result === 'Victory' ? 'bg-emerald-500/20 text-emerald-300' : m.result === 'Top 5' ? 'bg-indigo-500/20 text-indigo-300' : 'bg-rose-500/20 text-rose-300'}`}>{m.result}</div>
                    <div className="text-white/80">{m.map}</div>
                    <div className="ml-auto flex items-center gap-6 text-white/70">
                      <span>K {m.k}</span>
                      <span>D {m.d}</span>
                      <span>DMG {m.dmg}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <aside className="space-y-4">
            <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="text-amber-400" size={20} />
                <h3 className="text-white font-semibold">Global Leaderboard</h3>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'NovaZ', rating: 2894 },
                  { name: 'RogueKai', rating: 2760 },
                  { name: 'EchoByte', rating: 2682 },
                  { name: 'Lunaris', rating: 2577 },
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-black/20 border border-white/10">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-400 to-pink-400 border border-white/30" />
                    <div className="flex-1">
                      <p className="text-white font-medium">{p.name}</p>
                      <p className="text-white/60 text-xs">Rating {p.rating}</p>
                    </div>
                    <span className="text-white/60">#{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-indigo-500/40 to-pink-500/40 border border-white/30 backdrop-blur-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="text-yellow-300" size={20} />
                <h3 className="text-white font-semibold">Season Rewards</h3>
              </div>
              <p className="text-white/80 text-sm mb-4">Reach Diamond to unlock the animated royal skin set and exclusive emote.</p>
              <button className="px-4 py-2 rounded-lg bg-white/15 hover:bg-white/25 border border-white/30 text-white text-sm">View rewards</button>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 pb-10">
        <div className="max-w-6xl mx-auto px-4 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} BattleHub — Unofficial fan dashboard inspired by battle royale games.
        </div>
      </footer>
    </div>
  )
}
