import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans h-screen flex flex-col justify-between relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/SVG/backgournd.svg"
        alt="Background"
        fill
        className="object-cover -z-10"
      />

      {/* Logo - Top Left */}
      <div className="z-50 p-4 sm:p-8 md:p-20">
        <Image
          src="/SVG/logo.svg"
          alt="Logo"
          width={200}
          height={67}
          className="sm:w-[250px] sm:h-[83px] md:w-[300px] md:h-[100px]"
        />
      </div>
      <div className="top-4 left-4 z-50 p-4 sm:pl-20 md:pl-20  ">
        <p className="text-[#253a74] text-xl sm:text-2xl md:text-4xl">
          OUR WEBSITE IS{" "}
        </p>
        <h2 className="text-[#edaa36] text-3xl sm:text-4xl md:text-6xl font-black">
          Coming soon
        </h2>
      </div>
      <div className="z-50 p-2 sm:pl-20 md:pl-20 pt-10 md:pt-20">
        <div className="flex items-center gap-1 mb-1">
          <Image
            src="/SVG/lcoationIcon.svg"
            alt="Location"
            width={16}
            height={16}
            className="sm:w-5 sm:h-5"
          />
          <p className="text-[#253a74] text-xs sm:text-sm md:text-lg">
            Baghdad-iraq
          </p>
        </div>
        <div className="flex items-center gap-1 mb-1">
          <Image
            src="/SVG/phoneICon.svg"
            alt="Phone"
            width={16}
            height={16}
            className="sm:w-5 sm:h-5"
          />
          <a
            href="https://wa.me/9647880740880"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#253a74] text-xs sm:text-sm md:text-lg hover:underline cursor-pointer"
          >
            + 964 788 0740 880
          </a>
        </div>
        <div className="flex items-center gap-1 mb-1">
          <Image
            src="/SVG/emailicon.svg"
            alt="Email"
            width={16}
            height={16}
            className="sm:w-5 sm:h-5"
          />
          <a
            href="mailto:info@madirenewableenergy.com"
            className="text-[#253a74] text-xs sm:text-sm md:text-lg break-all hover:underline cursor-pointer"
          >
            info@madirenewableenergy.com
          </a>
        </div>
      </div>
      <div className="flex px-2 sm:pl-20 md:pl-20 pt-10 md:pt-20 gap-1 items-center">
        <a
          href="https://www.instagram.com/madi.renewableenergy?igsh=MTF0ZGF2M3d4eXluNQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="/SVG/instaicon.svg"
            alt="Instagram"
            width={16}
            height={16}
            className="sm:w-5 sm:h-5"
          />
        </a>
        <Image
          src="/SVG/facebookIcon.svg"
          alt="Facebook"
          width={16}
          height={16}
          className="sm:w-5 sm:h-5"
        />
        <p className="text-[#253a74] text-xs sm:text-sm md:text-lg">
          madi.renewableenergy
        </p>
      </div>

      <footer className="w-full relative z-50">
        <Image
          src="/SVG/footer.svg"
          alt="Footer"
          width={0}
          height={0}
          className="w-full h-auto"
        />
      </footer>

      {/* Bottom Right Icon */}
      <div className="hidden sm:block fixed bottom-0 right-0 z-10">
        <Image
          src="/SVG/bottomRight.svg"
          alt="Bottom Right Icon"
          width={1000}
          height={150}
          className="opacity-10"
        />
      </div>
    </div>
  );
}
