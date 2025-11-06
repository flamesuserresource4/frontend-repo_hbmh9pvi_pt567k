import { Shield, Zap, BarChart3, Workflow } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Automated Workflows',
    desc: 'Trigger payouts, invoice matching, and alerts from your existing tools with minimal setup.',
  },
  {
    icon: Shield,
    title: 'Bank-grade Security',
    desc: 'End-to-end encryption, SSO, and role-based access controls keep your data safe.',
  },
  {
    icon: BarChart3,
    title: 'Realtime Analytics',
    desc: 'Track cash flow, unit economics, and variance in one clean, unified dashboard.',
  },
  {
    icon: Workflow,
    title: 'No-Code Rules',
    desc: 'Build approval chains and exception handling using expressive, visual rules.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Designed for modern finance teams</h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">Everything you need to move money faster, safer, and with total visibility.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-md transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
