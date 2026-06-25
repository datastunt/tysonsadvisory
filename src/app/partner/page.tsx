import ImageWithData from "@/components/ImageWithData";
import { Bitcoin } from "lucide-react";
import Image from 'next/image'

const PartnerPage = () => {
  return (
    <div className="w-full">
      <ImageWithData
        image="https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9Zlq2qm6QPiWMqQjw4ktaL1lK3z2EXHm6scGg"
        header="Build brand and grow your business with Consultic."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        ctaText="Partner with us"
        ctaLink="/contact-us"
      />
      <div className="py-10 w-full flex flex-col items-center gap-2 px-5">
          <h2 className="font-header text-2xl font-medium tracking-tighter sm:text-4xl md:text-5xl py-3">Why Partner with us</h2>
        <p className="w-full md:w-2/3 font-content leading-8 md:text-center tracking-wide">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.</p>
      </div>
          <section className="w-full space-y-8 lg:space-y-14 py-10 pt-24 min-h-[70vh] px-5">
      <div className="space-y-2">
          <h2 className="font-header text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl py-3">Partnership Benefits</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="w-full md:w-[65%] grid grid-cols-1 gap-6">
          <div className="flex-1 flex items-start gap-2">
            <span className="">
              <Bitcoin />
            </span>
            <span className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold font-content">The copy warned the Little Blind Tex</h4>
              <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </span>
          </div>

          <div className="flex-1 flex items-start gap-2">
            <span className="">
              <Bitcoin />
            </span>
            <span className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold font-content">The copy warned the Little Blind Tex</h4>
              <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </span>
          </div>
          <div className="flex-1 flex items-start gap-2">
            <span className="">
              <Bitcoin />
            </span>
            <span className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold font-content">The copy warned the Little Blind Tex</h4>
              <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </span>
          </div>
          <div className="flex-1 flex items-start gap-2">
            <span className="">
              <Bitcoin />
            </span>
            <span className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold font-content">The copy warned the Little Blind Tex</h4>
              <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </span>
          </div>
        </div>
        <span className="w-3/4 md:w-[30%]">
          <Image
            src="https://86v8u6agau.ufs.sh/f/A17KOoeuO4h9HXTQE4NMor0Nh4Jfi5AVDOw6lmEq82F9dasj"
            width="800" height="500" className="object-cover  rounded-xl" alt="img" />
        </span>
      </div>
    </section>

    </div>
  );
};

export default PartnerPage;

