import UnderlineLink from "@modules/common/components/underline-link"
import { Button } from "@modules/ui/button"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="h-[100vh] w-full relative">
      <div className=" absolute inset-0 z-10 flex flex-col text-center justify-end items-center p-32">
        {/* <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Introducing the Latest Summer Styles
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          This season, our new summer collection embraces designs to provide
          comfort and style - ensuring you&apos;re well-prepared for whatever
          comes your way.
        </p> */}
        <Button variant={'accent-1'} asChild>
          <Link href={'/products/paradise-pictures'}>
            Buy it
          </Link>
        </Button>
      </div>
      <Image
        src="/paradise-picture.jpg"
        loading="eager"
        priority={true}
        quality={90}
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0"
        draggable="false"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  )
}

export default Hero
