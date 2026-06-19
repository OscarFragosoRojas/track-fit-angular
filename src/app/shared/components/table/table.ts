import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { TableColumn } from './types/table-types';


@Component({
    selector: 'app-table',
    templateUrl: './table.html',
    standalone: true,
    imports: [SelectModule, IconFieldModule, InputIconModule, MultiSelectModule, TableModule, TagModule, InputTextModule, FormsModule],
    providers: []
})
export class TableComponent<T> {

    data = input.required<T[]>();
    columns = input.required<TableColumn[]>();


    clear(table: Table) {
        table.clear();
    }
}