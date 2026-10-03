import Link from "next/link";
import { Menu, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how DownloadGauge handles information, calculator inputs, cookies, advertising, analytics, and privacy.",
  alternates: {
    canonical: "/privacy-policy/",
  },
  openGraph: {
    title: "Privacy Policy | DownloadGauge",
    description:
      "Learn how DownloadGauge handles information, calculator inputs, cookies, advertising, analytics, and privacy.",
    url: "https://downloadgauge.com/privacy-policy/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | DownloadGauge",
    description:
      "Learn how DownloadGauge handles information, calculator inputs, cookies, advertising, analytics, and privacy.",
  },
};

export default function PrivacyPolicyPage() {
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
            <span>Privacy Policy</span>
          </div>

          <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Your privacy matters
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-lg sm:leading-7">
            This Privacy Policy explains how DownloadGauge handles information
            when you use this website and its calculators.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-9 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl space-y-8 text-sm leading-6 text-slate-600 sm:space-y-10 sm:text-base sm:leading-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 sm:text-sm">
                1. Overview
              </p>

              <h2 className="mt-1.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-2 sm:text-3xl">
                About this Privacy Policy
              </h2>

              <p className="mt-4">
                DownloadGauge is a free website that provides online download
                time and download speed calculators. This Privacy Policy
                explains what information may be collected when you use the
                website and how that information may be used.
              </p>

              <p className="mt-4">
                By using DownloadGauge, you acknowledge the practices described
                in this Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                2. Calculator information
              </h2>

              <p className="mt-3">
                DownloadGauge calculators are designed to perform calculations
                directly in your browser. The file sizes, download speeds, and
                other values you enter into the calculators do not need to be
                sent to our servers to produce a result.
              </p>

              <p className="mt-4">
                DownloadGauge does not require an account or subscription to
                use its calculators.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                3. Information that may be collected
              </h2>

              <p className="mt-3">
                Like many websites, DownloadGauge may receive limited technical
                information through standard web technologies or third-party
                services. This may include information such as browser type,
                device type, operating system, approximate geographic region,
                pages visited, referring pages, and general usage information.
              </p>

              <p className="mt-4">
                The specific information collected depends on the services
                enabled on the website at the time you use it.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                4. Cookies and similar technologies
              </h2>

              <p className="mt-3">
                DownloadGauge may use cookies or similar technologies where
                necessary to operate the website, understand website usage,
                improve functionality, or support third-party services.
              </p>

              <p className="mt-4">
                Your browser may provide controls that allow you to manage or
                block cookies. Blocking certain cookies may affect the
                functionality of some websites or services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                5. Advertising
              </h2>

              <p className="mt-3">
                DownloadGauge may display advertising to help support the
                website and keep its calculators available for free.
              </p>

              <p className="mt-4">
                Advertising services may use cookies, identifiers, or similar
                technologies to provide, measure, or personalize advertising,
                subject to the policies and settings of the relevant
                advertising provider.
              </p>

              <p className="mt-4">
                Third-party advertising providers may have their own privacy
                policies and terms. You should review the applicable provider's
                policies for information about how those services process data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                6. Analytics
              </h2>

              <p className="mt-3">
                DownloadGauge may use analytics or similar measurement tools to
                understand how visitors use the website, identify technical
                problems, and improve the site's content and functionality.
              </p>

              <p className="mt-4">
                Any analytics service used on the website may collect technical
                and usage information according to its own privacy policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                7. Third-party services
              </h2>

              <p className="mt-3">
                DownloadGauge may use third-party services for functions such
                as hosting, analytics, advertising, security, or other website
                operations.
              </p>

              <p className="mt-4">
                These third parties may process information according to their
                own privacy policies and terms. DownloadGauge does not control
                the privacy practices of independent third-party services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                8. Data security
              </h2>

              <p className="mt-3">
                DownloadGauge takes reasonable measures to operate the website
                securely. However, no website or internet transmission can be
                guaranteed to be completely secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                9. Children&apos;s privacy
              </h2>

              <p className="mt-3">
                DownloadGauge is a general-purpose website and is not
                specifically directed toward children. We do not knowingly
                request personal information from children through the
                calculators.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                10. Changes to this Privacy Policy
              </h2>

              <p className="mt-3">
                This Privacy Policy may be updated from time to time to reflect
                changes to DownloadGauge, its services, or applicable
                requirements. When changes are made, the updated version will
                be published on this page.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                11. Contact
              </h2>

              <p className="mt-3">
                If you have questions about this Privacy Policy or how
                DownloadGauge handles information, you can contact the site
                operator through the Contact page.
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