import FlowChart from "@/components/flow-chart"

export default function FlowPage() {
  return (
    <main className="min-h-screen bg-black text-white p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 mt-8">Payment Flow Options</h1>
        <p className="text-center mb-12 text-gray-400 max-w-2xl mx-auto">
          Choose between bridging assets across chains or onramping with a credit card
        </p>
        <FlowChart />
      </div>
    </main>
  )
}

