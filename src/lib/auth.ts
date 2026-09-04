/**
 * DezinersKnot Server-Side Authentication & Session Verification Helper
 * Built with standard Web Crypto API for Edge & Node.js runtime compatibility.
 */

export const SESSION_COOKIE_NAME = 'dk_session_vault';
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days in seconds

const DEFAULT_SECRET = 'dk_default_secret_vault_key_2026';

function getSecretKey(): string {
  return process.env.AUTH_SECRET_KEY || DEFAULT_SECRET;
}

function getExpectedPasscode(): string {
  return process.env.APP_ACCESS_PASSCODE || 'Welcome@Av7';
}

/**
 * Generate a cryptographically signed session token: `<timestamp>.<hmac-signature>`
 */
export async function createSessionToken(): Promise<string> {
  const timestamp = Date.now().toString();
  const signature = await generateSignature(timestamp, getSecretKey());
  return `${timestamp}.${signature}`;
}

/**
 * Verify if a session token is authentic and not expired (7 days)
 */
export async function verifySessionToken(token: string | undefined | null): Promise<boolean> {
  if (!token || typeof token !== 'string') return false;

  const parts = token.split('.');
  if (parts.length !== 2) return false;

  const [timestampStr, providedSignature] = parts;
  const timestamp = parseInt(timestampStr, 10);

  if (isNaN(timestamp)) return false;

  // Check expiration (7 days)
  const ageMs = Date.now() - timestamp;
  if (ageMs < 0 || ageMs > SESSION_MAX_AGE * 1000) {
    return false;
  }

  // Verify HMAC signature
  const expectedSignature = await generateSignature(timestampStr, getSecretKey());
  return constantTimeCompare(providedSignature, expectedSignature);
}

/**
 * Verifies if user input passcode matches the server environment passcode
 */
export function verifyPasscode(input: string): boolean {
  if (!input || typeof input !== 'string') return false;
  const expected = getExpectedPasscode();
  return constantTimeCompare(input.trim(), expected.trim());
}

/**
 * Helper: Generate HMAC-SHA256 signature using Web Crypto API
 */
async function generateSignature(data: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(secret);
  const msgData = encoder.encode(data);

  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signatureBuffer = await crypto.subtle.sign('HMAC', cryptoKey, msgData);
  const signatureArray = Array.from(new Uint8Array(signatureBuffer));
  return signatureArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Helper: Constant-time comparison to prevent timing attacks
 */
function constantTimeCompare(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}
