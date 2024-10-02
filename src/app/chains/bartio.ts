import { Chain } from "@rainbow-me/rainbowkit";
export const bartio = {
  id: 80084,
  name: "Bartio Testnet",
  iconBackground: "#000",
  nativeCurrency: { name: "BERA", symbol: "BERA", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://bartio.rpc.berachain.com"] }
  },
  blockExplorers: {
    default: { name: "BERA", url: "https://bartio.beratrail.io/" }
  }
} as const satisfies Chain;
