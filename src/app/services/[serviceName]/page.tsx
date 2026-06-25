import { Card } from "@/components/ui/card";
import Link from "next/link";
import ServiceDetails from "./ServiceDetails";
import BlogCards from "@/components/BlogCards";

export const generateStaticParams = () => {
  return ["Data_Cloud_and_Analytics", "AI_and_Automation", "Strategy_and_Advisory", "Application_and_Managed_Services"].map(service => {
    return { serviceName: service }
  })
}

import { BrainCircuit, Zap, BarChart3, Database, PieChart, Cloud, Code, Cpu, Globe, Wrench, RefreshCw, ClipboardCheck, Bot, Lightbulb } from "lucide-react";

const servicesData = [
  {
    id: "Strategy_and_Advisory",
    service: "Strategy and Advisory Services",
    content: [
      {
        icon: <BrainCircuit className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-blue-400" strokeWidth={1.5} />, 
        header: "AI Strategy, Vision, and Roadmap Development",
        description: "We help organizations define their AI vision and create actionable roadmaps that align with business objectives. From identifying opportunities to implementing scalable solutions, we ensure your AI initiatives drive measurable impact and long-term success."
      },
      {
        icon: <Zap className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-blue-400" strokeWidth={1.5} />, 
        header: "Quick Win Strategies",
        description: "Achieve rapid results with our AI-driven quick win strategies. We identify high-impact opportunities that can be implemented quickly, providing immediate value and momentum for your AI initiatives. This approach helps build confidence and sets the stage for more extensive transformations."
      },
      {
        icon: <BarChart3 className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-blue-400" strokeWidth={1.5} />, 
        header: "Porfolio Optimizations and Revenue Strategy",
        description: "Unlock new revenue streams by identifying and optimizing for cross-sell and upsell opportunities within your customer base, especially during mergers and acquisitions. Our advisory services focus on enhancing customer engagement, improving retention, and driving sales through personalized recommendations and targeted strategies."
      }
    ]
  },
  {
    id: "Data_Cloud_and_Analytics",
    service: "Data, Cloud and Analytics Services",
    content: [
      {
        icon: <Database className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-blue-400" strokeWidth={1.5} />, 
        header: "Data Preparation, Validation, Security and Master Data Management",
        description: "We ensure your data is clean, accurate, and secure. Our comprehensive approach includes data cleansing, validation checks, implementing robust security measures, and establishing effective master data management practices to create a single source of truth for your organization."
      },
      {
        icon: <Cloud className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-blue-400" strokeWidth={1.5} />, 
        header: "Cloud Strategy, Planning and Migration",
        description: "We develop comprehensive cloud migration strategies tailored to your business needs, guiding you through the five phases of cloud transformation: prepare, plan, migrate, operate, and optimize. Our experts assess your current infrastructure, create detailed migration plans, and execute seamless transitions to cloud environments, ensuring minimal disruption to your operations."
      },
      {
        icon: <PieChart className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-blue-400" strokeWidth={1.5} />, 
        header: "Data Visualization and Reporting",
        description: "Transform complex data into clear, actionable insights with our cutting-edge visualization tools and customized reporting solutions. We create interactive dashboards and reports that enable you to quickly grasp key trends, patterns, and anomalies in your data, facilitating informed decision-making across all levels of your organization."
      }
    ]
  },
  {
    id: "AI_and_Automation",
    service: "AI and Automation Services",
    content: [
      {
        icon: <Code className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-blue-400" strokeWidth={1.5} />, 
        header: "Low-code, No-Code Platforms and RPA",
        description: "Accelerate application development with intuitive low-code/no-code solutions and automate repetitive tasks with RPA. Our pre-built frameworks and partnerships with leading platforms ensure faster time-to-market and improved operational efficiency."
      },
      {
        icon: <Cpu className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-blue-400" strokeWidth={1.5} />, 
        header: "AI, Machine Learning and Agentic AI",
        description: "Transform operations with AI and ML solutions, including predictive analytics, NLP, and agentic AI systems that autonomously perform tasks, make decisions, and learn. These technologies enhance decision-making, personalize experiences, and unlock new opportunities."
      },
      {
        icon: <Globe className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-blue-400" strokeWidth={1.5} />, 
        header: "Real-Time AI Inferencing on The Edge",
        description: "Tysons Advisory, GTM Advisor and preferred distributor, partners to provide a unique AI-on-the-edge device integrating storage and AI inference in a secure, low SWaP (size, weight, power) and high throughput platform. Trusted by Boeing, Boeing Defense, Las Vegas Sphere and global media companies, it delivers fast, air-gapped capabilities and allows hand-carrying of petabytes of data."
      }
    ]
  },
  {
    id: "Application_and_Managed_Services",
    service: "Application and Managed Services",
    content: [
      {
        icon: <Wrench className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-blue-400" strokeWidth={1.5} />, 
        header: "Custom Development and Application Modernization",
        description: "We deliver tailored software solutions and modernize legacy applications to meet your unique business needs. Our expert team employs cutting-edge technologies and best practices to create scalable, secure, and efficient applications that drive your organization forward."
      },
      {
        icon: <RefreshCw className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-blue-400" strokeWidth={1.5} />, 
        header: "Sustainable Agile Transformation, Operations and Maintenance",
        description: "Transform your organization with our sustainable Agile methodologies, optimizing your software development lifecycle and fostering a culture of continuous improvement. Our comprehensive operations and maintenance services ensure your applications remain up-to-date, secure, and performant."
      },
      {
        icon: <ClipboardCheck className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-blue-400" strokeWidth={1.5} />, 
        header: "Managed IT Services and Last Mile Automation",
        description: "As an extension of your organization, we offer end-to-end managed IT services. Our data validation, testing, and reporting services ensure the accuracy and reliability of your business-critical information."
      }
    ]
  }
];


type Props = {
  params: Promise<{ serviceName: string }>
}

const services = [
  { title: "Data Cloud and Analytics", icon: Cloud },
  { title: "AI and Automation", icon: Bot },
  { title: "Strategy and Advisory", icon: Lightbulb },
  { title: "Application and Managed Services", icon: Wrench }
];

const ServicePage = async ({ params }: Props) => {

  const { serviceName } = await params

  const serviceContent = servicesData.find(data => data.id === serviceName)

  return (
    <div className="w-full">
      <section className="w-full min-h-[80vh] py-10 flex flex-col gap-4 items-center justify-center">
        <h1 className="font-header font-stretch-200% tracking-wide text-3xl font-medium sm:text-4xl md:text-5xl py-3 uppercase w-full text-center">{serviceContent?.service}</h1>
        <ServiceDetails content={serviceContent ? serviceContent.content : []} />
      </section>
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="w-full container mx-auto">
          <h2 className="text-3xl text-center w-full tracking-tight mb-8 uppercase font-header font-stretch-200%">Resources</h2>
          <BlogCards />
        </div>
      </section>

      <section className="flex w-full flex-col py-8">
        <h3 className="w-full text-center font-header font-stretch-200% text-xl md:text-3xl uppercase">Check out more services</h3>
        <div className="py-10 w-full grid grid-cols-2 md:grid-cols-3 gap-3 p-3">
          {services.filter(se => se.title !== serviceName.replaceAll('_', " ")).map(({title, icon:Icon}, index) => (
            <Link href={title.replaceAll(" ", "_")} key={index}>
              <Card className="flex items-center gap-2 min-h-36 justify-center p-4">
                <Icon className="w-6 h-6 text-blue-500" />
                <p className="font-header text-lg w-full text-center font-medium">{title}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>)
};

export default ServicePage;

