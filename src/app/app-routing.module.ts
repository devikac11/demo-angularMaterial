import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypographyComponent } from './typography/typography.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MenuComponent } from './menu/menu.component';
import { GridlistComponent } from './gridlist/gridlist.component';
import { ListComponent } from './list/list.component';
import { ExpansionPannelComponent } from './expansion-pannel/expansion-pannel.component';
import { CardsComponent } from './cards/cards.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DialogComponent } from './dialog/dialog.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ScrollingComponent } from './scrolling/scrolling.component';
import { TooltipComponent } from './tooltip/tooltip.component';



const routes: Routes = [
  {path:'typo', component:TypographyComponent},
  {path:'button', component:ButtonComponent},
  {path:'buttonToggle', component:ButtonToggleComponent},
  {path:'icons', component:IconComponent},
  {path:'badges', component:BadgesComponent},
  {path:'progressSpinner', component:ProgressSpinnerComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'sidenav',component:SidenavComponent},
  {path:'menu',component:MenuComponent},
  {path:'list',component:ListComponent},
  {path:'gridList', component:GridlistComponent},
  {path:'expansionPannel',component:ExpansionPannelComponent},
  {path:'cards',component:CardsComponent},
  {path:'tabs',component:TabsComponent},
  {path:'stepper',component:StepperComponent},
  {path:'input',component:InputComponent},
  {path:'select',component:SelectComponent},
  {path:'autocomplete',component:AutocompleteComponent},
  {path:'radiobutton',component:RadiobuttonComponent},
  {path:'datepicker',component:DatePickerComponent},
  {path:'tooltip',component:TooltipComponent},
  {path:'snackbar',component:SnackbarComponent},
  {path:'dialog',component:DialogComponent},
  {path:'datatable',component:DatatableComponent},
  {path:'scrolling',component:ScrollingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
