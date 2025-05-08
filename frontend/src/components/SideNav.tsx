import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { navigationConfig } from '@/data/navigationConfig';

export default function SideNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const pathParts = location.pathname.split('/');
  const section = pathParts[1]; // 'software-engineer', etc.

  const links = navigationConfig[section] || [];

  return (
    <aside
      className={`border-r p-4 transition-all ${
        collapsed ? 'w-16' : 'w-64'
      } flex flex-col gap-4`}
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setCollapsed(!collapsed)}
        className="self-end"
      >
        {collapsed ? '»' : '«'}
      </Button>

      {!collapsed && (
        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <div key={link.to}>
              <Button
                variant="ghost"
                onClick={() => navigate(link.to)}
                className={`justify-start w-full ${
                  location.pathname === link.to
                    ? 'font-semibold text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {/* Optional icon */}
                {link.icon && <link.icon className="w-4 h-4 mr-2" />}
                {link.name}
              </Button>

              {/* Example future subLinks rendering */}
              {link.subLinks?.map((subLink) => (
                <Button
                  key={subLink.to}
                  variant="ghost"
                  onClick={() => navigate(subLink.to)}
                  className={`justify-start w-full pl-8 ${
                    location.pathname === subLink.to
                      ? 'font-semibold text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {subLink.name}
                </Button>
              ))}
            </div>
          ))}
        </nav>
      )}
    </aside>
  );
}
