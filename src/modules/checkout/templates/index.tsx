import { CheckoutProvider } from "@lib/context/checkout-context"
import ChevronDown from "@modules/common/icons/chevron-down"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Link from "next/link"
import CheckoutLoader from "../components/checkout-loader"
import CheckoutForm from "./checkout-form"
import CheckoutSummary from "./checkout-summary"
import Image from "next/image"
import { siteConfig } from "../../../../config/site"

const CheckoutTemplate = () => {
  return (
    <CheckoutProvider>
      <div className="bg-background-border relative small:min-h-screen">
        <div className="h-16 bg-background">
          <nav className="flex items-center h-full justify-between content-container">
            <Link
              href="/cart"
              className="text-small-semi flex items-center gap-x-2 uppercase flex-1 basis-0"
            >
              <>
                <ChevronDown className="rotate-90" size={16} />
                <span className="mt-px hidden small:block">
                  Back to shopping cart
                </span>
                <span className="mt-px block small:hidden">Back</span>
              </>
            </Link>
            <Link href="/" className="text-xl-semi">
              <Image
                src={siteConfig.logo.href}
                alt={siteConfig.logo.alt}
                width={200}
                height={200}
                priority
                />
            </Link>
            <div className="flex-1 basis-0" />
          </nav>
        </div>
        <div className="relative">
          <CheckoutLoader />
          <div className="grid grid-cols-1 small:grid-cols-[1fr_416px] gap-y-8 content-container gap-x-8 py-12">
            <CheckoutForm />
            <CheckoutSummary />
          </div>
        </div>
        {/* <div className="py-4 w-full flex items-center justify-center">
          <MedusaCTA />
        </div> */}
      </div>
    </CheckoutProvider>
  )
}

export default CheckoutTemplate
