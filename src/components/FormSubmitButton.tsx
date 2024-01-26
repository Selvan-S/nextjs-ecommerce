"use client";
import React, { ComponentProps } from "react";
import { useFormStatus } from "react-dom";
type FormSubmitbuttonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function FormSubmitbutton({
  children,
  className,
  ...props
}: FormSubmitbuttonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      className={`btn-primary btn ${className}`}
      type="submit"
      disabled={pending}
    >
      {pending && <span className="loading loading-dots loading-sm" />}
      {children}
    </button>
  );
}
