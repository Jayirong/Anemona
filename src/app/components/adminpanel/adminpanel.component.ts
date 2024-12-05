import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-adminpanel',
  standalone: true,
  imports: [],
  templateUrl: './adminpanel.component.html',
  styleUrl: './adminpanel.component.scss'
})
export class AdminpanelComponent {
  constructor(private router: Router, private authService: AuthService) {}

  navegarAMantenedorProductos() {
    this.router.navigate(['/admin/mantenedor-productos']);
  }

  navegarAMantenedorUsuarios() {
    this.router.navigate(['/admin/mantenedor-usuarios']);
  }

  navegarAEditarUsuario() {
    this.router.navigate(['/admin/editar-usuario']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
