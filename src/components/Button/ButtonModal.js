import React from "react";
import { UserForm } from "@/components/UserForm/UserForm.js";

export const ButtonModal = ({ toggleOpen }) => {
  return (
    <div className="flex justify-end">
      <button
        className="max-w-72 h-12 rounded-md border bg-sky-500 hover:bg-sky-700 px-5 py-3"
        type="button"
        onClick={() => toggleOpen()}
        width={200}
        height={50}
      >
        SEE MORE PROJECTS
      </button>
    </div>
  );
};
