import React from "react";

export default function Appbar({ children }) {
  return (
    <>
      <aside className="flex h-14 min-w-4 items-center shadow-md justify-between">
        {children}
      </aside>
    </>
  );
}
