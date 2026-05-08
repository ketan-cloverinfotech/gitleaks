// Gitleaks POC test file.
// This is not a real secret.
// Purpose: prove that Gitleaks blocks a PR when a hardcoded secret is added.

export const API_URL = "https://api.example.com";

// Fake secret only for demo.
// Gitleaks should detect this line and fail the PR check.
export const POC_SECRET = "poc_secret_1234567890abcdef";
