import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 py-4 md:py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Company info */}
          <div className="mb-3 md:mb-0 md:w-1/3 text-center md:text-left order-2 md:order-1">
            <p className="text-gray-400 text-xs sm:text-sm">ApeForge | BearifiedCo</p>
          </div>

          {/* Center - ApeChain logo */}
          <div className="mb-3 md:mb-0 md:w-1/3 flex justify-center order-1 md:order-2">
            <Image
              src="/images/image.png"
              alt="Powered by ApeCoin"
              width={100}
              height={20}
              className="h-auto w-20 sm:w-auto max-w-[100px] xl:max-w-[80px] 2xl:max-w-[100px] opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Right side - Navigation links */}
          <div className="md:w-1/3 flex gap-4 md:gap-6 justify-center md:justify-end order-3 md:order-3">
            <Link href="/faq" className="text-xs sm:text-sm text-gray-400 hover:text-white">
              FAQ
            </Link>
            <Link href="/terms" className="text-xs sm:text-sm text-gray-400 hover:text-white">
              Terms
            </Link>
            <Link href="/privacy" className="text-xs sm:text-sm text-gray-400 hover:text-white">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 