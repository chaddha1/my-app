import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debugging',
  templateUrl: './debugging.component.html',
  styleUrls: ['./debugging.component.css'],
})
export class DebuggingComponent implements OnInit {
  servers = [];
  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    this.servers.push('Another Server');
  }

  onRemoveServer(id: number) {
    this.servers.splice(id, 1);
  }
}
