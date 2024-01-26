import { Component, Input } from '@angular/core';
import { AboutType } from '../../../models/about.type';

@Component({
  selector: 'app-about-card',
  standalone: true,
  imports: [],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.scss',
})
export class AboutCardComponent {
  @Input({ required: true }) aboutData!: AboutType;
}
