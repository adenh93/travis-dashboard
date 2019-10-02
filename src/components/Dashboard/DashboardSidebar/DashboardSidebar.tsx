import * as React from "react";
import { Sidebar } from "../../UI";

interface Props {
  width: number;
}

export const DashboardSidebar: React.SFC<Props> = ({ width }) => (
  <Sidebar width={width}></Sidebar>
);
