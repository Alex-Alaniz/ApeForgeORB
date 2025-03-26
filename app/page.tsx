import WalletInstructions from "@/components/wallet-instructions"
import ThirdwebBridge from "@/components/thirdweb-bridge"
import TypewriterEffect from "@/components/TypewriterEffect"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 mt-8">ApeForge OnRamp Bridge</h1>
        <div className="mb-12 max-w-2xl mx-auto">
          <TypewriterEffect />
          <p className="text-center mt-2 text-gray-400">the future of ApeChain</p>
        </div>
        <ThirdwebBridge />
        <WalletInstructions />
      </div>
    </main>
  )
}

