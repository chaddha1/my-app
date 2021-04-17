import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-create-server-and-blueprint',
  templateUrl: './create-server-and-blueprint.component.html',
  styleUrls: ['./create-server-and-blueprint.component.css'],
})
export class CreateServerAndBlueprintComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;

  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  constructor() {}

  ngOnInit(): void {
    // console.log(this.serverContentInput.nativeElement);
  }

  onAddServer(nameInput: HTMLInputElement) {
    // console.log('🚀 ~ onAddServer ~ nameInput', nameInput.value);
    // this.serverContentInput.nativeElement.value = 'some content for test';
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
