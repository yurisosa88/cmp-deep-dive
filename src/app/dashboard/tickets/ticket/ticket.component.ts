import { Component, Input, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  //@Input({required:true}) ticketInput?: Ticket;
  ticketSignal = input.required<Ticket>();
  //detailsVisibility = false;
  detailsVisibility = signal(false);
  markAsComplet = output<void>();

  onToggleDetails() {
    //this.detailsVisibility = !this.detailsVisibility;
    //this.detailsVisibility.set(!this.detailsVisibility())
    this.detailsVisibility.update( (prevState) => !prevState )
  }

  onMarkAsComplet(){
    this.markAsComplet.emit();
  }

}
