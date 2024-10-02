import { Chain } from "@rainbow-me/rainbowkit";
export const zkLink = {
  id: 810180,
  name: "zkLink Nova Mainnet",
  iconBackground: "#000",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.zklink.io"] }
  },
  blockExplorers: {
    default: { name: "ETH", url: "https://explorer.zklink.io" }
  }
} as const satisfies Chain;
