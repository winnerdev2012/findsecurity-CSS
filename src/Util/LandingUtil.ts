import { ROUTES } from "routes/PagesRoutes";
import {FeatureItemsType, NavMenuItemProps} from "Types/LandingTypes";

export const LANDING_PAGE_KEYS = {
  SMART_FUNNEL: 'smart_funnel',
  CAMPAIGN: 'campaign',
  PERK: 'perk',
  ANALYTICS: 'analytics',
}

export const MENU_ITEMS: NavMenuItemProps[] = [
  {
    name: "Products",
    subGroup: [
      {
        groupName: "",
        sub: [
          {
            to: ROUTES.SMART_FUNNEL,
            icon: "window",
            name: "FloSpace",
            subTitle: "An instant landing page to delight customers",
          },
          {
            to: ROUTES.FLOW_CAMPAIGNS,
            icon: "fire",
            name: "Flow Campaigns",
            subTitle: "Create end to end funnels in minutes",
          },
        ],
      },
      {
        groupName: "",
        sub: [
          {
            to: ROUTES.PERK_REWARDS,
            icon: "gift",
            name: "Perks",
            subTitle: "Instant perks to deepen loyalty and incentivize growth",
          },

          {
            to: ROUTES.ANALYTICS,
            icon: "search",
            name: "Analyze & Grow",
            subTitle: "Understand your users",
          },
        ],
      },
    ],
    features: [
      {
        imgSrc: "/product_feature1.png",
        title: "User Flow Campaigns",
      },
      {
        imgSrc: "/product_feature2.png",
        title: "Instant Perk Redemption",
      },
    ],
  },
  {
    name: "Resources",
    subGroup: [
      {
        groupName: "",
        sub: [
          {
            to: ROUTES.SUPPORT,
            icon: "help",
            name: "Support",
            subTitle: "Scale & grow with User Flows",
          },
        ],
      },
      {
        groupName: "",
        sub: [
          // {
          //   to: "",
          //   icon: "film",
          //   name: "Tutorial",
          //   subTitle: "Instant perks to deepen loyalty",
          // },

          {
            to: ROUTES.ABOUT_US,
            icon: "wave",
            name: "About Us",
            subTitle: "Understand your users",
          },
        ],
      },
    ],
    features: [
      {
        imgSrc: "",
        title: "Blog Name #2",
      },
      {
        imgSrc: "",
        title: "Blog Name #2",
      },
    ],
  },
  {
    name: "Pricing",
    to: ROUTES.BILLING
  },
  // {
  //   name: "Templates",
  //   subGroup: [
  //     {
  //       groupName: "MAIN TEMPLATES",
  //       sub: [
  //         {
  //           to: "",
  //           name: "Main Flo Templates",
  //         },
  //         {
  //           to: "",
  //           name: "Main Perk Templates",
  //         },
  //         {
  //           to: "",
  //           name: "Complete Funnel Templates",
  //         },
  //         {
  //           to: "",
  //           name: "Support",
  //         },
  //         {
  //           to: "",
  //           name: "Support",
  //         },
  //       ],
  //     },
  //     {
  //       groupName: "MAIN CATEGORIES",
  //       sub: [
  //         {
  //           to: "",
  //           name: "Blog",
  //         },
  //         {
  //           to: "",
  //           name: "Support",
  //         },
  //         {
  //           to: "",
  //           name: "Support",
  //         },
  //         {
  //           to: "",
  //           name: "Support",
  //         },
  //         {
  //           to: "",
  //           name: "Support",
  //         },
  //       ],
  //     },
  //     {
  //       groupName: "POPULAR TEMPLATES",
  //       sub: [
  //         {
  //           to: "",
  //           name: "Blog",
  //         },
  //         {
  //           to: "",
  //           name: "Support",
  //         },
  //         {
  //           to: "",
  //           name: "Support",
  //         },
  //         {
  //           to: "",
  //           name: "Support",
  //         },
  //         {
  //           to: "",
  //           name: "Support",
  //         },
  //       ],
  //     },
  //   ],
  //   features: [
  //     {
  //       imgSrc: "",
  //       title: "Blog Name #2",
  //     },
  //     {
  //       imgSrc: "",
  //       title: "Blog Name #2",
  //     },
  //   ],
  // },
];

export const FEATURES: FeatureItemsType[] = [
  {
    type: LANDING_PAGE_KEYS.SMART_FUNNEL,
    title: "FloSpace Features",
    features: [
      {
        icon: "pencil",
        title: "No-Code Customization",
        description: "Customize the aesthetic your FloSpace with colors, backgrounds, logos & more."
      },
      {
        icon: "link",
        title: "Social & Web Links",
        description: "Flo-Space doubles as a tree of links ;), just way more powerful."
      },
      {
        icon: "search",
        title: "SEO-Optimized",
        description: "Index better and faster across all major search engines."
      },
      {
        icon: "fire",
        title: "Blazing Fast Page Speeds",
        description: "Pages load in milliseconds ready to for your audience to engage and buy."
      },
    ]
  },
  {
    type: LANDING_PAGE_KEYS.SMART_FUNNEL,
    title: "Growth Features",
    features: [
      {
        icon: "windows",
        title: "Robust User Flow Editor",
        description: "20+ Activities to best align, connect & engage with users through Flow Campaigns"
      },
      {
        icon: "file",
        title: "Rich User Analytics",
        description: "Track, measure & understand users & their actions on any of your Flows or Perks."
      },
      {
        icon: "checkMark",
        title: "Action Authentication",
        description: "API integrations track & verify user interactions with your Flows for anti-fraud."
      },
      {
        icon: "gift",
        title: "Instantly Redeemable Perks",
        description: "Incentivize, delight and deliver instant gratification that supports growth."
      },
    ]
  },
  {
    type: LANDING_PAGE_KEYS.CAMPAIGN,
    title: "Flow Campaigns + Actions",
    features: [
      {
        icon: "pencil",
        title: "Made For Humans",
        description: "Tell your brand's story in a simple and powerful way with Flow Actions."
      },
      {
        icon: "search",
        title: "500+ Incentivized Actions",
        description: "Incentivize users to schedule with Calendly, play on Spotify, purchase. It's really up to you."
      },
      {
        icon: "link",
        title: "Fun List Building",
        description: ""
      },
      
      {
        icon: "fire",
        title: "Quizzes & Polls",
        description: "Create fun and engaging polls and quizzes to test and entertain your community."
      },
      
      {
        icon: "fire",
        title: "Collect Real Feedback",
        description: "Collect NPS ratings, opinions, rankings and so much more. "
      },
      {
        icon: "pencil",
        title: "Social Signals & Viral Growth",
        description: "Ask for a share, Tweet, invite, or referral when your customer is having fun flowing."
      },
      {
        icon: "link",
        title: "Proof of Work",
        description: "Request images, screenshots and more as evidence of completing tasks."
      },
    
    
      {
        icon: "search",
        title: "User Profiling & Cohorts",
        description: "Understand your users at an individual and group level to support them and the sale better."
      },
    ]
  },
  {
    type: LANDING_PAGE_KEYS.PERK,
    title: "Perk Types",
    features: [
      {
        icon: "pencil",
        title: "Coupon Codes",
        description: "Upload multiple coupon codes for users to claim when they complete Flow Campaigns."
      },
      {
        icon: "link",
        title: "Gift Cards",
        description: "Let users redeem unique gift cards for your products or otherbrands and shops like Amazon."
      },
      {
        icon: "upload",
        title: "File & Media Downloads",
        description: "Users can redeem their points for e-books, PDFs, design templates like PSDs and so much more!"
      },
      {
        icon: "link",
        title: "Exclusive Access Links",
        description: "Distribute your private spreadsheet templates and access to private links."
      },
      {
        icon: "video",
        title: "Exclusive Videos & Content",
        description: "Your users can claim points for privatly listed videos and content."
      },
      {
        icon: "cardShipping",
        title: "Merch",
        description: "Offer merch as a perk and collect user shipping info all from the same Perk Flow."
      },
    ]
  },
]
