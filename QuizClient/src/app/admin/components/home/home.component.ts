import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexiGridModule } from 'flexi-grid';
import { QuizModel } from '../../models/quiz.model';
import { HttpService } from '../../../common/services/http.service';
import { Router, RouterLink } from '@angular/router';
import { FlexiToastService } from 'flexi-toast';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FlexiGridModule, FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {
  quizzes = signal<QuizModel[]>([]);
  addModel = signal<QuizModel>(new QuizModel());
  updateModel = signal<QuizModel>(new QuizModel());

  constructor(
    private http: HttpService,
    private router: Router,
    private toast: FlexiToastService
  ){
    this.getAll();
  }

  gotoRoom(roomNumber: number){
    this.router.navigateByUrl(`/admin/room/${roomNumber}`)
  }

  getAll(){
    this.http.get<QuizModel[]>("Quizzes/GetAll", (res)=> {
      this.quizzes.set(res);
    });
  }

  create(){
    this.http.post<string>("Quizzes/Create", this.addModel(), (res)=> {
      this.addModel.set(new QuizModel());
      this.getAll();
      this.toast.showToast("Success","Quiz create is successful","success");
    });
  }
}
