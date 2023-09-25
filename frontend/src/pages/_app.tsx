"use client";
import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import type { AppProps } from "next/app";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { store } from "@/data/store";
import { Provider } from "react-redux";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [sepolia],
  [
    publicProvider(),
    alchemyProvider({ apiKey: "TnjWoKkBNTMdXciDGb5gsEFvlng7m_MM" }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Social Media",
  projectId: "12345678",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </Provider>
  );
}
