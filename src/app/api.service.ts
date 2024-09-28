import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public conn: any;

  constructor(private http: HttpClient) {}

  public fetch(): void {
    this.http
      .get(
        'https://hackyeah2024app-dua2ebdzfbh0exch.westeurope-01.azurewebsites.net/Energy/getEnergy?userName=userName'
      )
      .subscribe((res) => console.log(res));
  }

  public open(): void {
    this.conn = new signalR.HubConnectionBuilder()
      .withUrl(
        'https://hackyeah2024app-dua2ebdzfbh0exch.westeurope-01.azurewebsites.net/energyHub'
      )
      .build();

    this.conn
      .start()
      .then(() => {
        console.log('Połączono z hubem SignalR');

        this.conn.invoke('RegisterUser', 'Adrian').catch((err: any) => {
          console.log(1234);
          return console.error(err.toString());
        });

        this.conn
          .invoke('SendMessageToUser', 'Adrian', 'elo')
          .catch((err: any) => {
            console.log(5678);

            return console.error(err.toString());
          });
      })
      .catch((err: any) => {
        console.log(9999);

        return console.error(err.toString());
      });

    // Odbieranie wiadomości od serwera
    this.conn.on('ReceiveMessage', (user: any, message: any) => {
      console.log(1111);
      console.log(user, message);
    });

    // Odbieranie błędów
    this.conn.on('ErrorMessage', (message: any) => {
      console.log(2222);

      alert(message);
    });
  }
}
