import { Suspense } from "react";
import ContactPageClient from "@/components/ContactPageClient";

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="container-site py-24 text-center text-muted">
          Loading contact form…
        </div>
      }
    >
      <ContactPageClient />
    </Suspense>
  );
}
