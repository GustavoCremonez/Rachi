import { Component, Input } from '@angular/core';
import { PlanType } from '../../../models/plan.type';

@Component({
  selector: 'app-plan-card',
  standalone: true,
  imports: [],
  templateUrl: './plan-card.component.html',
  styleUrl: './plan-card.component.scss',
})
export class PlanCardComponent {
  @Input({ required: true }) planData!: PlanType;
}
