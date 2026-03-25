import AccessibilityControls from "@/components/AccessibilityControls";
import { Eye, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const SiteHeader = () => {
  return (
    <header
      role="banner"
      className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80"
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4 gap-4 flex-wrap">
        <a
          href="/"
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          aria-label="Portal de Acessibilidade — Página inicial"
        >
          <Eye className="text-primary" size={28} strokeWidth={2.5} aria-hidden="true" />
          <span className="text-lg sm:text-xl font-bold tracking-tight">
            Portal de Acessibilidade
          </span>
        </a>

        <div className="flex items-center gap-3 flex-wrap">
          <AccessibilityControls />
          <Button
            variant="default"
            size="sm"
            aria-label="Fazer login na sua conta"
            className="font-bold min-h-[44px] min-w-[44px] px-4"
          >
            <LogIn size={18} aria-hidden="true" />
            <span className="ml-1">Login</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
