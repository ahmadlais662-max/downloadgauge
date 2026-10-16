"use client";

import { KeyboardEvent, useState } from "react";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Clock3,
  Gauge,
  Menu,
  ShieldCheck,
} from "lucide-react";

type FileSizeUnit = "MB" | "GB";
type TimeUnit = "seconds" | "minutes" | "hours";

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(value);
}

export default function DownloadSpeedCalculator() {
  const [fileSize, setFileSize] = useState("10");
  const [fileUnit, setFileUnit] = useState<FileSizeUnit>("GB");

  const [downloadTime, setDownloadTime] = useState("5");
  const [timeUnit, setTimeUnit] = useState<TimeUnit>("minutes");

  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  function calculateSpeed() {
    const size = Number(fileSize);
    const time = Number(downloadTime);

    if (
      !Number.isFinite(size) ||
      !Number.isFinite(time) ||
      size <= 0 ||
      time <= 0
    ) {
      setResult(null);
      setError("Please enter values greater than 0.");
      return;
    }

    const sizeInBytes =
      fileUnit === "GB"
        ? size * 1_000_000_000
        : size * 1_000_000;

    let timeInSeconds = time;

    if (timeUnit === "minutes") {
      timeInSeconds = time * 60;
    } else if (timeUnit === "hours") {
      timeInSeconds = time * 3600;
    }

    const mbps =
      (sizeInBytes * 8) / timeInSeconds / 1_000_000;

    if (!Number.isFinite(mbps) || mbps <= 0) {
      setResult(null);
      setError("We couldn't calculate the required speed.");
      return;
    }

    setError("");
    setResult(mbps);
  }

  function handleInputKeyDown(
    event: KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "Enter") {
      event.preventDefault();
      calculateSpeed();
    }
  }

  function applyFilePreset(
    value: string,
    unit: FileSizeUnit
  ) {
    setFileSize(value);
    setFileUnit(unit);
    setResult(null);
    setError("");
  }

  function applyTimePreset(
    value: string,
    unit: TimeUnit
  ) {
    setDownloadTime(value);
    setTimeUnit(unit);
    setResult(null);
    setError("");
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["WebApplication", "SoftwareApplication"],
            name: "DownloadGauge Download Speed Calculator",
            url: "https://downloadgauge.com/download-speed-calculator",
            description:
              "Calculate the internet download speed required to download a file within a specific amount of time.",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Web",
            isAccessibleForFree: true,
            offers: {
              "@type": "Offer",
              price: 0,
              priceCurrency: "USD",
            },
          }),
        }}
      />

      {/* Header */}
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex min-h-14 max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:min-h-16 sm:px-6 sm:py-3 lg:px-8">
          <a
            href="/"
            className="flex min-w-0 shrink items-center gap-2 text-base font-bold tracking-tight text-slate-900 sm:text-lg"
            aria-label="DownloadGauge home"
          >
            <span className="speedometer-icon shrink-0 text-blue-600">
              <span className="speedometer-needle" />
            </span>

            <span className="truncate">DownloadGauge</span>
          </a>

          {/* Desktop navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-5 text-sm font-medium text-slate-600 sm:flex"
          >
            <a
              href="/"
              className="rounded-lg px-1 py-2 transition hover:text-slate-950"
            >
              Home
            </a>

            <a
              href="/download-time-calculator"
              className="rounded-lg px-1 py-2 transition hover:text-slate-950"
            >
              Download Time
            </a>

            <a
              href="/download-speed-calculator"
              className="rounded-lg px-1 py-2 text-blue-600 transition hover:text-blue-700"
            >
              Download Speed
            </a>

            <a
              href="#how-it-works"
              className="rounded-lg px-1 py-2 transition hover:text-slate-950"
            >
              How It Works
            </a>
          </nav>

          {/* Mobile navigation */}
          <details className="relative shrink-0 sm:hidden">
            <summary
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 [&::-webkit-details-marker]:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </summary>

            <div className="absolute right-0 top-12 z-50 w-52 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
              <a
                href="/"
                className="flex min-h-10 items-center rounded-xl px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
              >
                Home
              </a>

              <a
                href="/download-time-calculator"
                className="flex min-h-10 items-center rounded-xl px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
              >
                Download Time
              </a>

              <a
                href="/download-speed-calculator"
                className="flex min-h-10 items-center rounded-xl bg-blue-50 px-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
              >
                Download Speed
              </a>

              <a
                href="#how-it-works"
                className="flex min-h-10 items-center rounded-xl px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
              >
                How It Works
              </a>
            </div>
          </details>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-4 pb-8 pt-7 text-center sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-20 lg:pt-20">
          <div className="mx-auto mb-3 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold leading-5 text-blue-700 sm:mb-5">
            <Gauge className="h-3.5 w-3.5 shrink-0" />
            <span>Free download speed calculator</span>
          </div>

          <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Calculate the Download Speed You Need
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-lg sm:leading-7">
            Enter your file size and target download time to estimate the
            internet speed required to complete the download.
          </p>

          <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-slate-500 sm:mt-3 sm:text-sm sm:leading-6">
            Free to use. No sign-up. Results calculated instantly in your
            browser.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section
        id="calculator"
        aria-labelledby="calculator-heading"
        className="bg-slate-50/70"
      >
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-7">
            <div className="mb-5 flex items-start gap-3 sm:mb-7">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:h-11 sm:w-11">
                <Calculator className="h-5 w-5" />
              </div>

              <div className="min-w-0">
                <h2
                  id="calculator-heading"
                  className="text-xl font-bold leading-7 text-slate-950 sm:text-2xl"
                >
                  Download Speed Calculator
                </h2>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Enter your file size and desired download time.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
              {/* File Size */}
              <div className="min-w-0">
                <label
                  htmlFor="file-size"
                  className="block text-sm font-semibold text-slate-900"
                >
                  File size
                </label>

                <div className="mt-2 flex min-w-0 w-full overflow-hidden rounded-xl border border-slate-200 bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                  <input
                    id="file-size"
                    type="number"
                    min="0"
                    step="any"
                    inputMode="decimal"
                    enterKeyHint="done"
                    value={fileSize}
                    onChange={(event) => {
                      setFileSize(event.target.value);
                      setResult(null);
                      setError("");
                    }}
                    onKeyDown={handleInputKeyDown}
                    className="min-w-0 flex-1 border-0 bg-transparent px-3 py-3 text-base font-medium text-slate-950 outline-none sm:px-4"
                    placeholder="10"
                  />

                  <select
                    value={fileUnit}
                    onChange={(event) => {
                      setFileUnit(
                        event.target.value as FileSizeUnit
                      );
                      setResult(null);
                      setError("");
                    }}
                    className="w-[72px] shrink-0 border-l border-slate-200 bg-slate-50 px-2 text-sm font-semibold text-slate-700 outline-none sm:w-auto sm:px-4"
                    aria-label="File size unit"
                  >
                    <option value="MB">MB</option>
                    <option value="GB">GB</option>
                  </select>
                </div>

                <div className="mt-3">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Popular file sizes
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      ["500", "MB"],
                      ["1", "GB"],
                      ["10", "GB"],
                      ["50", "GB"],
                      ["100", "GB"],
                    ].map(([value, unit]) => (
                      <button
                        key={`${value}-${unit}`}
                        type="button"
                        onClick={() =>
                          applyFilePreset(
                            value,
                            unit as FileSizeUnit
                          )
                        }
                        className="min-h-9 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                      >
                        {value} {unit}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desired Time */}
              <div className="min-w-0">
                <label
                  htmlFor="download-time"
                  className="block text-sm font-semibold text-slate-900"
                >
                  Desired download time
                </label>

                <div className="mt-2 flex min-w-0 w-full overflow-hidden rounded-xl border border-slate-200 bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                  <input
                    id="download-time"
                    type="number"
                    min="0"
                    step="any"
                    inputMode="decimal"
                    enterKeyHint="done"
                    value={downloadTime}
                    onChange={(event) => {
                      setDownloadTime(event.target.value);
                      setResult(null);
                      setError("");
                    }}
                    onKeyDown={handleInputKeyDown}
                    className="min-w-0 flex-1 border-0 bg-transparent px-3 py-3 text-base font-medium text-slate-950 outline-none sm:px-4"
                    placeholder="5"
                  />

                  <select
                    value={timeUnit}
                    onChange={(event) => {
                      setTimeUnit(
                        event.target.value as TimeUnit
                      );
                      setResult(null);
                      setError("");
                    }}
                    className="w-[94px] shrink-0 border-l border-slate-200 bg-slate-50 px-2 text-sm font-semibold text-slate-700 outline-none sm:w-auto sm:px-4"
                    aria-label="Download time unit"
                  >
                    <option value="seconds">Seconds</option>
                    <option value="minutes">Minutes</option>
                    <option value="hours">Hours</option>
                  </select>
                </div>

                <div className="mt-3">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Popular download times
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      ["30", "seconds"],
                      ["1", "minutes"],
                      ["5", "minutes"],
                      ["10", "minutes"],
                      ["1", "hours"],
                    ].map(([value, unit]) => (
                      <button
                        key={`${value}-${unit}`}
                        type="button"
                        onClick={() =>
                          applyTimePreset(
                            value,
                            unit as TimeUnit
                          )
                        }
                        className="min-h-9 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                      >
                        {value}{" "}
                        {unit === "seconds"
                          ? "sec"
                          : unit === "minutes"
                            ? "min"
                            : "hr"}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {error && (
              <div
                role="alert"
                className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-700"
              >
                {error}
              </div>
            )}

            {/* Calculate Button */}
            <button
              type="button"
              onClick={calculateSpeed}
              className="mt-5 flex min-h-12 w-full touch-manipulation items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:mt-6"
            >
              Calculate Required Speed
              <ArrowRight className="h-4 w-4 shrink-0" />
            </button>

            {/* Result */}
            <div
              aria-live="polite"
              aria-atomic="true"
              className={`mt-5 rounded-2xl border p-4 sm:mt-6 sm:p-5 ${
                result !== null
                  ? "border-blue-100 bg-blue-50"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <div className="flex items-start gap-2 text-sm font-semibold text-slate-600">
                <Gauge className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Required download speed</span>
              </div>

              <div
                key={result ?? "empty"}
                className={`mt-2 break-words text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl ${
                  result !== null ? "animate-result-pop" : ""
                }`}
              >
                {result !== null
                  ? `${formatNumber(result)} Mbps`
                  : "Enter your values"}
              </div>

              {result !== null && (
                <div className="mt-3 space-y-2.5">
                  <div className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-600" />

                    <span>
                      Approximately{" "}
                      {formatNumber(result / 8)} MB/s
                    </span>
                  </div>

                  <p className="text-xs leading-5 text-slate-500">
                    Theoretical connection speed required to transfer the
                    selected file within the selected time.
                  </p>

                  <p className="text-xs leading-5 text-slate-500">
                    Actual requirements may vary because of network overhead,
                    Wi-Fi conditions, server limits, and other factors.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Explanation */}
      <section
        id="how-it-works"
        aria-labelledby="how-it-works-heading"
      >
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 sm:text-sm">
              How it works
            </p>

            <h2
              id="how-it-works-heading"
              className="mt-1.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-2 sm:text-3xl"
            >
              The calculation is simple and transparent
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3 sm:text-base sm:leading-7">
              Required download speed is calculated from the amount of data
              you want to transfer and the time available to complete it.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:mt-8 md:grid-cols-3 md:gap-5">
            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Calculator className="h-5 w-5" />
              </div>

              <h3 className="mt-3.5 text-lg font-bold leading-7 text-slate-950">
                Enter your file size
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Choose the amount of data you need to download and select the
                appropriate unit.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Clock3 className="h-5 w-5" />
              </div>

              <h3 className="mt-3.5 text-lg font-bold leading-7 text-slate-950">
                Set your target time
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Tell the calculator how quickly you want the download to
                finish.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <h3 className="mt-3.5 text-lg font-bold leading-7 text-slate-950">
                Get your required speed
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                The result shows the theoretical internet speed required in
                Mbps and MB/s.
              </p>
            </article>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:mt-8 sm:p-6">
            <div
              aria-label="Required download speed formula"
              className="overflow-x-auto rounded-xl bg-white px-3 py-4 text-center font-mono text-sm font-semibold leading-6 text-slate-900 sm:px-5 sm:py-5"
            >
              Required Speed = File Size × 8 ÷ Download Time
            </div>

            <div className="mt-4 space-y-2.5 text-sm leading-6 text-slate-600 sm:mt-5">
              <p>
                <strong className="text-slate-900">File size</strong> is
                converted into bits.
              </p>

              <p>
                <strong className="text-slate-900">Download time</strong> is
                converted into seconds.
              </p>

             <p>
  The result gives the theoretical connection speed required to
  transfer the file within the selected time. For example, downloading
  a 10 GB file in 5 minutes requires about 267 Mbps, while downloading
  the same file in 10 minutes requires about 133 Mbps. These estimates
  assume decimal file sizes and ideal transfer conditions. Actual
  downloads may require more speed because of network overhead,
  Wi-Fi conditions, and server limits.
</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-4 py-7 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
            <div>
              <a
                href="/"
                className="inline-flex items-center gap-2 text-lg font-bold"
                aria-label="DownloadGauge home"
              >
                <span className="speedometer-icon shrink-0 text-blue-400">
                  <span className="speedometer-needle" />
                </span>

                DownloadGauge
              </a>

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
                <a
                  href="/download-time-calculator"
                  className="flex min-h-9 items-center hover:text-white"
                >
                  Download Time Calculator
                </a>

                <a
                  href="/download-speed-calculator"
                  className="flex min-h-9 items-center hover:text-white"
                >
                  Download Speed Calculator
                </a>

                <span className="flex min-h-9 items-center text-slate-600">
                  Upload Time Calculator
                </span>

                <span className="flex min-h-9 items-center text-slate-600">
                  File Transfer Calculator
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Resources</h3>

              <div className="mt-2 space-y-0.5 text-sm text-slate-400">
                <span className="flex min-h-9 items-center text-slate-600">
                  Guides
                </span>

                <a
                  href="#how-it-works"
                  className="flex min-h-9 items-center hover:text-white"
                >
                  How It Works
                </a>

                <span className="flex min-h-9 items-center text-slate-600">
                  Contact
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2.5 border-t border-slate-800 pt-4 text-xs text-slate-500 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
            <p>© 2026 DownloadGauge</p>

            <p>
              Created, operated and maintained by{" "}
              <span className="font-medium text-slate-300">
                Muhammad Ahmad
              </span>
              .
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}