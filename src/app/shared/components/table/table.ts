import { Component, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TableColumn } from './types/table-types';
import { Card } from '../cards/card/card';

@Component({
    selector: 'app-table',
    templateUrl: './table.html',
    standalone: true,
    imports: [TableModule, NgTemplateOutlet, Card],
    providers: []
})
export class TableComponent<T> {
    data = input.required<T[]>();
    columns = input.required<TableColumn[]>();
    title = input<string>('');
}