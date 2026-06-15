import { Turtle, Waves, Flower2, type LucideIcon } from 'lucide-react';
import type { Project } from '@/types';

const iconMap: Record<string, LucideIcon> = {
  Turtle,
  Waves,
  Flower2,
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const Icon = iconMap[project.iconName] || Waves;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group">
      <div className={`h-32 bg-gradient-to-br ${project.colorFrom} ${project.colorTo} flex items-center justify-center relative overflow-hidden`}>
        <Icon
          size={64}
          className="text-white/90 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_60%)]" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-3">
          {project.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="grid grid-cols-3 gap-3 pt-5 border-t border-slate-100">
          {project.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-ocean-700">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
