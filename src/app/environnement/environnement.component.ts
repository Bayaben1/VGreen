import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-environnement',
  templateUrl: './environnement.component.html',
  styleUrl: './environnement.component.css'
})
export class EnvironnementComponent {

  constructor(private router: Router) {}

  openAccordions: { [key: string]: boolean } = {};
  selectedValues: { [key: string]: string } = {};

  questions = [
    {
      id: 'q1',
      number: 1,
      text: 'Strategies to reduce greenhouse gas emissions',
      options: [
        { label: 'A', value: 'A', text: 'No Specific Measures: Currently, the company has no specific measures in place to address greenhouse gas emissions.' },
        { label: 'B', value: 'B', text: 'Awareness without Action: The company acknowledges the importance of reducing greenhouse gas emissions but has not yet implemented concrete measures for reduction.' },
        { label: 'C', value: 'C', text: 'Carbon Footprint Assessment Only: The company has methods to assess its carbon footprint but lacks active measures to reduce these emissions.' },
        { label: 'D', value: 'D', text: 'Offset Actions without Reduction Strategy: The company engages in actions to offset greenhouse gas emissions; however, it lacks a defined strategy to reduce emissions at the source.' },
        { label: 'E', value: 'E', text: 'Comprehensive Reduction and Offset Strategy: The company has a clear and well-defined strategy to calculate, reduce, and offset greenhouse gas emissions.' }
      ]
    },
    {
      id: 'q2',
      number: 2,
      text: 'Waste management and recycling practices',
      options: [
        { label: 'A', value: 'A', text: 'No Policy or Practice: Currently, the company lacks any policy or practice for waste management and recycling.' },
        { label: 'B', value: 'B', text: 'Awareness without Action: The company acknowledges the importance of waste management and recycling but has not implemented concrete measures to promote these practices.' },
        { label: 'C', value: 'C', text: 'Basic Measures without Policy: Waste sorting containers are available within the company, but there is no defined policy to minimize waste generation.' },
        { label: 'D', value: 'D', text: 'Active Recycling and Reduction Policy: The company actively engages in recycling and has policies aimed at reducing waste generation.' },
        { label: 'E', value: 'E', text: 'Comprehensive Zero Waste Policy: The company has adopted a zero waste policy, with concrete actions to reduce, recycle, and responsibly dispose of waste.' }
      ]
    },
    {
      id: 'q3',
      number: 3,
      text: 'Development of renewable energy',
      options: [
        { label: 'A', value: 'A', text: 'No Steps Taken: The company has not yet initiated any renewable energy projects or awareness campaigns.' },
        { label: 'B', value: 'B', text: 'Initial Awareness: The company recognizes the importance of energy efficiency and may have conducted internal campaigns or workshops.' },
        { label: 'C', value: 'C', text: 'Limited Implementation: The company has taken steps towards energy efficiency, such as installing solar panels, but these are not yet part of a comprehensive strategy.' },
        { label: 'D', value: 'D', text: 'Established Policy with Specific Goals: The company has a policy for energy efficiency with measurable objectives.' },
        { label: 'E', value: 'E', text: 'Comprehensive Integration: The company has fully integrated renewable energy across all operations with ambitious targets.' }
      ]
    },
    {
      id: 'q4',
      number: 4,
      text: 'Water management',
      options: [
        { label: 'A', value: 'A', text: 'No Specific Measures: The company has not yet implemented specific measures to manage its water consumption.' },
        { label: 'B', value: 'B', text: 'Awareness without Action: The company promotes awareness of water conservation but has not implemented concrete measures.' },
        { label: 'C', value: 'C', text: 'Initial Efforts: The company has begun to implement water-saving measures but lacks a broader policy.' },
        { label: 'D', value: 'D', text: 'Formal Policy and Objectives: The company has a formal water management policy with clear objectives.' },
        { label: 'E', value: 'E', text: 'Comprehensive Management: The company fully manages and monitors its water consumption with advanced techniques.' }
      ]
    },
    {
      id: 'q5',
      number: 5,
      text: 'Actions to preserve biodiversity and the environment',
      options: [
        { label: 'A', value: 'A', text: 'No Specific Measures: The company has not yet implemented specific measures to preserve biodiversity.' },
        { label: 'B', value: 'B', text: 'Awareness without Action: The company promotes awareness but lacks concrete actions.' },
        { label: 'C', value: 'C', text: 'Initial Efforts: The company has begun efforts but without a defined policy.' },
        { label: 'D', value: 'D', text: 'Formal Policy and Objectives: The company has clear objectives and a formal strategy to preserve biodiversity.' },
        { label: 'E', value: 'E', text: 'Comprehensive Management: The company fully integrates biodiversity conservation in all operations.' }
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

  // ← Remplace submitForm() par goNext()
  goNext(): void {
    if (this.allQuestionsAnswered()) {
      this.router.navigate(['/social']);
    }
  }
}