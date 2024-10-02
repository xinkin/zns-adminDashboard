import { Chain } from "@rainbow-me/rainbowkit";
export const zircuit = {
  id: 48899,
  name: "Zircuit Testnet",
  iconBackground: "#000",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://zircuit1.p2pify.com/"] }
  },
  blockExplorers: {
    default: { name: "ETH", url: "https://explorer.zircuit.com/" }
  }
} as const satisfies Chain;
