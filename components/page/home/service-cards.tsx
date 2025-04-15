import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  SwatchBook,
  AppWindowMac,
  ShoppingCart,
  LucideIcon,
} from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: SwatchBook,
    title: "Web Design",
    description:
      "Un web design créé sur mesure afin de répondre aux attentes du marché, tout en vous démarquant positivement de la concurrence.",
  },
  {
    icon: AppWindowMac,
    title: "Création de site Internet",
    description:
      "La création de site web est indispensable pour améliorer la visibilité de ses activités. Le développement de votre site web est réalisé avec soin et qualité.",
  },
  {
    icon: ShoppingCart,
    title: "Création de site e-commerce",
    description:
      "Lancer votre boutique en ligne c'est l'opportunité de transformer votre vision en une expérience d'achat captivante.",
  },
];

const ServiceCard = ({ icon: Icon, title, description }: Service) => (
  <Card>
    <CardHeader className="gap-6">
      <CardDescription>
        <Icon className="text-primary size-8" />
      </CardDescription>
      <CardTitle className="text-lg font-semibold md:text-xl">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground mt-1">{description}</p>
    </CardContent>
  </Card>
);

const HomeServiceCards = () => {
  return (
    <section
      id="services"
      className="relative container mx-auto px-4 py-12 sm:px-6 md:py-24"
    >
      <div className="grid grid-cols-1 gap-8 select-none md:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default HomeServiceCards;
