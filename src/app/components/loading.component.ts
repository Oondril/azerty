import {Component, Input, OnDestroy, ElementRef, OnInit} from '@angular/core';
import {LoadingService} from "../services/loading.service";

@Component({
  selector: 'loading-component',
  templateUrl: './loading.html',
  styleUrls: ['./loading.scss'],
})

export class LoadingComponent implements OnInit, OnDestroy {

  private currentTimeout: any;
  public isDelayedRunning: boolean = false;

  constructor(private elementRef:ElementRef, private loadingService:LoadingService) {}

  @Input()
  public delay: number = 300;

  @Input()
  public set isRunning(value: boolean) {
    if (!value) {
      this.cancelTimeout();
      this.isDelayedRunning = false;
      return;
    }

    if (this.currentTimeout) {
      return;
    }

    this.currentTimeout = setTimeout(() => {
      this.isDelayedRunning = value;
      this.cancelTimeout();
    }, this.delay);
  }

  public displaySpinner(isLoading:boolean)
  {
    if (!isLoading) {
      this.cancelTimeout();
      return this.isDelayedRunning = false;
    }

    if (this.currentTimeout) {
      return;
    }

    this.currentTimeout = setTimeout(() => {
      this.isDelayedRunning = isLoading;
      this.cancelTimeout();
    }, this.delay);
  }

  private cancelTimeout(): void {
    clearTimeout(this.currentTimeout);
    this.currentTimeout = undefined;
  }

  ngOnInit() {
    this.loadingService.loading$.subscribe(
      res => {
        console.log(res);
        this.displaySpinner(res);
      }
    )
  }

  ngOnDestroy(): any {
    this.cancelTimeout();
  }
}
