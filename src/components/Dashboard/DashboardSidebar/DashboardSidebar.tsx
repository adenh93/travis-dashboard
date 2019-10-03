import * as React from "react";
import { faChartBar, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { Sidebar } from "../../UI";
import { SidebarItem } from "../../UI";

interface Props {
  width: number;
}

export const DashboardSidebar: React.SFC<Props> = ({ width }) => (
  <Sidebar width={width}>
    <SidebarItem icon={faChartBar} text="Analytics" />
    <SidebarItem icon={faCodeBranch} text="Builds" />
  </Sidebar>
);
