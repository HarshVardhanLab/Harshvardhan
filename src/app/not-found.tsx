import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-sm border border-outline-variant/15">
            <span className="font-mono text-[10px] text-error uppercase tracking-[0.2em]">ERROR_404</span>
          </div>
          <h1 className="font-headline text-7xl md:text-9xl font-bold tracking-tighter text-primary">
            404
          </h1>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface">
            System Node Not Found
          </h2>
          <p className="text-on-surface-variant text-lg max-w-md mx-auto">
            The requested resource does not exist in the current architecture. 
            Please verify the path and try again.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-lg shadow-[0_0_30px_rgba(249,115,22,0.25)] hover:scale-105 transition-all flex items-center justify-center gap-3"
          >
            <span className="material-symbols-outlined">home</span>
            Return to Base
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-transparent border border-outline-variant/20 text-on-surface hover:bg-white/5 transition-all font-bold rounded-lg flex items-center justify-center gap-3"
          >
            <span className="material-symbols-outlined">support_agent</span>
            Report Issue
          </Link>
        </div>

        <div className="pt-12 font-mono text-xs text-slate-600">
          <div className="space-y-1">
            <p>&gt; STATUS: RESOURCE_NOT_FOUND</p>
            <p>&gt; TIMESTAMP: {new Date().toISOString()}</p>
            <p>&gt; SYSTEM: HV_OS_v1.0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
