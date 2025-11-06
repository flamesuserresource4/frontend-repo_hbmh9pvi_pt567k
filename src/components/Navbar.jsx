import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">
            <Rocket size={18} />
          </span>
          <span className="text-lg tracking-tight">FluxPay</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600 dark:text-neutral-300">
          <a className="hover:text-neutral-900 dark:hover:text-white transition" href="#features">Features</a>
          <a className="hover:text-neutral-900 dark:hover:text-white transition" href="#pricing">Pricing</a>
          <a className="hover:text-neutral-900 dark:hover:text-white transition" href="#faq">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:inline-flex px-3 py-2 text-sm font-medium rounded-md text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white">Sign in</a>
          <a href="#pricing" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-sm font-semibold shadow-sm hover:opacity-90 transition">
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
