"use client";

import React from "react";

export default function Logo({ className = "text-2xl" }) {
  return (
    <span className={`tracking-wide cursor-pointer select-none text-slate-900 ${className}`}>
      <span className="text-primary font-extrabold mr-1.5">{"{"}</span>
      Dusha
      <span className="font-extrabold text-primary">Dev</span>
      <span className="text-primary font-bold ml-1.5">{"}"}</span>
    </span>
  );
}
