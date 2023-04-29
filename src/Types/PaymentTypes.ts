export interface CouponStripe {
  id: string;
  object: string;
  amount_off: number;
  created: number;
  currency: string;
  duration: string;
  duration_in_months: number;
  livemode: boolean;
  max_redemptions: number;
  name: string;
  percent_off: number;
  redeem_by: number;
  times_redeemed: number;
  valid: boolean;
}
