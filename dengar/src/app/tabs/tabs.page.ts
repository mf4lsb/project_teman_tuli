import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.page.html",
  styleUrls: ["./tabs.page.scss"],
})
export class TabsPage implements OnInit {
  tabTuliIcon: String;
  tabDengarIcon: String;
  tab: String;
  constructor() {}

  ngOnInit() {}

  didChangeTab(ev: any) {
    if (ev["tab"] == "teman-tuli") {
      this.tabTuliIcon = "../../assets/icon/ear-white.svg";
      this.tabDengarIcon = "../../assets/icon/hand-blue.svg";
      this.tab = "teman-tuli";
    } else {
      this.tabTuliIcon = "../../assets/icon/ear-blue.svg";
      this.tabDengarIcon = "../../assets/icon/hand-white.svg";
      this.tab = "teman-dengar";
    }
  }
}
