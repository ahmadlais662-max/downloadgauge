import Link from "next/link";
import { Menu, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Contact",
  description:
    "Contact DownloadGauge for questions, feedback, website issues, or other inquiries about our download and transfer calculators.",
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    title: "Contact | DownloadGauge",
    description:
      "Contact DownloadGauge for questions, feedback, website issues, or other inquiries about our download and transfer calculators.",
    url: "https://downloadgauge.com/contact/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | DownloadGauge",
    description:
      "Contact DownloadGauge for questions, feedback, website issues, or other inquiries about our download and transfer calculators.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950">
      {/* Header */}
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex min-h-14 max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:min-h-16 sm:px-6 sm:py-3 lg:px-8">
          <Link
            href="/"
            className="flex min-w-0 shrink items-center gap-2 text-base font-bold tracking-tight sm:text-lg"
            aria-label="DownloadGauge home"
          >
            <span className="speedometer-icon shrink-0 text-blue-600">
              <span className="speedometer-needle" />
            </span>

            <span className="truncate">DownloadGauge</span>
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-5 text-sm font-medium text-slate-600 sm:flex"
          >
            <Link
              href="/"
              className="rounded-lg px-1 py-2 transition hover:text-slate-950"
            >
              Home
            </Link>

            <Link
              href="/download-time-calculator/"
              className="rounded-lg px-1 py-2 transition hover:text-slate-950"
            >
              Download Time
            </Link>

            <Link
              href="/download-speed-calculator/"
              className="rounded-lg px-1 py-2 transition hover:text-slate-950"
            >
              Download Speed
            </Link>
          </nav>

          {/* Mobile navigation */}
          <details className="relative shrink-0 sm:hidden">
            <summary
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 [&::-webkit-details-marker]:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </summary>

            <div className="absolute right-0 top-12 z-50 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
              <Link
                href="/"
                className="flex min-h-10 items-center rounded-xl px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
              >
                Home
              </Link>

              <Link
                href="/download-time-calculator/"
                className="flex min-h-10 items-center rounded-xl px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
              >
                Download Time
              </Link>

              <Link
                href="/download-speed-calculator/"
                className="flex min-h-10 items-center rounded-xl px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
              >
                Download Speed
              </Link>
            </div>
          </details>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-4 pb-9 pt-8 text-center sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
          <div className="mx-auto mb-3 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold leading-5 text-blue-700 sm:mb-5">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
            <span>Contact</span>
          </div>

          <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Contact DownloadGauge
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-lg sm:leading-7">
            Have a question, found an issue, or want to share feedback about
            DownloadGauge? We would be happy to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-9 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl space-y-8 text-sm leading-6 text-slate-600 sm:space-y-10 sm:text-base sm:leading-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 sm:text-sm">
                1. Questions and feedback
              </p>

              <h2 className="mt-1.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-2 sm:text-3xl">
                We&apos;d like to hear from you
              </h2>
            
            
            <p className="mt-4">
  If you have a question about DownloadGauge, feedback about our
  calculators, or a suggestion that could help improve the
  website, you can contact us at{" "}
  <a
    href="mailto:contact@downloadgauge.com"
    className="font-semibold text-blue-600 hover:text-blue-700"
  >
    contact@downloadgauge.com
  </a>
  .
</p>

             
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                2. Website issues
              </h2>

              <p className="mt-3">
                If you experience a problem with one of the calculators, please
                describe the issue as clearly as possible. Including the
                calculator you were using, the values you entered, and what
                happened can help us understand the problem.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                3. Calculator questions
              </h2>

              <p className="mt-3">
                DownloadGauge provides free tools for estimating download times
                and required download speeds. If you have questions about how
                these calculations work, you can also visit the relevant
                calculator or guide.
              </p>

              <p className="mt-4">
                <Link
                  href="/download-time-calculator/"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Download Time Calculator
                </Link>
              </p>

              <p className="mt-2">
                <Link
                  href="/download-speed-calculator/"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Download Speed Calculator
                </Link>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                4. General inquiries
              </h2>

              <p className="mt-3">
                For general questions, suggestions, or other inquiries related
                to DownloadGauge, please contact the site operator using the
                contact method provided for the website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                5. Before contacting us
              </h2>

              <p className="mt-3">
                You may also find useful information in our Privacy Policy,
                Terms of Use, Disclaimer, and calculator guides.
              </p>

              <p className="mt-4">
                <Link
                  href="/privacy-policy/"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Privacy Policy
                </Link>
              </p>

              <p className="mt-2">
                <Link
                  href="/terms-of-use/"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Terms of Use
                </Link>
              </p>

              <p className="mt-2">
                <Link
                  href="/disclaimer/"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Disclaimer
                </Link>
              </p>
            </div>

            <div className="border-t border-slate-200 pt-6 text-xs leading-5 text-slate-500">
              <p>Last updated: October 3, 2026.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-7 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-lg font-bold"
                aria-label="DownloadGauge home"
              >
                <span className="speedometer-icon shrink-0 text-blue-400">
                  <span className="speedometer-needle" />
                </span>

                DownloadGauge
              </Link>

              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                Simple, reliable tools for download time and internet speed
                calculations.
              </p>

              <p className="mt-3 text-xs leading-5 text-slate-500">
                Created, operated and maintained by Muhammad Ahmad.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Tools</h3>

              <div className="mt-2 space-y-0.5 text-sm text-slate-400">
                <Link
                  href="/download-time-calculator/"
                  className="flex min-h-9 items-center hover:text-white"
                >
                  Download Time Calculator
                </Link>

                <Link
                  href="/download-speed-calculator/"
                  className="flex min-h-9 items-center hover:text-white"
                >
                  Download Speed Calculator
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Coming soon</h3>

              <div className="mt-2 space-y-0.5 text-sm text-slate-600">
                <span className="flex min-h-9 items-center">
                  Upload Time Calculator
                </span>

                <span className="flex min-h-9 items-center">
                  File Transfer Calculator
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2.5 border-t border-slate-800 pt-4 text-xs text-slate-500 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
            <p>© 2026 DownloadGauge</p>

            <p>
              DownloadGauge is a free calculation tool. Results are estimates
              based on the values entered.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}