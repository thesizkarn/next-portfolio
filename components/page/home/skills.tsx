import { Progress } from "@/components/ui/progress";
import Image from "next/image";

const HomeSkills = () => {
  return (
    <section
      id="skills"
      className="relative container mx-auto px-4 py-12 sm:px-6 md:py-24"
    >
      <div className="flex w-full flex-col items-start gap-8 md:flex-row md:gap-12">
        <div className="flex w-full flex-1 flex-col gap-8 md:gap-16">
          <Image
            src="/developpeur-web-freelance-react-vue-javascript.jpg"
            alt="Compétences en développement web - programation en language HTML, CSS, JavaScript, TypeScript, React, Vue, PHP et Node.js"
            className="w-full rounded-lg shadow-lg"
            width={584}
            height={500}
            loading="lazy"
          />
          <div className="grid grid-cols-3 gap-12 text-center select-none md:gap-16">
            <div className="flex justify-center">
              <span
                className="icon-[cib--html5-shield] size-12 md:size-16"
                title="HTML5"
              />
            </div>
            <div className="flex justify-center">
              <span
                className="icon-[cib--css3-shiled] size-12 md:size-16"
                title="CSS"
              />
            </div>
            <div className="flex justify-center">
              <span
                className="icon-[cib--typescript] size-12 md:size-16"
                title="JavaScript / TypeScript"
              />
            </div>
            <div className="flex justify-center">
              <span
                className="icon-[cib--react] size-12 md:size-16"
                title="React"
              />
            </div>
            <div className="flex justify-center">
              <span
                className="icon-[cib--vue-js] size-12 md:size-16"
                title="Vue.js"
              />
            </div>
            <div className="flex justify-center">
              <span
                className="icon-[cib--wordpress] size-12 md:size-16"
                title="Wordpress"
              />
            </div>
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
          <span className="text-primary uppercase">Depuis 2018</span>
          <h2 className="text-xl font-semibold md:text-3xl lg:text-5xl">
            Compétences en{" "}
            <strong className="text-primary font-semibold">
              développement web
            </strong>
          </h2>

          <p>
            De la création de sites web au design soigné à l&apos;amélioration
            des performances côté serveur, je vous accompagne dans la
            réalisation de vos projets.
          </p>
          <p>
            Mes compétences couvrent notamment le développement front-end avec
            des technologies comme HTML, CSS et JavaScript, ainsi que le
            développement back-end en Node.js et PHP, avec une maîtrise des
            bases de données comme MySQL et PostgreSQL.
          </p>
          <p>
            Découvrez mes domaines d&apos;expertise ci-dessous et voyons
            ensemble comment concrétiser vos idées web !
          </p>

          <div className="flex w-full flex-col gap-4">
            <div>
              <span className="text-muted-foreground text-sm">HTML / CSS</span>
              <Progress value={100} />
            </div>

            <div>
              <span className="text-muted-foreground text-sm">
                JavaScript / TypeScript
              </span>
              <Progress value={100} />
            </div>

            <div>
              <span className="text-muted-foreground text-sm">
                React / Next.js
              </span>
              <Progress value={95} />
            </div>

            <div>
              <span className="text-muted-foreground text-sm">Vue / Nuxt</span>
              <Progress value={85} />
            </div>

            <div>
              <span className="text-muted-foreground text-sm">WordPress</span>
              <Progress value={80} />
            </div>

            <div>
              <span className="text-muted-foreground text-sm">Node.js</span>
              <Progress value={80} />
            </div>

            <div>
              <span className="text-muted-foreground text-sm">
                PHP / Symfony
              </span>
              <Progress value={65} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSkills;
