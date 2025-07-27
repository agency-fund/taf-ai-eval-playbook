import { useState } from "react";
import { 
  BookOpen, 
  Target, 
  RefreshCw, 
  Users, 
  FileText, 
  Settings, 
  BookMarked, 
  Map, 
  Wrench,
  Home,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const sections = [
  { title: "Overview", url: "/", icon: Home },
  { title: "Introduction", url: "/introduction", icon: BookOpen },
  { title: "Repeatable Motions", url: "/motions", icon: RefreshCw },
  { title: "Roles & Best Practices", url: "/roles", icon: Users },
  { title: "Case Studies", url: "/case-studies", icon: FileText },
  { title: "Evaluation Methods", url: "/methods", icon: Settings },
  { title: "Glossary", url: "/glossary", icon: BookMarked },
  { title: "Authors", url: "/authors", icon: Users },
];

const frameworkLevels = [
  { title: "Level 1: Model Evaluation", url: "/level1", icon: Target },
  { title: "Level 2: Product Evaluation", url: "/level2", icon: Target },
  { title: "Level 3: User Evaluation", url: "/level3", icon: Target },
  { title: "Level 4: Impact Evaluation", url: "/level4", icon: Target },
];

const tools = [
  { title: "Framework Builder", url: "/tools/framework-builder", icon: Target },
  { title: "Planning Templates", url: "/tools/planning", icon: Map },
  { title: "Metric Libraries", url: "/tools/metrics", icon: Wrench },
];

export function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [isFrameworkExpanded, setIsFrameworkExpanded] = useState(false);

  const isActive = (path: string) => currentPath === path;
  const isFrameworkActive = currentPath === "/framework" || currentPath.startsWith("/level");
  
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" 
      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  const getSubNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary/5 text-primary font-medium border-r-2 border-primary ml-4" 
      : "hover:bg-muted/30 text-muted-foreground hover:text-foreground ml-4";

  const handleFrameworkClick = () => {
    // Navigate to the main framework page
    navigate("/framework");
    // Toggle the subpages
    setIsFrameworkExpanded(!isFrameworkExpanded);
  };

  return (
    <Sidebar>
      <SidebarContent className="bg-gradient-to-b from-playbook-gray-light to-background">
        <div className="p-6 border-b">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/9a3d750a-2eef-48e5-9815-5a79d2de32ef.png" 
              alt="Agency Fund" 
              className="w-10 h-10 object-contain"
            />
            <div>
              <h2 className="font-bold text-lg">AI Evaluation</h2>
              <p className="text-sm text-muted-foreground">A Living Playbook by the Agency Fund</p>
            </div>
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Playbook Sections</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sections.slice(0, 2).map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => getNavCls({ isActive })}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              {/* Four-Level Framework Toggle */}
              <SidebarMenuItem>
                <div className="space-y-1">
                  <SidebarMenuButton 
                    onClick={handleFrameworkClick}
                    className={`transition-all duration-300 ease-in-out ${
                      isFrameworkActive 
                        ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" 
                        : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Target className="h-4 w-4 transition-transform duration-300" />
                    <span>Four-Level Framework</span>
                    <div className="ml-auto transition-all duration-300 ease-in-out">
                      {isFrameworkExpanded ? (
                        <ChevronDown className="h-4 w-4 transform rotate-180 transition-transform duration-300" />
                      ) : (
                        <ChevronRight className="h-4 w-4 transform rotate-0 transition-transform duration-300" />
                      )}
                    </div>
                  </SidebarMenuButton>
                  
                  {/* Framework Subpages with Animation */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isFrameworkExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <div className="space-y-1 pt-1">
                      {frameworkLevels.map((level, index) => (
                        <div
                          key={level.title}
                          className="transition-all duration-300 ease-in-out"
                          style={{
                            animationDelay: `${index * 100}ms`,
                            transform: isFrameworkExpanded ? 'translateX(0)' : 'translateX(-10px)',
                            opacity: isFrameworkExpanded ? 1 : 0
                          }}
                        >
                          <SidebarMenuButton asChild>
                            <NavLink 
                              to={level.url} 
                              className={({ isActive }) => getSubNavCls({ isActive })}
                            >
                              <span>{level.title}</span>
                            </NavLink>
                          </SidebarMenuButton>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SidebarMenuItem>

              {sections.slice(2).map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => getNavCls({ isActive })}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Interactive Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {tools.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => getNavCls({ isActive })}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}