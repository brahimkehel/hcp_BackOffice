import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() _toggleSideBar: EventEmitter<any> = new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  toggleSideBar() {
    this._toggleSideBar.emit();
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('Authentification');
  }
}
