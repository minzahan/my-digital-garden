import type { LucideIcon } from 'lucide-react'; // Optional if you want icons
import { User, Code, Briefcase } from 'lucide-react';
type NavLink = {
  name: string;
  to: string;
  icon?: LucideIcon; // Optional now, ready for future
  subLinks?: NavLink[]; // For nested navigation if needed
};

export const navigationConfig: Record<string, NavLink[]> = {
  'software-engineer': [
    { name: 'About Me', to: '/software-engineer/about', icon: User },
    { name: 'Tech Stack', to: '/software-engineer/tech-stack', icon: Code },
    { name: 'Projects', to: '/software-engineer/projects', icon: Briefcase },
  ],
  'dev-mode-90': [
    { name: 'Overview', to: '/dev-mode-90' },
    // Example nested sub-links (future-proof)
    // {
    //   name: 'Resources',
    //   to: '#',
    //   subLinks: [
    //     { name: 'Daily Plan', to: '/dev-mode-90/daily-plan' },
    //     { name: 'Progress Tracker', to: '/dev-mode-90/progress' },
    //   ]
    // }
  ],
};
