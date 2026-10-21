"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/data/services";

export interface EnquiryValues {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  contactMethod: string;
  description: string;
}

type EnquiryField = keyof EnquiryValues;
type EnquiryErrors = Partial<Record<EnquiryField, string>>;
type EnquiryStatus =
  | "idle"
  | "submitting"
  | "not-configured"
  | "error"
  | "success";

export function serviceLabel(slug: string): string {
  return services.find((service) => service.slug === slug)?.title ?? slug;
}

export function formatEnquiry(values: EnquiryValues, packageName?: string): string {
  return [
    `Name: ${values.fullName}`,
    values.organization && `Organization: ${values.organization}`,
    `Email: ${values.email}`,
    values.phone && `Phone: ${values.phone}`,
    `Service: ${serviceLabel(values.service)}`,
    values.budget && `Budget: ${values.budget}`,
    `Preferred contact: ${values.contactMethod}`,
    packageName && `Package: ${packageName}`,
    `Project details: ${values.description}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export function useEnquiryForm(
  defaultService: string,
) {
  const [values, setValues] = useState<EnquiryValues>({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    service: defaultService,
    budget: "",
    contactMethod: "Email",
    description: "",
  });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<EnquiryStatus>("idle");

  const setField = (field: EnquiryField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("idle");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: EnquiryErrors = {};

    if (!values.fullName.trim()) nextErrors.fullName = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.service) nextErrors.service = "Please choose a service.";
    if (!values.description.trim()) {
      nextErrors.description = "Please describe your project.";
    }
    if (
      values.contactMethod !== "Email" &&
      !values.phone.trim()
    ) {
      nextErrors.phone = "Please enter a phone number for your chosen contact method.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }
    setStatus("not-configured");
  };

  return { values, errors, status, setField, handleSubmit, setStatus };
}
