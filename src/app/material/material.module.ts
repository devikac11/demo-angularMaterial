import { NgModule } from '@angular/core';
import {MatButtonModule, MatButtonToggleModule, MatIconModule, MatBadgeModule, MatProgressSpinnerModule, MatProgressBarModule, MatChipsModule,
   MatMenuModule, MatToolbarModule, MatSidenavModule, MatListModule, MatDividerModule, MatGridListModule, MatExpansionModule, MatCardModule,
    MatTabsModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatAutocomplete, MatAutocompleteModule, MatCheckboxModule,
     MatRadioModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatSliderModule,
     MatSlideToggleModule,
     MatTooltipModule,
     MatSnackBarModule,
     MatDialogModule,
     MatTableModule,
     MatSortModule,
     MatPaginatorModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

const  MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatChipsModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatInputModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule

];


@NgModule({
  
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
