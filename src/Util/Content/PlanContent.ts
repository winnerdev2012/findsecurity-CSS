import { getPlanPrice, PAYMENT_PLANS } from "../StatusUtil";

export const PRICING_CONTENT = [
  {
    id: "1",
    title: "Business",
    price: `$${getPlanPrice(PAYMENT_PLANS.BUSINESS)} `,
    currency: "",
    emailTo: "partners@findsecurity.co.uk",
    plan: PAYMENT_PLANS.BUSINESS,
    details: `
        <p><b>Unlimited</b> Monthly Interactions</p>
        <p><b>Unlimited</b> Active Quests</p>
        <p><b>Unlimited</b> Team Seats</p>
        <p><b>Unlimited</b> Rewards</p>
        <p><b>Unlimited</b> Giveaways</p>
        <p><b>Email</b> Collection</p>
        <p>Quest Leveling</p>
        <p>Premium Quests (Collect Email, Buy + Mint NFT, Forms, File Upload, Play Audio)</p>
        <span><b>User Analytics</b></span>
        <ul>
          <li>Email</li>
          <li>Token Holder Verified</li>
          <li>Username</li>
          <li>Twitter Handle</li>
          <li>Twitter Follower Count</li>
          <li>Discord Handle</li>
          <li>Discord Servers Joined</li>
          <li>Wallet Addresses</li>
          <li>Wallet Transaction History</li>
          <li>Tokens Owned</li>
          <li>Eth Balance</li>
          <li>Purchasing Power</li>
        </ul>`
  },
  {
    id: "2",
    title: "Plus",
    price: `$${getPlanPrice(PAYMENT_PLANS.PLUS)} `,
    price_by: "per month",
    plan: PAYMENT_PLANS.PLUS,
    badge: "Most Popular",
    details: `
      <p><b>50,000</b> Monthly Interactions</p>
      <p><b>100</b> Active Quests</p>
      <p><b>10</b> Team Seats</p>
      <p><b>Unlimited</b> Rewards</p>
      <p><b>Unlimited</b> Giveaways</p>
      <p><b>Email</b> Collection</p>
      <p>Quest Leveling</p>
      <p>Premium Quests (Collect Email, Buy + Mint NFT, Forms, File Upload, Play Audio)</p>
      <span><b>User Analytics</b></span>
      <ul>
        <li>Email</li>
        <li>Token Holder Verified</li>
        <li>Username</li>
        <li>Twitter Handle</li>
        <li>Twitter Follower Count</li>
        <li>Discord Handle</li>
        <li>Discord Servers Joined</li>
        <li>Wallet Addresses</li>
      </ul>`
  },
  {
    id: "3",
    title: "Basic",
    price: `$${getPlanPrice(PAYMENT_PLANS.BASIC)}`,
    plan: PAYMENT_PLANS.BASIC,
    price_by: "per month",
    details: `
        
        <p><b>5,000</b> Monthly Interactions</p>
        <p><b>50</b> Active Quests</p>
        <p><b>2</b> Team Seats</p>
        <p><b>Unlimited</b> Rewards</p>
        <p><b>Unlimited</b> Giveaways</p>
        <p>Quest Leveling</p>
        <p>Premium Quests (Buy + Mint NFT, Forms, File Upload, Play Audio)</p>
        <span><b>User Analytics</b></span>
        <ul>
          <li>Username</li>
          <li>Wallet Addresses</li>
          <li>Token Holder Verified</li>
          <li>Twitter Handle</li>
          <li>Discord Handle</li>
        </ul>
        `
  },
]
