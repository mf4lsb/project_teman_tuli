import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSlides } from "@ionic/angular";
import {
  CameraPreview,
  CameraPreviewOptions,
} from "@ionic-native/camera-preview/ngx";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  @ViewChild("slides", { static: true }) slider: IonSlides;

  temanDengarForm: FormGroup;

  msg = "";
  letters = null;

  segment = 0;

  result = null;

  cameraOpts: CameraPreviewOptions = {
    x: 0,
    y: 50,
    camera: "rear",
    width: window.screen.width,
    height: 400,
    toBack: false,
  };

  subscribe: any;
  constructor(
    private cameraPreview: CameraPreview,
    public formBuilder: FormBuilder,
    public platfomr: Platform
  ) {
    this.temanDengarForm = this.formBuilder.group({
      message: "",
    });

    // // print Each of this object
    // const msg = this.temanDengarForm.controls.message;
    // msg.valueChanges.subscribe((value: string) => {
    //   console.log(`Entered name is ${value}`);
    // });

    this.subscribe = this.platfomr.backButton.subscribeWithPriority(
      666666,
      () => {
        if (this.constructor.name == "HomePage") {
          if (window.confirm("Keluar aplikasi?")) {
            navigator["app"].exitApp();
          }
        }
      }
    );
  }

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

  submitForm() {
    this.msg = this.temanDengarForm.value["message"];

    // //Text to each letter array
    // this.letters = this.msg.split("");
    // console.log(this.letters);

    var temp = this.msg.toLowerCase();
    for (let i = 1; i <= temp.length; i++) {
      setTimeout(() => {
        this.result = temp.charAt(i - 1);
      }, i * 1000);
    }
  }
}
