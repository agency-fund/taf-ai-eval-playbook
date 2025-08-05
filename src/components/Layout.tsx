import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Home, Github } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 flex items-center border-b bg-background/80 backdrop-blur-sm sticky top-0 z-40">
            <SidebarTrigger className="ml-4" />
            <div className="flex-1 px-6 flex items-center gap-4">
              <button 
                onClick={() => navigate('/')}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Home className="h-5 w-5 text-taf-blue" />
              </button>
              <img 
                src="/agency-fund-logo.png" 
                alt="The Agency Fund" 
                className="h-8 w-auto"
              />
              <h1 className="text-lg font-semibold">AI Evaluation in the Social Sector</h1>
              
              <div className="ml-auto">
                <a 
                  href="https://github.com/agency-fund/taf-ai-eval-playbook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}