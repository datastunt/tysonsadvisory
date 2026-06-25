import ImageWithData from "@/components/ImageWithData";
import { Card, CardContent } from "@/components/ui/card"
import { TrustedIcon, TeamIcon, LearnerIcon, AccountabilityIcon } from "@/components/icons";
import { Check } from "lucide-react";
import Image from "next/image"

const features = [{
  title: "Integrity",
  description: "We operate with unwavering honesty and ethical principles in all our interactions. Our commitment to moral excellence guides every decision, fostering trust and transparency with our clients and colleagues.",
  icon: <TrustedIcon size={28} />,
},
{
  title: "Accountability",
  description: "We take ownership of our actions and results, holding ourselves responsible for delivering on our commitments. We embrace challenges, learn from our experiences, and strive for continuous improvement in all that we do.",
  icon: <AccountabilityIcon size={28} />,
},
{
  title: "Lifelong Learner",
  description: "We foster a culture of continuous learning, encouraging our team to explore new ideas and technologies. Embracing curiosity and innovation, we remain at the forefront of our field, delivering cutting-edge solutions to our clients.",
  icon: <LearnerIcon size={28} />,
},
{
  title: "Teaming",
  description: "We believe in the power of collaboration, working together to achieve common goals. By valuing diverse perspectives and fostering a supportive environment, we unlock collective intelligence and drive exceptional outcomes.",
  icon: <TeamIcon size={28} />,
},
]

const AboutUsPage = () => {
  return (
    <div className="w-full">
      <ImageWithData
        image="https://4uq7g3y1c9.ufs.sh/f/papAmzoxRga8dk1T9R0AFsG7M04KcS3inEojyQeVCNLTmUXR"
        header="Architect Your Tomorrow"
        description="From vision to reality, we provide the expertise and partner with you to shape your future success. "
        ctaText="Schedule Consultation"
        ctaLink="/contact-us"
      />

      {/* Core values section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-header text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl py-3">Core Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="border rounded-xl overflow-hidden py-3">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex-shrink-0">
                      <div className="relative flex items-center justify-center w-14 aspect-square rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-lg">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-xl opacity-50" />
                        {feature.icon}
                        <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-blue-500/30 to-transparent" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-content font-semibold mb-2">{feature.title}</h3>
                    <p className="font-content text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Career section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="font-header text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl">Career and Benefits</h2>
            <p className="md:text-lg text-muted-foreground font-content">
              Join our team and enjoy a range of benefits designed to support your professional and personal growth.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 items-center mt-12">
            <div className="flex justify-center items-center">
              <Image
                src="https://4uq7g3y1c9.ufs.sh/f/papAmzoxRga8deXli2o0AFsG7M04KcS3inEojyQeVCNLTmUX"
                alt="Career benefits illustration"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-xl shadow-black w-4/5"
              />
            </div>

            <div className="space-y-6">
              <h3 className="font-header text-2xl font-medium font-stretch-200%">Why work with us?</h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center w-6 h-6 aspect-square rounded-full bg-green-500 text-black font-semibold z-10"
                  >
                    <Check color="white" size={15} strokeWidth="5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Comprehensive Benefits Coverage </h4>
                    <p className="text-muted-foreground">Medical, dental and vision insurance 100% covered for you. Pay nominal fees for your dependents</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center w-6 h-6 aspect-square rounded-full bg-green-500 text-black font-semibold z-10"
                  >
                    <Check color="white" size={15} strokeWidth="5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Work Life Balance </h4>
                    <p className="text-muted-foreground">Remote work options and flexible hours to maintain work-life balance. Paid Time Off and Maternity Leave. </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center w-6 h-6 aspect-square rounded-full bg-green-500 text-black font-semibold z-10"
                  >
                    <Check color="white" size={15} strokeWidth="5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Professional Development</h4>
                    <p className="text-muted-foreground">Merit-based promotions Cross-functional career growth opportunities. </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center w-6 h-6 aspect-square rounded-full bg-green-500 text-black font-semibold z-10"
                  >
                    <Check color="white" size={15} strokeWidth="5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Competitive Compensation</h4>
                    <p className="text-muted-foreground">Salary packages that recognize your skills and experience. Success Fees for closing deals for all roles. 401K with Company match.</p>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;

