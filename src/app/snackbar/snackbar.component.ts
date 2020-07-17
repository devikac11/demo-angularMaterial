import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar : MatSnackBar) { }

  openSnackBar(message ,action) {
    this.snackBar.open(message,action);
  }


  openSnackBarrr(message ,action) {
    let snackBarRef = this.snackBar.open(message,action);

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snack bar was dismissed')
    });

   
    snackBarRef.onAction().subscribe(() => {
      console.log('The snack bar action was triggered');
    });
    

  }
  ngOnInit() {
  }

}
