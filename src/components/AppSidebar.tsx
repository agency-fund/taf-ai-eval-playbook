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
  Home
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

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
  { title: "Four-Level Framework", url: "/framework", icon: Target },
  { title: "Repeatable Motions", url: "/motions", icon: RefreshCw },
  { title: "Roles & Best Practices", url: "/roles", icon: Users },
  { title: "Case Studies", url: "/case-studies", icon: FileText },
  { title: "Evaluation Methods", url: "/methods", icon: Settings },
  { title: "Glossary", url: "/glossary", icon: BookMarked },
];

const tools = [
  { title: "Framework Builder", url: "/tools/framework-builder", icon: Target },
  { title: "Planning Templates", url: "/tools/planning", icon: Map },
  { title: "Metric Libraries", url: "/tools/metrics", icon: Wrench },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" 
      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  return (
    <Sidebar>
      <SidebarContent className="bg-gradient-to-b from-playbook-gray-light to-background">
        <div className="p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-lg">AI Evaluation</h2>
              <p className="text-sm text-muted-foreground">Living Playbook</p>
            </div>
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Playbook Sections</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sections.map((item) => (
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