import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { User, Package, Heart, Settings, LogIn } from 'lucide-react';
import { PageShell } from '../components/PageShell';

type Tab = 'login' | 'register';

export function ShopMyAccount() {
  const [tab, setTab] = useState<Tab>('login');
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [regForm, setRegForm] = useState({ name: '', email: '', password: '', confirm: '' });

  return (
    <PageShell>
      <div className="bg-brand-surface min-h-screen">
        <section className="bg-brand-charcoal py-24 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #C5A059, transparent 70%)' }}
          />
          <div className="relative z-10 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
            <User size={20} className="text-white" />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-3xl md:text-4xl font-serif font-medium text-white"
          >
            My Account
          </motion.h1>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="space-y-3">
            {[
              { icon: User, label: 'Profile', active: true },
              { icon: Package, label: 'My Orders', active: false },
              { icon: Heart, label: 'Saved Items', active: false },
              { icon: Settings, label: 'Settings', active: false },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-sans transition-all ${
                    item.active
                      ? 'bg-brand-charcoal text-white font-bold'
                      : 'text-brand-muted hover:text-brand-charcoal hover:bg-white'
                  }`}
                >
                  <Icon size={16} />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Auth Panel */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-3xl p-8 border border-black/5">
              {/* Tab switcher */}
              <div className="flex gap-1 bg-brand-surface rounded-xl p-1 mb-8">
                {(['login', 'register'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`flex-1 py-2.5 rounded-lg text-[11px] uppercase tracking-[0.15em] font-bold transition-all ${
                      tab === t ? 'bg-white text-brand-charcoal shadow-sm' : 'text-brand-muted'
                    }`}
                  >
                    {t === 'login' ? 'Sign In' : 'Create Account'}
                  </button>
                ))}
              </div>

              {tab === 'login' ? (
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={loginForm.email}
                      onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm text-brand-charcoal bg-brand-surface focus:outline-none focus:border-brand-charcoal/30"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-1.5">Password</label>
                    <input
                      type="password"
                      required
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm text-brand-charcoal bg-brand-surface focus:outline-none focus:border-brand-charcoal/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-brand-charcoal/90 transition-all"
                  >
                    <LogIn size={14} /> Sign In
                  </button>
                  <p className="text-center text-[11px] text-brand-muted">
                    <button className="underline hover:text-brand-charcoal">Forgot password?</button>
                  </p>
                </form>
              ) : (
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  {[
                    { key: 'name', label: 'Full Name', type: 'text' },
                    { key: 'email', label: 'Email', type: 'email' },
                    { key: 'password', label: 'Password', type: 'password' },
                    { key: 'confirm', label: 'Confirm Password', type: 'password' },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="block text-[10px] uppercase tracking-[0.15em] font-bold text-brand-muted mb-1.5">{f.label}</label>
                      <input
                        type={f.type}
                        required
                        value={regForm[f.key as keyof typeof regForm]}
                        onChange={(e) => setRegForm({ ...regForm, [f.key]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm text-brand-charcoal bg-brand-surface focus:outline-none focus:border-brand-charcoal/30"
                      />
                    </div>
                  ))}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-brand-charcoal text-white text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-brand-charcoal/90 transition-all"
                  >
                    Create Account
                  </button>
                </form>
              )}

              <div className="mt-6 pt-6 border-t border-black/5 text-center">
                <p className="text-[11px] text-brand-muted">
                  Or <Link to="/shop" className="font-bold text-brand-charcoal hover:underline">continue as guest</Link> — account not required to purchase.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
