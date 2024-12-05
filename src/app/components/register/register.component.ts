import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username: string = '';
  nombre: string = '';
  apellido: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden';
      return;
    }

    const user = {
      username: this.username,
      nombre: this.nombre,
      apellido: this.apellido,
      password: this.password,
      roles: ['USER']
    };

    this.authService.register(user).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      error => {
        this.errorMessage = 'Error al registrar usuario';
        console.error('Registro fallido', error);
      }
    )

  }

}
