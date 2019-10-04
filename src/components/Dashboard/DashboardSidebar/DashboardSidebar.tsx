import * as React from "react";
import { faChartBar, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { Sidebar } from "../../UI";
import { SidebarItem } from "../../UI";

interface Props {
  width: number;
}

export const DashboardSidebar: React.SFC<Props> = ({ width }) => (
  <Sidebar width={width}>
    <SidebarItem icon={faCodeBranch} text="Builds" route="/builds" />
    <SidebarItem icon={faChartBar} text="Analytics" route="/analytics" />
  </Sidebar>
);
