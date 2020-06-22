import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CameraPreview } from "@ionic-native/camera-preview/ngx";

@Component({
  selector: "app-teman-tuli",
  templateUrl: "./teman-tuli.page.html",
  styleUrls: ["./teman-tuli.page.scss"],
})
export class TemanTuliPage implements OnInit {
  selectTabs = "home";
  constructor(private router: Router, private cameraPreview: CameraPreview) {}

  ngOnInit() {}

  segmentChanged(ev: any) {
    console.log("Segment changed", ev["detail"]["value"]);
    if (ev["detail"]["value"] == "camera") {
      console.log("MASUOKK");
    }
  }

  startCamera() {
    this.cameraPreview.stopCamera().then(() => {
      this.cameraPreview.startCamera({
        x: 50,
        y: 50,
        width: 300,
        height: 300,
        toBack: false,
        previewDrag: true,
        tapPhoto: true,
      });
    });
  }

  stopCamera() {
    this.cameraPreview.stopCamera();
  }
}
