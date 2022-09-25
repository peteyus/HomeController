import { ServiceConfig } from "../models/serviceconfig";

export interface ServiceComponent {
  name: string;
  description: string;
  configuration: ServiceConfig;
}
