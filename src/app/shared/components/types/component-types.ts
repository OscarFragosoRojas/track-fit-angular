export interface DynamicField {
  key: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'checkbox' | 'number';
  required?: boolean;
}

export interface DynamicButton {
  label: string;
  icon?: string;
  iconPos?: 'left' | 'right' | 'top' | 'bottom';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  severity?: 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast';
  size?: 'small' | 'large' | undefined;
  outlined?: boolean;
  text?: boolean;
  raised?: boolean;
  rounded?: boolean;
  fluid?: boolean;
  styleClass?: string;
}

export interface DynamicFormConfig {
  fields: DynamicField[];
  buttons: DynamicButton[];
}
