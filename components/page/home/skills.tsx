import { Progress } from "@/components/ui/progress";
import Image from "next/image";

const HomeSkills = () => {
  // Liste des compétences avec id pour aria-labelledby
  const skills = [
    { icon: "icon-[cib--html5-shield]", title: "HTML5", label: "Icône HTML5" },
    { icon: "icon-[cib--css3-shiled]", title: "CSS", label: "Icône CSS" },
    {
      icon: "icon-[cib--typescript]",
      title: "JavaScript / TypeScript",
      label: "Icône TypeScript",
    },
    {
      icon: "icon-[cib--react]",
      title: "React",
      label: "Icône React",
    },
    { icon: "icon-[cib--vue-js]", title: "Vue.js", label: "Icône Vue.js" },
    {
      icon: "icon-[cib--wordpress]",
      title: "Wordpress",
      label: "Icône WordPress",
    },
  ];

  const progressItems = [
    { label: "HTML / CSS", value: 100, id: "progress-html-css" },
    { label: "JavaScript / TypeScript", value: 100, id: "progress-js-ts" },
    { label: "React / Next.js", value: 95, id: "progress-react-next" },
    { label: "Vue / Nuxt", value: 85, id: "progress-vue-nuxt" },
    { label: "WordPress", value: 80, id: "progress-wordpress" },
    { label: "Node.js", value: 80, id: "progress-nodejs" },
    { label: "PHP / Symfony", value: 65, id: "progress-php-symfony" },
  ];

  return (
    <section
      id="skills"
      className="relative container mx-auto px-4 py-12 sm:px-6 md:py-24"
    >
      <div className="flex w-full flex-col items-start gap-8 md:flex-row md:gap-12">
        <div className="flex w-full flex-1 flex-col gap-8 md:gap-16">
          <Image
            src="/developpeur-web-freelance-react-vue-javascript.jpg"
            alt="Compétences en développement web - programmation en langages HTML, CSS, JavaScript, TypeScript, React, Vue, PHP et Node.js"
            className="w-full rounded-lg shadow-lg"
            width={584}
            height={500}
            loading="lazy"
          />
          <div className="grid grid-cols-3 gap-12 text-center select-none md:gap-16">
            {skills.map((skill) => (
              <div key={skill.icon} className="flex justify-center">
                <span
                  className={`${skill.icon} size-12 md:size-16`}
                  role="img"
                  aria-label={skill.label}
                  aria-hidden="true"
                  title={skill.title}
                  tabIndex={-1}
                />
              </div>
            ))}
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
            {progressItems.map((item) => (
              <div key={item.id}>
                <span id={item.id} className="text-muted-foreground text-sm">
                  {item.label}
                </span>
                <Progress value={item.value} aria-labelledby={item.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSkills;
