import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './reusable-components/footer/footer.component';
import { HeaderComponent } from './reusable-components/header/header.component';
import { AuthService } from './authentication/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor( private authService: AuthService ) {}

  ngOnInit() {
    this.authService.autoLogin()

    window.addEventListener('scroll', () => {
      if(window.scrollY==0){
        document.querySelector("header")!.style.height = "6rem"
        document.querySelector("main")!.style.marginTop = "7.5rem"
      }
      else{
        document.querySelector("header")!.style.height = "3rem"
        document.querySelector("main")!.style.marginTop = "4.5rem"
      }
    })
  }

  onActivate() {
    window.scroll({top: 0, left: 0, behavior: 'smooth' });
 }
}