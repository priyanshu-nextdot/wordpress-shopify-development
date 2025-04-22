
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  className?: string;
  highlight?: boolean;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  features, 
  className,
  highlight = false
}: ServiceCardProps) {
  return (
    <Card 
      className={cn(
        "border border-nextdot-800 transition-all duration-300 hover:border-accent/50 group",
        highlight ? "card-highlight" : "bg-nextdot-900/50",
        className
      )}
    >
      <CardHeader>
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-nextdot-800 mb-4 text-accent group-hover:bg-accent/20 transition-colors">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button variant="ghost" className="group-hover:text-accent">
          Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
}
