
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  ngOnInit(): void {
    $('#question1').click(() => {
      $('#question1').toggleClass('border-button-question');
      $('#answer1').slideToggle();
    });
    $('#question2').click(() => {
      $('#question2').toggleClass('border-button-question');
      $('#answer2').slideToggle();
    });
    $('#question3').click(() => {
      $('#question3').toggleClass('border-button-question');
      $('#answer3').slideToggle();
    });
    $('#question4').click(() => {
      $('#question4').toggleClass('border-button-question');
      $('#answer4').slideToggle();
    });
  }   
}
