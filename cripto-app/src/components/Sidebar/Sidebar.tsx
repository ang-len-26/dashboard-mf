import {
  LayoutDashboard,
  BarChart2,
  StretchHorizontal,
  Filter,
  HelpCircle,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./Sidebar.css";

type SidebarProps = {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
  activeSection: string;
  onSelectSection: (id: string) => void;
};

const Sidebar = ({
  expanded,
  setExpanded,
  activeSection,
  onSelectSection,
}: SidebarProps) => {
  const toggleSidebar = () => setExpanded(!expanded);

  const sections = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
    { id: "filter", label: "Filtros", icon: <Filter /> },
    { id: "top", label: "Top Criptomonedas", icon: <BarChart2 /> },
    { id: "compare", label: "Comparar Precios", icon: <StretchHorizontal /> },
    { id: "info", label: "Ayuda", icon: <HelpCircle /> },
    { id: "settings", label: "Configuración", icon: <Settings /> },
  ];

  return (
    <aside className={`sidebar ${expanded ? "expanded" : "collapsed"}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {expanded ? <ChevronLeft /> : <ChevronRight />}
      </div>

      <nav className="sidebar-menu">
        {sections.map((sec) => (
          <button
            key={sec.id}
            className={`sidebar-item ${
              activeSection === sec.id ? "active" : ""
            }`}
            onClick={() => onSelectSection(sec.id)}
            title={!expanded ? sec.label : ""}
          >
            {sec.icon}
            {expanded && <span>{sec.label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
