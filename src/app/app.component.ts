import { Component, ViewChild } from "@angular/core";
import { ChildComponent } from "./child/child.component";

import { NzDrawerComponent } from "ng-zorro-antd/drawer";
import { take } from "rxjs/operators";
@Component({
  selector: "my-app",
  template: `
    <app-child></app-child>

    <button
      nz-button
      [nzLoading]="isLoading"
      [nzType]="'primary'"
      (click)="btn()"
      style="margin-right: 10px;"
    >
      查询
    </button>

    <nz-modal
      #modal
      [(nzVisible)]="showDialog"
      nzTitle="The first Modal"
      (nzOnCancel)="handleCancel()"
      (nzOnOk)="handleOk()"
    >
      <ng-container *nzModalContent>
        <app-child #childComponent></app-child>
      </ng-container>
    </nz-modal>
  `
})
export class AppComponent {
  showDialog = false;
  @ViewChild("childComponent") private childComponent: ChildComponent;
  @ViewChild("modal") drawerComponent;
  public btn() {
    this.showDialog = true;
    // this.childComponent.show = "22222";
    this.drawerComponent.afterOpen.pipe(take(1)).subscribe(() => {
      //this.changeName();
      this.childComponent.show = "22222";
    });
  }

  public handleCancel() {
    this.showDialog = false;
  }

  public changeName() {
    this.childComponent.show = "22222";
  }
}
