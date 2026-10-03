import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  Clock3,
  Gauge,
  Menu,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "About DownloadGauge",
  description:
    "Learn about DownloadGauge, its download time and download speed calculators, how calculations work, and who operates the site.",
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    title: "About DownloadGauge | DownloadGauge",
    description:
      "Learn about DownloadGauge, its calculators, how calculations work, and who operates the site.",
    url: "https://downloadgauge.com/about/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About DownloadGauge | DownloadGauge",
    description:
      "Learn about DownloadGauge, its calculators, how calculations work, and who operates the site.",
  },
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DownloadGauge",
  url: "https://downloadgauge.com/",
  description:
    "DownloadGauge provides free online download time and download speed calculators.",
  founder: {
    "@type": "Person",
    name: "Muhammad Ahmad",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />

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
              <span>About DownloadGauge</span>
            </div>

            <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Simple tools for download planning
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-lg sm:leading-7">
              DownloadGauge provides simple, free calculators that help you
              understand download times and the internet speed required for a
              specific download.
            </p>
          </div>
        </section>

        {/* About DownloadGauge */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-9 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 sm:text-sm">
                What is DownloadGauge?
              </p>

              <h2 className="mt-1.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-2 sm:text-3xl">
                Practical download and transfer calculations
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-6 text-slate-600 sm:mt-6 sm:text-base sm:leading-7">
                <p>
                  DownloadGauge is a free online calculator website focused on
                  download time and internet speed calculations.
                </p>

                <p>
                  The goal is simple: make common download-related calculations
                  quick to understand without requiring an account,
                  subscription, or complicated setup.
                </p>

                <p>
                  The calculators are designed for everyday situations such as
                  estimating how long a game, video, software package, backup,
                  or other large file may take to download.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="bg-slate-50/70">
          <div className="mx-auto max-w-6xl px-4 py-9 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 sm:text-sm">
                Our calculators
              </p>

              <h2 className="mt-1.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-2 sm:text-3xl">
                Two simple ways to calculate
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3 sm:text-base sm:leading-7">
                Choose the calculator that matches the information you already
                know.
              </p>
            </div>

            <div className="mt-5 grid gap-3 md:mt-10 md:grid-cols-2 md:gap-5">
              <Link
                href="/download-time-calculator/"
                className="card-interactive group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:h-11 sm:w-11">
                  <Clock3 className="h-5 w-5" />
                </div>

                <h3 className="mt-3.5 text-lg font-bold leading-7 text-slate-950 sm:mt-5 sm:text-xl">
                  Download Time Calculator
                </h3>

                <p className="mt-1.5 text-sm leading-6 text-slate-600">
                  Enter a file size and download speed to estimate how long the
                  download will take.
                </p>

                <span className="mt-3 inline-flex min-h-9 items-center gap-2 text-sm font-semibold text-blue-600 sm:mt-5">
                  Calculate download time
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/download-speed-calculator/"
                className="card-interactive group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:h-11 sm:w-11">
                  <Gauge className="h-5 w-5" />
                </div>

                <h3 className="mt-3.5 text-lg font-bold leading-7 text-slate-950 sm:mt-5 sm:text-xl">
                  Download Speed Calculator
                </h3>

                <p className="mt-1.5 text-sm leading-6 text-slate-600">
                  Enter a file size and target download time to calculate the
                  theoretical internet speed required.
                </p>

                <span className="mt-3 inline-flex min-h-9 items-center gap-2 text-sm font-semibold text-blue-600 sm:mt-5">
                  Calculate required speed
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* How calculations work */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-9 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 sm:text-sm">
                How it works
              </p>

              <h2 className="mt-1.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-2 sm:text-3xl">
                Calculations happen directly in your browser
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-6 text-slate-600 sm:mt-6 sm:text-base sm:leading-7">
                <p>
                  DownloadGauge uses the file size, download speed, and target
                  time values you enter to calculate an estimate based on the
                  relationship between data size, transfer speed, and time.
                </p>

                <p>
                  The calculations are performed directly in your browser. Your
                  calculator inputs do not need to be sent to a server to
                  produce the result.
                </p>

                <p>
                  Actual download times can vary because real-world transfers
                  are affected by factors such as network conditions, server
                  performance, Wi-Fi conditions, and other sources of overhead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About the operator */}
        <section className="border-y border-slate-100 bg-slate-50/70">
          <div className="mx-auto max-w-6xl px-4 py-9 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 sm:text-sm">
                About the site
              </p>

              <h2 className="mt-1.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-2 sm:text-3xl">
                Created and maintained by Muhammad Ahmad
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-6 text-slate-600 sm:mt-6 sm:text-base sm:leading-7">
                <p>
                  DownloadGauge is created, operated, and maintained by
                  Muhammad Ahmad.
                </p>

                <p>
                  The site is built around a straightforward goal: provide
                  useful online calculation tools with clear explanations and a
                  simple user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accuracy note */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-9 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Calculator className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-slate-950 sm:text-xl">
                    Calculation estimates
                  </h2>

                  <p className="mt-1.5 text-sm leading-6 text-slate-600">
                    DownloadGauge results are estimates based on the values
                    entered. They represent theoretical transfer times or
                    speeds and may differ from actual results during a real
                    download.
                  </p>
                </div>
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
    </>
  );
}