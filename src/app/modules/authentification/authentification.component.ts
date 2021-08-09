import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  loading: boolean = false;
  errText: string = "";

  constructor(public authService: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) this.router.navigateByUrl('hcp');
  }

  onSubmit(form: NgForm) {
    const login$ = this.authService.login(form);
    login$.subscribe(
      (data: any) => {
        this.loading = true
        console.log(data);
        localStorage.setItem('token', data.token);
      },
      (err:any) => {
        if (err.status == 400) {
          this.errText = err.error;
          this._snackBar.open(err.error);
          setTimeout(() => {
            this._snackBar.dismiss();
          }, 3000);
        }
      },
      () => {
        this.loading = false;
        console.log('completed');
        this.router.navigateByUrl('hcp');
      }
    )
  }
}
