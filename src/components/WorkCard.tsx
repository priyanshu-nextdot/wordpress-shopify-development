
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  link?: string;
  className?: string;
}

export default function WorkCard({
  title,
  description,
  imageUrl,
  category,
  link = "#",
  className
}: WorkCardProps) {
  return (
    <Card className={cn("overflow-hidden border-nextdot-800 group hover-translate", className)}>
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nextdot-950 to-transparent opacity-80"></div>
        <Badge className="absolute top-4 left-4 bg-accent/80 hover:bg-accent text-white border-none">
          {category}
        </Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="font-bold text-xl mb-2 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button
          variant="ghost"
          size="sm"
          className="group/btn"
          asChild
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project 
            <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
