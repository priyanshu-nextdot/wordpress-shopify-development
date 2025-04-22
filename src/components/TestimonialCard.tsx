
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  className?: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  avatar,
  className
}: TestimonialProps) {
  return (
    <Card className={cn("border-nextdot-800 bg-nextdot-900/50 backdrop-blur-sm", className)}>
      <CardContent className="p-6">
        <div className="flex flex-col gap-6">
          <div className="relative">
            <div className="absolute -top-2 -left-2 text-4xl text-accent opacity-50">"</div>
            <p className="text-lg relative z-10">
              {quote}
            </p>
            <div className="absolute -bottom-2 -right-2 text-4xl text-accent opacity-50">"</div>
          </div>
          
          <div className="flex items-center gap-4 mt-2">
            <Avatar className="h-10 w-10 border border-nextdot-700">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="bg-nextdot-800 text-primary">
                {name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-muted-foreground">{role}, {company}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
