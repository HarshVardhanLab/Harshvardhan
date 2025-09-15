import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { projects, getProjectCategories, getProjectTechnologies } from "@/data/projects";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/common/Badge";

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

  const categories = getProjectCategories();
  const technologies = getProjectTechnologies();

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = 
      !selectedCategory || project.category === selectedCategory;

    const matchesTechnologies = 
      selectedTechnologies.length === 0 || 
      selectedTechnologies.some(tech => project.technologies.includes(tech));

    return matchesSearch && matchesCategory && matchesTechnologies;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedTechnologies([]);
  };

  const hasActiveFilters = searchQuery || selectedCategory || selectedTechnologies.length > 0;

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-20 bg-gradient-surface">
        <Container>
          <SectionHeader
            title="My Projects"
            subtitle="A collection of work I've done, from web applications to open source contributions"
          />
        </Container>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-background border-b border-border">
        <Container>
          <div className="space-y-6">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filters */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Categories:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={selectedCategory === null ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(null)}
                >
                  All
                </Badge>
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Technology Filters */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Technologies:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.slice(0, 12).map((tech) => (
                  <Badge
                    key={tech}
                    variant={selectedTechnologies.includes(tech) ? "tech" : "outline"}
                    className="cursor-pointer"
                    onClick={() => {
                      setSelectedTechnologies(prev => 
                        prev.includes(tech) 
                          ? prev.filter(t => t !== tech)
                          : [...prev, tech]
                      );
                    }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Active Filters & Clear */}
            {hasActiveFilters && (
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredProjects.length} of {projects.length} projects
                </p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <Container>
          {filteredProjects.length > 0 ? (
            <ProjectGrid projects={filteredProjects} />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-lg text-muted-foreground">
                No projects found matching your criteria.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 text-primary hover:underline"
              >
                Clear filters to see all projects
              </button>
            </motion.div>
          )}
        </Container>
      </section>
    </div>
  );
}