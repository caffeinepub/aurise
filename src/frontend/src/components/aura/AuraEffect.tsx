import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export function AuraEffect() {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aura-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aura-secondary/5 rounded-full blur-3xl" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Primary Aura Orb */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aura-primary/10 rounded-full blur-3xl animate-aura-pulse" />
      
      {/* Secondary Aura Orb */}
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aura-secondary/10 rounded-full blur-3xl animate-aura-pulse-delayed" />
      
      {/* Accent Aura Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aura-accent/5 rounded-full blur-3xl animate-aura-rotate" />
      
      {/* Floating Particles */}
      <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-aura-primary rounded-full animate-float-1" />
      <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-aura-secondary rounded-full animate-float-2" />
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-aura-accent rounded-full animate-float-3" />
      <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-aura-primary rounded-full animate-float-4" />
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-aura-secondary rounded-full animate-float-5" />
    </div>
  );
}
