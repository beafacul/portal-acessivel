const CaneIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    role="img"
  >
    <path d="M7 3c0 0 3 0 3 3" />
    <line x1="10" y1="6" x2="16" y2="21" />
    <path d="M16 21c1 0 2-1 2-2" />
  </svg>
);

export default CaneIcon;
