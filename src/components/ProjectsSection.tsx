import officeImg from "@/assets/project-office.jpg";
import warehouseImg from "@/assets/project-warehouse.jpg";
import residentialImg from "@/assets/project-residential.jpg";
import roadsImg from "@/assets/project-roads.jpg";

const projects = [
  { image: officeImg, title: "Commercial Office Block", category: "Building Construction" },
  { image: warehouseImg, title: "Industrial Warehouse", category: "Industrial" },
  { image: residentialImg, title: "Luxury Residential Estate", category: "Residential" },
  { image: roadsImg, title: "Highway Construction", category: "Civil Engineering" },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
          Our Portfolio
        </p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground">
          Projects That Define Skylines
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {projects.map((project) => (
          <div key={project.title} className="group relative rounded-lg overflow-hidden aspect-[3/4]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/90 via-slate-dark/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-primary text-xs font-semibold tracking-wider uppercase mb-1">{project.category}</p>
              <h3 className="font-heading font-bold text-slate-dark-foreground text-lg">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
