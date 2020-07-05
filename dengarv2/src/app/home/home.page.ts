import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSlides } from "@ionic/angular";
import {
  CameraPreview,
  CameraPreviewOptions,
} from "@ionic-native/camera-preview/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  @ViewChild("slides", { static: true }) slider: IonSlides;

  segment = 0;

  cameraOpts: CameraPreviewOptions = {
    x: 0,
    y: 50,
    camera: "rear",
    width: window.screen.width,
    height: 400,
    toBack: false,
  };

  constructor(private cameraPreview: CameraPreview) {}

  ngOnInit() {
    if (this.segment == 0) {
      this.startCamera();
    }
  }

  async segmentChanged(ev: any) {
    await this.slider.slideTo(this.segment);
    if (ev["detail"]["value"] == "0") {
      console.log("camera");
      this.startCamera();
    } else {
      console.log("stop");
      this.cameraPreview.stopCamera();
    }
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  async startCamera() {
    const result = await this.cameraPreview.startCamera(this.cameraOpts);
    console.log(result);
  }
}
