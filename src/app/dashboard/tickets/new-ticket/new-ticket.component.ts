import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
import { NewTicket, Ticket } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit {
  //@ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  @Output() newTicket = new EventEmitter<NewTicket>();

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT',this.form().nativeElement);
  }

  onSubmit(title:string,request:string) {
    const ticket:NewTicket = {
      title: title,
      request: request,
    }
    this.newTicket.emit(ticket);
    this.form().nativeElement.reset();

  }
}
