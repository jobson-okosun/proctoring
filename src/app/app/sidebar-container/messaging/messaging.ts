import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-messaging',
  imports: [],
  templateUrl: './messaging.html',
  styleUrl: './messaging.css',
})
export default class Messaging {
  chatMessage = signal('');
  messages = signal<any[]>([]);
 
  sendMessage() { }

  receiveMessage(text: string) { }

  private scrollToBottom() { }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
}
