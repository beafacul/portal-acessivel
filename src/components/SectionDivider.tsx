import CaneIcon from "@/components/CaneIcon";

const SectionDivider = () => (
  <div className="flex items-center justify-center gap-3 py-4" aria-hidden="true">
    <div className="h-px flex-1 bg-border" />
    <CaneIcon size={20} className="text-primary/50" />
    <div className="h-px flex-1 bg-border" />
  </div>
);

export default SectionDivider;
