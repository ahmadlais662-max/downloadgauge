import Link from "next/link";
import { Menu, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Disclaimer",
  description:
    "Read the DownloadGauge disclaimer about calculator estimates, accuracy, third-party services, advertising, and use of information provided on the website.",
  alternates: {
    canonical: "/disclaimer/",
  },
  openGraph: {
    title: "Disclaimer | DownloadGauge",
    description:
      "Read the DownloadGauge disclaimer about calculator estimates, accuracy, third-party services, advertising, and use of information provided on the website.",
    url: "https://downloadgauge.com/disclaimer/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | DownloadGauge",
    description:
      "Read the DownloadGauge disclaimer about calculator estimates, accuracy, third-party services, advertising, and use of information provided on the website.",
  },
};

export default function DisclaimerPage() {
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
            <span>Disclaimer</span>
          </div>

          <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Important information about our calculators
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-lg sm:leading-7">
            This Disclaimer explains the limitations of the information and
            calculations provided by DownloadGauge.
          </p>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-9 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl space-y-8 text-sm leading-6 text-slate-600 sm:space-y-10 sm:text-base sm:leading-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 sm:text-sm">
                1. General information
              </p>

              <h2 className="mt-1.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-2 sm:text-3xl">
                About this Disclaimer
              </h2>

              <p className="mt-4">
                DownloadGauge provides free online calculators and general
                information related to download times, download speeds, and
                file transfers. The information provided on this website is
                intended for general informational and planning purposes only.
              </p>

              <p className="mt-4">
                By using DownloadGauge, you acknowledge the limitations
                described in this Disclaimer.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                2. Calculator results are estimates
              </h2>

              <p className="mt-3">
                DownloadGauge calculators provide estimates based on the values
                entered by the user. The calculated result may not exactly match
                the actual time required to download or transfer a file.
              </p>

              <p className="mt-4">
                Actual performance can vary because of factors such as network
                congestion, Wi-Fi conditions, server performance, internet
                service provider limitations, connection quality, protocol
                overhead, and other technical conditions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                3. Accuracy of information
              </h2>

              <p className="mt-3">
                We make reasonable efforts to provide useful and accurate
                calculations and information. However, DownloadGauge does not
                guarantee that all information, calculations, or results will
                always be complete, current, or error-free.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                4. No professional advice
              </h2>

              <p className="mt-3">
                Information provided by DownloadGauge is not professional
                technical, legal, financial, or other professional advice.
                Where specialized advice is required, you should consult an
                appropriately qualified professional.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                5. Third-party services and advertisements
              </h2>

              <p className="mt-3">
                DownloadGauge may use third-party services, including hosting,
                analytics, advertising, security, and other website services.
                These services may operate under their own terms and privacy
                policies.
              </p>

              <p className="mt-4">
                DownloadGauge does not guarantee the accuracy, availability,
                quality, or suitability of third-party websites, services,
                products, or advertisements that may appear on or be linked
                from the website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                6. Use of calculator results
              </h2>

              <p className="mt-3">
                You are responsible for how you use the information and
                calculator results provided by DownloadGauge. Before relying on
                a calculation for an important decision, you should consider
                the conditions that may affect actual results and verify
                information where appropriate.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                7. Website availability
              </h2>

              <p className="mt-3">
                DownloadGauge does not guarantee that the website or its
                calculators will always be available, uninterrupted, secure, or
                free from errors. Features may occasionally be unavailable due
                to maintenance, technical issues, updates, or circumstances
                beyond our control.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                8. Changes to this Disclaimer
              </h2>

              <p className="mt-3">
                This Disclaimer may be updated from time to time to reflect
                changes to DownloadGauge, its services, or applicable
                requirements. When changes are made, the updated version will
                be published on this page.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                9. Contact
              </h2>

              <p className="mt-3">
                If you have questions about this Disclaimer, you can contact
                the site operator through the Contact page.
              </p>

              <p className="mt-4">
                <Link
                  href="/contact/"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Contact DownloadGauge
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