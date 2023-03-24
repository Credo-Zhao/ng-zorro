import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Input() show: string;
  constructor() {
    console.log("12121212");
  }

  ngOnInit() {
    console.log("3333");
  }

  public setShowStr() {
    this.show = "1233";
  }
}
