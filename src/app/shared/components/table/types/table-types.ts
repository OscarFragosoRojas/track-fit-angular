import { TemplateRef } from "@angular/core";

export interface TableColumn {
  field: string;
  header: string;
  cellTemplate?: TemplateRef<any> | null;
}