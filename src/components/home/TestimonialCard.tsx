import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { Quote } from "lucide-react"

type Props = {
  quote: string
  name: string
  title: string
  company: string
  avatarSrc?: string
  initials: string
}


const TestimonialCard = ({ initials, avatarSrc, company, title, name, quote }: Props) => {
  return (
  <Card className="h-full flex flex-col">
    <CardHeader className="pb-2">
      <Quote className="h-8 w-8 text-primary opacity-80" />
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-muted-foreground font-content tracking-wider leading-6 text-sm italic">{quote}</p>
    </CardContent>
    <CardFooter className="pt-4 border-t flex items-center gap-4">
      <Avatar>
        <AvatarImage src={avatarSrc} alt={name} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium font-header">{name}</p>
        <CardDescription className="font-content">
          {title}, {company}
        </CardDescription>
      </div>
    </CardFooter>
  </Card>
  )
}

export default TestimonialCard;
