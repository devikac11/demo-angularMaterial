import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IconComponent } from '../icon/icon.component';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(){
    this.dialog.open(IconComponent);
  }

  ngOnInit() {
  }

}
