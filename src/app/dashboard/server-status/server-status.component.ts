import { AfterViewInit, Component, DestroyRef, OnDestroy, OnInit, effect, inject, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, AfterViewInit, OnDestroy {
  //currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  // interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor(){
    effect( (onCleanup) =>  {
      console.log(this.currentStatus());
      console.log(onCleanup)
      onCleanup( () => {
        console.log('CLEANUP')
      })
    })
  }

  ngOnInit(){
    console.log('On INIT');
    const interval = setInterval( () =>{
      const rnd = Math.random(); // 0 - 0.9
      if(rnd < 0.5) {
        //this.currentStatus = 'online';
        this.currentStatus.set('online')
      } else if(rnd < 0.9) {
        //this.currentStatus = 'offline';
        this.currentStatus.set('offline');
      } else {
        //this.currentStatus = 'unknown';
        this.currentStatus.set('unknown')
      }
    
    },5000);

    this.destroyRef.onDestroy( () => {
      clearInterval(interval)
    })

  }

  ngAfterViewInit(): void {
    console.log('After view Init')
  }

  ngOnDestroy(): void {
    console.log('destroy');
    //clearTimeout(this.interval);
  }

}
