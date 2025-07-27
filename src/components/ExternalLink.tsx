import React from "react";

type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
};

export const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, className = "", ...props }) => (
  <a
    href={href}
    className={`text-blue-600 hover:text-blue-800 transition-colors underline ${className}`}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
); 