import {Injectable} from '@angular/core';
import 'rxjs/add/operator/catch';
import * as io from 'socket.io-client';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiSshService {

  protected url : string = '172.23.4.92';
  protected port : string = '8888';

  socket: SocketIOClient.Socket;


  public shellAnswer;

  constructor(){
    this.socket = io.connect('http://' + this.url + ':' + this.port);
    this.shellAnswer = new Observable(observer => {
      this.socket.on('data', function(data, res){
        observer.next(data);
      });
    });
  }

  /*test(){
    this.socket.emit('shellexec', { command: 'cd ~ && ls -a' });
    this.socket.emit('sshAccess', { ip: '192.168.56.102', user : 'root', password : 'network'});
    this.socket.on('shellexecanswer', function (data) {
      if(data === undefined){
        console.log('undefined data :(');
      }else {
        console.log(data);
      }
    });
  }*/

  connectSsh(ip, user, password){
    this.socket.emit('connectSSH', {ip: ip, user : user, password : password});
  }

  disconnectSsh(){
    this.socket.emit('disconnectSSH');
  }

 /* getData(){
    this.socket.on('shellexecanswer', function (data) {
      if(data === undefined){
        console.log('undefined data :(');
      }else {
        console.log(data);
      }
    })
  }*/

  sendCommand(command:string){
    this.socket.emit('command', command);
  }

}
