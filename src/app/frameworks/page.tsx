import { Card, CardContent } from "@/components/ui/card"
import FrameworkDescription from "./FrameworkDescription"

const frameworks = [
  {
    "title": "Forensics and Eligibility Verification",
    "img": "https://4uq7g3y1c9.ufs.sh/f/papAmzoxRga8j56hskmUTr4ZbV0BYth27Qd5aLzDmqulJGke",
    "description": " Prevent fraudulent data. Automate document forensics, ensure compliance, and flag anomalies. ",
    "detail": [
      {
        header: "Pre-OCR Document Authentication",
        description: "Utilize forensic automation to authenticate documents before OCR processing, ensuring integrity and reducing the risk of processing fraudulent or manipulated content.",
      },
      {
        header: "Deepfake and Forgery Detection",
        description: "Identify and mitigate deepfakes, forged elements, and evolving fraud patterns using AI/ML-driven anomaly detection techniques to enhance security and trust.",
      },
      {
        header: "AI/ML Workflow Automation",
        description: "Implement rule-based and data-matching AI/ML workflows to ensure compliance, accuracy, and efficient anomaly detection across document verification processes.",
      },
      {
        header: "End-to-End Verification and Auditability",
        description: "Streamline verification with automated flagging, expert review, and audit traceability, ensuring a transparent and robust fraud detection framework.",
      },
    ]
  },
  {
    "title": "Agentic AI Frameworks",
    "img": "https://4uq7g3y1c9.ufs.sh/f/papAmzoxRga8dZYo4h0AFsG7M04KcS3inEojyQeVCNLTmUXR",
    "detail": [
      {
        header: "Expert-Led AI Strategy",
        description: "Implement AI solutions tailored to industry needs and business goals, ensuring deterministic outcomes and measurable success for enterprises.",
      },
      {
        header: "COTS and Custom AI Deployments",
        description: "Deploy Commercial Off-The-Shelf (COTS) or custom AI solutions optimized for accuracy, scalability, and compliance to meet business-specific requirements.",
      },
      {
        header: "Pre-Built AI Frameworks",
        description: "Leverage Tysons Advisory’s existing AI frameworks for Omni-Channel Marketing, Accounting, Legal, Investment and Tax, and Customer Support to accelerate implementation and achieve quick wins.",
      },
      {
        header: "AI Maturity Model for Scalable Growth",
        description: "Utilize Tysons Advisory’s AI Maturity Model to guide structured AI adoption, scaling solutions based on complexity and business impact for long-term success.",
      },
    ],
    "description": "Methodology to deliver custom solutions using LLMs with proper guardrails to make it compliant and deterministic for enterprises."
  },
  {
    "title": "RPA and Intelligent Automation Frameworks",
    "img": "https://4uq7g3y1c9.ufs.sh/f/papAmzoxRga8RMtxJTrliOtWxIzhENvb7XVwfKuZQ32LUGTB",
    "detail": [
      {
        header: "Expert-Driven Automation Solutions",
        description: "Leverage industry veterans and SMEs with cross-platform expertise to design and implement tailored automation solutions that meet unique business requirements.",
      },
      {
        header: "Platform-Agnostic Best Practices",
        description: "Adopt a best-of-breed, platform-agnostic strategy aligned with client needs, ensuring scalability, cost efficiency, and seamless integration across ecosystems.",
      },
      {
        header: "Flexible Engagement Models",
        description: "Offer adaptable engagement models, including Bot-as-a-Service or Client-Owner Model, to provide businesses with operational flexibility and control over automation initiatives.",
      },
      {
        header: "Structured Automation Maturity Model",
        description: "Utilize Tysons Advisory’s Automation Maturity Model to guide customers through a structured automation journey, optimizing efficiency at every stage of implementation.",
      },
    ],
    "description": "Tailor automation with industry experts, platform-agnostic strategy, and flexible engagement models for efficiency"
  },
  {
    "title": "Real Time Inferencing on the Edge",
    "img": "https://4uq7g3y1c9.ufs.sh/f/papAmzoxRga89PvN0POIlUSvQ5GsnxHP4OmbKNDdFVcfoL29",
    "description": "Industry-leading AI-on-the-edge platform with secure, low SWaP storage and real-time decision-making.",
    "detail": [
      {
        header: "Software and Applications",
        description: "Fully supports all operating systems, AI models, and applications, ensuring seamless integration and maximum flexibility across diverse environments. ",
      },
      {
        header: "Security and Accessibility",
        description: "Provides secure storage and transport of petabytes of data from the edge, supporting real-time, mission-critical decision-making in remote or field-based environments. Connectivity enabled using standard ports.",
      },
      {
        header: "Custom Build",
        description: " Deploy your own IP or partner with us to create tailored solutions that enhance operational efficiency and improve real time decision-making. ",
      },
      {
        header: "Low SWaP Platform",
        description: "Combines storage and AI inference in a single, compact device, offering fast, reliable, and secure air-gapped AI-on-the-edge capabilities with minimal size, weight, and power (SWaP). ",
      },
    ]
  }
]

const FrameworksPage = () => {
  return (
    <div className="w-full">
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-header font-stretch-200% tracking-wide text-3xl font-medium sm:text-4xl md:text-5xl py-3 uppercase">Frameworks</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-content">Delivering scalable innovation with proven frameworks for sustainable growth</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {frameworks.map((feature, index) => (
            <Card key={index} className="border rounded-xl overflow-hidden py-3">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-xl font-header font-semibold mb-2">{feature.title}</h3>
                    <p className="font-content text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Frameworks description */}
      {frameworks.map((frame, index) => (
        <FrameworkDescription key={index} title={frame.title} description={frame.description} details={frame.detail} img={frame.img} />
      ))
      }
    </div>
  )
}

export default FrameworksPage
