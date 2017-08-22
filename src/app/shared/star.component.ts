import {Component, OnChanges, Input} from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Component({
    selector: 'kdi-star',
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    startWidth: number;

    ngOnChanges(changes: SimpleChanges): void {
        this.startWidth = this.rating * 86 / 5;
    }

}