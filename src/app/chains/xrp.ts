import { Chain } from "@rainbow-me/rainbowkit";
export const xrp = {
  id: 1440002,
  name: "EVM Sidechain",
  iconBackground: "#000",
  nativeCurrency: { name: "XRP", symbol: "XRP", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc-evm-sidechain.xrpl.org"] }
  },
  blockExplorers: {
    default: { name: "XRP", url: "https://evm-sidechain.xrpl.org/" }
  }
} as const satisfies Chain;
