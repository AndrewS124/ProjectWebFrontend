import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../componentes/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(public dialog: MatDialog) {}

  openAlert(message: string): void {
    this.dialog.open(AlertComponent, {
      data: { message },
      panelClass: '.alert-dialog'
    });
  }
}
