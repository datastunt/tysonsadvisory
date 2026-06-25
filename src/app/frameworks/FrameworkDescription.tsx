import { Check } from 'lucide-react';
import Image from 'next/image'

type Props = {
  title: string;
  description: string;
  img: string,
  details: {
    header: string,
    description: string,
  }[];
}

const FrameworkDescription = ({ title, details, description, img }: Props) => {
  return (
    <section className="w-full space-y-8 lg:space-y-14 py-10 min-h-[70vh] px-5">
      <div className="space-y-2">
        <h3 className="text-2xl lg:text-4xl font-header font-stretch-200% font-semibold">{title}</h3>
        <p className="text-lg text-muted-foreground font-content">{description}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="w-full md:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-3">
          {details.map((dt, index) => (

            <div key={index} className="flex-1 flex items-start gap-2">
              <div
                className="flex items-center justify-center w-6 h-6 aspect-square rounded-full bg-green-500 text-black font-semibold z-10"
              >
                <Check color="white" size={15} strokeWidth="5" />
              </div>
              <span className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold font-content">{dt.header}</h4>
                <p className="text-sm text-muted-foreground">{dt.description}</p>
              </span>
            </div>
          ))}
        </div>
        <span className="w-3/4 md:w-[30%]">
          <Image
            src={img}
            width="800" height="500" className="object-cover  rounded-xl" alt="img" />
        </span>
      </div>
    </section>
  )
}

export default FrameworkDescription;
