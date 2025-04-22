
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  className?: string;
  cta?: string;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
  className,
  cta = "Get Started"
}: PricingCardProps) {
  return (
    <Card 
      className={cn(
        "border transition-all duration-300",
        highlighted ? 
          "border-accent bg-gradient-to-b from-nextdot-900 to-nextdot-950 shadow-lg shadow-accent/10" : 
          "border-nextdot-800 bg-nextdot-900/50",
        className
      )}
    >
      <CardHeader>
        <CardTitle className="flex items-end gap-2">
          <span className={highlighted ? "text-accent" : ""}>{title}</span>
        </CardTitle>
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Custom" && <span className="ml-1 text-muted-foreground">/project</span>}
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className={cn("h-4 w-4", highlighted ? "text-accent" : "text-muted-foreground")} />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          className={cn(
            "w-full",
            highlighted ? 
              "bg-accent hover:bg-accent/90 text-white" : 
              "bg-nextdot-800 hover:bg-nextdot-700"
          )}
        >
          {cta}
        </Button>
      </CardContent>
    </Card>
  );
}
