import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { Badge } from "../common/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "../common/Card";
import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-surface">
      <Container>
        <SectionHeader
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life"
          className="mb-16"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skills.map((category) => (
            <motion.div key={category.name} variants={itemVariants}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div
                    variants={containerVariants}
                    className="flex flex-wrap gap-2"
                  >
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        custom={index}
                      >
                        <Badge
                          variant="tech"
                          className="hover:bg-primary/20 transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}