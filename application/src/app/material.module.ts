import { NgModule } from  '@angular/core';
import {MatNativeDateModule,MatCardModule,MatIconModule,MatCheckboxModule,MatButtonModule, MatToolbarModule, MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,} from  '@angular/material';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
imports: [MatButtonModule,MatToolbarModule,MatIconModule, MatCardModule,
    MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule,
     MatToolbarModule,FormsModule, MatCardModule,
     MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule
],
exports:[MatButtonModule,MatToolbarModule,MatIconModule, MatCardModule,
    MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule,
     MatToolbarModule,FormsModule, MatCardModule,
     MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule
],
 
})
 
export  class  MyMaterialModule { }