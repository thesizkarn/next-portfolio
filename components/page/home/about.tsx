import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { SquarePen } from "lucide-react";

export default function HomeAbout() {
  return (
    <section
      id="about"
      className="relative container mx-auto px-4 py-12 sm:px-6 md:py-24"
    >
      <div className="flex w-full flex-col items-center gap-8 md:flex-row md:gap-12">
        <div className="flex-1">
          <Image
            src="/allain-web-developpeur-freelance-blois-1168x1000.jpg"
            alt="Julien Allain - Développeur web"
            width={584}
            height={500}
            className="rounded-lg"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
          <span className="text-primary uppercase">À Propos</span>
          <h2 className="text-xl font-semibold md:text-3xl lg:text-5xl">
            Julien Allain,
            <br />
            <strong className="text-primary font-semibold">
              Développeur web{" "}
            </strong>
            <br />
            freelance à Blois
          </h2>
          <p className="text-base md:text-lg">
            Sites vitrines et boutiques e-commerce, entièrement responsive et
            conçus pour s&apos;adapter à tous les formats d&apos;écran, font
            partie des solutions de développement web que je propose à mes
            clients.
          </p>
          <p className="text-base md:text-lg">
            Que vous soyez artisan, PME ou start-up, je vous accompagne dans la
            concrétisation de votre projet de création de site internet.
            N&apos;hésitez pas à me contacter pour discuter de votre projet web
            et obtenir un devis gratuit et détaillé.
          </p>
          <Link
            href="#contact"
            className={buttonVariants({ variant: "default" })}
          >
            <SquarePen />
            Contactez-moi
          </Link>
        </div>
      </div>
    </section>
  );
}
