import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { NewTicket, Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent,TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets:Ticket[] = [];

  onAddTicket(newTicket:NewTicket){
    const addNewTicket:Ticket = {
      ...newTicket,
      id: Math.random().toString(),
      status: 'open'
    }
    this.tickets = [addNewTicket,...this.tickets];
    console.log(this.tickets)
  }

  onCloseTicket(id:string){
    this.tickets = this.tickets.map( (ticket) => {
      if(ticket.id === id){
        return {
          ...ticket,
          status: 'close'
        }
      }
      return ticket;
    });
  }
}
