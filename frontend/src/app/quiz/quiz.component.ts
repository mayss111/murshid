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
  selectedChoice: string | null = null;
  selectedTrueFalse: boolean | null = null;
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

  get currentQ(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  get questionTypeLabel(): string {
    const type = this.currentQ?.type;
    switch (type) {
      case 'QCM': return 'اختبار متعدّد الخيارات';
      case 'TRUE_FALSE': return 'صح أم خطأ';
      case 'APPLICATION': return 'سؤال تطبيقي';
      case 'ANALYSIS': return 'سؤال تحليلي';
      case 'REFLEXION': return 'سؤال تأمّلي';
      default: return 'سؤال فهم';
    }
  }

  get questionTypeClass(): string {
    return 'qtype-' + (this.currentQ?.type || 'COMPREHENSION').toLowerCase();
  }

  getChoices(): string[] {
    const raw = this.currentQ?.choix;
    if (!raw) return [];
    if (Array.isArray(raw)) return raw.filter(c => typeof c === 'string' && c.trim());
    return String(raw).split('|||').filter(c => c.trim());
  }

  selectChoice(choix: string): void {
    if (this.submitted) return;
    this.selectedChoice = choix;
    this.userAnswer = choix;
  }

  selectTrueFalse(value: boolean): void {
    if (this.submitted) return;
    this.selectedTrueFalse = value;
    this.userAnswer = value ? 'صح' : 'خطأ';
  }

  submitAnswer(): void {
    if (!this.userAnswer.trim()) return;
    this.submitting = true;

    this.quizService.soumettre(this.currentQ.id, this.userAnswer).subscribe({
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
      this.selectedChoice = null;
      this.selectedTrueFalse = null;
      this.submitted = false;
      this.evaluation = '';
    } else {
      this.router.navigate(['/dashboard']);
    }
  }

  isChoiceSelected(choix: string): boolean {
    return this.selectedChoice === choix;
  }

  getEvaluationColor(): string {
    if (this.points >= 8) return 'var(--emerald-glow)';
    if (this.points >= 5) return 'var(--primary-gold)';
    return '#ff8a8a';
  }
}
