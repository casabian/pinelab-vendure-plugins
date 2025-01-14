export interface CloudTaskOptions {
  taskHandlerHost: string;
  projectId: string;
  location: string;
  authSecret: string;
  /**
   * Optional suffix, I.E. for differentiating between test, acc and prod queues
   */
  queueSuffix?: string;
  /**
   * Optional size limit to be passed to `body-parser/json`
   */
  bodySizeLimit?: string;
}

export interface CloudTaskMessage {
  id: string;
  data: unknown;
  queueName: string;
  createdAt: Date;
}

export const ROUTE = 'cloud-tasks';
