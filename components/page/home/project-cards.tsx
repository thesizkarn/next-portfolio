import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const HomeProjectCards = () => {
  return (
    <section
      id="projects"
      className="relative container mx-auto px-4 py-12 sm:px-6 md:py-24"
    >
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="text-primary uppercase">
            Développement web Freelance
          </span>
          <h2 className="text-xl font-semibold md:text-3xl lg:text-5xl">
            Dernières réalisations
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 select-none md:grid-cols-3">
          <Card className="p-0 sm:p-0">
            <div>
              <div className="relative h-52 overflow-hidden rounded-t-md">
                <Image
                  src="/developpement-wordpress-site-edas.jpg"
                  alt="Développement d'un site Wordpress pour EDAS Rénovation"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="relative rounded-t-md object-cover transition-transform hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-5 p-6">
                <h3 className="text-lg font-semibold">
                  E.D.A.S - Multi-Services Habitat
                </h3>
                <p className="text-muted-foreground text-sm">
                  Développement d&apos;un site vitrine WordPress d&apos;un
                  artisan à Selles-sur-Cher
                </p>
                <div className="flex gap-2">
                  <Badge className="text-[10px]" variant="outline">
                    WordPress
                  </Badge>
                  <Badge className="text-[10px]" variant="outline">
                    Hébergement
                  </Badge>
                </div>

                <Link
                  href="https://edas-renovation.fr/"
                  className={buttonVariants({ variant: "default" })}
                  target="_blank"
                  rel="noopener"
                  aria-label="Voir le projet E.D.A.S sur un site externe"
                >
                  Voir le projet
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeProjectCards;
