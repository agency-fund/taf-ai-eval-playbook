import React from "react";

type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
};

export const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, className = "", ...props }) => (
  <a
    href={href}
    className={`text-taf-blue hover:text-taf-blue/80 transition-colors underline ${className}`}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
); 