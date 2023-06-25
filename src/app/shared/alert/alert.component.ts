import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  
  @Output() close= new EventEmitter<void>();
  constructor() { }
  onClose(){
    this.close.emit();
  }
  ngOnInit(): void {
  }

}
