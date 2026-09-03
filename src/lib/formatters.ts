const inrFormatter = new Intl.NumberFormat("en-IN", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const inrWholeFormatter = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 0,
});

const pctFormatter = new Intl.NumberFormat("en-IN", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

/**
 * Formats a number into Indian Rupee currency (e.g. ₹10,000.00)
 */
export function formatINR(amount: number): string {
  return `\u20b9${inrFormatter.format(amount)}`;
}

/**
 * Formats a number into Indian Rupee whole currency (e.g. ₹10,000)
 */
export function formatINRWhole(amount: number): string {
  return `\u20b9${inrWholeFormatter.format(amount)}`;
}

/**
 * Formats a percentage value (e.g. 91.2%)
 */
export function formatPct(val: number): string {
  return `${pctFormatter.format(val)}%`;
}
