export type FileSizeUnit = "KB" | "MB" | "GB" | "TB";

export type SpeedUnit =
  | "Kbps"
  | "Mbps"
  | "Gbps"
  | "KB/s"
  | "MB/s"
  | "GB/s";

const BYTES_IN_KB = 1_000;
const BYTES_IN_MB = 1_000_000;
const BYTES_IN_GB = 1_000_000_000;
const BYTES_IN_TB = 1_000_000_000_000;

function isPositiveFiniteNumber(value: number): boolean {
  return Number.isFinite(value) && value > 0;
}

export function fileSizeToBytes(
  value: number,
  unit: FileSizeUnit
): number {
  if (!isPositiveFiniteNumber(value)) {
    return 0;
  }

  let multiplier: number;

  switch (unit) {
    case "KB":
      multiplier = BYTES_IN_KB;
      break;

    case "MB":
      multiplier = BYTES_IN_MB;
      break;

    case "GB":
      multiplier = BYTES_IN_GB;
      break;

    case "TB":
      multiplier = BYTES_IN_TB;
      break;

    default:
      return 0;
  }

  const bytes = value * multiplier;

  return Number.isFinite(bytes) ? bytes : 0;
}

export function speedToBitsPerSecond(
  value: number,
  unit: SpeedUnit
): number {
  if (!isPositiveFiniteNumber(value)) {
    return 0;
  }

  let bitsPerSecond: number;

  switch (unit) {
    case "Kbps":
      bitsPerSecond = value * 1_000;
      break;

    case "Mbps":
      bitsPerSecond = value * 1_000_000;
      break;

    case "Gbps":
      bitsPerSecond = value * 1_000_000_000;
      break;

    case "KB/s":
      bitsPerSecond = value * 8 * BYTES_IN_KB;
      break;

    case "MB/s":
      bitsPerSecond = value * 8 * BYTES_IN_MB;
      break;

    case "GB/s":
      bitsPerSecond = value * 8 * BYTES_IN_GB;
      break;

    default:
      return 0;
  }

  return Number.isFinite(bitsPerSecond)
    ? bitsPerSecond
    : 0;
}

export function bitsPerSecondToSpeed(
  bitsPerSecond: number,
  unit: SpeedUnit
): number {
  if (!Number.isFinite(bitsPerSecond) || bitsPerSecond < 0) {
    return 0;
  }

  switch (unit) {
    case "Kbps":
      return bitsPerSecond / 1_000;

    case "Mbps":
      return bitsPerSecond / 1_000_000;

    case "Gbps":
      return bitsPerSecond / 1_000_000_000;

    case "KB/s":
      return bitsPerSecond / (8 * BYTES_IN_KB);

    case "MB/s":
      return bitsPerSecond / (8 * BYTES_IN_MB);

    case "GB/s":
      return bitsPerSecond / (8 * BYTES_IN_GB);

    default:
      return 0;
  }
}

export function calculateDownloadSeconds(
  fileSize: number,
  fileSizeUnit: FileSizeUnit,
  downloadSpeed: number,
  speedUnit: SpeedUnit
): number {
  if (
    !isPositiveFiniteNumber(fileSize) ||
    !isPositiveFiniteNumber(downloadSpeed)
  ) {
    return 0;
  }

  const fileSizeBytes = fileSizeToBytes(
    fileSize,
    fileSizeUnit
  );

  const speedBitsPerSecond = speedToBitsPerSecond(
    downloadSpeed,
    speedUnit
  );

  if (
    !isPositiveFiniteNumber(fileSizeBytes) ||
    !isPositiveFiniteNumber(speedBitsPerSecond)
  ) {
    return 0;
  }

  const fileSizeBits = fileSizeBytes * 8;

  if (!Number.isFinite(fileSizeBits)) {
    return 0;
  }

  const seconds = fileSizeBits / speedBitsPerSecond;

  return Number.isFinite(seconds) && seconds > 0
    ? seconds
    : 0;
}

export function calculateRequiredSpeed(
  fileSize: number,
  fileSizeUnit: FileSizeUnit,
  targetSeconds: number
): number {
  if (
    !isPositiveFiniteNumber(fileSize) ||
    !isPositiveFiniteNumber(targetSeconds)
  ) {
    return 0;
  }

  const fileSizeBytes = fileSizeToBytes(
    fileSize,
    fileSizeUnit
  );

  if (!isPositiveFiniteNumber(fileSizeBytes)) {
    return 0;
  }

  const fileSizeBits = fileSizeBytes * 8;

  if (!isPositiveFiniteNumber(fileSizeBits)) {
    return 0;
  }

  const bitsPerSecond = fileSizeBits / targetSeconds;

  return Number.isFinite(bitsPerSecond) &&
    bitsPerSecond > 0
    ? bitsPerSecond
    : 0;
}

export function formatNumber(
  value: number,
  maximumFractionDigits = 2
): string {
  if (!Number.isFinite(value)) {
    return "0";
  }

  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits,
  }).format(value);
}

function formatAdaptiveNumber(value: number): string {
  if (!Number.isFinite(value)) {
    return "0";
  }

  if (value >= 1) {
    return formatNumber(value, 2);
  }

  if (value >= 0.01) {
    return formatNumber(value, 3);
  }

  if (value >= 0.001) {
    return formatNumber(value, 4);
  }

  return formatNumber(value, 6);
}

export function formatSpeed(
  bitsPerSecond: number
): {
  primaryValue: string;
  primaryUnit: string;
  secondaryValue: string;
  secondaryUnit: string;
} {
  if (
    !Number.isFinite(bitsPerSecond) ||
    bitsPerSecond <= 0
  ) {
    return {
      primaryValue: "0",
      primaryUnit: "Mbps",
      secondaryValue: "0",
      secondaryUnit: "MB/s",
    };
  }

  const mbps = bitsPerSecondToSpeed(
    bitsPerSecond,
    "Mbps"
  );

  const mbPerSecond = bitsPerSecondToSpeed(
    bitsPerSecond,
    "MB/s"
  );

  if (mbps < 1) {
    const kbps = bitsPerSecondToSpeed(
      bitsPerSecond,
      "Kbps"
    );

    return {
      primaryValue: formatAdaptiveNumber(kbps),
      primaryUnit: "Kbps",
      secondaryValue: formatAdaptiveNumber(mbps),
      secondaryUnit: "Mbps",
    };
  }

  if (mbps >= 1000) {
    const gbps = bitsPerSecondToSpeed(
      bitsPerSecond,
      "Gbps"
    );

    return {
      primaryValue: formatAdaptiveNumber(gbps),
      primaryUnit: "Gbps",
      secondaryValue: formatAdaptiveNumber(mbps),
      secondaryUnit: "Mbps",
    };
  }

  return {
    primaryValue: formatAdaptiveNumber(mbps),
    primaryUnit: "Mbps",
    secondaryValue: formatAdaptiveNumber(mbPerSecond),
    secondaryUnit: "MB/s",
  };
}

export function formatDownloadTime(
  totalSeconds: number
): string {
  if (
    !Number.isFinite(totalSeconds) ||
    totalSeconds <= 0
  ) {
    return "Enter your values";
  }

  const seconds = Math.round(totalSeconds);

  const days = Math.floor(seconds / 86_400);
  const hours = Math.floor(
    (seconds % 86_400) / 3_600
  );
  const minutes = Math.floor(
    (seconds % 3_600) / 60
  );
  const remainingSeconds = seconds % 60;

  const parts: string[] = [];

  if (days > 0) {
    parts.push(
      `${days} day${days !== 1 ? "s" : ""}`
    );
  }

  if (hours > 0) {
    parts.push(
      `${hours} hour${hours !== 1 ? "s" : ""}`
    );
  }

  if (minutes > 0) {
    parts.push(
      `${minutes} minute${
        minutes !== 1 ? "s" : ""
      }`
    );
  }

  if (
    remainingSeconds > 0 ||
    parts.length === 0
  ) {
    parts.push(
      `${remainingSeconds} second${
        remainingSeconds !== 1 ? "s" : ""
      }`
    );
  }

  return parts.join(", ");
}