import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client, IClient } from '../../models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public clients: IClient[];
  public client: IClient = new Client();
  protected mode: string = 'create';

  constructor(private http: HttpClient, private clientService : ClientService) {
  }

  ngOnInit() {
    this.find();
  }

  find() {
    this.clientService.get().subscribe(data => {
      this.clients = data;
    })
  }

  add() {
    if (this.mode == 'create') {
      this.clientService.post(this.client).subscribe(data => {
        this.client = new Client();
        this.find();
      });
    } else if (this.mode == 'edit') {
      this.clientService.put(this.client).subscribe(data => {
        this.client = new Client();
        this.find();
        this.mode = 'create';
      })
    }
  }

  deleteClient(id: number) {
    this.clientService.delete(id).subscribe(data => {
      this.find();
    })
  }

  edit(id: number) {
    this.clientService.getById(id).subscribe(data => {
      this.client = data;
      this.mode = 'edit';
    })
  }


}

