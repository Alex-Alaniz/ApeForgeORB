"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRightLeft, CreditCard } from "lucide-react"
import Image from "next/image"

export default function FlowChart() {
  const [activeTab, setActiveTab] = useState("crypto-bridge")

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 mb-20">
      <Card className="bg-black border-blue-500/20">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-500">Payment Flow Options</CardTitle>
          <CardDescription className="text-gray-400">
            Choose between bridging with cryptocurrency or paying with a credit card
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full mb-6">
              <TabsTrigger value="crypto-bridge" className="flex items-center">
                <ArrowRightLeft className="w-5 h-5 mr-2" />
                Bridge
              </TabsTrigger>
              <TabsTrigger value="credit-card" className="flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                OnRamp
              </TabsTrigger>
            </TabsList>

            <TabsContent value="crypto-bridge">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <div className="relative h-40 w-full mb-2">
                    <Image
                      src="/images/step5-pay-with-crypto-bridge.png"
                      alt="Select Crypto"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-blue-400 font-medium">1. Select Crypto</h3>
                    <p className="text-xs text-gray-400 mt-1">Choose from various cryptocurrencies to bridge</p>
                  </div>
                  <div className="h-8 flex items-center justify-center">
                    <div className="h-0.5 w-8 bg-blue-500 rotate-90"></div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative h-40 w-full mb-2">
                    <Image
                      src="/images/step5-crypto-fees.png"
                      alt="Review Fees"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-blue-400 font-medium">2. Review Fees</h3>
                    <p className="text-xs text-gray-400 mt-1">Check network fees for the bridge transaction</p>
                  </div>
                  <div className="h-8 flex items-center justify-center">
                    <div className="h-0.5 w-8 bg-blue-500 rotate-90"></div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative h-40 w-full mb-2">
                    <Image
                      src="/images/step6-crypto-confirm.png"
                      alt="Confirm Transaction"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-blue-400 font-medium">3. Confirm Transaction</h3>
                    <p className="text-xs text-gray-400 mt-1">Review and confirm the bridge details</p>
                  </div>
                  <div className="h-8 flex items-center justify-center">
                    <div className="h-0.5 w-8 bg-blue-500 rotate-90"></div>
                  </div>
                </div>

                <div className="flex flex-col items-center md:col-start-2">
                  <div className="relative h-40 w-full mb-2">
                    <Image
                      src="/images/final-crypto-bridge-step.png"
                      alt="Wallet Approval"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-blue-400 font-medium">4. Wallet Approval</h3>
                    <p className="text-xs text-gray-400 mt-1">Approve the transaction in your wallet</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="credit-card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <div className="relative h-40 w-full mb-2">
                    <Image
                      src="/images/step5-card-fees.png"
                      alt="Review Card Fees"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-blue-400 font-medium">1. Review Card Fees</h3>
                    <p className="text-xs text-gray-400 mt-1">Check processing and network fees</p>
                  </div>
                  <div className="h-8 flex items-center justify-center">
                    <div className="h-0.5 w-8 bg-blue-500 rotate-90"></div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative h-40 w-full mb-2">
                    <Image
                      src="/images/step5-card-view-fees.png"
                      alt="Confirm Payment Details"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-blue-400 font-medium">2. Confirm Payment Details</h3>
                    <p className="text-xs text-gray-400 mt-1">Select currency and payment provider</p>
                  </div>
                  <div className="h-8 flex items-center justify-center">
                    <div className="h-0.5 w-8 bg-blue-500 rotate-90"></div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative h-40 w-full mb-2">
                    <Image
                      src="/images/step6-card-confirm.png"
                      alt="Confirm Transaction"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-blue-400 font-medium">3. Confirm Transaction</h3>
                    <p className="text-xs text-gray-400 mt-1">Review recipient wallet and token details</p>
                  </div>
                  <div className="h-8 flex items-center justify-center">
                    <div className="h-0.5 w-8 bg-blue-500 rotate-90"></div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative h-40 w-full mb-2">
                    <Image
                      src="/images/final-card-step.png"
                      alt="Enter Card Information"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-blue-400 font-medium">4. Enter Card Information</h3>
                    <p className="text-xs text-gray-400 mt-1">Fill in your payment details</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

