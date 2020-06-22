import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";
import { TemanDengarPageModule } from "../teman-dengar/teman-dengar.module";
import { TemanTuliPageModule } from "../teman-tuli/teman-tuli.module";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "teman-tuli",
        loadChildren: () =>
          import("../teman-tuli/teman-tuli.module").then(
            (m) => m.TemanTuliPageModule
          ),
      },
      {
        path: "teman-dengar",
        loadChildren: () =>
          import("../teman-dengar/teman-dengar.module").then(
            (m) => m.TemanDengarPageModule
          ),
      },
    ],
  },
  {
    path: "",
    redirectTo: "teman-tuli",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
