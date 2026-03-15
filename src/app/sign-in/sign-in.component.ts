import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  constructor(private router: Router) {}

  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  tableRows = [
    { name: 'Energy',        bar: '80%', val: '1' },
    { name: 'Fuel',          bar: '55%', val: '2' },
    { name: 'Air travel',    bar: '40%', val: '1' },
    { name: 'Freights',      bar: '30%', val: '2' },
    { name: 'Consumables',   bar: '10%', val: '2' },
    { name: 'Immobilization',bar: '20%', val: '2' },
  ];

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  signIn(): void {
    // Ajoute ici ta logique d'authentification
    // Pour l'instant on redirige vers environnement
    this.router.navigate(['/environnement']);
  }
}