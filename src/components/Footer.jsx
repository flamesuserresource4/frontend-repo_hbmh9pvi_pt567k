export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <p>© {new Date().getFullYear()} FluxPay Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
