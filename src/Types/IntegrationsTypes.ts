export interface MailChimpIntegration {
  status: number;
  message?: string;
  list_id?: string;
  list_name?: string;
}

export interface IntegrationsSummary {
  mailchimp?: MailChimpIntegration;
}
