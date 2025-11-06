import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/70 dark:bg-white/10 text-neutral-700 dark:text-neutral-200 ring-1 ring-black/5 dark:ring-white/10 backdrop-blur">
            3D fintech • Automation first
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
            Automate your finance ops with elegance
          </h1>
          <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
            FluxPay centralizes payouts, invoicing, and reconciliation with AI-driven workflows. Say goodbye to spreadsheets and manual tasks.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 text-sm font-semibold shadow-sm hover:opacity-90 transition">
              Start free
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-neutral-900 dark:text-white ring-1 ring-black/10 dark:ring-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition">
              Explore features
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent" />
    </section>
  );
}
