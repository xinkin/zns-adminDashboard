import { Chain } from "@rainbow-me/rainbowkit";
export const neox = {
  id: 47763,
  name: "Neo X Chain",
  iconBackground: "#fff",
  nativeCurrency: { name: "Neox", symbol: "GAS", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://mainnet-1.rpc.banelabs.org"] }
  },
  blockExplorers: {
    default: { name: "Neox", url: "https://xexplorer.neo.org" }
  }
} as const satisfies Chain;
