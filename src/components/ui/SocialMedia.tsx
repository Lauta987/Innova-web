import type { CSSProperties, ReactNode } from "react";
import { Mail, MessageCircle } from "lucide-react";

type SocialType = "whatsapp" | "instagram" | "email";

export interface SocialItem {
  href: string;
  ariaLabel: string;
  tooltip: string;
  color: string;
  type: SocialType;
}

interface SocialMediaProps {
  items: readonly SocialItem[];
  className?: string;
}

function InstagramIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
    </svg>
  );
}

function getSocialIcon(type: SocialType): ReactNode {
  if (type === "whatsapp") return <MessageCircle size={25} />;
  if (type === "instagram") return <InstagramIcon />;
  return <Mail size={25} />;
}

function SocialMedia({ items, className = "" }: SocialMediaProps) {
  return (
    <ul className={`social-media ${className}`}>
      {items.map((item) => (
        <li className="social-media-item" key={item.type}>
          <a
            href={item.href}
            aria-label={item.ariaLabel}
            className="social-media-link"
            style={{ "--social-color": item.color } as CSSProperties}
            target={item.type === "email" ? "_self" : "_blank"}
            rel={item.type === "email" ? undefined : "noopener noreferrer"}
          >
            <span className="social-media-fill"></span>
            <span className="social-media-icon">
              {getSocialIcon(item.type)}
            </span>
          </a>

          <span
            className="social-media-tooltip"
            style={{ "--social-color": item.color } as CSSProperties}
          >
            {item.tooltip}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default SocialMedia; 