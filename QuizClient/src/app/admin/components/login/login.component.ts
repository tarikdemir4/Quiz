import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginModel } from '../../models/login.model';
import { HttpService } from '../../../common/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model = signal<LoginModel>(new LoginModel());

  constructor(
    private http: HttpService,
    private router: Router
  ){}

  signIn(){
    this.http.post<string>("Auth/Login", this.model(), (res)=> {
      localStorage.setItem("my-token",res);
      this.router.navigateByUrl("/admin")
    });
  }
}
