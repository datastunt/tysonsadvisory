import Image from "next/image";
import ContactUsForm from "./ContactUsForm";

const ContactUsPage = () => {
  return <div className="w-full">
    <section className="size-full flex flex-col-reverse md:flex-row min-h-[90vh] items-center">
      <div className="flex-1 flex flex-col gap-2 max-lg:px-5">
        <h1 className="font-header font-stretch-200% tracking-wide text-3xl font-medium sm:text-4xl md:text-5xl py-3 uppercase">Let&apos;s Connect</h1>
        <p className="text-lg text-muted-foreground font-content">
          We are here to partner with you on your transformation journey.</p>
        <span className="w-full flex items-center justify-center p-5">
          <Image alt="contact-us" width="800" height="900"
            src="https://4uq7g3y1c9.ufs.sh/f/papAmzoxRga8bgDSzJkNWXxPYazQ8b7mrwBFMSIOyspRkVij"
            className="w-full sm:w-1/2 md:w-full rounded-xl" />
        </span>
      </div>
      <div className="flex-1 w-full max-lg:pt-10">
        <ContactUsForm />
      </div>
    </section>
  </div>;
};

export default ContactUsPage;

