import {AppComponent} from '../app.component';
import {Component, ElementRef, Input, OnChanges, SimpleChange, SimpleChanges, ViewChild} from '@angular/core';
import {ApiSshService} from '../services/api-ssh.service';

@Component({
  selector: 'console-noob',
  templateUrl: './console-noob.component.html',
  styleUrls: ['./console-noob.component.scss', '../global.scss']
})

export class ConsoleNoobComponent implements OnChanges{

  @Input('messageConsoleNoob') message: string;

  constructor(private appComponent:AppComponent,private apiSshService: ApiSshService) {}

  @ViewChild('scrollableShell') private scrollableShell: ElementRef;

  public reponse = [];

  ngOnChanges(changes: SimpleChanges): void {
    const message: SimpleChange = changes.message;
    if(message.currentValue !== message.previousValue){
      console.log('changement de message');
      console.log(message);
      this.consoleLog(message.currentValue);
    }
  }

  scrollToBottomShell(){
    try{
      this.scrollableShell.nativeElement.scrollTop = this.scrollableShell.nativeElement.scrollHeight;
    }catch(err){}
  }

  consoleLog(msg: string){
    this.reponse.push(msg);
  }

}
