"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/data/services";

export interface EnquiryValues {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  service: string;
  description: string;
}

type EnquiryField = keyof EnquiryValues;
type EnquiryErrors = Partial<Record<EnquiryField, string>>;
export type EnquiryStatus =
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
    `Phone: ${values.phone}`,
    `Email: ${values.email}`,
    `Service: ${serviceLabel(values.service)}`,
    packageName && `Package: ${packageName}`,
    `Project details: ${values.description}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export function useEnquiryForm(
  defaultService: string,
  packageName?: string,
) {
  const [values, setValues] = useState<EnquiryValues>({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    service: defaultService,
    description: "",
  });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<EnquiryStatus>("idle");

  const setField = (field: EnquiryField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "idle" && status !== "submitting") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: EnquiryErrors = {};

    if (!values.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }
    if (!values.phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    } else if (values.phone.replace(/[^0-9]/g, "").length < 9) {
      nextErrors.phone = "Please enter a valid phone number (e.g. 0712 345 678).";
    }
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.service) {
      nextErrors.service = "Please choose a service.";
    }
    if (!values.description.trim()) {
      nextErrors.description = "Please describe your project.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          packageName,
          serviceLabel: serviceLabel(values.service),
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setStatus("success");
      } else if (response.status === 503 || result?.unconfigured) {
        setStatus("not-configured");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Failed to submit enquiry form:", err);
      setStatus("error");
    }
  };

  return { values, errors, status, setField, handleSubmit, setStatus };
}
