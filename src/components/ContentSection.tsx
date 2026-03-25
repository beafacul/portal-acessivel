import { type ReactNode } from "react";

interface ContentSectionProps {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

const ContentSection = ({ id, title, icon, children }: ContentSectionProps) => {
  return (
    <article
      id={id}
      className="bg-card rounded-lg border border-border p-6 sm:p-8 shadow-sm"
      aria-labelledby={`${id}-heading`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          {icon}
        </div>
        <h2
          id={`${id}-heading`}
          className="text-2xl sm:text-3xl font-bold text-foreground"
        >
          {title}
        </h2>
      </div>
      <div className="space-y-4 text-foreground/90 leading-relaxed text-base sm:text-lg">
        {children}
      </div>
    </article>
  );
};

export default ContentSection;
