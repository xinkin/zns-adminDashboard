'use client';
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider, http, createConfig } from 'wagmi';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  rainbowWallet,
  walletConnectWallet,
  metaMaskWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { bsc, polygon, blast, boba } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { mintMainnet } from '@/app/chains/mintMainnet';
import { tabi } from '@/app/chains/tabi';
import { xLayer } from '@/app/chains/xLayer';
import { scrollMainnet } from '@/app/chains/scroll';
import { zkCandy } from '@/app/chains/zkCandy';
import { arthera } from '@/app/chains/arthera';
import { neox } from '@/app/chains/neox';
import { taikoMainnet } from '@/app/chains/taikoMainnet';
import { bartio } from '@/app/chains/bartio';
import { xrp } from '@/app/chains/xrp';
import { zkLink } from '@/app/chains/zkLink';
import { zircuit } from '@/app/chains/zircuit';
import { Fire } from '@/app/chains/Fire';

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [metaMaskWallet, rainbowWallet, walletConnectWallet],
    },
  ],
  {
    appName: 'ZNS Admin Dashboard',
    projectId: 'fee68566c73e3310c5d5a89c2230fba6',
  },
);

const config = createConfig({
  connectors,
  chains: [
    {
      ...bsc,
    },
    {
      ...scrollMainnet,
      iconUrl: '/chainLogos/scroll.png',
    },
    {
      ...blast,
      iconUrl: '/chainLogos/blast.jpeg',
    },
    {
      ...polygon,
    },
    {
      ...taikoMainnet,
      iconUrl: '/chainLogos/taikoHekla.png',
    },
    {
      ...neox,
      iconUrl: '/chainLogos/neox.png',
    },
    {
      ...xLayer,
      iconUrl: '/chainLogos/xLayer.webp',
    },
    {
      ...mintMainnet,
      iconUrl: '/chainLogos/mintchain.png',
    },
    {
      ...boba,
      iconUrl: '/chainLogos/boba.png',
    },
    {
      ...Fire,
      iconUrl: '/chainLogos/5ire.png',
    },
    {
      ...arthera,
      iconUrl: '/chainLogos/arthera.png',
    },
    {
      ...zkLink,
      iconUrl: '/chainLogos/zkLink.png',
    },
    {
      ...bartio,
      iconUrl: '/chainLogos/berachain.png',
    },
    {
      ...tabi,
      iconUrl: '/chainLogos/tabi.jpeg',
    },
    {
      ...zkCandy,
      iconUrl: '/chainLogos/zkCandy.jpeg',
    },
    {
      ...xrp,
      iconUrl: '/chainLogos/xrp.jpeg',
    },
    {
      ...zircuit,
      iconUrl: '/chainLogos/zircuit.webp',
    },
  ],
  transports: {
    [bsc.id]: http(),
    [scrollMainnet.id]: http(),
    [blast.id]: http(),
    [polygon.id]: http(),
    [taikoMainnet.id]: http(),
    [xLayer.id]: http(),
    [mintMainnet.id]: http(),
    [boba.id]: http(),
    [Fire.id]: http(),
    [arthera.id]: http(),
    [zkLink.id]: http(),
    [bartio.id]: http(),
    [tabi.id]: http(),
    [neox.id]: http(),
    [zkCandy.id]: http(),
    [xrp.id]: http(),
    [zircuit.id]: http(),
  },
  ssr: true,
});

export const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact" theme={darkTheme()}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
