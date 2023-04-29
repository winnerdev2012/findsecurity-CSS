export const userHasPointsToClaim = (reward:any) => {
  if (!reward){
    return false;
  }
  return reward?.points_target <= reward.current_points;
};

export const claimButtonContext = (reward:any) =>{
  let label = ""
  let isDisabled = false
  if (reward?.claimed) {
    label = "Claimed";
    isDisabled = true;
    return {label, isDisabled}
  }
  let isAvailable = true;
  const whitelist = reward?.whitelist;
  const product = reward?.product;
  if (whitelist) {
    isAvailable = whitelist?.claimed_spots < whitelist?.spots;
  }
  if (product) {
    isAvailable = product.claimed_products < product.limit;
  }

  if (!isAvailable) {
    label = "None Left"
    isDisabled = true;
    return {label, isDisabled}
  }

  if (userHasPointsToClaim(reward)) {
    label = "Claim"
    isDisabled = false
    return {label, isDisabled}
  } else {
    label = "Not Enough Points"
    isDisabled = true
    return {label, isDisabled}
  }
}
