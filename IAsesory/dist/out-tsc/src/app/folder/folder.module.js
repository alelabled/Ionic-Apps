import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FolderPageRoutingModule } from './folder-routing.module';
import { FolderPage } from './folder.page';
let FolderPageModule = class FolderPageModule {
};
FolderPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            FolderPageRoutingModule
        ],
        declarations: [FolderPage]
    })
], FolderPageModule);
export { FolderPageModule };
//# sourceMappingURL=folder.module.js.map