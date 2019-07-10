import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ISession {
  email: string,
  nombre: string,
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  _contador: number = 0;
  localStorageName = 'myStorage';
  localStorage: any;

  private dataObs$ = new Subject(); // Observable

  constructor() { }

  incrementar() {
    ++this.contador;
  }
  set contador(x: number) {
    this._contador = x;
  }
  get contador() {
    return this._contador;
  }

  public setSession(session: ISession) {
    localStorage.setItem(this.localStorageName, JSON.stringify(session));
    this.dataObs$.next(session);
  }
  getSession(): ISession {
    return JSON.parse(localStorage.getItem(this.localStorageName)) as ISession;
  }
  validSession() {
    const session: ISession = <ISession>this.getSession();
    if (session != null && session.token) {
      return true;
    } else {
      return false;
    }
  }
  getSession$(): Subject<any> {
    return this.dataObs$;
  }
}
