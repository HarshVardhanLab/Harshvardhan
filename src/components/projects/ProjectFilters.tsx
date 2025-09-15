import { Badge } from "../common/Badge";

interface ProjectFiltersProps {
  categories: string[];
  technologies: string[];
  selectedCategory: string | null;
  selectedTechnologies: string[];
  onCategoryChange: (category: string | null) => void;
  onTechnologyChange: (technology: string) => void;
}

export function ProjectFilters({
  categories,
  technologies,
  selectedCategory,
  selectedTechnologies,
  onCategoryChange,
  onTechnologyChange,
}: ProjectFiltersProps) {
  return (
    <div className="space-y-6">
      {/* Category Filters */}
      <div className="space-y-3">
        <h3 className="font-medium text-sm">Categories</h3>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedCategory === null ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => onCategoryChange(null)}
          >
            All
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Technology Filters */}
      <div className="space-y-3">
        <h3 className="font-medium text-sm">Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant={selectedTechnologies.includes(tech) ? "tech" : "outline"}
              className="cursor-pointer"
              onClick={() => onTechnologyChange(tech)}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}