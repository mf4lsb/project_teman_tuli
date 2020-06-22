import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "tabs/teman-tuli",
    pathMatch: "full",
  },
  {
    path: "tabs",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "teman-dengar",
    loadChildren: () =>
      import("./teman-dengar/teman-dengar.module").then(
        (m) => m.TemanDengarPageModule
      ),
  },
  {
    path: "teman-tuli",
    loadChildren: () =>
      import("./teman-tuli/teman-tuli.module").then(
        (m) => m.TemanTuliPageModule
      ),
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
