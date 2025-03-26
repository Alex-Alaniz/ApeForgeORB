'use client';

import { ConnectButton, ConnectEmbed } from "thirdweb/react";
import { darkTheme } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { ThirdwebProvider } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";

// Create the client directly in the component to ensure it's available
const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID || "",
});

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
];

export default function ThirdwebBridge() {
  if (!process.env.NEXT_PUBLIC_CLIENT_ID) {
    console.error("Missing NEXT_PUBLIC_CLIENT_ID");
    return null;
  }

  return (
    <ThirdwebProvider>
      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto mb-12">
        <ConnectButton
          client={client}
          wallets={wallets}
          theme={darkTheme({
            colors: {
              accentText: "hsl(220, 100%, 49%)",
              separatorLine: "hsl(220, 100%, 49%)",
              primaryText: "hsl(220, 100%, 49%)",
            },
          })}
          connectButton={{ label: "ApeForge Connect" }}
          connectModal={{
            size: "compact",
            title: "ApeForge OnRamp",
            titleIcon: "https://www.apeforge.io/images/apechain-icon-white.svg",
            showThirdwebBranding: false,
          }}
        />
      </div>
    </ThirdwebProvider>
  );
} 