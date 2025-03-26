"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { ChevronLeft, ChevronRight, ChevronsDown, ChevronsUp, CreditCard, ArrowRightLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define the step structure with main steps and substeps
const steps = [
  {
    id: "install-wallets",
    title: "Install Required Wallets",
    description:
      "Install the necessary wallet extensions for your browser, including MetaMask, Phantom, Uniswap, Magic Eden, Coinbase Wallet, and Rainbow.",
    image: "/images/step1.png",
  },
  {
    id: "connect-wallet",
    title: "Connect Your Wallet",
    description:
      "Connect your wallet to access your crypto assets. In this example, we're using the devalex.eth wallet with ApeChain tokens.",
    image: "/images/step2.png",
  },
  {
    id: "access-features",
    title: "Access Wallet Features",
    description:
      "Navigate your wallet interface to access Send, Receive, and Buy functions. You can also view your transactions and manage wallet settings.",
    image: "/images/step3.png",
  },
  {
    id: "select-tokens",
    title: "Select Tokens to Purchase",
    description: "Choose the token you want to buy. Here we're purchasing 50 APE tokens on ApeChain for $28.50.",
    image: "/images/step4.png",
  },
  {
    id: "payment-options",
    title: "Choose Payment Method",
    description:
      "Select your preferred payment method. You can bridge assets across chains or use a credit card to onramp.",
    image: "/images/step5-pay-with-card.png",
    subSteps: [
      {
        id: "crypto-bridge",
        title: "Bridge",
        description: "Bridge assets across chains by selecting from various cryptocurrencies on different networks.",
        icon: <ArrowRightLeft className="w-5 h-5" />,
        steps: [
          {
            id: "select-crypto",
            title: "Select Crypto for Bridging",
            description:
              "Choose from various cryptocurrencies across different networks to bridge to the target chain.",
            image: "/images/step5-pay-with-crypto-bridge.png",
          },
          {
            id: "crypto-fees",
            title: "Review Bridge Fees",
            description:
              "Check the network fees for your cross-chain transaction, which are typically lower than credit card processing fees.",
            image: "/images/step5-crypto-fees.png",
          },
          {
            id: "view-crypto-fees",
            title: "View Detailed Bridge Fees",
            description: "See the exact gas fees required for the cross-chain bridge transaction.",
            image: "/images/step5-crypto-view-fees.png",
          },
          {
            id: "confirm-crypto",
            title: "Confirm Bridge Transaction",
            description: "Review and confirm the details of your cross-chain bridge transaction before proceeding.",
            image: "/images/step6-crypto-confirm.png",
          },
          {
            id: "wallet-approval",
            title: "Approve in Wallet",
            description: "Approve the transaction in your wallet to complete the cross-chain bridge.",
            image: "/images/final-crypto-bridge-step.png",
          },
          {
            id: "security-check",
            title: "Security Verification",
            description:
              "Wallet Guard provides an additional layer of security by checking for potential risks in your transaction.",
            image: "/images/bonus-wallet-guard-security.png",
          },
        ],
      },
      {
        id: "credit-card",
        title: "OnRamp",
        description: "Use a credit card for a simple fiat-to-crypto onramp experience.",
        icon: <CreditCard className="w-5 h-5" />,
        steps: [
          {
            id: "card-fees",
            title: "Review Card Processing Fees",
            description:
              "When using the onramp, review the processing and network fees before confirming your purchase.",
            image: "/images/step5-card-fees.png",
          },
          {
            id: "card-details",
            title: "Confirm Payment Details",
            description:
              "Select your currency, payment provider, and review the estimated processing time before continuing.",
            image: "/images/step5-card-view-fees.png",
          },
          {
            id: "card-confirm",
            title: "Confirm Card Transaction",
            description: "Review the transaction details showing the recipient wallet and token information.",
            image: "/images/step6-card-confirm.png",
          },
          {
            id: "card-form",
            title: "Enter Card Information",
            description: "Fill in your payment details including card number, expiration date, and security code.",
            image: "/images/final-card-step.png",
          },
        ],
      },
    ],
  },
]

export default function WalletInstructions() {
  const [currentStep, setCurrentStep] = useState(0)
  const [expandedSubSteps, setExpandedSubSteps] = useState(true)
  const [activeSubStepTab, setActiveSubStepTab] = useState("crypto-bridge")
  const [currentSubStep, setCurrentSubStep] = useState(0)

  // Add this useEffect to ensure activeSubStepTab is valid when step changes
  useEffect(() => {
    // If current step has substeps, make sure activeSubStepTab is valid
    const step = steps[currentStep]
    if (step.subSteps && step.subSteps.length > 0) {
      // Check if current activeSubStepTab exists in this step's subSteps
      const tabExists = step.subSteps.some((subStep) => subStep.id === activeSubStepTab)
      // If not, set it to the first available subStep id
      if (!tabExists && step.subSteps[0]) {
        setActiveSubStepTab(step.subSteps[0].id)
      }
    }

    // Reset currentSubStep when step changes
    setCurrentSubStep(0)
  }, [currentStep])

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      setCurrentSubStep(0) // Reset sub-step when moving to next main step
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setCurrentSubStep(0) // Reset sub-step when moving to previous main step
    }
  }

  const nextSubStep = () => {
    const currentMainStep = steps[currentStep]
    if (currentMainStep.subSteps) {
      const activeTab = currentMainStep.subSteps.find((tab) => tab.id === activeSubStepTab)
      if (activeTab && currentSubStep < activeTab.steps.length - 1) {
        setCurrentSubStep(currentSubStep + 1)
      }
    }
  }

  const prevSubStep = () => {
    if (currentSubStep > 0) {
      setCurrentSubStep(currentSubStep - 1)
    }
  }

  const toggleSubSteps = () => {
    setExpandedSubSteps(!expandedSubSteps)
  }

  // Fix the renderCurrentContent function to handle undefined cases properly
  const renderCurrentContent = () => {
    const currentMainStep = steps[currentStep]

    // If the current step has substeps and they're expanded
    if (currentMainStep.subSteps && expandedSubSteps) {
      const activeTab = currentMainStep.subSteps.find((tab) => tab.id === activeSubStepTab)
      if (activeTab && activeTab.steps && activeTab.steps.length > 0) {
        // Make sure currentSubStep is within bounds
        const safeSubStep = Math.min(currentSubStep, activeTab.steps.length - 1)
        const subStep = activeTab.steps[safeSubStep]

        if (subStep) {
          return {
            title: `${currentMainStep.title} - ${subStep.title}`,
            description: subStep.description,
            image: subStep.image,
          }
        }
      }
    }

    // Otherwise show the main step
    return {
      title: currentMainStep.title,
      description: currentMainStep.description,
      image: currentMainStep.image,
    }
  }

  const content = renderCurrentContent()

  // Get the active tab's steps for the current main step
  const getActiveTabSteps = () => {
    const currentMainStep = steps[currentStep]
    if (currentMainStep.subSteps) {
      const activeTab = currentMainStep.subSteps.find((tab) => tab.id === activeSubStepTab)
      return activeTab?.steps || []
    }
    return []
  }

  const activeTabSteps = getActiveTabSteps()

  return (
    <div className="relative">
      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentStep(index)
                setCurrentSubStep(0) // Reset sub-step when changing main step
              }}
              className={`h-2.5 w-2.5 rounded-full ${index === currentStep ? "bg-blue-500" : "bg-gray-600"}`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <CardContainer className="inter-var">
          <CardBody className="bg-black relative group/card border-blue-500/20 dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-2xl font-bold text-blue-500">
              Step {currentStep + 1}: {content.title}
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-neutral-300 text-sm max-w-sm mt-2 mb-4">
              {content.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <div className="relative h-80 w-full">
                <Image
                  src={content.image || "/placeholder.svg"}
                  fill
                  className="object-contain rounded-xl group-hover/card:shadow-xl"
                  alt={`Step ${currentStep + 1}: ${content.title}`}
                />
              </div>
            </CardItem>

            {/* Sub-steps section for step 5 */}
            {steps[currentStep].subSteps && (
              <CardItem translateZ="80" className="w-full mt-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium text-blue-400">Payment Options</h3>
                  <Button variant="ghost" size="sm" onClick={toggleSubSteps} className="h-8 px-2 text-blue-400">
                    {expandedSubSteps ? (
                      <>
                        <ChevronsUp className="h-4 w-4 mr-1" /> Hide Options
                      </>
                    ) : (
                      <>
                        <ChevronsDown className="h-4 w-4 mr-1" /> Show Options
                      </>
                    )}
                  </Button>
                </div>

                {expandedSubSteps && (
                  <div className="w-full">
                    {/* Custom styled tabs */}
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1 flex mb-4">
                      {steps[currentStep].subSteps.map((subStep) => (
                        <button
                          key={subStep.id}
                          onClick={() => {
                            setActiveSubStepTab(subStep.id)
                            setCurrentSubStep(0) // Reset to first sub-step when changing tabs
                          }}
                          className={`flex items-center justify-center py-2 px-4 rounded-md text-sm font-medium flex-1 transition-colors ${
                            activeSubStepTab === subStep.id
                              ? "bg-blue-500 text-white"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                          }`}
                        >
                          {subStep.icon}
                          <span className="ml-2">{subStep.title}</span>
                        </button>
                      ))}
                    </div>

                    {/* Step indicators and navigation */}
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex space-x-1">
                        {activeTabSteps.map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-1.5 w-6 rounded-full ${
                              idx === currentSubStep ? "bg-blue-500" : "bg-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">
                        Step {currentSubStep + 1} of {activeTabSteps.length}
                      </span>
                    </div>

                    {/* Navigation buttons with improved contrast */}
                    <div className="flex justify-between mt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={prevSubStep}
                        disabled={currentSubStep === 0}
                        className="text-sm text-blue-400 border-blue-400 hover:bg-blue-400/10 hover:text-blue-300"
                      >
                        <ChevronLeft className="h-4 w-4 mr-1" /> Back
                      </Button>
                      <Button
                        size="sm"
                        variant="default"
                        onClick={nextSubStep}
                        disabled={currentSubStep === activeTabSteps.length - 1}
                        className="text-sm bg-blue-500 hover:bg-blue-600 text-white"
                      >
                        Next <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardItem>
            )}

            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as={Button}
                onClick={prevStep}
                disabled={currentStep === 0}
                className="px-4 py-2 rounded-xl bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4 mr-2" /> Previous
              </CardItem>
              <CardItem
                translateZ={20}
                as={Button}
                onClick={nextStep}
                disabled={currentStep === steps.length - 1}
                className="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next <ChevronRight className="w-4 h-4 ml-2" />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-400">
          Step {currentStep + 1} of {steps.length}
        </p>
      </div>
    </div>
  )
}

