import { Chain } from "@rainbow-me/rainbowkit";
export const Fire = {
  id: 995,
  name: "5ireChain Mainnet",
  iconBackground: "#000",
  nativeCurrency: { name: "5ire", symbol: "5ire", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.5ire.network/"] }
  },
  blockExplorers: {
    default: { name: "5ire", url: "https://5irescan.io/" }
  }
} as const satisfies Chain;
