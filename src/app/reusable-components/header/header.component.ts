import { Component, DestroyRef, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../authentication/auth.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'header[appHeader]',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor( private authService: AuthService, private destroyRef: DestroyRef ){}

  isAuthenticated = false

  ngOnInit() {
    const userSubscription = this.authService.user.subscribe({
      next: (user) => {
        this.isAuthenticated = !!user
      }
    })

    this.destroyRef.onDestroy(() => userSubscription.unsubscribe())
  }

  onLogout() {
    this.authService.logout()
  }
}
