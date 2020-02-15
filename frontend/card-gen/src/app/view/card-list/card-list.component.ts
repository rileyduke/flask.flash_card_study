import { Component, OnInit } from '@angular/core';
import { Exam } from 'src/app/model/exam';
import { Subscription } from 'rxjs/internal/Subscription';
import { ExamsApiService } from 'src/app/service/exam/exam-api.service';
import { CardTitleComponent } from './card-title/card-title.component';

@Component({
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  examsListSubs: Subscription;
  examsList: Exam[];

  constructor(private examsApi: ExamsApiService) {
    this.examsListSubs = this.examsApi
      .getExams()
      .subscribe(res => {
          this.examsList = res;
        },
        console.error
      );
   }

  ngOnInit() {
  }

}
