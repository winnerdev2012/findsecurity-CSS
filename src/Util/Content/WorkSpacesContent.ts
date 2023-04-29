export const getPlanText = (plan: string) => {
  switch (plan) {
    case "free":
      return "Free plan";
    case "basic":
      return "Basic plan";
    case "premium":
      return "Premium plan";
    case "enterprise":
      return "Enterprise plan";
    default:
      return "Free";
  }
};
