"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const schema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  company: z.string().optional(),
  email: z.string().email("Email invalide").nonempty("L'email est requis"),
  tel: z.string().regex(/^\+?[0-9\s-]+$/, "Numéro de téléphone invalide"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      tel: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Votre message a été envoyé avec succès.");
        form.reset();
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue lors de l'envoi du message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative container mx-auto flex flex-col gap-8 px-4 py-10 sm:px-6 md:py-18"
    >
      <div className="flex flex-col gap-12">
        <div className="flex flex-col justify-center gap-4 md:items-center">
          <span className="text-primary uppercase">
            Contacter développeur web Freelance
          </span>
          <h2 className="text-xl font-semibold md:text-3xl lg:text-5xl">
            Prenez contact, devis gratuit !
          </h2>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="w-full flex-1">
            <h3 className="text-primary mb-8 uppercase">Dites-moi tout</h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prénom</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Votre prénom"
                            {...field}
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Votre nom"
                            {...field}
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Entreprise (optionnel)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Votre entreprise"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Votre email"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Téléphone</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Votre numéro de téléphone"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Votre message"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={loading}>
                  {loading ? "Envoi en cours..." : "Envoyer"}
                </Button>
              </form>
            </Form>
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
            <span className="text-primary uppercase">Informations</span>
            <h3 className="text-md font-semibold lg:text-lg">
              Vous pouvez me contacter avec le formulaire ci-présent ou avec les
              informations suivantes :
            </h3>
            <address className="not-italic">
              7 Résidence de Bellevue
              <br />
              41110 Seigy
            </address>
            <p>
              <a
                href="mailto:contact@allainweb.fr"
                className="hover:text-primary hover:underline"
              >
                contact@allainweb.fr
              </a>
            </p>
            <p>
              <a
                href="tel:+33650425221"
                className="hover:text-primary hover:underline"
              >
                +33 6 50 42 52 21
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
