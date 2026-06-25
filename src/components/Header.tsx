"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Initial check
    handleScroll()

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <div
      className={`w-full z-40 fixed text-white h-[8vh] px-5 md:px-10 xl:px-20 py-5 flex justify-between text-[14px] font-stretch-150% items-end font-header uppercase leading-5 tracking-wide transition-all duration-300 ${scrolled ? "bg-black shadow-md" : "bg-transparent backdrop-blur-sm"
        }`}
    >
      <Link href="/" className="font-header tracking-wide text-xl h-7 font-bold">
        <Image src="https://4uq7g3y1c9.ufs.sh/f/papAmzoxRga87aXt76jGmlZVJtgAnfw0BPTi17UryzaOjdkD" alt="Tysons Advisory"
        height="200" width="200" className="w-48"/>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button type="button" variant="ghost" size="icon" className="visible lg:invisible">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetTitle className="hidden">Tyson Advisory</SheetTitle>
          <div className="w-full p-5 flex flex-col gap-2">
            <Accordion type="single" collapsible>
              <AccordionItem value="services">
                <AccordionTrigger>Services</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2">
                  <Link href="/services/Strategy_and_Advisory" className="py-2 ps-3">
                    Strategy and Advisory
                  </Link>
                  <Link href="/services/Data_Cloud_and_Analytics" className="py-2 ps-3">
                    Data, Cloud and Analytics
                  </Link>
                  <Link href="/services/AI_and_Automation" className="py-2 ps-3">
                    AI and Automation
                  </Link>
                  <Link href="/services/Application_and_Managed_Services" className="py-2 ps-3">
                    Managed and Application Services
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Separator />
            <Link href="/frameworks" className="py-2">
              Frameworks
            </Link>
            <Separator />
            <Link href="/blog" className="py-2">
              Resources
            </Link>
            <Separator />
            <Link href="/about-us" className="py-2">
              Who we are
            </Link>
            <Separator />
            <Link href="/contact-us" className="py-2">
              Reach us
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <nav className="-mt-2 items-center gap-6 font-content hidden lg:flex">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <p className="cursor-pointer group transition duration-300 flex flex-col gap-1">
              Services
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </p>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/services/Strategy_and_Advisory" className="py-0">
                  Strategy and Advisory
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/services/Data_Cloud_and_Analytics" className="py-0">
                  Data, Cloud and Analytics
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/services/AI_and_Automation" className="py-0">
                  AI and Automation
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/services/Application_and_Managed_Services" className="py-0">
                  Application and Managed Services
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="/blog" className="group transition duration-300 flex flex-col gap-1">
          Resources
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </Link>
        <Link href="/frameworks" className="group transition duration-300 flex flex-col gap-1">
          Frameworks
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </Link>
        <Link href="/about-us" className="group transition duration-300 flex flex-col gap-1">
          Who we are
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </Link>
        <Link href="/contact-us" className="group transition duration-300 flex flex-col gap-1">
          Reach Us
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </Link>
      </nav>
    </div>
  )
}

export default Header

