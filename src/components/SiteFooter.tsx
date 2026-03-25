import { Heart, Eye } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer
      role="contentinfo"
      className="border-t border-border bg-card mt-16"
    >
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Eye className="text-primary" size={20} aria-hidden="true" />
          <span className="font-bold text-foreground">Portal de Acessibilidade</span>
        </div>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          Promovendo inclusão digital e acessibilidade para pessoas com deficiência visual.
        </p>
        <p className="text-muted-foreground text-xs mt-4 flex items-center justify-center gap-1">
          Feito com <Heart size={14} className="text-primary" aria-hidden="true" /> 
          <span className="sr-only">amor</span> para todos.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
