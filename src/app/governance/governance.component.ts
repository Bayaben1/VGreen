import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-governance',
  templateUrl: './governance.component.html',
  styleUrl: './governance.component.css'
})
export class GovernanceComponent {

  constructor(private router: Router) {}

  openAccordions: { [key: string]: boolean } = {};
  selectedValues: { [key: string]: string } = {};

  questions = [
    {
      id: 'q1',
      number: 1,
      text: 'Corporate governance policies and practices',
      options: [
        { label: 'A', value: 'A', text: 'No formal governance policies exist.' },
        { label: 'B', value: 'B', text: 'Basic governance policies exist but are not enforced.' },
        { label: 'C', value: 'C', text: 'Documented governance policies are reviewed regularly.' },
        { label: 'D', value: 'D', text: 'Comprehensive governance framework with board oversight and public reporting.' }
      ]
    },
    {
      id: 'q2',
      number: 2,
      text: 'Transparency and integrity',
      options: [
        { label: 'A', value: 'A', text: 'No transparency or reporting mechanisms in place.' },
        { label: 'B', value: 'B', text: 'Some internal reporting exists but is not publicly disclosed.' },
        { label: 'C', value: 'C', text: 'Regular public disclosures are made on key business metrics.' },
        { label: 'D', value: 'D', text: 'Full transparency with audited reports and stakeholder engagement.' }
      ]
    },
    {
      id: 'q3',
      number: 3,
      text: 'Conflict of interest prevention and responsible management',
      options: [
        { label: 'A', value: 'A', text: 'No conflict of interest policy exists.' },
        { label: 'B', value: 'B', text: 'An informal policy exists but is rarely enforced.' },
        { label: 'C', value: 'C', text: 'A formal conflict of interest policy is documented and communicated.' },
        { label: 'D', value: 'D', text: 'Robust policy with regular training, monitoring and disclosure requirements.' }
      ]
    },
    {
      id: 'q4',
      number: 4,
      text: 'Business ethics and responsibility',
      options: [
        { label: 'A', value: 'A', text: 'No code of ethics or conduct exists.' },
        { label: 'B', value: 'B', text: 'A basic code of conduct exists but is not actively promoted.' },
        { label: 'C', value: 'C', text: 'A code of ethics is in place with employee training.' },
        { label: 'D', value: 'D', text: 'Comprehensive ethics program embedded in company culture with reporting mechanisms.' }
      ]
    },
    {
      id: 'q5',
      number: 5,
      text: 'Stakeholder involvement in decision-making processes',
      options: [
        { label: 'A', value: 'A', text: 'Stakeholders are not involved in decision-making.' },
        { label: 'B', value: 'B', text: 'Occasional stakeholder consultations take place.' },
        { label: 'C', value: 'C', text: 'Structured stakeholder engagement processes are in place.' },
        { label: 'D', value: 'D', text: 'Stakeholders are systematically involved with transparent feedback loops.' }
      ]
    }
  ];

  toggleAccordion(questionId: string): void {
    this.openAccordions = { ...this.openAccordions, [questionId]: !this.openAccordions[questionId] };
  }

  isOpen(questionId: string): boolean {
    return !!this.openAccordions[questionId];
  }

  selectOption(questionId: string, value: string): void {
    this.selectedValues[questionId] = value;
  }

  isSelected(questionId: string, value: string): boolean {
    return this.selectedValues[questionId] === value;
  }

  hasAnswer(questionId: string): boolean {
    return !!this.selectedValues[questionId];
  }

  allQuestionsAnswered(): boolean {
    return this.questions.every(q => this.hasAnswer(q.id));
  }

  submit(): void {
    if (this.allQuestionsAnswered()) {
      // Naviguer vers la page résultats
      this.router.navigate(['/results']);
    }
  }
}