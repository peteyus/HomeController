export interface SmartService {
  name: string;
  description: string;
  isOn: boolean;
  activate(): boolean;
  deactivate(): boolean;
}
