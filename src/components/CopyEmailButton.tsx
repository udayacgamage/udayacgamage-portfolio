"use client";

import { useState } from "react";

interface CopyEmailButtonProps {
  email?: string;
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
}

export default function CopyEmailButton({
  email = "udayacgamage@gmail.com",
  className = "button",
  children,
  showIcon = true,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    } catch {
      // Fallback
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="copy-email-wrapper">
      <button
        type="button"
        onClick={handleCopy}
        className={className}
        aria-label={`Copy email address ${email}`}
        title="Click to copy email address"
      >
        {copied ? (
          <>
            <span aria-hidden="true">✓</span>
            <span>Copied!</span>
          </>
        ) : (
          children || (
            <>
              <span>{email}</span>
              {showIcon && <span aria-hidden="true">⧉</span>}
            </>
          )
        )}
      </button>

      {/* Floating Animated Toast */}
      {copied && (
        <div className="copy-toast" role="status" aria-live="polite">
          <span className="toast-icon">✓</span>
          <span>Copied to clipboard: <strong>{email}</strong></span>
        </div>
      )}
    </div>
  );
}

