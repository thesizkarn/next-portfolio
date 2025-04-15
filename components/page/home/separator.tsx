import { buttonVariants } from "@/components/ui/button";
import { SquarePen } from "lucide-react";
import Link from "next/link";

const HomeSeparator = () => {
  return (
    <section className="relative mx-auto border-y py-12 md:py-24">
      <h2 className="text-center text-xl font-semibold md:text-3xl lg:text-5xl lg:leading-[4rem]!">
        Envie de concrétiser votre projet ?<br />
        Je m&apos;occupe du{" "}
        <strong className="text-primary font-semibold">
          développement web
        </strong>{" "}
        de votre site !
      </h2>
      <div className="mt-12 flex justify-center">
        <Link
          href="#contact"
          className={buttonVariants({ variant: "default" })}
        >
          <SquarePen />
          Contactez-moi
        </Link>
      </div>
    </section>
  );
};

export default HomeSeparator;
