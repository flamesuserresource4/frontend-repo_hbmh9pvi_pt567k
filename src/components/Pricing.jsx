export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">Start free. Scale with usage-based pricing when you’re ready.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Starter</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">For solo builders and small teams.</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-extrabold text-neutral-900 dark:text-white">$0</span>
              <span className="text-neutral-600 dark:text-neutral-400">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• 1,000 operations</li>
              <li>• Basic workflows</li>
              <li>• Community support</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-semibold shadow-sm hover:opacity-90 transition">Get started</a>
          </div>

          <div className="relative rounded-2xl border border-blue-500/30 bg-white dark:bg-neutral-900 p-6 shadow-xl ring-2 ring-blue-500/40">
            <div className="absolute -top-3 left-6 rounded-full bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 shadow">Popular</div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Growth</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">For teams scaling operations.</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-extrabold text-neutral-900 dark:text-white">$49</span>
              <span className="text-neutral-600 dark:text-neutral-400">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• 50k operations</li>
              <li>• Advanced rules</li>
              <li>• Priority support</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-sm font-semibold shadow">Start trial</a>
          </div>

          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Enterprise</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">For orgs with compliance needs.</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-extrabold text-neutral-900 dark:text-white">Custom</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• SSO & RBAC</li>
              <li>• Premium SLAs</li>
              <li>• Dedicated onboarding</li>
            </ul>
            <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-neutral-900 dark:text-white ring-1 ring-black/10 dark:ring-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
