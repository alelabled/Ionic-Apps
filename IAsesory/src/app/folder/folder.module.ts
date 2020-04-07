import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { FolderPageRoutingModule } from "./folder-routing.module";

import { FolderPage } from "./folder.page";

import { ArmarioPage } from "../pages/armario/armario.page";
import { AsesorPage } from "../pages/asesor/asesor.page";
import { TendenciasPage } from "../pages/tendencias/tendencias.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FolderPageRoutingModule],
  declarations: [FolderPage, ArmarioPage, AsesorPage, TendenciasPage],
})
export class FolderPageModule {}
