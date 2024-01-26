import { Component, OnInit, signal } from '@angular/core';
import { PlanCardComponent } from './plan-card/plan-card.component';
import { PlanType } from '../../models/plan.type';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [PlanCardComponent],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss',
})
export class PlansComponent implements OnInit {
  planData = signal<PlanType[]>([]);

  ngOnInit(): void {
    this.planData.set([
      {
        title: 'Bronze',
        popular: false,
        value: 28,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.',
      },
      {
        title: 'Prata',
        popular: true,
        value: 57,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.',
      },
      {
        title: 'Ouro',
        popular: false,
        value: 94,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.',
      },
    ]);
  }
}
