import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AuraEffect } from '@/components/aura/AuraEffect';
import { Sparkles, Zap, Shield, Crown } from 'lucide-react';
import { SiGithub, SiX } from 'react-icons/si';

export function LandingPage() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'aurise-app'
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated Aura Background Effect */}
      <AuraEffect />

      {/* Background Image Layer */}
      <div 
        className="fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url(/assets/generated/aurise-aura-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <header className="border-b border-border/50 backdrop-blur-sm">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/generated/aurise-emblem.dim_512x512.png" 
                alt="Aurise Emblem" 
                className="h-10 w-10 aura-glow"
              />
              <h1 className="text-2xl font-bold tracking-tight text-aura-primary">
                Aurise
              </h1>
            </div>
            <nav className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-aura-primary">
                Features
              </Button>
              <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-aura-primary">
                About
              </Button>
              <Button variant="default" size="sm" className="aura-button">
                Get Started
              </Button>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-20 md:py-32">
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 relative">
                <img 
                  src="/assets/generated/aurise-emblem.dim_512x512.png" 
                  alt="Aurise" 
                  className="h-32 w-32 md:h-48 md:w-48 aura-glow-strong animate-pulse-slow"
                />
              </div>
              
              <h2 className="mb-6 text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-aura-primary via-aura-secondary to-aura-accent animate-gradient">
                Aurise
              </h2>
              
              <p className="mb-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                Awaken your inner power. Experience the next evolution of digital presence 
                with an aura that transcends the ordinary.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="aura-button text-lg px-8">
                  <Zap className="mr-2 h-5 w-5" />
                  Begin Your Journey
                </Button>
                <Button size="lg" variant="outline" className="border-aura-primary/50 text-aura-primary hover:bg-aura-primary/10">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="aura-card group">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-aura-primary/10 text-aura-primary group-hover:bg-aura-primary/20 transition-colors">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    Unleash Power
                  </h3>
                  <p className="text-muted-foreground">
                    Harness the energy within and manifest your true potential with every interaction.
                  </p>
                </CardContent>
              </Card>

              <Card className="aura-card group">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-aura-secondary/10 text-aura-secondary group-hover:bg-aura-secondary/20 transition-colors">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    Fortified Presence
                  </h3>
                  <p className="text-muted-foreground">
                    Build an unbreakable foundation with security and resilience at its core.
                  </p>
                </CardContent>
              </Card>

              <Card className="aura-card group">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-aura-accent/10 text-aura-accent group-hover:bg-aura-accent/20 transition-colors">
                    <Crown className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    Ascend Beyond
                  </h3>
                  <p className="text-muted-foreground">
                    Rise through the ranks and claim your place among the elite.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <Card className="aura-card-strong overflow-hidden">
              <CardContent className="p-8 md:p-12 text-center">
                <h3 className="mb-4 text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aura-primary to-aura-accent">
                  Ready to Awaken Your Aura?
                </h3>
                <p className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join the ranks of those who have transcended their limits. 
                  Your journey to power begins now.
                </p>
                <Button size="lg" className="aura-button text-lg px-10">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Start Now
                </Button>
              </CardContent>
            </Card>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-border/50 backdrop-blur-sm mt-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>© {currentYear} Aurise. Built with</span>
                <span className="text-aura-primary">♥</span>
                <span>using</span>
                <a 
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aura-primary hover:text-aura-secondary transition-colors font-medium"
                >
                  caffeine.ai
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-aura-primary transition-colors"
                  aria-label="GitHub"
                >
                  <SiGithub className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-aura-primary transition-colors"
                  aria-label="X (Twitter)"
                >
                  <SiX className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
