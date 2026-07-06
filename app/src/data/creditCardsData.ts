// TopRates.ca Canadian Credit Card Database (Auto-Generated)
// Powering all comparison calculators and pages with 72 cards

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface Issuer {
  id: string;
  name: string;
  slug: string;
  logoUrl: string | null;
  websiteUrl: string;
  country: string;
}

export interface Reward {
  category: string;
  rate: number;
  rewardType: string;
  programName: string | null;
}

export interface Insurance {
  insuranceType: string;
  details: string;
  dollarValue: number;
}

export interface Perk {
  perkName: string;
  description: string;
}

export interface Card {
  id: string;
  name: string;
  slug: string;
  issuerId: string;
  issuer: {
    id: string;
    name: string;
    logoUrl: string | null;
  };
  network: string;
  cardType: string;
  level: string | null;
  annualFee: number;
  firstYearFeeWaived: boolean;
  interestPurchase: number;
  interestCash: number;
  minIncomePersonal: number;
  minIncomeHousehold: number;
  recommendedCreditScore: string;
  welcomeBonusText: string | null;
  welcomeBonusValue: number;
  topRatesScore: number;
  overallRating: number;
  affiliateUrl: string;
  applyUrl: string;
  prosJson: string;
  consJson: string;
  categories: { id: string; name: string }[];
  rewards: Reward[];
  insurance: Insurance[];
  perks: Perk[];
}

export const categories: Category[] = [
  {
    "id": "cash-back",
    "name": "Cash Back",
    "slug": "cash-back",
    "description": "Earn direct statement credits or cash returns on your daily purchases."
  },
  {
    "id": "travel",
    "name": "Travel",
    "slug": "travel",
    "description": "Earn airline miles, hotel points, or flexible travel reward points."
  },
  {
    "id": "rewards",
    "name": "Rewards",
    "slug": "rewards",
    "description": "Earn flexible loyalty points redeemable for merchandise, travel, or gift cards."
  },
  {
    "id": "no-annual-fee",
    "name": "No Annual Fee",
    "slug": "no-annual-fee",
    "description": "Premium and basic credit cards with a $0 annual fee requirement."
  },
  {
    "id": "low-interest",
    "name": "Low Interest",
    "slug": "low-interest",
    "description": "Save on debt with lower purchase APRs and balance transfer offers."
  },
  {
    "id": "balance-transfer",
    "name": "Balance Transfer",
    "slug": "balance-transfer",
    "description": "Move high-interest card balances to low or 0% interest rates."
  },
  {
    "id": "business",
    "name": "Business",
    "slug": "business",
    "description": "Optimize business expenses, track employee spending, and earn business perks."
  },
  {
    "id": "student",
    "name": "Student",
    "slug": "student",
    "description": "Start building your credit history with zero annual fees and student rewards."
  },
  {
    "id": "newcomers",
    "name": "Newcomers",
    "slug": "newcomers",
    "description": "Specialized credit cards with relaxed Canadian credit history requirements."
  },
  {
    "id": "secured",
    "name": "Secured",
    "slug": "secured",
    "description": "Rebuild or build your credit with a fully guaranteed deposit card."
  }
];

export const issuers: Issuer[] = [
  {
    "id": "american-express",
    "name": "American Express",
    "slug": "american-express",
    "logoUrl": "/images/issuers/american-express.png",
    "websiteUrl": "#",
    "country": "Canada"
  },
  {
    "id": "bmo",
    "name": "BMO",
    "slug": "bmo",
    "logoUrl": "/images/issuers/bmo.png",
    "websiteUrl": "#",
    "country": "Canada"
  },
  {
    "id": "brim-financial",
    "name": "Brim Financial",
    "slug": "brim-financial",
    "logoUrl": "/images/issuers/brim-financial.png",
    "websiteUrl": "#",
    "country": "Canada"
  },
  {
    "id": "cibc",
    "name": "CIBC",
    "slug": "cibc",
    "logoUrl": "/images/issuers/cibc.png",
    "websiteUrl": "#",
    "country": "Canada"
  },
  {
    "id": "canadian-tire",
    "name": "Canadian Tire",
    "slug": "canadian-tire",
    "logoUrl": "/images/issuers/canadian-tire.png",
    "websiteUrl": "#",
    "country": "Canada"
  },
  {
    "id": "desjardins",
    "name": "Desjardins",
    "slug": "desjardins",
    "logoUrl": "/images/issuers/desjardins.png",
    "websiteUrl": "#",
    "country": "Canada"
  },
  {
    "id": "hsbc-canada",
    "name": "HSBC Canada",
    "slug": "hsbc-canada",
    "logoUrl": "/images/issuers/hsbc-canada.png",
    "websiteUrl": "#",
    "country": "Canada"
  },
  {
    "id": "koho",
    "name": "KOHO",
    "slug": "koho",
    "logoUrl": "/images/issuers/koho.png",
    "websiteUrl": "#",
    "country": "Canada"
  },
  {
    "id": "loop-financial",
    "name": "Loop Financial",
    "slug": "loop-financial",
    "logoUrl": "/images/issuers/loop-financial.png",
    "websiteUrl": "#",
    "country": "Canada"
  },
  {
    "id": "mbna",
    "name": "MBNA",
    "slug": "mbna",
    "logoUrl": "/images/issuers/mbna.png",
    "websiteUrl": "#",
    "country": "Canada"
  },
  {
    "id": "national-bank",
    "name": "National Bank",
    "slug": "national-bank",
    "logoUrl": "/images/issuers/national-bank.png",
    "websiteUrl": "#",
    "country": "Canada"
  },
  {
    "id": "neo-financial",
    "name": "Neo Financial",
    "slug": "neo-financial",
    "logoUrl": "/images/issuers/neo-financial.png",
    "websiteUrl": "#",
    "country": "Canada"
  },
  {
    "id": "pc-financial",
    "name": "PC Financial",
    "slug": "pc-financial",
    "logoUrl": "/images/issuers/pc-financial.png",
    "websiteUrl": "#",
    "country": "Canada"
  },
  {
    "id": "rbc",
    "name": "RBC",
    "slug": "rbc",
    "logoUrl": "/images/issuers/rbc.png",
    "websiteUrl": "#",
    "country": "Canada"
  },
  {
    "id": "rogers",
    "name": "Rogers",
    "slug": "rogers",
    "logoUrl": "/images/issuers/rogers.png",
    "websiteUrl": "#",
    "country": "Canada"
  },
  {
    "id": "scotiabank",
    "name": "Scotiabank",
    "slug": "scotiabank",
    "logoUrl": "/images/issuers/scotiabank.png",
    "websiteUrl": "#",
    "country": "Canada"
  },
  {
    "id": "simplii",
    "name": "Simplii",
    "slug": "simplii",
    "logoUrl": "/images/issuers/simplii.png",
    "websiteUrl": "#",
    "country": "Canada"
  },
  {
    "id": "td",
    "name": "TD",
    "slug": "td",
    "logoUrl": "/images/issuers/td.png",
    "websiteUrl": "#",
    "country": "Canada"
  },
  {
    "id": "tangerine",
    "name": "Tangerine",
    "slug": "tangerine",
    "logoUrl": "/images/issuers/tangerine.png",
    "websiteUrl": "#",
    "country": "Canada"
  },
  {
    "id": "wealthsimple",
    "name": "Wealthsimple",
    "slug": "wealthsimple",
    "logoUrl": "/images/issuers/wealthsimple.png",
    "websiteUrl": "#",
    "country": "Canada"
  }
];

export const cards: Card[] = [
  {
    "id": "card-amex-cobalt",
    "name": "American Express Cobalt Card",
    "slug": "amex-cobalt",
    "issuerId": "american-express",
    "issuer": {
      "id": "american-express",
      "name": "American Express",
      "logoUrl": "/images/issuers/american-express.png"
    },
    "network": "Amex",
    "cardType": "Personal Credit",
    "level": "Monthly fee $12.99. Top-rated rewards card in CA.",
    "annualFee": 155.88,
    "firstYearFeeWaived": false,
    "interestPurchase": 21.99,
    "interestCash": 23.99,
    "minIncomePersonal": 15000,
    "minIncomeHousehold": 22500,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "Up to 30,000 MR pts (Estimated $600 value)",
    "welcomeBonusValue": 600,
    "topRatesScore": 3.5,
    "overallRating": 4.7,
    "affiliateUrl": "https://www.toprates.ca/go/amex-cobalt",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"Monthly fee $12.99. Top-rated rewards card in CA.\"]",
    "consJson": "[\"Annual fee of $155.88 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Amex MR Select"
      },
      {
        "category": "Grocery",
        "rate": 5,
        "rewardType": "Points",
        "programName": "Amex MR Select"
      },
      {
        "category": "Gas",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Amex MR Select"
      },
      {
        "category": "Dining",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Amex MR Select"
      },
      {
        "category": "Travel",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Amex MR Select"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Amex MR Select"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Amex MR Select"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Amex MR Select"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 15 days.",
        "dollarValue": 120
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": []
  },
  {
    "id": "card-amex-gold-rewards",
    "name": "American Express Gold Rewards Card",
    "slug": "amex-gold-rewards",
    "issuerId": "american-express",
    "issuer": {
      "id": "american-express",
      "name": "American Express",
      "logoUrl": "/images/issuers/american-express.png"
    },
    "network": "Amex",
    "cardType": "Personal Credit",
    "level": "Strong travel & dining rewards.",
    "annualFee": 250,
    "firstYearFeeWaived": false,
    "interestPurchase": 21.99,
    "interestCash": 23.99,
    "minIncomePersonal": 40000,
    "minIncomeHousehold": 60000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "Up to 75,000 MR pts (Estimated $1500 value)",
    "welcomeBonusValue": 1500,
    "topRatesScore": 3.3,
    "overallRating": 4.5,
    "affiliateUrl": "https://www.toprates.ca/go/amex-gold-rewards",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"Strong travel & dining rewards.\"]",
    "consJson": "[\"Annual fee of $250 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Amex MR"
      },
      {
        "category": "Grocery",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Amex MR"
      },
      {
        "category": "Gas",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Amex MR"
      },
      {
        "category": "Dining",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Amex MR"
      },
      {
        "category": "Travel",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Amex MR"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Amex MR"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Amex MR"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Amex MR"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 15 days.",
        "dollarValue": 120
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": [
      {
        "perkName": "Lounge Access",
        "description": "Lounge access"
      },
      {
        "perkName": "Concierge Services",
        "description": "24/7 premium concierge for dining, travel bookings, and event ticket assistance."
      }
    ]
  },
  {
    "id": "card-amex-platinum",
    "name": "The Platinum Card",
    "slug": "amex-platinum",
    "issuerId": "american-express",
    "issuer": {
      "id": "american-express",
      "name": "American Express",
      "logoUrl": "/images/issuers/american-express.png"
    },
    "network": "Amex",
    "cardType": "Personal Credit",
    "level": "Premium card. $200 travel credit.",
    "annualFee": 799,
    "firstYearFeeWaived": false,
    "interestPurchase": 21.99,
    "interestCash": 23.99,
    "minIncomePersonal": 80000,
    "minIncomeHousehold": 120000,
    "recommendedCreditScore": "Excellent",
    "welcomeBonusText": "Up to 100,000 MR pts (Estimated $2000 value)",
    "welcomeBonusValue": 2000,
    "topRatesScore": 2.9,
    "overallRating": 4.1,
    "affiliateUrl": "https://www.toprates.ca/go/amex-platinum",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"Premium card. $200 travel credit.\"]",
    "consJson": "[\"Annual fee of $799 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Amex MR"
      },
      {
        "category": "Grocery",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Amex MR"
      },
      {
        "category": "Gas",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Amex MR"
      },
      {
        "category": "Dining",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Amex MR"
      },
      {
        "category": "Travel",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Amex MR"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Amex MR"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Amex MR"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Amex MR"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 90 days.",
        "dollarValue": 720
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": [
      {
        "perkName": "Lounge Access",
        "description": "Priority Pass + Centurion"
      },
      {
        "perkName": "Concierge Services",
        "description": "24/7 premium concierge for dining, travel bookings, and event ticket assistance."
      }
    ]
  },
  {
    "id": "card-amex-simply-cash",
    "name": "SimplyCash Card from American Express",
    "slug": "amex-simply-cash",
    "issuerId": "american-express",
    "issuer": {
      "id": "american-express",
      "name": "American Express",
      "logoUrl": "/images/issuers/american-express.png"
    },
    "network": "Amex",
    "cardType": "Personal Credit",
    "level": "Best no-fee Amex cash back.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 15000,
    "minIncomeHousehold": 22500,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "4% CB 6mo (Estimated $300 value)",
    "welcomeBonusValue": 300,
    "topRatesScore": 2.6,
    "overallRating": 3.8,
    "affiliateUrl": "https://www.toprates.ca/go/amex-simply-cash",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"No Annual Fee card features\",\"Best no-fee Amex cash back.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1.25,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 1.25,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 1.25,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 1.25,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 1.25,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 1.25,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 1.25,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": []
  },
  {
    "id": "card-amex-simply-cash-preferred",
    "name": "SimplyCash Preferred Card from Amex",
    "slug": "amex-simply-cash-preferred",
    "issuerId": "american-express",
    "issuer": {
      "id": "american-express",
      "name": "American Express",
      "logoUrl": "/images/issuers/american-express.png"
    },
    "network": "Amex",
    "cardType": "Personal Credit",
    "level": "Highest flat-rate CB in Canada.",
    "annualFee": 120,
    "firstYearFeeWaived": false,
    "interestPurchase": 21.99,
    "interestCash": 23.99,
    "minIncomePersonal": 40000,
    "minIncomeHousehold": 60000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "10% CB 4mo (Estimated $400 value)",
    "welcomeBonusValue": 400,
    "topRatesScore": 3,
    "overallRating": 4.2,
    "affiliateUrl": "https://www.toprates.ca/go/amex-simply-cash-preferred",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"Highest flat-rate CB in Canada.\"]",
    "consJson": "[\"Annual fee of $120 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 4,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 4,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 15 days.",
        "dollarValue": 120
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": []
  },
  {
    "id": "card-amex-aeroplan",
    "name": "American Express Aeroplan Card",
    "slug": "amex-aeroplan",
    "issuerId": "american-express",
    "issuer": {
      "id": "american-express",
      "name": "American Express",
      "logoUrl": "/images/issuers/american-express.png"
    },
    "network": "Amex",
    "cardType": "Personal Credit",
    "level": "No-fee Aeroplan entry card.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 15000,
    "minIncomeHousehold": 22500,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "Up to 10,000 Aeroplan pts (Estimated $150 value)",
    "welcomeBonusValue": 150,
    "topRatesScore": 2.7,
    "overallRating": 3.9000000000000004,
    "affiliateUrl": "https://www.toprates.ca/go/amex-aeroplan",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"Travel card features\",\"No Annual Fee card features\",\"No-fee Aeroplan entry card.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      },
      {
        "id": "travel",
        "name": "Travel"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Grocery",
        "rate": 1.5,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Gas",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Dining",
        "rate": 1.5,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Travel",
        "rate": 1.5,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Aeroplan"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      }
    ],
    "perks": []
  },
  {
    "id": "card-amex-aeroplan-reserve",
    "name": "American Express Aeroplan Reserve Card",
    "slug": "amex-aeroplan-reserve",
    "issuerId": "american-express",
    "issuer": {
      "id": "american-express",
      "name": "American Express",
      "logoUrl": "/images/issuers/american-express.png"
    },
    "network": "Amex",
    "cardType": "Personal Credit",
    "level": "Super-premium Aeroplan card.",
    "annualFee": 599,
    "firstYearFeeWaived": false,
    "interestPurchase": 21.99,
    "interestCash": 23.99,
    "minIncomePersonal": 80000,
    "minIncomeHousehold": 120000,
    "recommendedCreditScore": "Excellent",
    "welcomeBonusText": "Up to 90,000 Aeroplan pts (Estimated $1350 value)",
    "welcomeBonusValue": 1350,
    "topRatesScore": 2.9,
    "overallRating": 4.1,
    "affiliateUrl": "https://www.toprates.ca/go/amex-aeroplan-reserve",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"Travel card features\",\"Super-premium Aeroplan card.\"]",
    "consJson": "[\"Annual fee of $599 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      },
      {
        "id": "travel",
        "name": "Travel"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1.25,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Grocery",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Gas",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Dining",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Travel",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Drug",
        "rate": 1.25,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Recurring",
        "rate": 1.25,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Online",
        "rate": 1.25,
        "rewardType": "Points",
        "programName": "Aeroplan"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 90 days.",
        "dollarValue": 720
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": [
      {
        "perkName": "Lounge Access",
        "description": "Priority Pass + Maple Leaf"
      },
      {
        "perkName": "Concierge Services",
        "description": "24/7 premium concierge for dining, travel bookings, and event ticket assistance."
      },
      {
        "perkName": "Roadside Assistance",
        "description": "Emergency roadside help including towing, fuel delivery, flat tire services, and battery boosts."
      }
    ]
  },
  {
    "id": "card-amex-business-edge",
    "name": "American Express Business Edge Card",
    "slug": "amex-business-edge",
    "issuerId": "american-express",
    "issuer": {
      "id": "american-express",
      "name": "American Express",
      "logoUrl": "/images/issuers/american-express.png"
    },
    "network": "Amex",
    "cardType": "Business Credit",
    "level": "Best Amex small business card.",
    "annualFee": 199,
    "firstYearFeeWaived": false,
    "interestPurchase": 21.99,
    "interestCash": 23.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "Up to 50,000 MR pts (Estimated $1000 value)",
    "welcomeBonusValue": 1000,
    "topRatesScore": 3.4,
    "overallRating": 4.6,
    "affiliateUrl": "https://www.toprates.ca/go/amex-business-edge",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"Business card features\",\"Best Amex small business card.\"]",
    "consJson": "[\"Annual fee of $199 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      },
      {
        "id": "business",
        "name": "Business"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Amex MR Select"
      },
      {
        "category": "Grocery",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Amex MR Select"
      },
      {
        "category": "Gas",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Amex MR Select"
      },
      {
        "category": "Dining",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Amex MR Select"
      },
      {
        "category": "Travel",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Amex MR Select"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Amex MR Select"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Amex MR Select"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Amex MR Select"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 15 days.",
        "dollarValue": 120
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": []
  },
  {
    "id": "card-bmo-cashback",
    "name": "BMO CashBack Mastercard",
    "slug": "bmo-cashback",
    "issuerId": "bmo",
    "issuer": {
      "id": "bmo",
      "name": "BMO",
      "logoUrl": "/images/issuers/bmo.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Entry-level no-fee card.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "5% CB 3mo (Estimated $100 value)",
    "welcomeBonusValue": 100,
    "topRatesScore": 2.4,
    "overallRating": 3.5999999999999996,
    "affiliateUrl": "https://www.toprates.ca/go/bmo-cashback",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"No Annual Fee card features\",\"Newcomers card features\",\"Entry-level no-fee card.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      },
      {
        "id": "newcomers",
        "name": "Newcomers"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 3,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-bmo-cashback-world-elite",
    "name": "BMO CashBack World Elite Mastercard",
    "slug": "bmo-cashback-world-elite",
    "issuerId": "bmo",
    "issuer": {
      "id": "bmo",
      "name": "BMO",
      "logoUrl": "/images/issuers/bmo.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Top BMO cash back. FY fee waived.",
    "annualFee": 120,
    "firstYearFeeWaived": true,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 80000,
    "minIncomeHousehold": 120000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "Up to $480 bonus CB (Estimated $480 value)",
    "welcomeBonusValue": 480,
    "topRatesScore": 3.1,
    "overallRating": 4.3,
    "affiliateUrl": "https://www.toprates.ca/go/bmo-cashback-world-elite",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"Top BMO cash back. FY fee waived.\"]",
    "consJson": "[\"Annual fee of $120 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 4,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 3,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 21 days.",
        "dollarValue": 168
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": [
      {
        "perkName": "Lounge Access",
        "description": "2 lounge passes"
      }
    ]
  },
  {
    "id": "card-bmo-ascend-world-elite",
    "name": "BMO Ascend World Elite Mastercard",
    "slug": "bmo-ascend-world-elite",
    "issuerId": "bmo",
    "issuer": {
      "id": "bmo",
      "name": "BMO",
      "logoUrl": "/images/issuers/bmo.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Best BMO travel rewards.",
    "annualFee": 150,
    "firstYearFeeWaived": true,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 80000,
    "minIncomeHousehold": 120000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "Up to 115,000 pts (Estimated $771 value)",
    "welcomeBonusValue": 771,
    "topRatesScore": 2.7,
    "overallRating": 3.9000000000000004,
    "affiliateUrl": "https://www.toprates.ca/go/bmo-ascend-world-elite",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"Best BMO travel rewards.\"]",
    "consJson": "[\"Annual fee of $150 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "BMO Rewards"
      },
      {
        "category": "Grocery",
        "rate": 5,
        "rewardType": "Points",
        "programName": "BMO Rewards"
      },
      {
        "category": "Gas",
        "rate": 3,
        "rewardType": "Points",
        "programName": "BMO Rewards"
      },
      {
        "category": "Dining",
        "rate": 3,
        "rewardType": "Points",
        "programName": "BMO Rewards"
      },
      {
        "category": "Travel",
        "rate": 3,
        "rewardType": "Points",
        "programName": "BMO Rewards"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "BMO Rewards"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "BMO Rewards"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "BMO Rewards"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 21 days.",
        "dollarValue": 168
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": [
      {
        "perkName": "Lounge Access",
        "description": "4 lounge passes"
      }
    ]
  },
  {
    "id": "card-bmo-eclipse-visa-infinite",
    "name": "BMO eclipse Visa Infinite Card",
    "slug": "bmo-eclipse-visa-infinite",
    "issuerId": "bmo",
    "issuer": {
      "id": "bmo",
      "name": "BMO",
      "logoUrl": "/images/issuers/bmo.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "BMO's newer rewards card line.",
    "annualFee": 120,
    "firstYearFeeWaived": true,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 60000,
    "minIncomeHousehold": 90000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "Up to 70,000 pts (Estimated $469 value)",
    "welcomeBonusValue": 469,
    "topRatesScore": 2.7,
    "overallRating": 3.9000000000000004,
    "affiliateUrl": "https://www.toprates.ca/go/bmo-eclipse-visa-infinite",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"BMO's newer rewards card line.\"]",
    "consJson": "[\"Annual fee of $120 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      },
      {
        "category": "Grocery",
        "rate": 5,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      },
      {
        "category": "Gas",
        "rate": 5,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      },
      {
        "category": "Dining",
        "rate": 2,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      },
      {
        "category": "Travel",
        "rate": 2,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 21 days.",
        "dollarValue": 168
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": []
  },
  {
    "id": "card-bmo-eclipse-visa-infinite-privilege",
    "name": "BMO eclipse Visa Infinite Privilege Card",
    "slug": "bmo-eclipse-visa-infinite-privilege",
    "issuerId": "bmo",
    "issuer": {
      "id": "bmo",
      "name": "BMO",
      "logoUrl": "/images/issuers/bmo.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "BMO super-premium. $200 lifestyle credit.",
    "annualFee": 399,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 150000,
    "minIncomeHousehold": 225000,
    "recommendedCreditScore": "Excellent",
    "welcomeBonusText": "Up to 200,000 pts (Estimated $1340 value)",
    "welcomeBonusValue": 1340,
    "topRatesScore": 2.6,
    "overallRating": 3.8,
    "affiliateUrl": "https://www.toprates.ca/go/bmo-eclipse-visa-infinite-privilege",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"BMO super-premium. $200 lifestyle credit.\"]",
    "consJson": "[\"Annual fee of $399 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1.25,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      },
      {
        "category": "Grocery",
        "rate": 5,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      },
      {
        "category": "Gas",
        "rate": 5,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      },
      {
        "category": "Dining",
        "rate": 3,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      },
      {
        "category": "Travel",
        "rate": 3,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      },
      {
        "category": "Drug",
        "rate": 1.25,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      },
      {
        "category": "Recurring",
        "rate": 1.25,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      },
      {
        "category": "Online",
        "rate": 1.25,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 90 days.",
        "dollarValue": 720
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Mobile Device",
        "details": "Up to $1,000 coverage against accidental damage, breakdown, or theft for eligible mobile devices.",
        "dollarValue": 80
      }
    ],
    "perks": [
      {
        "perkName": "Lounge Access",
        "description": "6 lounge passes"
      },
      {
        "perkName": "Concierge Services",
        "description": "24/7 premium concierge for dining, travel bookings, and event ticket assistance."
      },
      {
        "perkName": "Roadside Assistance",
        "description": "Emergency roadside help including towing, fuel delivery, flat tire services, and battery boosts."
      }
    ]
  },
  {
    "id": "card-bmo-eclipse-rise-visa",
    "name": "BMO eclipse rise Visa Card",
    "slug": "bmo-eclipse-rise-visa",
    "issuerId": "bmo",
    "issuer": {
      "id": "bmo",
      "name": "BMO",
      "logoUrl": "/images/issuers/bmo.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "Entry no-fee BMO card.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "Up to 25,000 pts (Estimated $168 value)",
    "welcomeBonusValue": 168,
    "topRatesScore": 2.3,
    "overallRating": 3.5,
    "affiliateUrl": "https://www.toprates.ca/go/bmo-eclipse-rise-visa",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"No Annual Fee card features\",\"Newcomers card features\",\"Entry no-fee BMO card.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      },
      {
        "id": "newcomers",
        "name": "Newcomers"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      },
      {
        "category": "Grocery",
        "rate": 3,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      },
      {
        "category": "Gas",
        "rate": 3,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      },
      {
        "category": "Dining",
        "rate": 1,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      },
      {
        "category": "Travel",
        "rate": 1,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "BMO eclipse"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-bmo-preferred-rate",
    "name": "BMO Preferred Rate Mastercard",
    "slug": "bmo-preferred-rate",
    "issuerId": "bmo",
    "issuer": {
      "id": "bmo",
      "name": "BMO",
      "logoUrl": "/images/issuers/bmo.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Low interest card. BT promo 0.99%.",
    "annualFee": 29,
    "firstYearFeeWaived": true,
    "interestPurchase": 13.99,
    "interestCash": 15.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 2,
    "overallRating": 3.2,
    "affiliateUrl": "https://www.toprates.ca/go/bmo-preferred-rate",
    "applyUrl": "#",
    "prosJson": "[\"Low Interest card features\",\"Balance Transfer card features\",\"Low interest card. BT promo 0.99%.\"]",
    "consJson": "[\"Annual fee of $29 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "low-interest",
        "name": "Low Interest"
      },
      {
        "id": "balance-transfer",
        "name": "Balance Transfer"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-bmo-student-cashback",
    "name": "BMO CashBack Mastercard for students",
    "slug": "bmo-student-cashback",
    "issuerId": "bmo",
    "issuer": {
      "id": "bmo",
      "name": "BMO",
      "logoUrl": "/images/issuers/bmo.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Student version of BMO CashBack.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "5% CB 3mo (Estimated $100 value)",
    "welcomeBonusValue": 100,
    "topRatesScore": 2.4,
    "overallRating": 3.5999999999999996,
    "affiliateUrl": "https://www.toprates.ca/go/bmo-student-cashback",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"No Annual Fee card features\",\"Student card features\",\"Newcomers card features\",\"Student version of BMO CashBack.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      },
      {
        "id": "student",
        "name": "Student"
      },
      {
        "id": "newcomers",
        "name": "Newcomers"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 3,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-bmo-viporter-world-elite",
    "name": "BMO VIPorter World Elite Mastercard",
    "slug": "bmo-viporter-world-elite",
    "issuerId": "bmo",
    "issuer": {
      "id": "bmo",
      "name": "BMO",
      "logoUrl": "/images/issuers/bmo.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Porter airline co-brand.",
    "annualFee": 199,
    "firstYearFeeWaived": true,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 80000,
    "minIncomeHousehold": 120000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "VIPorter benefits (Estimated $1050 value)",
    "welcomeBonusValue": 1050,
    "topRatesScore": 3.5,
    "overallRating": 4.7,
    "affiliateUrl": "https://www.toprates.ca/go/bmo-viporter-world-elite",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"Porter airline co-brand.\"]",
    "consJson": "[\"Annual fee of $199 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "VIPorter"
      },
      {
        "category": "Grocery",
        "rate": 5,
        "rewardType": "Points",
        "programName": "VIPorter"
      },
      {
        "category": "Gas",
        "rate": 4,
        "rewardType": "Points",
        "programName": "VIPorter"
      },
      {
        "category": "Dining",
        "rate": 3,
        "rewardType": "Points",
        "programName": "VIPorter"
      },
      {
        "category": "Travel",
        "rate": 5,
        "rewardType": "Points",
        "programName": "VIPorter"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "VIPorter"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "VIPorter"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "VIPorter"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 21 days.",
        "dollarValue": 168
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": [
      {
        "perkName": "Lounge Access",
        "description": "VIPorter Venture"
      },
      {
        "perkName": "No Foreign Transaction Fees",
        "description": "Saves 2.5% on all transactions in currencies other than Canadian dollars."
      }
    ]
  },
  {
    "id": "card-bmo-viporter",
    "name": "BMO VIPorter Mastercard",
    "slug": "bmo-viporter",
    "issuerId": "bmo",
    "issuer": {
      "id": "bmo",
      "name": "BMO",
      "logoUrl": "/images/issuers/bmo.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Entry Porter co-brand.",
    "annualFee": 89,
    "firstYearFeeWaived": true,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 35000,
    "minIncomeHousehold": 52500,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "VIPorter benefits (Estimated $600 value)",
    "welcomeBonusValue": 600,
    "topRatesScore": 3.3,
    "overallRating": 4.5,
    "affiliateUrl": "https://www.toprates.ca/go/bmo-viporter",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"Entry Porter co-brand.\"]",
    "consJson": "[\"Annual fee of $89 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "VIPorter"
      },
      {
        "category": "Grocery",
        "rate": 3,
        "rewardType": "Points",
        "programName": "VIPorter"
      },
      {
        "category": "Gas",
        "rate": 2,
        "rewardType": "Points",
        "programName": "VIPorter"
      },
      {
        "category": "Dining",
        "rate": 2,
        "rewardType": "Points",
        "programName": "VIPorter"
      },
      {
        "category": "Travel",
        "rate": 3,
        "rewardType": "Points",
        "programName": "VIPorter"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "VIPorter"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "VIPorter"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "VIPorter"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 15 days.",
        "dollarValue": 120
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      }
    ],
    "perks": [
      {
        "perkName": "Lounge Access",
        "description": "VIPorter Passport"
      },
      {
        "perkName": "No Foreign Transaction Fees",
        "description": "Saves 2.5% on all transactions in currencies other than Canadian dollars."
      }
    ]
  },
  {
    "id": "card-td-cashback-visa-infinite",
    "name": "TD Cash Back Visa Infinite Card",
    "slug": "td-cashback-visa-infinite",
    "issuerId": "td",
    "issuer": {
      "id": "td",
      "name": "TD",
      "logoUrl": "/images/issuers/td.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "Strong everyday CB. FY fee waived.",
    "annualFee": 139,
    "firstYearFeeWaived": true,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 60000,
    "minIncomeHousehold": 90000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "10% CB 3mo (Estimated $245 value)",
    "welcomeBonusValue": 245,
    "topRatesScore": 2.8,
    "overallRating": 4,
    "affiliateUrl": "https://www.toprates.ca/go/td-cashback-visa-infinite",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"Strong everyday CB. FY fee waived.\"]",
    "consJson": "[\"Annual fee of $139 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 3,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 3,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 3,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 21 days.",
        "dollarValue": 168
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": []
  },
  {
    "id": "card-td-first-class-travel-visa-infinite",
    "name": "TD First Class Travel Visa Infinite Card",
    "slug": "td-first-class-travel-visa-infinite",
    "issuerId": "td",
    "issuer": {
      "id": "td",
      "name": "TD",
      "logoUrl": "/images/issuers/td.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "TD's premium travel card.",
    "annualFee": 139,
    "firstYearFeeWaived": true,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 60000,
    "minIncomeHousehold": 90000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "Up to 165,000 TD pts (Estimated $825 value)",
    "welcomeBonusValue": 825,
    "topRatesScore": 2.5,
    "overallRating": 3.7,
    "affiliateUrl": "https://www.toprates.ca/go/td-first-class-travel-visa-infinite",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"TD's premium travel card.\"]",
    "consJson": "[\"Annual fee of $139 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "TD Rewards"
      },
      {
        "category": "Grocery",
        "rate": 3,
        "rewardType": "Points",
        "programName": "TD Rewards"
      },
      {
        "category": "Gas",
        "rate": 3,
        "rewardType": "Points",
        "programName": "TD Rewards"
      },
      {
        "category": "Dining",
        "rate": 3,
        "rewardType": "Points",
        "programName": "TD Rewards"
      },
      {
        "category": "Travel",
        "rate": 3,
        "rewardType": "Points",
        "programName": "TD Rewards"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "TD Rewards"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "TD Rewards"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "TD Rewards"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 21 days.",
        "dollarValue": 168
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": [
      {
        "perkName": "Lounge Access",
        "description": "4 lounge passes"
      }
    ]
  },
  {
    "id": "card-td-aeroplan-visa-infinite",
    "name": "TD Aeroplan Visa Infinite Card",
    "slug": "td-aeroplan-visa-infinite",
    "issuerId": "td",
    "issuer": {
      "id": "td",
      "name": "TD",
      "logoUrl": "/images/issuers/td.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "Best TD Aeroplan card.",
    "annualFee": 139,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 60000,
    "minIncomeHousehold": 90000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "Up to 40,000 Aeroplan pts (Estimated $600 value)",
    "welcomeBonusValue": 600,
    "topRatesScore": 2.8,
    "overallRating": 4,
    "affiliateUrl": "https://www.toprates.ca/go/td-aeroplan-visa-infinite",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"Travel card features\",\"Best TD Aeroplan card.\"]",
    "consJson": "[\"Annual fee of $139 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      },
      {
        "id": "travel",
        "name": "Travel"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Grocery",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Gas",
        "rate": 1.5,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Dining",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Travel",
        "rate": 1.5,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Aeroplan"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 21 days.",
        "dollarValue": 168
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": []
  },
  {
    "id": "card-td-aeroplan-visa-infinite-privilege",
    "name": "TD Aeroplan Visa Infinite Privilege Card",
    "slug": "td-aeroplan-visa-infinite-privilege",
    "issuerId": "td",
    "issuer": {
      "id": "td",
      "name": "TD",
      "logoUrl": "/images/issuers/td.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "Super-premium TD Aeroplan.",
    "annualFee": 599,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 150000,
    "minIncomeHousehold": 225000,
    "recommendedCreditScore": "Excellent",
    "welcomeBonusText": "Up to 100,000 Aeroplan pts (Estimated $1500 value)",
    "welcomeBonusValue": 1500,
    "topRatesScore": 2.9,
    "overallRating": 4.1,
    "affiliateUrl": "https://www.toprates.ca/go/td-aeroplan-visa-infinite-privilege",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"Travel card features\",\"Super-premium TD Aeroplan.\"]",
    "consJson": "[\"Annual fee of $599 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      },
      {
        "id": "travel",
        "name": "Travel"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1.5,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Grocery",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Gas",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Dining",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Travel",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Drug",
        "rate": 1.5,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Recurring",
        "rate": 1.5,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Online",
        "rate": 1.5,
        "rewardType": "Points",
        "programName": "Aeroplan"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 60 days.",
        "dollarValue": 480
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": [
      {
        "perkName": "Lounge Access",
        "description": "Priority Pass + Maple Leaf"
      },
      {
        "perkName": "Concierge Services",
        "description": "24/7 premium concierge for dining, travel bookings, and event ticket assistance."
      },
      {
        "perkName": "Roadside Assistance",
        "description": "Emergency roadside help including towing, fuel delivery, flat tire services, and battery boosts."
      }
    ]
  },
  {
    "id": "card-td-low-rate-visa",
    "name": "TD Low Rate Visa Card",
    "slug": "td-low-rate-visa",
    "issuerId": "td",
    "issuer": {
      "id": "td",
      "name": "TD",
      "logoUrl": "/images/issuers/td.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "Lowest TD interest rate.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 12.99,
    "interestCash": 14.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "0% promo 6mo (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 2,
    "overallRating": 3.2,
    "affiliateUrl": "https://www.toprates.ca/go/td-low-rate-visa",
    "applyUrl": "#",
    "prosJson": "[\"No Annual Fee card features\",\"Low Interest card features\",\"Balance Transfer card features\",\"Lowest TD interest rate.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      },
      {
        "id": "low-interest",
        "name": "Low Interest"
      },
      {
        "id": "balance-transfer",
        "name": "Balance Transfer"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-td-rewards-visa",
    "name": "TD Rewards Visa Card",
    "slug": "td-rewards-visa",
    "issuerId": "td",
    "issuer": {
      "id": "td",
      "name": "TD",
      "logoUrl": "/images/issuers/td.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "No-fee TD entry card.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 2,
    "overallRating": 3.2,
    "affiliateUrl": "https://www.toprates.ca/go/td-rewards-visa",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"No Annual Fee card features\",\"Newcomers card features\",\"No-fee TD entry card.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      },
      {
        "id": "newcomers",
        "name": "Newcomers"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "TD Rewards"
      },
      {
        "category": "Grocery",
        "rate": 1,
        "rewardType": "Points",
        "programName": "TD Rewards"
      },
      {
        "category": "Gas",
        "rate": 1,
        "rewardType": "Points",
        "programName": "TD Rewards"
      },
      {
        "category": "Dining",
        "rate": 1,
        "rewardType": "Points",
        "programName": "TD Rewards"
      },
      {
        "category": "Travel",
        "rate": 1,
        "rewardType": "Points",
        "programName": "TD Rewards"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "TD Rewards"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "TD Rewards"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "TD Rewards"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-scotiabank-passport-visa-infinite",
    "name": "Scotiabank Passport Visa Infinite Card",
    "slug": "scotiabank-passport-visa-infinite",
    "issuerId": "scotiabank",
    "issuer": {
      "id": "scotiabank",
      "name": "Scotiabank",
      "logoUrl": "/images/issuers/scotiabank.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "No FX fees. Great for travel.",
    "annualFee": 170,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 60000,
    "minIncomeHousehold": 90000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "Up to 60,000 Scene+ pts (Estimated $600 value)",
    "welcomeBonusValue": 600,
    "topRatesScore": 3.3,
    "overallRating": 4.5,
    "affiliateUrl": "https://www.toprates.ca/go/scotiabank-passport-visa-infinite",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"No FX fees. Great for travel.\"]",
    "consJson": "[\"Annual fee of $170 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Scene+"
      },
      {
        "category": "Grocery",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Scene+"
      },
      {
        "category": "Gas",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Scene+"
      },
      {
        "category": "Dining",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Scene+"
      },
      {
        "category": "Travel",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Scene+"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Scene+"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Scene+"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Scene+"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 21 days.",
        "dollarValue": 168
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": [
      {
        "perkName": "Lounge Access",
        "description": "6 lounge passes"
      },
      {
        "perkName": "No Foreign Transaction Fees",
        "description": "Saves 2.5% on all transactions in currencies other than Canadian dollars."
      }
    ]
  },
  {
    "id": "card-scotiabank-momentum-visa-infinite",
    "name": "Scotia Momentum Visa Infinite Card",
    "slug": "scotiabank-momentum-visa-infinite",
    "issuerId": "scotiabank",
    "issuer": {
      "id": "scotiabank",
      "name": "Scotiabank",
      "logoUrl": "/images/issuers/scotiabank.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "Top Scotia CB. FY fee waived.",
    "annualFee": 120,
    "firstYearFeeWaived": true,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 60000,
    "minIncomeHousehold": 90000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "15% CB 3mo (Estimated $259 value)",
    "welcomeBonusValue": 259,
    "topRatesScore": 2.8,
    "overallRating": 4,
    "affiliateUrl": "https://www.toprates.ca/go/scotiabank-momentum-visa-infinite",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"Top Scotia CB. FY fee waived.\"]",
    "consJson": "[\"Annual fee of $120 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 4,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 21 days.",
        "dollarValue": 168
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": []
  },
  {
    "id": "card-scotiabank-gold-amex",
    "name": "Scotiabank Gold American Express Card",
    "slug": "scotiabank-gold-amex",
    "issuerId": "scotiabank",
    "issuer": {
      "id": "scotiabank",
      "name": "Scotiabank",
      "logoUrl": "/images/issuers/scotiabank.png"
    },
    "network": "Amex",
    "cardType": "Personal Credit",
    "level": "No FX. 5x grocery is category-leading.",
    "annualFee": 120,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 60000,
    "minIncomeHousehold": 90000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "Up to 45,000 Scene+ pts (Estimated $450 value)",
    "welcomeBonusValue": 450,
    "topRatesScore": 3.5,
    "overallRating": 4.7,
    "affiliateUrl": "https://www.toprates.ca/go/scotiabank-gold-amex",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"No FX. 5x grocery is category-leading.\"]",
    "consJson": "[\"Annual fee of $120 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Scene+"
      },
      {
        "category": "Grocery",
        "rate": 5,
        "rewardType": "Points",
        "programName": "Scene+"
      },
      {
        "category": "Gas",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Scene+"
      },
      {
        "category": "Dining",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Scene+"
      },
      {
        "category": "Travel",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Scene+"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Scene+"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Scene+"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Scene+"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 21 days.",
        "dollarValue": 168
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": [
      {
        "perkName": "No Foreign Transaction Fees",
        "description": "Saves 2.5% on all transactions in currencies other than Canadian dollars."
      }
    ]
  },
  {
    "id": "card-scotiabank-scene-visa",
    "name": "Scotiabank Scene+ Visa Card",
    "slug": "scotiabank-scene-visa",
    "issuerId": "scotiabank",
    "issuer": {
      "id": "scotiabank",
      "name": "Scotiabank",
      "logoUrl": "/images/issuers/scotiabank.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "Entry no-fee Scotiabank card.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "Up to 10,000 Scene+ pts (Estimated $100 value)",
    "welcomeBonusValue": 100,
    "topRatesScore": 2.5,
    "overallRating": 3.7,
    "affiliateUrl": "https://www.toprates.ca/go/scotiabank-scene-visa",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"No Annual Fee card features\",\"Newcomers card features\",\"Entry no-fee Scotiabank card.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      },
      {
        "id": "newcomers",
        "name": "Newcomers"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Scene+"
      },
      {
        "category": "Grocery",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Scene+"
      },
      {
        "category": "Gas",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Scene+"
      },
      {
        "category": "Dining",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Scene+"
      },
      {
        "category": "Travel",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Scene+"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Scene+"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Scene+"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Scene+"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-scotiabank-value-visa",
    "name": "Scotiabank Value Visa Card",
    "slug": "scotiabank-value-visa",
    "issuerId": "scotiabank",
    "issuer": {
      "id": "scotiabank",
      "name": "Scotiabank",
      "logoUrl": "/images/issuers/scotiabank.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "Low interest Scotia card.",
    "annualFee": 29,
    "firstYearFeeWaived": false,
    "interestPurchase": 12.99,
    "interestCash": 14.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "BT promo 0.99% (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 2,
    "overallRating": 3.2,
    "affiliateUrl": "https://www.toprates.ca/go/scotiabank-value-visa",
    "applyUrl": "#",
    "prosJson": "[\"Low Interest card features\",\"Balance Transfer card features\",\"Low interest Scotia card.\"]",
    "consJson": "[\"Annual fee of $29 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "low-interest",
        "name": "Low Interest"
      },
      {
        "id": "balance-transfer",
        "name": "Balance Transfer"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-cibc-aventura-visa-infinite",
    "name": "CIBC Aventura Visa Infinite Card",
    "slug": "cibc-aventura-visa-infinite",
    "issuerId": "cibc",
    "issuer": {
      "id": "cibc",
      "name": "CIBC",
      "logoUrl": "/images/issuers/cibc.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "CIBC's core travel card.",
    "annualFee": 139,
    "firstYearFeeWaived": true,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 60000,
    "minIncomeHousehold": 90000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "Up to 30,000 Aventura pts (Estimated $300 value)",
    "welcomeBonusValue": 300,
    "topRatesScore": 2.8,
    "overallRating": 4,
    "affiliateUrl": "https://www.toprates.ca/go/cibc-aventura-visa-infinite",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"Travel card features\",\"CIBC's core travel card.\"]",
    "consJson": "[\"Annual fee of $139 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      },
      {
        "id": "travel",
        "name": "Travel"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Aventura"
      },
      {
        "category": "Grocery",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Aventura"
      },
      {
        "category": "Gas",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Aventura"
      },
      {
        "category": "Dining",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Aventura"
      },
      {
        "category": "Travel",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Aventura"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Aventura"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Aventura"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Aventura"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 21 days.",
        "dollarValue": 168
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": [
      {
        "perkName": "Lounge Access",
        "description": "4 lounge passes"
      }
    ]
  },
  {
    "id": "card-cibc-aeroplan-visa-infinite",
    "name": "CIBC Aeroplan Visa Infinite Card",
    "slug": "cibc-aeroplan-visa-infinite",
    "issuerId": "cibc",
    "issuer": {
      "id": "cibc",
      "name": "CIBC",
      "logoUrl": "/images/issuers/cibc.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "CIBC Aeroplan flagship.",
    "annualFee": 139,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 60000,
    "minIncomeHousehold": 90000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "Up to 30,000 Aeroplan pts (Estimated $450 value)",
    "welcomeBonusValue": 450,
    "topRatesScore": 2.9,
    "overallRating": 4.1,
    "affiliateUrl": "https://www.toprates.ca/go/cibc-aeroplan-visa-infinite",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"Travel card features\",\"CIBC Aeroplan flagship.\"]",
    "consJson": "[\"Annual fee of $139 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      },
      {
        "id": "travel",
        "name": "Travel"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Grocery",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Gas",
        "rate": 1.5,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Dining",
        "rate": 1.5,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Travel",
        "rate": 1.5,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Aeroplan"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 21 days.",
        "dollarValue": 168
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": []
  },
  {
    "id": "card-cibc-aeroplan-visa-infinite-privilege",
    "name": "CIBC Aeroplan Visa Infinite Privilege Card",
    "slug": "cibc-aeroplan-visa-infinite-privilege",
    "issuerId": "cibc",
    "issuer": {
      "id": "cibc",
      "name": "CIBC",
      "logoUrl": "/images/issuers/cibc.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "CIBC super-premium Aeroplan.",
    "annualFee": 599,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 200000,
    "minIncomeHousehold": 300000,
    "recommendedCreditScore": "Excellent",
    "welcomeBonusText": "Up to 80,000 Aeroplan pts (Estimated $1200 value)",
    "welcomeBonusValue": 1200,
    "topRatesScore": 2.9,
    "overallRating": 4.1,
    "affiliateUrl": "https://www.toprates.ca/go/cibc-aeroplan-visa-infinite-privilege",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"Travel card features\",\"CIBC super-premium Aeroplan.\"]",
    "consJson": "[\"Annual fee of $599 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      },
      {
        "id": "travel",
        "name": "Travel"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1.5,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Grocery",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Gas",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Dining",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Travel",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Drug",
        "rate": 1.5,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Recurring",
        "rate": 1.5,
        "rewardType": "Points",
        "programName": "Aeroplan"
      },
      {
        "category": "Online",
        "rate": 1.5,
        "rewardType": "Points",
        "programName": "Aeroplan"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 60 days.",
        "dollarValue": 480
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": [
      {
        "perkName": "Lounge Access",
        "description": "Priority Pass + Maple Leaf"
      },
      {
        "perkName": "Concierge Services",
        "description": "24/7 premium concierge for dining, travel bookings, and event ticket assistance."
      },
      {
        "perkName": "Roadside Assistance",
        "description": "Emergency roadside help including towing, fuel delivery, flat tire services, and battery boosts."
      }
    ]
  },
  {
    "id": "card-cibc-dividend-visa-infinite",
    "name": "CIBC Dividend Visa Infinite Card",
    "slug": "cibc-dividend-visa-infinite",
    "issuerId": "cibc",
    "issuer": {
      "id": "cibc",
      "name": "CIBC",
      "logoUrl": "/images/issuers/cibc.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "CIBC cash back flagship.",
    "annualFee": 120,
    "firstYearFeeWaived": true,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 60000,
    "minIncomeHousehold": 90000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "10% CB 4mo (Estimated $400 value)",
    "welcomeBonusValue": 400,
    "topRatesScore": 2.9,
    "overallRating": 4.1,
    "affiliateUrl": "https://www.toprates.ca/go/cibc-dividend-visa-infinite",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"CIBC cash back flagship.\"]",
    "consJson": "[\"Annual fee of $120 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 4,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 4,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 15 days.",
        "dollarValue": 120
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": []
  },
  {
    "id": "card-cibc-costco-mastercard",
    "name": "CIBC Costco Mastercard",
    "slug": "cibc-costco-mastercard",
    "issuerId": "cibc",
    "issuer": {
      "id": "cibc",
      "name": "CIBC",
      "logoUrl": "/images/issuers/cibc.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Costco members only.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 2.6,
    "overallRating": 3.8,
    "affiliateUrl": "https://www.toprates.ca/go/cibc-costco-mastercard",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"No Annual Fee card features\",\"Costco members only.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 3,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 3,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      }
    ],
    "perks": []
  },
  {
    "id": "card-cibc-select-visa",
    "name": "CIBC Select Visa Card",
    "slug": "cibc-select-visa",
    "issuerId": "cibc",
    "issuer": {
      "id": "cibc",
      "name": "CIBC",
      "logoUrl": "/images/issuers/cibc.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "Low interest CIBC card.",
    "annualFee": 35,
    "firstYearFeeWaived": false,
    "interestPurchase": 13.49,
    "interestCash": 15.49,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 1.9,
    "overallRating": 3.0999999999999996,
    "affiliateUrl": "https://www.toprates.ca/go/cibc-select-visa",
    "applyUrl": "#",
    "prosJson": "[\"Low Interest card features\",\"Low interest CIBC card.\"]",
    "consJson": "[\"Annual fee of $35 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "low-interest",
        "name": "Low Interest"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-rbc-avion-visa-infinite",
    "name": "RBC Avion Visa Infinite Card",
    "slug": "rbc-avion-visa-infinite",
    "issuerId": "rbc",
    "issuer": {
      "id": "rbc",
      "name": "RBC",
      "logoUrl": "/images/issuers/rbc.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "RBC's core travel card.",
    "annualFee": 120,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 60000,
    "minIncomeHousehold": 90000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "Up to 45,000 Avion pts (Estimated $450 value)",
    "welcomeBonusValue": 450,
    "topRatesScore": 2.7,
    "overallRating": 3.9000000000000004,
    "affiliateUrl": "https://www.toprates.ca/go/rbc-avion-visa-infinite",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"Travel card features\",\"RBC's core travel card.\"]",
    "consJson": "[\"Annual fee of $120 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      },
      {
        "id": "travel",
        "name": "Travel"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "RBC Avion"
      },
      {
        "category": "Grocery",
        "rate": 2,
        "rewardType": "Points",
        "programName": "RBC Avion"
      },
      {
        "category": "Gas",
        "rate": 2,
        "rewardType": "Points",
        "programName": "RBC Avion"
      },
      {
        "category": "Dining",
        "rate": 2,
        "rewardType": "Points",
        "programName": "RBC Avion"
      },
      {
        "category": "Travel",
        "rate": 2,
        "rewardType": "Points",
        "programName": "RBC Avion"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "RBC Avion"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "RBC Avion"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "RBC Avion"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 21 days.",
        "dollarValue": 168
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": []
  },
  {
    "id": "card-rbc-avion-visa-infinite-privilege",
    "name": "RBC Avion Visa Infinite Privilege Card",
    "slug": "rbc-avion-visa-infinite-privilege",
    "issuerId": "rbc",
    "issuer": {
      "id": "rbc",
      "name": "RBC",
      "logoUrl": "/images/issuers/rbc.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "RBC super-premium card.",
    "annualFee": 399,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 200000,
    "minIncomeHousehold": 300000,
    "recommendedCreditScore": "Excellent",
    "welcomeBonusText": "Up to 75,000 Avion pts (Estimated $750 value)",
    "welcomeBonusValue": 750,
    "topRatesScore": 2.6,
    "overallRating": 3.8,
    "affiliateUrl": "https://www.toprates.ca/go/rbc-avion-visa-infinite-privilege",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"Travel card features\",\"RBC super-premium card.\"]",
    "consJson": "[\"Annual fee of $399 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      },
      {
        "id": "travel",
        "name": "Travel"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1.25,
        "rewardType": "Points",
        "programName": "RBC Avion"
      },
      {
        "category": "Grocery",
        "rate": 3,
        "rewardType": "Points",
        "programName": "RBC Avion"
      },
      {
        "category": "Gas",
        "rate": 3,
        "rewardType": "Points",
        "programName": "RBC Avion"
      },
      {
        "category": "Dining",
        "rate": 3,
        "rewardType": "Points",
        "programName": "RBC Avion"
      },
      {
        "category": "Travel",
        "rate": 3,
        "rewardType": "Points",
        "programName": "RBC Avion"
      },
      {
        "category": "Drug",
        "rate": 1.25,
        "rewardType": "Points",
        "programName": "RBC Avion"
      },
      {
        "category": "Recurring",
        "rate": 1.25,
        "rewardType": "Points",
        "programName": "RBC Avion"
      },
      {
        "category": "Online",
        "rate": 1.25,
        "rewardType": "Points",
        "programName": "RBC Avion"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 60 days.",
        "dollarValue": 480
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": [
      {
        "perkName": "Lounge Access",
        "description": "Priority Pass"
      },
      {
        "perkName": "Concierge Services",
        "description": "24/7 premium concierge for dining, travel bookings, and event ticket assistance."
      },
      {
        "perkName": "Roadside Assistance",
        "description": "Emergency roadside help including towing, fuel delivery, flat tire services, and battery boosts."
      }
    ]
  },
  {
    "id": "card-rbc-ion-visa",
    "name": "RBC ION+ Visa Card",
    "slug": "rbc-ion-visa",
    "issuerId": "rbc",
    "issuer": {
      "id": "rbc",
      "name": "RBC",
      "logoUrl": "/images/issuers/rbc.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "Entry no-fee RBC card.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "Up to $50 CB (Estimated $50 value)",
    "welcomeBonusValue": 50,
    "topRatesScore": 2.2,
    "overallRating": 3.4000000000000004,
    "affiliateUrl": "https://www.toprates.ca/go/rbc-ion-visa",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"No Annual Fee card features\",\"Newcomers card features\",\"Entry no-fee RBC card.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      },
      {
        "id": "newcomers",
        "name": "Newcomers"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 1.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-rbc-cashback-mastercard",
    "name": "RBC Cash Back Mastercard",
    "slug": "rbc-cashback-mastercard",
    "issuerId": "rbc",
    "issuer": {
      "id": "rbc",
      "name": "RBC",
      "logoUrl": "/images/issuers/rbc.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "No-fee RBC cash back.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 2.3,
    "overallRating": 3.5,
    "affiliateUrl": "https://www.toprates.ca/go/rbc-cashback-mastercard",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"No Annual Fee card features\",\"Newcomers card features\",\"No-fee RBC cash back.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      },
      {
        "id": "newcomers",
        "name": "Newcomers"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-rbc-westjet-world-elite",
    "name": "RBC WestJet World Elite Mastercard",
    "slug": "rbc-westjet-world-elite",
    "issuerId": "rbc",
    "issuer": {
      "id": "rbc",
      "name": "RBC",
      "logoUrl": "/images/issuers/rbc.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Best WestJet co-brand.",
    "annualFee": 119,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 60000,
    "minIncomeHousehold": 90000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "Up to 450 WJD (Estimated $450 value)",
    "welcomeBonusValue": 450,
    "topRatesScore": 2.8,
    "overallRating": 4,
    "affiliateUrl": "https://www.toprates.ca/go/rbc-westjet-world-elite",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"Best WestJet co-brand.\"]",
    "consJson": "[\"Annual fee of $119 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1.5,
        "rewardType": "Points",
        "programName": "WestJet Dollars"
      },
      {
        "category": "Grocery",
        "rate": 2,
        "rewardType": "Points",
        "programName": "WestJet Dollars"
      },
      {
        "category": "Gas",
        "rate": 2,
        "rewardType": "Points",
        "programName": "WestJet Dollars"
      },
      {
        "category": "Dining",
        "rate": 1.5,
        "rewardType": "Points",
        "programName": "WestJet Dollars"
      },
      {
        "category": "Travel",
        "rate": 2,
        "rewardType": "Points",
        "programName": "WestJet Dollars"
      },
      {
        "category": "Drug",
        "rate": 1.5,
        "rewardType": "Points",
        "programName": "WestJet Dollars"
      },
      {
        "category": "Recurring",
        "rate": 1.5,
        "rewardType": "Points",
        "programName": "WestJet Dollars"
      },
      {
        "category": "Online",
        "rate": 1.5,
        "rewardType": "Points",
        "programName": "WestJet Dollars"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 21 days.",
        "dollarValue": 168
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": []
  },
  {
    "id": "card-tangerine-moneyback",
    "name": "Tangerine Money-Back Credit Card",
    "slug": "tangerine-moneyback",
    "issuerId": "tangerine",
    "issuer": {
      "id": "tangerine",
      "name": "Tangerine",
      "logoUrl": "/images/issuers/tangerine.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Pick 2 categories at 2%. No fee.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "$100 CB promo (Estimated $100 value)",
    "welcomeBonusValue": 100,
    "topRatesScore": 2.4,
    "overallRating": 3.5999999999999996,
    "affiliateUrl": "https://www.toprates.ca/go/tangerine-moneyback",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"No Annual Fee card features\",\"Pick 2 categories at 2%. No fee.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-tangerine-world",
    "name": "Tangerine Money-Back World Mastercard",
    "slug": "tangerine-world",
    "issuerId": "tangerine",
    "issuer": {
      "id": "tangerine",
      "name": "Tangerine",
      "logoUrl": "/images/issuers/tangerine.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Pick 3 categories at 2%. No fee.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 60000,
    "minIncomeHousehold": 90000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "$100 CB promo (Estimated $100 value)",
    "welcomeBonusValue": 100,
    "topRatesScore": 2.3,
    "overallRating": 3.5,
    "affiliateUrl": "https://www.toprates.ca/go/tangerine-world",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"No Annual Fee card features\",\"Pick 3 categories at 2%. No fee.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-tangerine-rewards-world-elite",
    "name": "Tangerine Rewards World Elite Mastercard",
    "slug": "tangerine-rewards-world-elite",
    "issuerId": "tangerine",
    "issuer": {
      "id": "tangerine",
      "name": "Tangerine",
      "logoUrl": "/images/issuers/tangerine.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Tangerine's premium. No annual fee.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 80000,
    "minIncomeHousehold": 120000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "Up to $600 value (Estimated $300 value)",
    "welcomeBonusValue": 300,
    "topRatesScore": 3.1,
    "overallRating": 4.3,
    "affiliateUrl": "https://www.toprates.ca/go/tangerine-rewards-world-elite",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"No Annual Fee card features\",\"Tangerine's premium. No annual fee.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Tangerine Rewards"
      },
      {
        "category": "Grocery",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Tangerine Rewards"
      },
      {
        "category": "Gas",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Tangerine Rewards"
      },
      {
        "category": "Dining",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Tangerine Rewards"
      },
      {
        "category": "Travel",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Tangerine Rewards"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Tangerine Rewards"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Tangerine Rewards"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Tangerine Rewards"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 21 days.",
        "dollarValue": 168
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      }
    ],
    "perks": [
      {
        "perkName": "Lounge Access",
        "description": "4 lounge passes"
      }
    ]
  },
  {
    "id": "card-mbna-rewards-world-elite",
    "name": "MBNA Rewards World Elite Mastercard",
    "slug": "mbna-rewards-world-elite",
    "issuerId": "mbna",
    "issuer": {
      "id": "mbna",
      "name": "MBNA",
      "logoUrl": "/images/issuers/mbna.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Excellent no-fee rewards card.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 80000,
    "minIncomeHousehold": 120000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "Up to 30,000 pts (Estimated $300 value)",
    "welcomeBonusValue": 300,
    "topRatesScore": 3.1,
    "overallRating": 4.3,
    "affiliateUrl": "https://www.toprates.ca/go/mbna-rewards-world-elite",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"No Annual Fee card features\",\"Excellent no-fee rewards card.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 2,
        "rewardType": "Points",
        "programName": "MBNA Rewards"
      },
      {
        "category": "Grocery",
        "rate": 5,
        "rewardType": "Points",
        "programName": "MBNA Rewards"
      },
      {
        "category": "Gas",
        "rate": 3,
        "rewardType": "Points",
        "programName": "MBNA Rewards"
      },
      {
        "category": "Dining",
        "rate": 3,
        "rewardType": "Points",
        "programName": "MBNA Rewards"
      },
      {
        "category": "Travel",
        "rate": 2,
        "rewardType": "Points",
        "programName": "MBNA Rewards"
      },
      {
        "category": "Drug",
        "rate": 2,
        "rewardType": "Points",
        "programName": "MBNA Rewards"
      },
      {
        "category": "Recurring",
        "rate": 2,
        "rewardType": "Points",
        "programName": "MBNA Rewards"
      },
      {
        "category": "Online",
        "rate": 2,
        "rewardType": "Points",
        "programName": "MBNA Rewards"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": []
  },
  {
    "id": "card-mbna-true-line",
    "name": "MBNA True Line Mastercard",
    "slug": "mbna-true-line",
    "issuerId": "mbna",
    "issuer": {
      "id": "mbna",
      "name": "MBNA",
      "logoUrl": "/images/issuers/mbna.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Best balance transfer in Canada.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 12.99,
    "interestCash": 14.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "0% BT 12mo (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 2,
    "overallRating": 3.2,
    "affiliateUrl": "https://www.toprates.ca/go/mbna-true-line",
    "applyUrl": "#",
    "prosJson": "[\"No Annual Fee card features\",\"Low Interest card features\",\"Balance Transfer card features\",\"Best balance transfer in Canada.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      },
      {
        "id": "low-interest",
        "name": "Low Interest"
      },
      {
        "id": "balance-transfer",
        "name": "Balance Transfer"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-mbna-platinum-plus",
    "name": "MBNA Platinum Plus Mastercard",
    "slug": "mbna-platinum-plus",
    "issuerId": "mbna",
    "issuer": {
      "id": "mbna",
      "name": "MBNA",
      "logoUrl": "/images/issuers/mbna.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Basic no-fee, credit-builder.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 1.8,
    "overallRating": 3,
    "affiliateUrl": "https://www.toprates.ca/go/mbna-platinum-plus",
    "applyUrl": "#",
    "prosJson": "[\"No Annual Fee card features\",\"Newcomers card features\",\"Basic no-fee, credit-builder.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      },
      {
        "id": "newcomers",
        "name": "Newcomers"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-neo-world-mastercard",
    "name": "Neo World Mastercard",
    "slug": "neo-world-mastercard",
    "issuerId": "neo-financial",
    "issuer": {
      "id": "neo-financial",
      "name": "Neo Financial",
      "logoUrl": "/images/issuers/neo-financial.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "5%+ at Neo partners. Unique model.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 19.99,
    "interestCash": 21.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 3.1,
    "overallRating": 4.3,
    "affiliateUrl": "https://www.toprates.ca/go/neo-world-mastercard",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"No Annual Fee card features\",\"5%+ at Neo partners. Unique model.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-neo-secured",
    "name": "Neo Secured Mastercard",
    "slug": "neo-secured",
    "issuerId": "neo-financial",
    "issuer": {
      "id": "neo-financial",
      "name": "Neo Financial",
      "logoUrl": "/images/issuers/neo-financial.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Guaranteed approval. Build credit.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 19.99,
    "interestCash": 21.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Poor",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 3,
    "overallRating": 4.2,
    "affiliateUrl": "https://www.toprates.ca/go/neo-secured",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"No Annual Fee card features\",\"Newcomers card features\",\"Secured card features\",\"Guaranteed approval. Build credit.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      },
      {
        "id": "newcomers",
        "name": "Newcomers"
      },
      {
        "id": "secured",
        "name": "Secured"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-neo-world-elite",
    "name": "Neo World Elite Mastercard",
    "slug": "neo-world-elite",
    "issuerId": "neo-financial",
    "issuer": {
      "id": "neo-financial",
      "name": "Neo Financial",
      "logoUrl": "/images/issuers/neo-financial.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Neo's premium. No FX fee.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 19.99,
    "interestCash": 21.99,
    "minIncomePersonal": 60000,
    "minIncomeHousehold": 90000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 3.5,
    "overallRating": 4.7,
    "affiliateUrl": "https://www.toprates.ca/go/neo-world-elite",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"No Annual Fee card features\",\"Neo's premium. No FX fee.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": [
      {
        "perkName": "No Foreign Transaction Fees",
        "description": "Saves 2.5% on all transactions in currencies other than Canadian dollars."
      }
    ]
  },
  {
    "id": "card-neo-united-world-elite",
    "name": "United MileagePlus Neo World Elite Mastercard",
    "slug": "neo-united-world-elite",
    "issuerId": "neo-financial",
    "issuer": {
      "id": "neo-financial",
      "name": "Neo Financial",
      "logoUrl": "/images/issuers/neo-financial.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "United Airlines co-brand. No FX.",
    "annualFee": 120,
    "firstYearFeeWaived": false,
    "interestPurchase": 19.99,
    "interestCash": 21.99,
    "minIncomePersonal": 60000,
    "minIncomeHousehold": 90000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "Up to 20,000 pts (Estimated $400 value)",
    "welcomeBonusValue": 400,
    "topRatesScore": 2.7,
    "overallRating": 3.9000000000000004,
    "affiliateUrl": "https://www.toprates.ca/go/neo-united-world-elite",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"United Airlines co-brand. No FX.\"]",
    "consJson": "[\"Annual fee of $120 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "United MileagePlus"
      },
      {
        "category": "Grocery",
        "rate": 3,
        "rewardType": "Points",
        "programName": "United MileagePlus"
      },
      {
        "category": "Gas",
        "rate": 3,
        "rewardType": "Points",
        "programName": "United MileagePlus"
      },
      {
        "category": "Dining",
        "rate": 3,
        "rewardType": "Points",
        "programName": "United MileagePlus"
      },
      {
        "category": "Travel",
        "rate": 3,
        "rewardType": "Points",
        "programName": "United MileagePlus"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "United MileagePlus"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "United MileagePlus"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "United MileagePlus"
      }
    ],
    "insurance": [],
    "perks": [
      {
        "perkName": "No Foreign Transaction Fees",
        "description": "Saves 2.5% on all transactions in currencies other than Canadian dollars."
      }
    ]
  },
  {
    "id": "card-koho-essential",
    "name": "KOHO Essential Mastercard",
    "slug": "koho-essential",
    "issuerId": "koho",
    "issuer": {
      "id": "koho",
      "name": "KOHO",
      "logoUrl": "/images/issuers/koho.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Prepaid. No credit check. 2% interest on balance.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 19.99,
    "interestCash": 22.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "N/A",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 2.6,
    "overallRating": 3.8,
    "affiliateUrl": "https://www.toprates.ca/go/koho-essential",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"No Annual Fee card features\",\"Low Interest card features\",\"Newcomers card features\",\"Prepaid. No credit check. 2% interest on balance.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      },
      {
        "id": "low-interest",
        "name": "Low Interest"
      },
      {
        "id": "newcomers",
        "name": "Newcomers"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": [
      {
        "perkName": "No Foreign Transaction Fees",
        "description": "Saves 2.5% on all transactions in currencies other than Canadian dollars."
      }
    ]
  },
  {
    "id": "card-koho-extra",
    "name": "KOHO Extra Mastercard",
    "slug": "koho-extra",
    "issuerId": "koho",
    "issuer": {
      "id": "koho",
      "name": "KOHO",
      "logoUrl": "/images/issuers/koho.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "KOHO mid-tier. 3% interest on balance.",
    "annualFee": 84,
    "firstYearFeeWaived": false,
    "interestPurchase": 19.99,
    "interestCash": 22.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "N/A",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 2.8,
    "overallRating": 4,
    "affiliateUrl": "https://www.toprates.ca/go/koho-extra",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"Low Interest card features\",\"Newcomers card features\",\"KOHO mid-tier. 3% interest on balance.\"]",
    "consJson": "[\"Annual fee of $84 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      },
      {
        "id": "low-interest",
        "name": "Low Interest"
      },
      {
        "id": "newcomers",
        "name": "Newcomers"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": [
      {
        "perkName": "No Foreign Transaction Fees",
        "description": "Saves 2.5% on all transactions in currencies other than Canadian dollars."
      }
    ]
  },
  {
    "id": "card-koho-everything",
    "name": "KOHO Everything Mastercard",
    "slug": "koho-everything",
    "issuerId": "koho",
    "issuer": {
      "id": "koho",
      "name": "KOHO",
      "logoUrl": "/images/issuers/koho.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "KOHO top-tier. 5% interest on balance.",
    "annualFee": 168,
    "firstYearFeeWaived": false,
    "interestPurchase": 19.99,
    "interestCash": 22.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "N/A",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 3,
    "overallRating": 4.2,
    "affiliateUrl": "https://www.toprates.ca/go/koho-everything",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"Low Interest card features\",\"Newcomers card features\",\"KOHO top-tier. 5% interest on balance.\"]",
    "consJson": "[\"Annual fee of $168 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      },
      {
        "id": "low-interest",
        "name": "Low Interest"
      },
      {
        "id": "newcomers",
        "name": "Newcomers"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": [
      {
        "perkName": "No Foreign Transaction Fees",
        "description": "Saves 2.5% on all transactions in currencies other than Canadian dollars."
      }
    ]
  },
  {
    "id": "card-rogers-world-elite",
    "name": "Rogers World Elite Mastercard",
    "slug": "rogers-world-elite",
    "issuerId": "rogers",
    "issuer": {
      "id": "rogers",
      "name": "Rogers",
      "logoUrl": "/images/issuers/rogers.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "1.5% flat everywhere. No FX fee.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 80000,
    "minIncomeHousehold": 120000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 2.6,
    "overallRating": 3.8,
    "affiliateUrl": "https://www.toprates.ca/go/rogers-world-elite",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"No Annual Fee card features\",\"1.5% flat everywhere. No FX fee.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 1.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 1.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 1.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 1.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 1.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 1.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 1.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": [
      {
        "perkName": "No Foreign Transaction Fees",
        "description": "Saves 2.5% on all transactions in currencies other than Canadian dollars."
      }
    ]
  },
  {
    "id": "card-rogers-platinum",
    "name": "Rogers Platinum Mastercard",
    "slug": "rogers-platinum",
    "issuerId": "rogers",
    "issuer": {
      "id": "rogers",
      "name": "Rogers",
      "logoUrl": "/images/issuers/rogers.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Basic Rogers CB card.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 2.3,
    "overallRating": 3.5,
    "affiliateUrl": "https://www.toprates.ca/go/rogers-platinum",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"No Annual Fee card features\",\"Basic Rogers CB card.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-rogers-fido",
    "name": "Fido Mastercard",
    "slug": "rogers-fido",
    "issuerId": "rogers",
    "issuer": {
      "id": "rogers",
      "name": "Rogers",
      "logoUrl": "/images/issuers/rogers.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Rogers sub-brand.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 2.3,
    "overallRating": 3.5,
    "affiliateUrl": "https://www.toprates.ca/go/rogers-fido",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"No Annual Fee card features\",\"Rogers sub-brand.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 1.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-national-bank-world-elite",
    "name": "National Bank World Elite Mastercard",
    "slug": "national-bank-world-elite",
    "issuerId": "national-bank",
    "issuer": {
      "id": "national-bank",
      "name": "National Bank",
      "logoUrl": "/images/issuers/national-bank.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "National Bank's premium card.",
    "annualFee": 150,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 70000,
    "minIncomeHousehold": 105000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "Up to 40,000 pts (Estimated $400 value)",
    "welcomeBonusValue": 400,
    "topRatesScore": 2.9,
    "overallRating": 4.1,
    "affiliateUrl": "https://www.toprates.ca/go/national-bank-world-elite",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"National Bank's premium card.\"]",
    "consJson": "[\"Annual fee of $150 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "NB Rewards"
      },
      {
        "category": "Grocery",
        "rate": 4,
        "rewardType": "Points",
        "programName": "NB Rewards"
      },
      {
        "category": "Gas",
        "rate": 2,
        "rewardType": "Points",
        "programName": "NB Rewards"
      },
      {
        "category": "Dining",
        "rate": 2,
        "rewardType": "Points",
        "programName": "NB Rewards"
      },
      {
        "category": "Travel",
        "rate": 2,
        "rewardType": "Points",
        "programName": "NB Rewards"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "NB Rewards"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "NB Rewards"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "NB Rewards"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 21 days.",
        "dollarValue": 168
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": [
      {
        "perkName": "Lounge Access",
        "description": "4 lounge passes"
      }
    ]
  },
  {
    "id": "card-national-bank-mc-no-fee",
    "name": "National Bank Mastercard",
    "slug": "national-bank-mc-no-fee",
    "issuerId": "national-bank",
    "issuer": {
      "id": "national-bank",
      "name": "National Bank",
      "logoUrl": "/images/issuers/national-bank.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Entry NB card.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 2.3,
    "overallRating": 3.5,
    "affiliateUrl": "https://www.toprates.ca/go/national-bank-mc-no-fee",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"No Annual Fee card features\",\"Newcomers card features\",\"Entry NB card.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      },
      {
        "id": "newcomers",
        "name": "Newcomers"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "NB Rewards"
      },
      {
        "category": "Grocery",
        "rate": 1,
        "rewardType": "Points",
        "programName": "NB Rewards"
      },
      {
        "category": "Gas",
        "rate": 1,
        "rewardType": "Points",
        "programName": "NB Rewards"
      },
      {
        "category": "Dining",
        "rate": 1,
        "rewardType": "Points",
        "programName": "NB Rewards"
      },
      {
        "category": "Travel",
        "rate": 1,
        "rewardType": "Points",
        "programName": "NB Rewards"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "NB Rewards"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "NB Rewards"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "NB Rewards"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-desjardins-odyssey-world-elite",
    "name": "Desjardins Odyssey World Elite Visa",
    "slug": "desjardins-odyssey-world-elite",
    "issuerId": "desjardins",
    "issuer": {
      "id": "desjardins",
      "name": "Desjardins",
      "logoUrl": "/images/issuers/desjardins.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "Desjardins flagship travel.",
    "annualFee": 150,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 70000,
    "minIncomeHousehold": 105000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "Up to 30,000 pts (Estimated $300 value)",
    "welcomeBonusValue": 300,
    "topRatesScore": 2.9,
    "overallRating": 4.1,
    "affiliateUrl": "https://www.toprates.ca/go/desjardins-odyssey-world-elite",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"Desjardins flagship travel.\"]",
    "consJson": "[\"Annual fee of $150 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Bonvoyage"
      },
      {
        "category": "Grocery",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Bonvoyage"
      },
      {
        "category": "Gas",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Bonvoyage"
      },
      {
        "category": "Dining",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Bonvoyage"
      },
      {
        "category": "Travel",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Bonvoyage"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Bonvoyage"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Bonvoyage"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Bonvoyage"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 21 days.",
        "dollarValue": 168
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": [
      {
        "perkName": "Lounge Access",
        "description": "6 lounge passes"
      }
    ]
  },
  {
    "id": "card-desjardins-cashback-world-elite",
    "name": "Desjardins Cash Back World Elite Visa",
    "slug": "desjardins-cashback-world-elite",
    "issuerId": "desjardins",
    "issuer": {
      "id": "desjardins",
      "name": "Desjardins",
      "logoUrl": "/images/issuers/desjardins.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "Desjardins CB flagship.",
    "annualFee": 99,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 60000,
    "minIncomeHousehold": 90000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 2.9,
    "overallRating": 4.1,
    "affiliateUrl": "https://www.toprates.ca/go/desjardins-cashback-world-elite",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"Desjardins CB flagship.\"]",
    "consJson": "[\"Annual fee of $99 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 4,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 2,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 15 days.",
        "dollarValue": 120
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": []
  },
  {
    "id": "card-desjardins-classic-visa",
    "name": "Desjardins Classic Visa Card",
    "slug": "desjardins-classic-visa",
    "issuerId": "desjardins",
    "issuer": {
      "id": "desjardins",
      "name": "Desjardins",
      "logoUrl": "/images/issuers/desjardins.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "Basic Desjardins card.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 19.9,
    "interestCash": 21.9,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 1.8,
    "overallRating": 3,
    "affiliateUrl": "https://www.toprates.ca/go/desjardins-classic-visa",
    "applyUrl": "#",
    "prosJson": "[\"No Annual Fee card features\",\"Newcomers card features\",\"Basic Desjardins card.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      },
      {
        "id": "newcomers",
        "name": "Newcomers"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 0,
        "rewardType": "Points",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-triangle-world-elite",
    "name": "Triangle World Elite Mastercard",
    "slug": "triangle-world-elite",
    "issuerId": "canadian-tire",
    "issuer": {
      "id": "canadian-tire",
      "name": "Canadian Tire",
      "logoUrl": "/images/issuers/canadian-tire.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "CT/Sport Chek/Mark's rewards.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 21.99,
    "interestCash": 23.99,
    "minIncomePersonal": 80000,
    "minIncomeHousehold": 120000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "$100 CT Money (Estimated $100 value)",
    "welcomeBonusValue": 100,
    "topRatesScore": 2.3,
    "overallRating": 3.5,
    "affiliateUrl": "https://www.toprates.ca/go/triangle-world-elite",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"No Annual Fee card features\",\"CT/Sport Chek/Mark's rewards.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "CT Money"
      },
      {
        "category": "Grocery",
        "rate": 3,
        "rewardType": "Points",
        "programName": "CT Money"
      },
      {
        "category": "Gas",
        "rate": 1,
        "rewardType": "Points",
        "programName": "CT Money"
      },
      {
        "category": "Dining",
        "rate": 1,
        "rewardType": "Points",
        "programName": "CT Money"
      },
      {
        "category": "Travel",
        "rate": 1,
        "rewardType": "Points",
        "programName": "CT Money"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "CT Money"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "CT Money"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "CT Money"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      }
    ],
    "perks": []
  },
  {
    "id": "card-triangle-mastercard",
    "name": "Triangle Mastercard",
    "slug": "triangle-mastercard",
    "issuerId": "canadian-tire",
    "issuer": {
      "id": "canadian-tire",
      "name": "Canadian Tire",
      "logoUrl": "/images/issuers/canadian-tire.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Basic Triangle card.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 21.99,
    "interestCash": 23.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "$50 CT Money (Estimated $50 value)",
    "welcomeBonusValue": 50,
    "topRatesScore": 2.2,
    "overallRating": 3.4000000000000004,
    "affiliateUrl": "https://www.toprates.ca/go/triangle-mastercard",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"No Annual Fee card features\",\"Newcomers card features\",\"Basic Triangle card.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      },
      {
        "id": "newcomers",
        "name": "Newcomers"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 0.5,
        "rewardType": "Points",
        "programName": "CT Money"
      },
      {
        "category": "Grocery",
        "rate": 2,
        "rewardType": "Points",
        "programName": "CT Money"
      },
      {
        "category": "Gas",
        "rate": 0.5,
        "rewardType": "Points",
        "programName": "CT Money"
      },
      {
        "category": "Dining",
        "rate": 0.5,
        "rewardType": "Points",
        "programName": "CT Money"
      },
      {
        "category": "Travel",
        "rate": 0.5,
        "rewardType": "Points",
        "programName": "CT Money"
      },
      {
        "category": "Drug",
        "rate": 0.5,
        "rewardType": "Points",
        "programName": "CT Money"
      },
      {
        "category": "Recurring",
        "rate": 0.5,
        "rewardType": "Points",
        "programName": "CT Money"
      },
      {
        "category": "Online",
        "rate": 0.5,
        "rewardType": "Points",
        "programName": "CT Money"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-pc-world-elite",
    "name": "PC Financial World Elite Mastercard",
    "slug": "pc-world-elite",
    "issuerId": "pc-financial",
    "issuer": {
      "id": "pc-financial",
      "name": "PC Financial",
      "logoUrl": "/images/issuers/pc-financial.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Best for Loblaws/Shoppers.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.97,
    "interestCash": 22.97,
    "minIncomePersonal": 80000,
    "minIncomeHousehold": 120000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 3.1,
    "overallRating": 4.3,
    "affiliateUrl": "https://www.toprates.ca/go/pc-world-elite",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"No Annual Fee card features\",\"Best for Loblaws/Shoppers.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 10,
        "rewardType": "Points",
        "programName": "PC Optimum"
      },
      {
        "category": "Grocery",
        "rate": 30,
        "rewardType": "Points",
        "programName": "PC Optimum"
      },
      {
        "category": "Gas",
        "rate": 10,
        "rewardType": "Points",
        "programName": "PC Optimum"
      },
      {
        "category": "Dining",
        "rate": 10,
        "rewardType": "Points",
        "programName": "PC Optimum"
      },
      {
        "category": "Travel",
        "rate": 10,
        "rewardType": "Points",
        "programName": "PC Optimum"
      },
      {
        "category": "Drug",
        "rate": 20,
        "rewardType": "Points",
        "programName": "PC Optimum"
      },
      {
        "category": "Recurring",
        "rate": 10,
        "rewardType": "Points",
        "programName": "PC Optimum"
      },
      {
        "category": "Online",
        "rate": 10,
        "rewardType": "Points",
        "programName": "PC Optimum"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-pc-mastercard",
    "name": "PC Financial Mastercard",
    "slug": "pc-mastercard",
    "issuerId": "pc-financial",
    "issuer": {
      "id": "pc-financial",
      "name": "PC Financial",
      "logoUrl": "/images/issuers/pc-financial.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "Basic PC card.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.97,
    "interestCash": 22.97,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 3.3,
    "overallRating": 4.5,
    "affiliateUrl": "https://www.toprates.ca/go/pc-mastercard",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"No Annual Fee card features\",\"Newcomers card features\",\"Basic PC card.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      },
      {
        "id": "newcomers",
        "name": "Newcomers"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 10,
        "rewardType": "Points",
        "programName": "PC Optimum"
      },
      {
        "category": "Grocery",
        "rate": 25,
        "rewardType": "Points",
        "programName": "PC Optimum"
      },
      {
        "category": "Gas",
        "rate": 10,
        "rewardType": "Points",
        "programName": "PC Optimum"
      },
      {
        "category": "Dining",
        "rate": 10,
        "rewardType": "Points",
        "programName": "PC Optimum"
      },
      {
        "category": "Travel",
        "rate": 10,
        "rewardType": "Points",
        "programName": "PC Optimum"
      },
      {
        "category": "Drug",
        "rate": 10,
        "rewardType": "Points",
        "programName": "PC Optimum"
      },
      {
        "category": "Recurring",
        "rate": 10,
        "rewardType": "Points",
        "programName": "PC Optimum"
      },
      {
        "category": "Online",
        "rate": 10,
        "rewardType": "Points",
        "programName": "PC Optimum"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-simplii-cashback-visa",
    "name": "Simplii Financial Cash Back Visa Card",
    "slug": "simplii-cashback-visa",
    "issuerId": "simplii",
    "issuer": {
      "id": "simplii",
      "name": "Simplii",
      "logoUrl": "/images/issuers/simplii.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "Strong grocery/gas CB. No fee.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.5,
    "interestCash": 22.5,
    "minIncomePersonal": 15000,
    "minIncomeHousehold": 22500,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "10% CB 4mo (Estimated $200 value)",
    "welcomeBonusValue": 200,
    "topRatesScore": 2.6,
    "overallRating": 3.8,
    "affiliateUrl": "https://www.toprates.ca/go/simplii-cashback-visa",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"No Annual Fee card features\",\"Strong grocery/gas CB. No fee.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 4,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 4,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 1.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 1.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-simplii-visa",
    "name": "Simplii Financial Visa Card",
    "slug": "simplii-visa",
    "issuerId": "simplii",
    "issuer": {
      "id": "simplii",
      "name": "Simplii",
      "logoUrl": "/images/issuers/simplii.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "Entry Simplii card.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.5,
    "interestCash": 22.5,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 2.2,
    "overallRating": 3.4000000000000004,
    "affiliateUrl": "https://www.toprates.ca/go/simplii-visa",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"No Annual Fee card features\",\"Newcomers card features\",\"Entry Simplii card.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      },
      {
        "id": "newcomers",
        "name": "Newcomers"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 1.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 0.5,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": []
  },
  {
    "id": "card-brim-world-elite",
    "name": "Brim Financial World Elite Mastercard",
    "slug": "brim-world-elite",
    "issuerId": "brim-financial",
    "issuer": {
      "id": "brim-financial",
      "name": "Brim Financial",
      "logoUrl": "/images/issuers/brim-financial.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "No FX fee. Good all-around.",
    "annualFee": 199,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 60000,
    "minIncomeHousehold": 90000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 3.3,
    "overallRating": 4.5,
    "affiliateUrl": "https://www.toprates.ca/go/brim-world-elite",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"No FX fee. Good all-around.\"]",
    "consJson": "[\"Annual fee of $199 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Brim Rewards"
      },
      {
        "category": "Grocery",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Brim Rewards"
      },
      {
        "category": "Gas",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Brim Rewards"
      },
      {
        "category": "Dining",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Brim Rewards"
      },
      {
        "category": "Travel",
        "rate": 3,
        "rewardType": "Points",
        "programName": "Brim Rewards"
      },
      {
        "category": "Drug",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Brim Rewards"
      },
      {
        "category": "Recurring",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Brim Rewards"
      },
      {
        "category": "Online",
        "rate": 2,
        "rewardType": "Points",
        "programName": "Brim Rewards"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 15 days.",
        "dollarValue": 120
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": [
      {
        "perkName": "No Foreign Transaction Fees",
        "description": "Saves 2.5% on all transactions in currencies other than Canadian dollars."
      }
    ]
  },
  {
    "id": "card-brim-mastercard",
    "name": "Brim Mastercard",
    "slug": "brim-mastercard",
    "issuerId": "brim-financial",
    "issuer": {
      "id": "brim-financial",
      "name": "Brim Financial",
      "logoUrl": "/images/issuers/brim-financial.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "No-fee, no-FX. Basic.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "Fair",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 2.6,
    "overallRating": 3.8,
    "affiliateUrl": "https://www.toprates.ca/go/brim-mastercard",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"No Annual Fee card features\",\"Newcomers card features\",\"No-fee, no-FX. Basic.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      },
      {
        "id": "newcomers",
        "name": "Newcomers"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Brim Rewards"
      },
      {
        "category": "Grocery",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Brim Rewards"
      },
      {
        "category": "Gas",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Brim Rewards"
      },
      {
        "category": "Dining",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Brim Rewards"
      },
      {
        "category": "Travel",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Brim Rewards"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Brim Rewards"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Brim Rewards"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "Brim Rewards"
      }
    ],
    "insurance": [],
    "perks": [
      {
        "perkName": "No Foreign Transaction Fees",
        "description": "Saves 2.5% on all transactions in currencies other than Canadian dollars."
      }
    ]
  },
  {
    "id": "card-hsbc-world-elite",
    "name": "HSBC World Elite Mastercard",
    "slug": "hsbc-world-elite",
    "issuerId": "hsbc-canada",
    "issuer": {
      "id": "hsbc-canada",
      "name": "HSBC Canada",
      "logoUrl": "/images/issuers/hsbc-canada.png"
    },
    "network": "Mastercard",
    "cardType": "Personal Credit",
    "level": "HSBC's premium Canadian card.",
    "annualFee": 149,
    "firstYearFeeWaived": false,
    "interestPurchase": 20.99,
    "interestCash": 22.99,
    "minIncomePersonal": 70000,
    "minIncomeHousehold": 105000,
    "recommendedCreditScore": "Good",
    "welcomeBonusText": "Up to 100,000 pts (Estimated $1000 value)",
    "welcomeBonusValue": 1000,
    "topRatesScore": 2.7,
    "overallRating": 3.9000000000000004,
    "affiliateUrl": "https://www.toprates.ca/go/hsbc-world-elite",
    "applyUrl": "#",
    "prosJson": "[\"Rewards card features\",\"HSBC's premium Canadian card.\"]",
    "consJson": "[\"Annual fee of $149 applies\",\"Foreign transaction fees of 2.5% may apply\"]",
    "categories": [
      {
        "id": "rewards",
        "name": "Rewards"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Points",
        "programName": "HSBC Rewards"
      },
      {
        "category": "Grocery",
        "rate": 3,
        "rewardType": "Points",
        "programName": "HSBC Rewards"
      },
      {
        "category": "Gas",
        "rate": 3,
        "rewardType": "Points",
        "programName": "HSBC Rewards"
      },
      {
        "category": "Dining",
        "rate": 2,
        "rewardType": "Points",
        "programName": "HSBC Rewards"
      },
      {
        "category": "Travel",
        "rate": 3,
        "rewardType": "Points",
        "programName": "HSBC Rewards"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Points",
        "programName": "HSBC Rewards"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Points",
        "programName": "HSBC Rewards"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Points",
        "programName": "HSBC Rewards"
      }
    ],
    "insurance": [
      {
        "insuranceType": "Travel Medical",
        "details": "Up to $5,000,000 emergency medical coverage for travel periods up to 21 days.",
        "dollarValue": 168
      },
      {
        "insuranceType": "Rental Car Collision",
        "details": "Collision Damage Waiver (CDW) covering theft or physical damage on rental vehicles with MSRP up to $65,000.",
        "dollarValue": 70
      },
      {
        "insuranceType": "Purchase Security",
        "details": "Protects newly purchased eligible items against loss, damage, or theft for 90 days from the purchase date.",
        "dollarValue": 15
      },
      {
        "insuranceType": "Extended Warranty",
        "details": "Doubles the manufacturer's original Canadian warranty coverage up to one additional year.",
        "dollarValue": 15
      }
    ],
    "perks": []
  },
  {
    "id": "card-wealthsimple-cash",
    "name": "Wealthsimple Cash Card",
    "slug": "wealthsimple-cash",
    "issuerId": "wealthsimple",
    "issuer": {
      "id": "wealthsimple",
      "name": "Wealthsimple",
      "logoUrl": "/images/issuers/wealthsimple.png"
    },
    "network": "Visa",
    "cardType": "Personal Credit",
    "level": "Prepaid. Flat 1% CB. No FX.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 19.99,
    "interestCash": 22.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "N/A",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 2.8,
    "overallRating": 4,
    "affiliateUrl": "https://www.toprates.ca/go/wealthsimple-cash",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"No Annual Fee card features\",\"Low Interest card features\",\"Newcomers card features\",\"Prepaid. Flat 1% CB. No FX.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      },
      {
        "id": "low-interest",
        "name": "Low Interest"
      },
      {
        "id": "newcomers",
        "name": "Newcomers"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": [
      {
        "perkName": "No Foreign Transaction Fees",
        "description": "Saves 2.5% on all transactions in currencies other than Canadian dollars."
      }
    ]
  },
  {
    "id": "card-loop-visa",
    "name": "Loop Card",
    "slug": "loop-visa",
    "issuerId": "loop-financial",
    "issuer": {
      "id": "loop-financial",
      "name": "Loop Financial",
      "logoUrl": "/images/issuers/loop-financial.png"
    },
    "network": "Visa",
    "cardType": "Business Credit",
    "level": "Business prepaid. No FX fee.",
    "annualFee": 0,
    "firstYearFeeWaived": false,
    "interestPurchase": 19.99,
    "interestCash": 22.99,
    "minIncomePersonal": 0,
    "minIncomeHousehold": 0,
    "recommendedCreditScore": "N/A",
    "welcomeBonusText": "None (Estimated $0 value)",
    "welcomeBonusValue": 0,
    "topRatesScore": 2.8,
    "overallRating": 4,
    "affiliateUrl": "https://www.toprates.ca/go/loop-visa",
    "applyUrl": "#",
    "prosJson": "[\"Cash Back card features\",\"No Annual Fee card features\",\"Low Interest card features\",\"Business card features\",\"Newcomers card features\",\"Business prepaid. No FX fee.\"]",
    "consJson": "[\"Fewer premium travel perks than high-fee cards\"]",
    "categories": [
      {
        "id": "cash-back",
        "name": "Cash Back"
      },
      {
        "id": "no-annual-fee",
        "name": "No Annual Fee"
      },
      {
        "id": "low-interest",
        "name": "Low Interest"
      },
      {
        "id": "business",
        "name": "Business"
      },
      {
        "id": "newcomers",
        "name": "Newcomers"
      }
    ],
    "rewards": [
      {
        "category": "Base",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Grocery",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Gas",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Dining",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Travel",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Drug",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Recurring",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      },
      {
        "category": "Online",
        "rate": 1,
        "rewardType": "Cashback",
        "programName": "N/A"
      }
    ],
    "insurance": [],
    "perks": [
      {
        "perkName": "No Foreign Transaction Fees",
        "description": "Saves 2.5% on all transactions in currencies other than Canadian dollars."
      }
    ]
  }
];
