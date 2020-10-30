import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRatingComponent),
      multi: true
    }
  ]
})
export class StarRatingComponent implements OnInit, ControlValueAccessor {

  rating: number;
  arr: boolean[];

  onChanged = (v: number) => {};
  onTouched = () => {};

  constructor() { }

  ngOnInit(): void {
    this.rating = 0;
    this.arr = Array(5).fill(false);
  }

  // ith star is a star or star border, depending on rating
  returnStar(i: number) {
    if (this.rating >= i + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  // when star i is clicked on
  onClick(i: number) {
    this.rating = i + 1;
    this.onChanged(this.rating);
    this.onTouched();
  }

  writeValue(v: number) {
    this.rating = v;
  }

  registerOnChange(fn: any) {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

}
