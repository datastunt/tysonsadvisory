"use client"

import { LogIn, LogOut, MapPin } from "lucide-react";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { Button } from "./ui/button";

const Footer = () => {

  const { isAuthenticated } = useKindeBrowserClient()

  return (
    <footer className="flex relative flex-col gap-2 py-10 bg-gradient-to-b from-[var(--background)] min-h-[30vh] to-blue-900 items-center justify-center px-5">
      <div className="absolute bottom-2 right-2">
        {isAuthenticated ? (
          <LogoutLink>
            <Button variant="ghost" size="icon" aria-label="Log Out">
              <LogOut />
            </Button>
          </LogoutLink>
        ) : (
          <LoginLink>
            <Button variant="ghost" size="icon" aria-label="Log In">
              <LogIn />
            </Button>
          </LoginLink>
        )}
      </div>
      <div className="w-full grid-cols-1 grid sm:grid-cols-2 md:grid-cols-4 place-items-start md:place-items-center gap-5 md:gap-2 max-w-[1280px]">
        <section className="flex-1 flex flex-col gap-2">
          <span className="flex items-center gap-2">
            <p className="font-content font-medium tracking-wide text-sm">CAGE</p>
            <p className="text-sm font-content tracking-wide text-slate-50">Code: 101L5</p>
          </span>
          <span className="flex items-center gap-2">
            <p className="font-content font-medium tracking-wide text-sm">Designation</p>
            <p className="text-sm font-content tracking-wide text-slate-50">Minority WOSB </p>
          </span>
        </section>
        <section className="flex-1 flex flex-col gap-2">
          <p className="font-content font-semibold tracking-wide">Reach Us</p>
          <p className="text-sm font-content tracking-wide text-slate-50 underline underline-offset-4">info@tysonsadvisory.com</p>
        </section>
        <section className="flex flex-col gap-2 flex-1">
          <p className="font-content font-medium tracking-wide pt-3">Locations</p>
          <div className="flex-1 grid grid-cols-2 gap-2">
            <p className="text-sm font-content tracking-wide text-slate-50 flex items-center gap-2"><MapPin size={12} />USA</p>
            <p className="text-sm font-content tracking-wide text-slate-50 flex items-center gap-2"><MapPin size={12} />India</p>
          </div>
        </section>
        <section className="flex-1 font-content flex flex-col gap-2">
          <p className="pt-2">Follow us on:</p>
          <div className="flex items-center w-full justify-center gap-3">
            <a href="https://www.linkedin.com/company/tysons-advisory" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm-9 8a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1m6 0a3 3 0 0 0-1.168.236l-.125.057A1 1 0 0 0 11 11v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0-3-3M8 7a1 1 0 0 0-.993.883L7 8.01a1 1 0 0 0 1.993.117L9 8a1 1 0 0 0-1-1"></path>
              </svg>
            </a>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer;
