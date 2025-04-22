
import { Card, CardContent } from "@/components/ui/card";

interface TechItemProps {
  name: string;
  icon: string;
}

const techItems = [
  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Shopify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg" },
  { name: "WooCommerce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
];

function TechItem({ name, icon }: TechItemProps) {
  return (
    <div className="flex flex-col items-center gap-2 px-6 py-4 hover-translate">
      <div className="w-12 h-12 flex items-center justify-center">
        <img src={icon} alt={name} className="w-10 h-10" />
      </div>
      <span className="text-sm">{name}</span>
    </div>
  )
}

export default function TechStack() {
  return (
    <Card className="border-nextdot-800 bg-nextdot-900/50 backdrop-blur-sm overflow-hidden">
      <CardContent className="p-0">
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-10 gap-2 divide-x divide-y sm:divide-y-0 divide-nextdot-800">
          {techItems.map((tech) => (
            <TechItem key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
