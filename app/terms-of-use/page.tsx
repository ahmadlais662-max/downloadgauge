import Link from "next/link";
import { FileText, Menu } from "lucide-react";

export const metadata = {
  title: "Terms of Use",
  description:
    "Read the Terms of Use for DownloadGauge, including calculator use, estimates, website content, advertising, and limitations of liability.",
  alternates: {
    canonical: "/terms-of-use",
  },
  openGraph: {
    title: "Terms of Use | DownloadGauge",
    description:
      "Read the Terms of Use for DownloadGauge, including calculator use, estimates, website content, advertising, and limitations of liability.",
    url: "https://downloadgauge.com/terms-of-use/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use | DownloadGauge",
    description:
      "Read the Terms of Use for DownloadGauge, including calculator use, estimates, website content, advertising, and limitations of liability.",
  },
};

export default function TermsOfUsePage() {
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
              href="/download-time-calculator"
              className="rounded-lg px-1 py-2 transition hover:text-slate-950"
            >
              Download Time
            </Link>

            <Link
              href="/download-speed-calculator"
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
                href="/download-time-calculator"
                className="flex min-h-10 items-center rounded-xl px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
              >
                Download Time
              </Link>

              <Link
                href="/download-speed-calculator"
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
            <FileText className="h-3.5 w-3.5 shrink-0" />
            <span>Terms of Use</span>
          </div>

          <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Terms for using DownloadGauge
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-lg sm:leading-7">
            These Terms of Use explain the rules and conditions that apply when
            you use DownloadGauge and its calculators.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-9 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl space-y-8 text-sm leading-6 text-slate-600 sm:space-y-10 sm:text-base sm:leading-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 sm:text-sm">
                1. Acceptance of these terms
              </p>

              <h2 className="mt-1.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-2 sm:text-3xl">
                Using the website
              </h2>

              <p className="mt-4">
                By accessing or using DownloadGauge, you agree to these Terms
                of Use. If you do not agree with these terms, please do not use
                the website.
              </p>

              <p className="mt-4">
                DownloadGauge may update these terms from time to time. Your
                continued use of the website after an update means that you
                accept the revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                2. About DownloadGauge
              </h2>

              <p className="mt-3">
                DownloadGauge is a free online website providing tools for
                estimating download times, required download speeds, and other
                related calculations.
              </p>

              <p className="mt-4">
                The website and its calculators are provided for general
                informational and planning purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                3. Calculator results
              </h2>

              <p className="mt-3">
                Results produced by DownloadGauge calculators are estimates
                based on the values entered by the user and the calculation
                methods used by the website.
              </p>

              <p className="mt-4">
                Actual download or transfer performance may differ from
                calculated results because real-world conditions can include
                network congestion, server performance, Wi-Fi conditions,
                protocol overhead, hardware limitations, and other factors.
              </p>

              <p className="mt-4">
                You are responsible for deciding how to use calculator results
                and whether they are suitable for your particular situation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                4. Acceptable use
              </h2>

              <p className="mt-3">
                You agree to use DownloadGauge only for lawful purposes and in
                a way that does not interfere with the operation, security, or
                availability of the website.
              </p>

              <p className="mt-4">
                You must not attempt to gain unauthorized access to the
                website, its systems, or infrastructure, or intentionally
                interfere with the website or its services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                5. Website content
              </h2>

              <p className="mt-3">
                Unless otherwise stated, the content, design, text, graphics,
                branding, and other materials provided on DownloadGauge are
                owned by or used by the site operator with appropriate rights.
              </p>

              <p className="mt-4">
                You may access and use the website for personal or ordinary
                informational purposes. You may not reproduce, republish,
                modify, distribute, or commercially exploit substantial parts
                of the website without appropriate permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                6. Availability of the website
              </h2>

              <p className="mt-3">
                DownloadGauge is provided on an as-available basis. We may
                modify, suspend, restrict, or discontinue any part of the
                website or its features when necessary.
              </p>

              <p className="mt-4">
                We do not guarantee that the website will always be available,
                uninterrupted, error-free, or compatible with every device or
                browser.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                7. Third-party services and links
              </h2>

              <p className="mt-3">
                DownloadGauge may use third-party services such as hosting,
                analytics, advertising, security, or other technical services.
              </p>

              <p className="mt-4">
                The website may also contain links to third-party websites.
                Third-party websites and services are operated independently
                and may have their own terms and privacy policies.
              </p>

              <p className="mt-4">
                DownloadGauge is not responsible for the content, availability,
                policies, or practices of third-party websites and services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                8. Advertising
              </h2>

              <p className="mt-3">
                DownloadGauge may display advertising to support the operation
                and maintenance of the website.
              </p>

              <p className="mt-4">
                Advertisements may be provided by independent third-party
                advertising services. DownloadGauge does not necessarily
                endorse every product, service, or claim presented through
                third-party advertising.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                9. Disclaimer of warranties
              </h2>

              <p className="mt-3">
                DownloadGauge and its calculators are provided for general
                informational purposes. To the extent permitted by applicable
                law, we make no warranties or guarantees regarding the
                accuracy, completeness, reliability, availability, or
                suitability of the website or its results for a particular
                purpose.
              </p>

              <p className="mt-4">
                Calculator results should not be treated as guaranteed
                representations of actual network or download performance.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                10. Limitation of liability
              </h2>

              <p className="mt-3">
                To the extent permitted by applicable law, DownloadGauge and
                its operator will not be responsible for losses, damages, or
                other consequences arising from your use of, or reliance on,
                the website, its calculators, its content, or third-party
                services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                11. Changes to the website
              </h2>

              <p className="mt-3">
                DownloadGauge may add, remove, modify, or update calculators,
                content, features, or other parts of the website at any time.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                12. Contact
              </h2>

              <p className="mt-3">
                If you have questions about these Terms of Use, you can contact
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
                  href="/download-time-calculator"
                  className="flex min-h-9 items-center hover:text-white"
                >
                  Download Time Calculator
                </Link>

                <Link
                  href="/download-speed-calculator"
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