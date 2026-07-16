import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from './services/quiz.service';
import { Lecon } from '../shared/models/lecon.model';
import { Question } from '../shared/models/question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  leconId: number = 0;
  lecon: Lecon | null = null;
  questions: Question[] = [];
  currentQuestionIndex = 0;
  userAnswer = '';
  submitted = false;
  submitting = false;
  evaluation = '';
  points = 0;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizService
  ) {
  }

  ngOnInit(): void {
    this.leconId = Number(this.route.snapshot.paramMap.get('leconId'));
    if (this.leconId) {
      this.loadQuizData();
    }
  }

  loadQuizData(): void {
    this.quizService.obtenirLeconDetails(this.leconId).subscribe({
      next: (data) => {
        this.lecon = data;
        this.questions = data.questions || [];
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  submitAnswer(): void {
    if (!this.userAnswer.trim()) return;
    const currentQ = this.questions[this.currentQuestionIndex];
    this.submitting = true;

    this.quizService.soumettre(currentQ.id, this.userAnswer).subscribe({
      next: (response) => {
        this.evaluation = response.evaluation;
        this.points = response.points;
        this.submitted = true;
        this.submitting = false;
      },
      error: () => this.submitting = false
    });
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.userAnswer = '';
      this.submitted = false;
      this.evaluation = '';
    } else {
      this.router.navigate(['/dashboard']);
    }
  }

}
