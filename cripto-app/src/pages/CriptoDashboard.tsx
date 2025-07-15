import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import {
  DashboardOverview,
  TopCryptos,
  ComparePrices,
  CryptoFilter,
  InfoHelp,
  SettingsPanel,
} from "../components/sections";

interface Props {
  isSidebarExpanded: boolean;
  setIsSidebarExpanded: (value: boolean) => void;
}

const CriptoDashboard = ({
  isSidebarExpanded,
  setIsSidebarExpanded,
}: Props) => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderMainSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardOverview />;
      case "top":
        return <TopCryptos />;
      case "compare":
        return <ComparePrices />;
      default:
        return <DashboardOverview />;
    }
  };

  const renderModal = () => {
    switch (activeSection) {
      case "filter":
        return <CryptoFilter onClose={() => setActiveSection("dashboard")} />;
      case "info":
        return <InfoHelp onClose={() => setActiveSection("dashboard")} />;
      case "settings":
        return <SettingsPanel onClose={() => setActiveSection("dashboard")} />;
      default:
        return null;
    }
  };

  const isModalSection = ["filter", "info", "settings"].includes(activeSection);

  return (
    <>
      <div className={`dashboard-wrapper ${isModalSection ? "blurred" : ""}`}>
        <Sidebar
          expanded={isSidebarExpanded}
          setExpanded={setIsSidebarExpanded}
          activeSection={activeSection}
          onSelectSection={(id) => setActiveSection(id)}
        />
        <div>{renderMainSection()}</div>
      </div>

      {isModalSection && renderModal()}
    </>
  );
};

export default CriptoDashboard;
