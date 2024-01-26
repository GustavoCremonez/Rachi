import { Component, OnInit, signal } from '@angular/core';
import { AboutCardComponent } from './about-card/about-card.component';
import { AboutType } from '../../models/about.type';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  data = signal<AboutType[]>([]);

  ngOnInit(): void {
    this.data.set([
      {
        logoURL: '/assets/user.SVG',
        title: 'Crie conexões',
        description: 'Lorem ipsum dolor sit amet, consecteteu.',
      },
      {
        logoURL: '/assets/security.svg',
        title: '100% gratuito',
        description: 'Lorem ipsum dolor sit amet, consecteteu.',
      },
      {
        logoURL: '/assets/happy.svg',
        title: 'Compartilhamento',
        description: 'Lorem ipsum dolor sit amet, consecteteu.',
      },
    ]);
  }
}
