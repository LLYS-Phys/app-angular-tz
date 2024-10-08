import { Component, DestroyRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'footer[appFooter]',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
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
}
