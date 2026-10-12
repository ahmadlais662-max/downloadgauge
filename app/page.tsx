"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  Clock3,
  Download,
  Gauge,
  Menu,
  ShieldCheck,
  Zap,
} from "lucide-react";

const examples = [
  {
    size: "1 GB",
    description:
      "At 100 Mbps, a 1 GB file takes about 1 minute 26 seconds to download under ideal conditions.",
  },
  {
    size: "10 GB",
    description:
      "At 100 Mbps, a 10 GB file takes about 14 minutes 19 seconds to download under ideal conditions.",
  },
  {
    size: "50 GB",
    description:
      "At 100 Mbps, a 50 GB file takes about 1 hour 11 minutes 35 seconds to download under ideal conditions.",
  },
  {
    size: "100 GB",
    description:
      "At 100 Mbps, a 100 GB file takes about 2 hours 23 minutes 10 seconds to download under ideal conditions.",
  },
];

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DownloadGauge",
  url: "https://downloadgauge.com/",
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950">
      {/* Website structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "DownloadGauge",
            url: "https://downloadgauge.com/",
            description:
              "Free online download time and download speed calculators for estimating file download times and required internet speeds.",
          }),
        }}
      />

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
              className="rounded-lg px-1 py-2 text-blue-600 transition hover:text-blue-700"
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

            <Link
              href="/about/"
              className="rounded-lg px-1 py-2 transition hover:text-slate-950"
            >
              About
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
                className="flex min-h-10 items-center rounded-xl bg-blue-50 px-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
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

              <Link
                href="/about/"
                className="flex min-h-10 items-center rounded-xl px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
              >
                About
              </Link>
            </div>
          </details>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-4 pb-9 pt-8 text-center sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
          <div className="mx-auto mb-3 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold leading-5 text-blue-700 sm:mb-5">
            <Zap className="h-3.5 w-3.5 shrink-0" />
            <span>Free download time and speed calculators</span>
          </div>

          <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Download Time & Speed Calculators
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-lg sm:leading-7">
            Calculate how long a file will take to download or find the
            internet speed you need to download a file within a specific time.
            DownloadGauge provides fast, simple, and free calculations for
            everyday download planning.
          </p>

          <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-slate-500 sm:mt-3 sm:text-sm sm:leading-6">
            Calculate results instantly in your browser. No account or sign-up
            is required.
          </p>

          <div className="mx-auto mt-5 flex w-full max-w-md flex-col gap-2.5 sm:mt-8 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-3">
            <Link
              href="/download-time-calculator/"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 sm:min-h-12 sm:w-auto sm:px-5 sm:py-3.5"
            >
              <Clock3 className="h-4 w-4 shrink-0" />
              Calculate Download Time
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>

            <Link
              href="/download-speed-calculator/"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:min-h-12 sm:w-auto sm:px-5 sm:py-3.5"
            >
              <Gauge className="h-4 w-4 shrink-0" />
              Calculate Required Speed
            </Link>
          </div>
        </div>
      </section>

      {/* Primary tools */}
      <section className="bg-slate-50/70">
        <div className="mx-auto max-w-6xl px-4 py-9 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 sm:text-sm">
              Core calculators
            </p>

            <h2 className="mt-1.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-2 sm:text-3xl">
              Calculate download time or required speed
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3 sm:text-base sm:leading-7">
              Use the download time calculator when you know your internet
              speed, or use the download speed calculator when you know how
              quickly you want the file to finish.
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
                Enter a file size and download speed to calculate an estimated
                download time for a file, game, video, software package, or
                other transfer.
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
                theoretical internet speed required in Mbps and MB/s.
              </p>

              <span className="mt-3 inline-flex min-h-9 items-center gap-2 text-sm font-semibold text-blue-600 sm:mt-5">
                Calculate required speed
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Download planning */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-9 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 sm:text-sm">
              Download planning
            </p>

            <h2 className="mt-1.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-2 sm:text-3xl">
              Understand the relationship between file size, speed, and time
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3 sm:text-base sm:leading-7">
              Larger files take longer to download at the same connection
              speed. Increasing your download speed reduces the time needed to
              transfer the same amount of data.
            </p>
          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-3 md:gap-10">
            <div>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:h-10 sm:w-10">
                <Calculator className="h-5 w-5" />
              </div>

              <h3 className="mt-3 font-bold text-slate-950 sm:mt-4">
                Enter your values
              </h3>

              <p className="mt-1.5 text-sm leading-6 text-slate-600">
                Enter the file size and the relevant download speed or target
                time.
              </p>
            </div>

            <div>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:h-10 sm:w-10">
                <Zap className="h-5 w-5" />
              </div>

              <h3 className="mt-3 font-bold text-slate-950 sm:mt-4">
                Get an instant estimate
              </h3>

              <p className="mt-1.5 text-sm leading-6 text-slate-600">
                The calculation happens directly in your browser without
                requiring an account or sending your values to a server.
              </p>
            </div>

            <div>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:h-10 sm:w-10">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <h3 className="mt-3 font-bold text-slate-950 sm:mt-4">
                Understand the result
              </h3>

              <p className="mt-1.5 text-sm leading-6 text-slate-600">
                Use the estimate to plan downloads and understand how
                connection speed affects transfer time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular examples */}
      <section className="border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-6xl px-4 py-9 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 sm:text-sm">
              Common file sizes
            </p>

            <h2 className="mt-1.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-2 sm:text-3xl">
              Estimate download times for common file sizes
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-3 sm:text-base sm:leading-7">
              From small files to large games and backups, use the download
              time calculator to see how your internet speed affects the time
              needed for a transfer.
            </p>
          </div>

          <div className="mt-5 grid gap-3 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
            {examples.map((example) => (
              <article
                key={example.size}
                className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                  <Download className="h-4 w-4 shrink-0" />
                  {example.size}
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3">
                  {example.description}
                </p>

                <Link
                  href="/download-time-calculator/"
                  className="mt-2.5 inline-flex min-h-9 items-center gap-1 text-sm font-semibold text-slate-900 hover:text-blue-600 sm:mt-4"
                >
                  Calculate download time for {example.size}
                  <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Practical guidance */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-9 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 sm:text-sm">
              Download speed guide
            </p>

            <h2 className="mt-1.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-2 sm:text-3xl">
              What download speed do you need?
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-6 text-slate-600 sm:mt-6 sm:text-base sm:leading-7">
              <p>
                The internet speed you need depends on the size of the files
                you download and how quickly you want them to finish. Smaller
                files can be downloaded comfortably at lower speeds, while
                large games, high-resolution videos, software, and backups can
                take much longer without a faster connection.
              </p>

              <p>
                Internet plans commonly advertise download speeds in
                <strong className="text-slate-900"> Mbps</strong>, or megabits
                per second. File sizes are commonly shown in
                <strong className="text-slate-900"> MB</strong> and
                <strong className="text-slate-900"> GB</strong>, which measure
                megabytes and gigabytes. Since one byte contains eight bits,
                Mbps and MB/s represent different measurements.
              </p>

              <p>
                DownloadGauge provides two calculators so you can approach the
                same problem from either direction: calculate how long a file
                will take at a known speed, or calculate the speed required to
                finish a file within a target time.
              </p>

              <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
                <Link
                  href="/download-time-calculator/"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  Download Time Calculator
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/download-speed-calculator/"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Download Speed Calculator
                  <ArrowRight className="h-4 w-4" />
                </Link>
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
              <h3 className="text-sm font-semibold">Resources & Legal</h3>

              <div className="mt-2 space-y-0.5 text-sm text-slate-400">
                <Link
                  href="/about/"
                  className="flex min-h-9 items-center hover:text-white"
                >
                  About
                </Link>

                <Link
                  href="/privacy-policy/"
                  className="flex min-h-9 items-center hover:text-white"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms-of-use/"
                  className="flex min-h-9 items-center hover:text-white"
                >
                  Terms of Use
                </Link>

                <Link
                  href="/disclaimer/"
                  className="flex min-h-9 items-center hover:text-white"
                >
                  Disclaimer
                </Link>

                <Link
                  href="/contact/"
                  className="flex min-h-9 items-center hover:text-white"
                >
                  Contact
                </Link>
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