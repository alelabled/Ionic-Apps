import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FolderPage } from './folder.page';
const routes = [
    {
        path: '',
        component: FolderPage
    }
];
let FolderPageRoutingModule = class FolderPageRoutingModule {
};
FolderPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], FolderPageRoutingModule);
export { FolderPageRoutingModule };
//# sourceMappingURL=folder-routing.module.js.map