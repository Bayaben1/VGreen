import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrl: './social.component.css'
})
export class SocialComponent {

  constructor(private router: Router) {}

  openAccordions: { [key: string]: boolean } = {};
  selectedValues: { [key: string]: string } = {};

  questions = [
    {
      id: 'q1',
      number: 1,
      text: 'Health and safety policies',
      options: [
        { label: 'A', value: 'A', text: 'No formal health and safety policy exists.' },
        { label: 'B', value: 'B', text: 'A basic policy exists but is rarely enforced.' },
        { label: 'C', value: 'C', text: 'A documented policy is in place and regularly reviewed.' },
        { label: 'D', value: 'D', text: 'A comprehensive policy is enforced, monitored, and publicly reported.' }
      ]
    },
    {
      id: 'q2',
      number: 2,
      text: 'Diversity and inclusion initiatives',
      options: [
        { label: 'A', value: 'A', text: 'No diversity or inclusion initiatives are in place.' },
        { label: 'B', value: 'B', text: 'Informal efforts exist but no structured program.' },
        { label: 'C', value: 'C', text: 'A formal D&I program with measurable goals is active.' },
        { label: 'D', value: 'D', text: 'D&I is embedded in strategy with transparent reporting.' }
      ]
    },
    {
      id: 'q3',
      number: 3,
      text: 'Policies for employee well-being and work-life balance',
      options: [
        { label: 'A', value: 'A', text: 'No specific well-being policies exist.' },
        { label: 'B', value: 'B', text: 'Some flexible arrangements exist informally.' },
        { label: 'C', value: 'C', text: 'Formal well-being policies are documented and communicated.' },
        { label: 'D', value: 'D', text: 'Comprehensive well-being programs are measured and continuously improved.' }
      ]
    },
    {
      id: 'q4',
      number: 4,
      text: 'Policies to ensure fair working conditions in the supply chain',
      options: [
        { label: 'A', value: 'A', text: 'No supply chain social standards are set.' },
        { label: 'B', value: 'B', text: 'Basic supplier code of conduct exists but is not enforced.' },
        { label: 'C', value: 'C', text: 'Suppliers are audited against social criteria periodically.' },
        { label: 'D', value: 'D', text: 'Full supply chain transparency with corrective action plans.' }
      ]
    },
    {
      id: 'q5',
      number: 5,
      text: 'Engagement with local communities',
      options: [
        { label: 'A', value: 'A', text: 'No community engagement activities.' },
        { label: 'B', value: 'B', text: 'Ad-hoc charitable donations or sponsorships.' },
        { label: 'C', value: 'C', text: 'Structured community programs with defined objectives.' },
        { label: 'D', value: 'D', text: 'Strategic partnerships with measurable community impact.' }
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

  goNext(): void {
    if (this.allQuestionsAnswered()) {
      this.router.navigate(['/governance']); // prochaine étape
    }
  }
}