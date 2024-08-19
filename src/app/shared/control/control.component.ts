import { AfterContentInit, Component, ContentChild, ElementRef, HostBinding, HostListener, ViewEncapsulation, afterNextRender, afterRender, contentChild, inject, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {
  //@HostBinding('class') className = 'control';
  //@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  
  // @HostListener('click') onClick(){
  //  console.log('clicked')
  //}

  label = input.required<string>();
  private el = inject(ElementRef);

  constructor(){
    afterRender( () =>  {
      console.log('after Render');
    });

    afterNextRender( () => {
      console.log('After Next Render');
    })
  }

  ngAfterContentInit(): void {
    console.log('AFTER CONTENT INIT',this.control()?.nativeElement);
  }

  onClick(){
    console.log('clicked');
    console.log(this.el);
    console.log(this.control());
  }

}
