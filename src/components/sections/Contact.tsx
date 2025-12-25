"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from "lucide-react";
import { contactInfo } from "@/data/contact";

export function Contact() {
  const contactLinks = [
    {
      name: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      icon: Mail,
    },
    {
      name: "GitHub",
      value: "mu7ammad-3li",
      href: "https://github.com/mu7ammad-3li",
      icon: Github,
    },
    {
      name: "LinkedIn",
      value: "muhammad-3lii",
      href: "https://www.linkedin.com/in/muhammad-3lii/",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      value: "@Mu7ammad_3lii",
      href: "https://x.com/Mu7ammad_3lii",
      icon: Twitter,
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Work{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            I&apos;m currently available for remote opportunities, consulting
            projects, and interesting collaborations. Feel free to reach out if
            you have a project in mind or just want to connect.
          </p>

          {/* Location & Availability */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card>
              <CardContent className="flex items-center justify-center gap-3 p-6">
                <MapPin className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">
                    {contactInfo.location}
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center justify-center gap-3 p-6">
                <Phone className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">
                    {contactInfo.phone}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="hover:border-primary/50 hover:shadow-lg transition-all group">
                      <CardContent className="flex items-center gap-4 p-6">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-left flex-1">
                          <p className="font-medium">{link.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {link.value}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button size="lg" asChild>
              <a href={`mailto:${contactInfo.email}`}>
                <Mail className="mr-2 h-5 w-5" />
                Send Me an Email
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
