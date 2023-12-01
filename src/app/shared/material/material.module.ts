import { NgModule } from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog'



const material :Array<any>=
 [MatToolbarModule,MatIconModule,MatButtonModule,
 MatSidenavModule,MatDialogModule,



];

@NgModule({
    imports:[...material],
    exports:[...material]
})

export class MaterialModule {
    
}