import React from "react";

export default function TextField({ rest }) {
  return (
    <>
      <div className="flex py-2 border border-border rounded-md">
        <input className="flex px-3 w-full" {...rest} />
      </div>
    </>
  );
}
