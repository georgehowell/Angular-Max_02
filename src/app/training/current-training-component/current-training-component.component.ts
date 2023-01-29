import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material'

@Component({
  selector: 'app-current-training-component',
  templateUrl: './current-training-component.component.html',
  styleUrls: ['./current-training-component.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  // timer: number;

  // constructor(private dialog: MatDialog, private trainingService: TrainingService ) {}

  ngOnInit() {
    // this.startOrResumeTimer();
  }

  onStop() {
    // clearInterval(this.timer);
  }
}
