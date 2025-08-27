import { countryWise } from "@/lib/data";
import { Card, CardContent } from "./ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client"; 

export default function CountrywiseSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Animate Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-10 text-center">
            Check Country wise Air Quality Index and Air Pollution
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {countryWise.map((country, index) => (
            <motion.div
              key={country.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/${country.slug}`}>
                <Card className="cursor-pointer group overflow-hidden hover:shadow-lg transition-all duration-300 bg-card backdrop-blur-xs p-0">
                  <div className="relative w-full h-40 ">
                    <Image
                      src={country.image}
                      alt={country.name}
                     fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="flex  items-center justify-between  p-3">
                    <span className="text-lg font-medium group-hover:text-primary underline">{country.name}</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 text-primary" />
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
