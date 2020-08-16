import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  cancelRegisterMode(registerMode: boolean){
    this.registerMode = registerMode;
  }

  registerToggle() {
    this.registerMode = true;
  }

}
