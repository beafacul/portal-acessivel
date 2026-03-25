import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Eye, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

type FontSize = "normal" | "large" | "xlarge";
type Theme = "light" | "dark" | "high-contrast";

const AccessibilityControls = () => {
  const [fontSize, setFontSize] = useState<FontSize>("normal");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    document.documentElement.classList.remove("font-size-large", "font-size-xlarge");
    if (fontSize === "large") document.documentElement.classList.add("font-size-large");
    if (fontSize === "xlarge") document.documentElement.classList.add("font-size-xlarge");
  }, [fontSize]);

  useEffect(() => {
    document.documentElement.classList.remove("dark", "high-contrast");
    if (theme === "dark") document.documentElement.classList.add("dark");
    if (theme === "high-contrast") document.documentElement.classList.add("high-contrast");
  }, [theme]);

  const increaseFontSize = () => {
    setFontSize((prev) =>
      prev === "normal" ? "large" : prev === "large" ? "xlarge" : "xlarge"
    );
  };

  const decreaseFontSize = () => {
    setFontSize((prev) =>
      prev === "xlarge" ? "large" : prev === "large" ? "normal" : "normal"
    );
  };

  const cycleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : prev === "dark" ? "high-contrast" : "light"
    );
  };

  const themeLabel =
    theme === "light" ? "Modo Claro" : theme === "dark" ? "Modo Escuro" : "Alto Contraste";
  const themeIcon =
    theme === "light" ? <Sun size={20} /> : theme === "dark" ? <Moon size={20} /> : <Eye size={20} />;

  return (
    <nav
      aria-label="Controles de acessibilidade"
      className="flex items-center gap-1 flex-wrap"
      role="toolbar"
    >
      <Button
        variant="outline"
        size="sm"
        onClick={decreaseFontSize}
        aria-label="Diminuir tamanho da fonte"
        disabled={fontSize === "normal"}
        className="text-foreground border-foreground/30 hover:bg-accent"
      >
        <ZoomOut size={18} />
        <span className="sr-only sm:not-sr-only sm:ml-1 text-xs">A-</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={increaseFontSize}
        aria-label="Aumentar tamanho da fonte"
        disabled={fontSize === "xlarge"}
        className="text-foreground border-foreground/30 hover:bg-accent"
      >
        <ZoomIn size={18} />
        <span className="sr-only sm:not-sr-only sm:ml-1 text-xs">A+</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={cycleTheme}
        aria-label={`Alternar tema. Tema atual: ${themeLabel}`}
        className="text-foreground border-foreground/30 hover:bg-accent"
      >
        {themeIcon}
        <span className="sr-only sm:not-sr-only sm:ml-1 text-xs">{themeLabel}</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          setFontSize("normal");
          setTheme("light");
        }}
        aria-label="Restaurar configurações padrão"
        className="text-foreground border-foreground/30 hover:bg-accent"
      >
        <RotateCcw size={18} />
        <span className="sr-only sm:not-sr-only sm:ml-1 text-xs">Resetar</span>
      </Button>
    </nav>
  );
};

export default AccessibilityControls;
