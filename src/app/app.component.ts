import {Component, OnInit} from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', 'global.scss']
})

export class AppComponent implements OnInit {

  public page = 0;
  socket: SocketIOClient.Socket;

  constructor(){
    this.socket = io.connect('http://192.168.56.101:8888');
  }

  ngOnInit(){
    console.log('ngOnInit excuted');
    this.socket.emit('shellexec', { command: 'cd ~ && ls -a' });
    this.socket.emit('sshAccess', { ip: '192.168.56.102', user : 'root', password : 'network'});
    this.socket.on('shellexecanswer', function (data) {
      if(data === undefined){
        console.log('undefined data :(');
      }else {
        console.log(data);
      }
    });
  }

}
