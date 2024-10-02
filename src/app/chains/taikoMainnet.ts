import { Chain } from "@rainbow-me/rainbowkit";
export const taikoMainnet = {
  id: 167000,
  name: "Taiko Mainnet",
  iconBackground: "#fff",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.mainnet.taiko.xyz"] }
  },
  blockExplorers: {
    default: { name: "Taiko Mainnet", url: "https://taikoscan.io" }
  }
} as const satisfies Chain;
