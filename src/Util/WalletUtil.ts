export const getWalletContent = (walletAddress?: string | null, email?: string | null) => {
  if (!walletAddress || walletAddress === "null") {
    return email
  }

  return walletAddress.length > 0 ? (
    String(walletAddress).substring(0, 5) +
    "..." +
    String(walletAddress).substring(38)
  ) : "Connect Wallet";
};

export const getWalletProtectedContent = (walletAddress?: string | null) => {
  if (!walletAddress || walletAddress === "null") {
    return "";
  }

  return walletAddress.length > 0 ? (
    String(walletAddress).substring(0, 5) +
    "..." +
    String(walletAddress).substring(38)
  ) : "Connect Wallet";
}
