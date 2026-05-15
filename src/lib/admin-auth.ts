// Shared admin token verification
const validTokens = new Set<string>();

export function addToken(token: string) {
  validTokens.add(token);
  if (validTokens.size > 20) {
    const tokens = Array.from(validTokens);
    tokens.slice(0, 10).forEach((t) => validTokens.delete(t));
  }
}

export function verifyToken(token: string): boolean {
  return validTokens.has(token);
}

export function removeToken(token: string) {
  validTokens.delete(token);
}
