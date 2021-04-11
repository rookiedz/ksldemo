import React from "react";

export default function Appbar({ children }) {
  return (
    <>
      <aside className="flex h-12 min-w-4 items-center shadow-md justify-between">
        {children}
      </aside>
    </>
  );
}
