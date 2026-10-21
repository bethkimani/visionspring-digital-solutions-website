import Link from "next/link";

export function NotFoundPage() {
  return (
    <section className="container-site py-24 text-center">
      <p className="text-sm font-semibold text-ocean">404</p>
      <h1 className="mt-3 text-4xl font-extrabold text-navy-800">
        Page not found
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-muted">
        The page you’re looking for may have moved or no longer exists.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-ocean px-6 py-3 font-semibold text-white hover:bg-ocean-dark"
      >
        Return home
      </Link>
    </section>
  );
}
