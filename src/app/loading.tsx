export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
        <div className="space-y-2">
          <h2 className="font-headline text-2xl font-bold text-primary">Initializing System</h2>
          <p className="font-mono text-xs text-slate-500 uppercase tracking-widest">Loading HV_OS...</p>
        </div>
      </div>
    </div>
  );
}
