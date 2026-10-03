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
  Upload, 
} from "lucide-react"; 
 
const FILE_SIZE_UNITS = { 
  KB: 1024, 
  MB: 1024 ** 2, 
  GB: 1024 ** 3, 
  TB: 1024 ** 4, 
} as const; 
 
const SPEED_UNITS = { 
  Kbps: 1000, 
  Mbps: 1000 ** 2, 
  Gbps: 1000 ** 3, 
  "KB/s": 1024, 
  "MB/s": 1024 ** 2, 
  "GB/s": 1024 ** 3, 
} as const; 
 
type FileSizeUnit = keyof typeof FILE_SIZE_UNITS; 
type SpeedUnit = keyof typeof SPEED_UNITS; 
 
function calculateDownloadSeconds( 
  fileSize: number, 
  fileSizeUnit: FileSizeUnit, 
  speed: number, 
  speedUnit: SpeedUnit, 
) { 
  const fileSizeBytes = fileSize * FILE_SIZE_UNITS[fileSizeUnit]; 
 
  let speedBytesPerSecond = speed * SPEED_UNITS[speedUnit]; 
 
  if ( 
    speedUnit === "Kbps" || 
    speedUnit === "Mbps" || 
    speedUnit === "Gbps" 
  ) { 
    speedBytesPerSecond = speedBytesPerSecond / 8; 
  } 
 
  if ( 
    !Number.isFinite(fileSizeBytes) || 
    !Number.isFinite(speedBytesPerSecond) || 
    fileSizeBytes <= 0 || 
    speedBytesPerSecond <= 0 
  ) { 
    return null; 
  } 
 
  return fileSizeBytes / speedBytesPerSecond; 
} 
 
function formatDownloadTime(totalSeconds: number | null) { 
  if (totalSeconds === null) { 
    return "Enter valid values to calculate."; 
  } 
 
  const roundedSeconds = Math.max(0, Math.round(totalSeconds)); 
 
  const days = Math.floor(roundedSeconds / 86400); 
  const hours = Math.floor((roundedSeconds % 86400) / 3600); 
  const minutes = Math.floor((roundedSeconds % 3600) / 60); 
  const seconds = roundedSeconds % 60; 
 
  const parts: string[] = []; 
 
  if (days > 0) { 
    parts.push(`${days} day${days !== 1 ? "s" : ""}`); 
  } 
 
  if (hours > 0) { 
    parts.push(`${hours} hour${hours !== 1 ? "s" : ""}`); 
  } 
 
  if (minutes > 0) { 
    parts.push(`${minutes} minute${minutes !== 1 ? "s" : ""}`); 
  } 
 
  if (seconds > 0 || parts.length === 0) { 
    parts.push(`${seconds} second${seconds !== 1 ? "s" : ""}`); 
  } 
 
  return parts.join(", "); 
} 
 
export default function DownloadTimeCalculatorPage() { 
  const [fileSize, setFileSize] = useState("10"); 
  const [fileSizeUnit, setFileSizeUnit] = 
    useState<FileSizeUnit>("GB"); 
 
  const [speed, setSpeed] = useState("100"); 
  const [speedUnit, setSpeedUnit] = 
    useState<SpeedUnit>("Mbps"); 
 
  const [result, setResult] = useState<string | null>(null); 
 
  function calculate() { 
    const seconds = calculateDownloadSeconds( 
      Number(fileSize), 
      fileSizeUnit, 
      Number(speed), 
      speedUnit, 
    ); 
 
    setResult(formatDownloadTime(seconds)); 
  } 
 
  function handleInputKeyDown( 
    event: KeyboardEvent<HTMLInputElement>, 
  ) { 
    if (event.key === "Enter") { 
      event.preventDefault(); 
      calculate(); 
    } 
  } 
 
  function scrollToCalculator() { 
    document 
      .getElementById("calculator") 
      ?.scrollIntoView({ 
        behavior: "smooth", 
        block: "start", 
      }); 
  } 
 
  return ( 
    <> 
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["WebApplication", "SoftwareApplication"],
            name: "DownloadGauge Download Time Calculator",
            url: "https://downloadgauge.com/download-time-calculator/",
            description:
              "Calculate how long a file will take to download based on its size and internet download speed.",
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

      <main className="min-h-screen overflow-x-hidden bg-white text-slate-950"> 
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
                href="/download-time-calculator/" 
                className="rounded-lg px-1 py-2 text-blue-600 transition hover:text-blue-700" 
              > 
                Download Time 
              </a> 
 
              <a 
                href="/download-speed-calculator/" 
                className="rounded-lg px-1 py-2 transition hover:text-slate-950" 
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
                  href="/download-time-calculator/" 
                  className="flex min-h-10 items-center rounded-xl bg-blue-50 px-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-100" 
                > 
                  Download Time 
                </a> 
 
                <a 
                  href="/download-speed-calculator/" 
                  className="flex min-h-10 items-center rounded-xl px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950" 
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
              <Clock3 className="h-3.5 w-3.5 shrink-0" /> 
              <span>Free download time calculator</span> 
            </div> 
 
            <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"> 
              How Long Will Your Download Take? 
            </h1> 
 
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-lg sm:leading-7"> 
              Estimate how long it will take to download a file based on its 
              size and your internet download speed. 
            </p> 
 
            <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-slate-500 sm:mt-3 sm:text-sm sm:leading-6"> 
              Useful for games, videos, software, backups, and other large 
              downloads. Free to use with no sign-up. 
            </p> 
 
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row"> 
              <button 
                type="button" 
                onClick={scrollToCalculator} 
                onTouchEnd={scrollToCalculator} 
                className="inline-flex min-h-11 touch-manipulation items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700" 
              > 
                Calculate Download Time 
                <ArrowRight className="h-4 w-4 shrink-0" /> 
              </button> 
 
              <a 
                href="/download-speed-calculator/" 
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50" 
              > 
                Calculate Required Speed 
              </a> 
            </div> 
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
                    Download Time Calculator 
                  </h2> 
 
                  <p className="mt-1 text-sm leading-6 text-slate-500"> 
                    Enter your file size and download speed. 
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
                      }} 
                      onKeyDown={handleInputKeyDown} 
                      className="min-w-0 flex-1 border-0 bg-transparent px-3 py-3 text-base font-medium text-slate-950 outline-none sm:px-4" 
                      placeholder="10" 
                    /> 
 
                    <select 
                      value={fileSizeUnit} 
                      onChange={(event) => { 
                        setFileSizeUnit( 
                          event.target.value as FileSizeUnit, 
                        ); 
                        setResult(null); 
                      }} 
                      className="w-[72px] shrink-0 border-l border-slate-200 bg-slate-50 px-2 text-sm font-semibold text-slate-700 outline-none sm:w-auto sm:px-4" 
                      aria-label="File size unit" 
                    > 
                      <option value="KB">KB</option> 
                      <option value="MB">MB</option> 
                      <option value="GB">GB</option> 
                      <option value="TB">TB</option> 
                    </select> 
                  </div> 
                </div> 
 
                {/* Download Speed */} 
                <div className="min-w-0"> 
                  <label 
                    htmlFor="download-speed" 
                    className="block text-sm font-semibold text-slate-900" 
                  > 
                    Download speed 
                  </label> 
 
                  <div className="mt-2 flex min-w-0 w-full overflow-hidden rounded-xl border border-slate-200 bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100"> 
                    <input 
                      id="download-speed" 
                      type="number" 
                      min="0" 
                      step="any" 
                      inputMode="decimal" 
                      enterKeyHint="done" 
                      value={speed} 
                      onChange={(event) => { 
                        setSpeed(event.target.value); 
                        setResult(null); 
                      }} 
                      onKeyDown={handleInputKeyDown} 
                      className="min-w-0 flex-1 border-0 bg-transparent px-3 py-3 text-base font-medium text-slate-950 outline-none sm:px-4" 
                      placeholder="100" 
                    /> 
 
                    <select 
                      value={speedUnit} 
                      onChange={(event) => { 
                        setSpeedUnit( 
                          event.target.value as SpeedUnit, 
                        ); 
                        setResult(null); 
                      }} 
                      className="w-[82px] shrink-0 border-l border-slate-200 bg-slate-50 px-2 text-sm font-semibold text-slate-700 outline-none sm:w-auto sm:px-4" 
                      aria-label="Download speed unit" 
                    > 
                      <option value="Kbps">Kbps</option> 
                      <option value="Mbps">Mbps</option> 
                      <option value="Gbps">Gbps</option> 
                      <option value="KB/s">KB/s</option> 
                      <option value="MB/s">MB/s</option> 
                      <option value="GB/s">GB/s</option> 
                    </select> 
                  </div> 
                </div> 
              </div> 
 
              <button 
                type="button" 
                onClick={calculate} 
                onTouchEnd={calculate} 
                className="mt-5 flex min-h-12 w-full touch-manipulation items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700" 
              > 
                Calculate Download Time 
                <ArrowRight className="h-4 w-4 shrink-0" /> 
              </button> 
 
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
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0" /> 
                  <span>Estimated download time</span> 
                </div> 
 
                <div 
                  key={result ?? "empty"} 
                  className={`mt-2 break-words text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl ${ 
                    result !== null ? "animate-result-pop" : "" 
                  }`} 
                > 
                  {result !== null 
                    ? result 
                    : "Enter your values"} 
                </div> 
 
                {result !== null && ( 
                  <div className="mt-3 space-y-2.5"> 
                    <div className="flex items-start gap-2 text-sm leading-6 text-slate-600"> 
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-600" /> 
 
                      <span> 
                        Based on your selected file size and download speed. 
                      </span> 
                    </div> 
 
                    <p className="text-xs leading-5 text-slate-500"> 
                      This is a theoretical estimate assuming the selected 
                      download speed remains constant throughout the transfer. 
                    </p> 
 
                    <p className="text-xs leading-5 text-slate-500"> 
                      Actual download times may vary because of network 
                      congestion, Wi-Fi conditions, server limits, and other 
                      factors. 
                    </p> 
                  </div> 
                )} 
              </div> 
            </div> 
          </div> 
        </section> 
 
        {/* How It Works */} 
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
                Estimate your download time 
              </h2> 
 
              <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3 sm:text-base sm:leading-7"> 
                The calculator uses your file size and download speed to estimate 
                how long the transfer should take. 
              </p> 
            </div> 
 
            <div className="mt-6 grid gap-3 sm:mt-8 md:grid-cols-3 md:gap-5"> 
              <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"> 
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600"> 
                  <Upload className="h-5 w-5" /> 
                </div> 
 
                <h3 className="mt-3.5 text-lg font-bold leading-7 text-slate-950"> 
                  Enter your file size 
                </h3> 
 
                <p className="mt-2 text-sm leading-6 text-slate-600"> 
                  Choose the size of the file you want to download. Common file 
                  sizes include MB, GB, and TB. 
                </p> 
              </article> 
 
              <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"> 
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600"> 
                  <Gauge className="h-5 w-5" /> 
                </div> 
 
                <h3 className="mt-3.5 text-lg font-bold leading-7 text-slate-950"> 
                  Enter your download speed 
                </h3> 
 
                <p className="mt-2 text-sm leading-6 text-slate-600"> 
                  Add your internet download speed in Kbps, Mbps, Gbps, or a 
                  compatible byte-per-second unit. 
                </p> 
              </article> 
 
              <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"> 
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600"> 
                  <Clock3 className="h-5 w-5" /> 
                </div> 
 
                <h3 className="mt-3.5 text-lg font-bold leading-7 text-slate-950"> 
                  Get your estimated time 
                </h3> 
 
                <p className="mt-2 text-sm leading-6 text-slate-600"> 
                  The result shows the estimated time required to complete the 
                  download at the selected speed. 
                </p> 
              </article> 
            </div> 
 
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:mt-8 sm:p-6"> 
              <div 
                aria-label="Download time formula" 
                className="overflow-x-auto rounded-xl bg-white px-3 py-4 text-center font-mono text-sm font-semibold leading-6 text-slate-900 sm:px-5 sm:py-5" 
              > 
                Download Time = File Size ÷ Download Speed 
              </div> 
 
              <div className="mt-4 space-y-2.5 text-sm leading-6 text-slate-600 sm:mt-5"> 
                <p> 
                  <strong className="text-slate-900">File size</strong> represents 
                  the amount of data that needs to be transferred. 
                </p> 
 
                <p> 
                  <strong className="text-slate-900"> 
                    Download speed 
                  </strong>{" "} 
                  represents how quickly your connection can transfer that data. 
                </p> 
 
                <p> 
                  The calculator converts the selected units before calculating 
                  the result. The estimate assumes the selected connection speed 
                  remains constant during the download. 
                </p> 
              </div> 
            </div> 
          </div> 
        </section> 
 
        {/* Examples */} 
        <section 
          id="download-examples" 
          aria-labelledby="download-examples-heading" 
          className="border-t border-slate-100 bg-slate-50/70" 
        > 
          <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-20"> 
            <div className="mx-auto max-w-2xl text-center"> 
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 sm:text-sm"> 
                Example file sizes 
              </p> 
 
              <h2 
                id="download-examples-heading" 
                className="mt-1.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-2 sm:text-3xl" 
              > 
                Common download sizes 
              </h2> 
 
              <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3 sm:text-base sm:leading-7"> 
                These examples show how file size affects download time when 
                your connection speed stays the same. 
              </p> 
            </div> 
 
            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4"> 
              {[ 
                { 
                  size: "1 GB", 
                  description: 
                    "A smaller download such as a large app, video, or software package.", 
                }, 
                { 
                  size: "10 GB", 
                  description: 
                    "A common size for large games, software, or media.", 
                }, 
                { 
                  size: "50 GB", 
                  description: 
                    "A large download that can take significant time on slower connections.", 
                }, 
                { 
                  size: "100 GB", 
                  description: 
                    "A very large download where connection speed makes a major difference.", 
                }, 
              ].map((example) => ( 
                <article 
                  key={example.size} 
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5" 
                > 
                  <p className="text-xl font-bold tracking-tight text-slate-950"> 
                    {example.size} 
                  </p> 
 
                  <p className="mt-2 text-sm leading-6 text-slate-500"> 
                    {example.description} 
                  </p> 
                </article> 
              ))} 
            </div> 
          </div> 
        </section> 
 
        {/* Practical Guidance */} 
        <section 
          id="download-time-guide" 
          aria-labelledby="download-time-guide-heading" 
        > 
          <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-20"> 
            <div className="mx-auto max-w-3xl"> 
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 sm:text-sm"> 
                Download time guide 
              </p> 
 
              <h2 
                id="download-time-guide-heading" 
                className="mt-1.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:mt-2 sm:text-3xl" 
              > 
                What affects actual download time? 
              </h2> 
 
              <div className="mt-4 space-y-4 text-sm leading-6 text-slate-600 sm:mt-6 sm:text-base sm:leading-7"> 
                <p> 
                  A download time estimate depends mainly on the size of the file 
                  and the download speed available to you. Larger files take 
                  longer when the connection speed stays the same, while faster 
                  connections reduce the time required to transfer the same 
                  amount of data. 
                </p> 
 
                <p> 
                  Internet providers normally advertise connection speeds in 
                  <strong className="text-slate-900"> Mbps</strong>, meaning 
                  megabits per second. File sizes are commonly shown in 
                  <strong className="text-slate-900"> MB</strong> or 
                  <strong className="text-slate-900"> GB</strong>. Because a 
                  byte contains eight bits, these measurements are not directly 
                  interchangeable. 
                </p> 
 
                <p> 
                  Real downloads can take longer than a theoretical calculation. 
                  Wi-Fi conditions, network congestion, server capacity, 
                  protocol overhead, and other network conditions can all affect 
                  the actual transfer speed. 
                </p> 
 
                <p> 
                  For a more realistic estimate, treat the calculator result as 
                  a theoretical baseline rather than a guaranteed completion 
                  time. 
                </p> 
              </div> 
            </div> 
          </div> 
        </section> 
 
        {/* Related Tool */} 
        <section className="border-t border-slate-100 bg-slate-50/70"> 
          <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-14 lg:px-8 lg:py-16"> 
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"> 
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 sm:text-sm"> 
                More download tools 
              </p> 
 
              <h2 className="mt-1.5 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl"> 
                Need to calculate the required speed? 
              </h2> 
 
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600"> 
                If you know how quickly you want a file to download and want to 
                find out what internet speed you need, use the Download Speed 
                Calculator. 
              </p> 
 
              <a 
                href="/download-speed-calculator/" 
                className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700" 
              > 
                Open Download Speed Calculator 
                <ArrowRight className="h-4 w-4" /> 
              </a> 
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
                    href="/download-time-calculator/" 
                    className="flex min-h-9 items-center hover:text-white" 
                  > 
                    Download Time Calculator 
                  </a> 
 
                  <a 
                    href="/download-speed-calculator/" 
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
                  <a 
                    href="#how-it-works" 
                    className="flex min-h-9 items-center hover:text-white" 
                  > 
                    How It Works 
                  </a> 
 
                  <a 
                    href="#download-time-guide" 
                    className="flex min-h-9 items-center hover:text-white" 
                  > 
                    Download Time Guide 
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
    </>
  ); 
}