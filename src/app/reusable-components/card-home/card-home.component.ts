import { Component, OnInit, input } from '@angular/core';
import { Category } from '../../category.model';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-card-home',
  standalone: true,
  imports: [RouterLink, MatIcon],
  templateUrl: './card-home.component.html',
  styleUrl: './card-home.component.scss'
})
export class CardHomeComponent implements OnInit {
  category = input<Category>()
  class = input<string>()
  description: {id: number, text: string}[] = []

  ngOnInit(): void {
    let descArray = this.category()?.additional_info?.split("\n")
    for (let i=0; i<descArray!.length; i++){
      this.description.push({id: i, text: descArray![i]})
    }
  }
}
