import {CouponStripe} from "../Types/PaymentTypes";
import {getPlanPrice} from "./StatusUtil";

export const getCouponBenefit = (coupon: CouponStripe) => {
  if (coupon.amount_off) {
    return `${coupon.amount_off / 100} USD`
  }

  if (coupon.percent_off) {
    return `${coupon.percent_off}%`
  }
}

export const getCouponDiscount = (coupon?: CouponStripe | null, plan?: string) => {

  if (!coupon || !plan) {
    return 0
  }
  const subtotal = getPlanPrice(plan);

  if (coupon.percent_off) {
    return subtotal * coupon.percent_off / 100;
  }

  if (coupon.amount_off) {
    return coupon.amount_off / 100;
  }

  return 0;
}
