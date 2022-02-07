import React from 'react';

export default function FooterGroup({ children, className }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>{children}</div>
  );
}
