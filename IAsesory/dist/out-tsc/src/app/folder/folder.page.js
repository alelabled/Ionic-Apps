import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { AppComponent } from "../app.component";
let FolderPage = class FolderPage {
    constructor(appComponent) {
        this.appComponent = appComponent;
        this.index = 0;
    }
    ngOnInit() {
        this.index = this.appComponent.selectedIndex;
        this.folder = this.appComponent.appPages[this.index].title;
    }
};
FolderPage = tslib_1.__decorate([
    Component({
        selector: "app-folder",
        templateUrl: "./folder.page.html",
        styleUrls: ["./folder.page.scss"]
    }),
    tslib_1.__metadata("design:paramtypes", [AppComponent])
], FolderPage);
export { FolderPage };
//# sourceMappingURL=folder.page.js.map