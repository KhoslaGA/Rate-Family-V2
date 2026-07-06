/**
 * Landing-page data for /auto-insurance/[slug]
 *
 * Three types — province, city, driver — share one template
 * (src/components/landing/AutoLandingPage.tsx). Each entry produces
 * one statically-generated route at build time.
 */

export type LandingType = 'province' | 'city' | 'driver';

export interface LandingStat {
  label: string;
  value: string;
  hint?: string;
}

export interface LandingFaq {
  q: string;
  a: string;
}

export interface LandingBodySection {
  heading: string;
  body: string;
}

export interface LandingData {
  slug: string;
  type: LandingType;
  label: string;
  /** Used in hero subhead + JSON-LD LocalBusiness areaServed */
  region: string;
  /** Quick eyebrow text above H1 */
  eyebrow: string;
  /** Page H1 */
  h1: string;
  /** 1-2 sentence subhead under H1 */
  subhead: string;
  /** SEO meta */
  metaTitle: string;
  metaDescription: string;
  /** Top stat shown big + 3 secondary stats in the hero band */
  primaryStat: LandingStat;
  secondaryStats: LandingStat[];
  /** Ordered body content — one intro then sections */
  intro: string;
  sections: LandingBodySection[];
  faqs: LandingFaq[];
  /**
   * FSAs (3-char Forward Sortation Areas, e.g. "L6P") covered by this
   * city page. Used by PostalCodeHero to route a postal-code submit to
   * the matching city page. Only populated for type==='city'.
   * Source: best-effort from page text; replace with canonical Canada
   * Post FSA list before paid traffic.
   */
  fsas?: string[];
}

/* ============================================================
   PROVINCES (4 — Ontario lives at /auto-insurance directly)
   ============================================================ */

const provinces: LandingData[] = [
  {
    slug: 'alberta',
    type: 'province',
    label: 'Alberta Car Insurance',
    region: 'Alberta',
    eyebrow: "ALBERTA · GRID-RATED",
    h1: 'Compare car insurance in Alberta',
    subhead:
      "Alberta uses a grid system that caps premiums for basic drivers. We compare optional coverage, accident benefits, and add-ons across every Alberta carrier so you can see what you're really paying for.",
    metaTitle: 'Alberta Car Insurance — Editorial Guide & Grid System | TopRates.ca',
    metaDescription:
      "Editorial guide to Alberta auto insurance: the AIRB grid, optional coverage, and which carriers compete in Alberta. Independent Canadian insurance education.",
    primaryStat: { label: 'Avg AB premium', value: '$1,316/yr', hint: '2026 GIO data' },
    secondaryStats: [
      { label: 'Carriers covered editorially', value: '20+' },
      { label: 'Comparison launches', value: 'At launch' },
      { label: 'Quote inquiry time', value: '<2 min' },
    ],
    intro:
      "Alberta's auto insurance market is the second-largest in Canada, but it's also one of the most regulated. Premiums for the mandatory parts of your policy are set by a province-wide grid that limits how much insurers can charge basic drivers. The competition happens around optional coverage — collision, comprehensive, accident benefits — where carriers can price freely.",
    sections: [
      {
        heading: 'How the Alberta grid works',
        body: "The Automobile Insurance Rate Board (AIRB) updates the grid quarterly. Most drivers pay the gridded basic rate, but optional add-ons (collision, comprehensive, increased liability) are where insurers compete. Comparing optional coverage prices is where the real savings live — typically $300-$600/yr for the same policy from a different carrier.",
      },
      {
        heading: 'Top Alberta carriers',
        body: "Intact, Aviva, Wawanesa, Co-operators, Allstate, and TD Insurance dominate the Alberta market. Smaller mutuals like Peace Hills Insurance and SGI Canada have strong rural and small-town presence. Telematics programs from Belair, Intact, and Aviva can save 10-25% for safe drivers.",
      },
    ],
    faqs: [
      {
        q: 'Why is my Alberta premium higher than the grid rate?',
        a: 'The grid only covers mandatory liability and accident benefits at minimum limits. Most drivers buy optional collision, comprehensive, and increased liability — those are not gridded and carrier prices vary 30-50% for the same coverage.',
      },
      {
        q: "Can I switch carriers mid-term in Alberta?",
        a: 'Yes. You can cancel any time. Most carriers charge a short-rate penalty (about 10% of unused premium) for early cancellation. Your new carrier handles the cancellation paperwork.',
      },
      {
        q: 'Does Alberta have direct compensation property damage (DCPD)?',
        a: "No — Alberta still uses tort-based property damage. If someone hits you, you claim against their insurer. That's different from Ontario's DCPD where you claim from your own carrier.",
      },
    ],
  },
  {
    slug: 'quebec',
    type: 'province',
    label: 'Quebec Car Insurance',
    region: 'Quebec',
    eyebrow: 'QUEBEC · HYBRID NO-FAULT',
    h1: 'Compare car insurance in Quebec',
    subhead:
      "Quebec runs a hybrid system: bodily injury is publicly insured by the SAAQ (everyone pays the same), while property damage and physical damage are private. That's why Quebec has Canada's lowest auto premiums.",
    metaTitle: 'Quebec Car Insurance — SAAQ + Private Coverage Compared | TopRates.ca',
    metaDescription:
      "Quebec auto insurance combines SAAQ public coverage for injuries with private coverage for collision and theft. Editorial coverage of 15+ Quebec carriers; quote comparison is planned, once KLC Group Canada Inc. completes RIBO registration.",
    primaryStat: { label: 'Avg QC premium', value: '$717/yr', hint: 'Lowest in Canada' },
    secondaryStats: [
      { label: 'Carriers covered editorially', value: '15+' },
      { label: 'Comparison launches', value: 'At launch' },
      { label: 'Quote inquiry time', value: '<2 min' },
    ],
    intro:
      "Quebec drivers pay the lowest car insurance in Canada — about half of what Ontarians pay — because injury coverage is handled publicly through the Société de l'assurance automobile du Québec (SAAQ). Private insurers only cover property damage and physical damage to your vehicle, so there's less premium to compete on. But the optional pieces still matter: collision, comprehensive, and replacement-cost endorsements vary 20-40% between carriers.",
    sections: [
      {
        heading: 'How SAAQ + private split works',
        body: "Every licensed driver pays SAAQ contributions automatically through their plates and license — that's bodily-injury coverage for any accident, anywhere in the world. Your private auto policy on top covers physical damage to your car (collision, comprehensive) and property damage to others. You can't opt out of SAAQ; you can shop around for everything else.",
      },
      {
        heading: 'Top Quebec carriers',
        body: "Desjardins Assurances dominates the Quebec market with about 25% share, followed by Intact, Industrielle Alliance, La Capitale, Beneva, and SSQ. Quebec is unique in having strong cooperative and mutual insurers alongside the big nationals — comparison matters because pricing differences run 30%+ for identical coverage.",
      },
    ],
    faqs: [
      {
        q: 'Do I still need bodily injury liability in Quebec?',
        a: "Not for accidents within Quebec — SAAQ handles those. But if you drive outside Quebec, your private policy needs to include bodily injury liability for accidents in other provinces or US states.",
      },
      {
        q: 'Why are Quebec premiums so much lower?',
        a: "Three reasons: the SAAQ takes the most expensive piece (bodily injury) out of the private market, the no-fault system suppresses litigation costs, and Quebec has lower vehicle-theft rates than Ontario. The combined effect is roughly 50% lower private premiums.",
      },
      {
        q: 'Are quotes binding in Quebec the same way?',
        a: 'Yes. Once you bind a policy with a Quebec carrier, the rate is locked for the term (usually 12 months). The SAAQ portion is renewed automatically with your driver license and plate registration.',
      },
    ],
  },
  {
    slug: 'atlantic',
    type: 'province',
    label: 'Atlantic Canada Car Insurance',
    region: 'Atlantic Canada',
    eyebrow: 'NB · NS · PEI · NL',
    h1: 'Compare car insurance in Atlantic Canada',
    subhead:
      "New Brunswick, Nova Scotia, PEI, and Newfoundland & Labrador each run their own auto-insurance market. We compare carriers across all four provinces and explain the rules that actually affect your premium.",
    metaTitle: 'Atlantic Canada Car Insurance — NB, NS, PEI, NL Rates | TopRates.ca',
    metaDescription:
      "Compare car insurance in New Brunswick, Nova Scotia, PEI, and Newfoundland. Different rules per province; we break down each market.",
    primaryStat: { label: 'Avg ATL premium', value: '$891/yr', hint: 'Across 4 provinces' },
    secondaryStats: [
      { label: 'Carriers covered editorially', value: '12+' },
      { label: 'Comparison launches', value: 'At launch' },
      { label: 'Quote inquiry time', value: '<2 min' },
    ],
    intro:
      "Atlantic Canada's auto insurance markets are smaller than Ontario or Quebec, but each province has its own rules and carrier mix. New Brunswick and Nova Scotia run private, tort-based systems with mandatory minimums. PEI is similar but with a much smaller market. Newfoundland & Labrador has the most expensive Atlantic premiums, partly due to weather and partly due to fewer carriers competing.",
    sections: [
      {
        heading: 'Per-province highlights',
        body: "**New Brunswick:** mandatory $200K third-party liability, optional collision typical $1,200/yr. **Nova Scotia:** similar tort system; SGI and Wawanesa have strongest pricing. **PEI:** smallest market; Co-operators and Wawanesa lead. **NL:** highest premiums in Atlantic, averaging $1,250/yr; weather and rural roads drive claims costs up.",
      },
      {
        heading: 'Top Atlantic carriers',
        body: "Intact, Wawanesa, Aviva, and Co-operators serve all four provinces. Local mutuals like Anchor (NB) and Newfoundland & Labrador Liquor Insurance Company also have presence. Bundling home + auto saves 10-20% across Atlantic — most homeowners qualify for the bundle discount.",
      },
    ],
    faqs: [
      {
        q: 'Are Atlantic auto-insurance rules different from Ontario?',
        a: "Yes. Atlantic provinces use tort-based systems where you sue the at-fault driver's insurer. Ontario uses no-fault for accident benefits and DCPD for property damage. Atlantic also has lower mandatory minimum limits, so most Atlantic drivers buy increased liability.",
      },
      {
        q: 'Can I keep my Ontario policy if I move to Halifax?',
        a: "No. Each province requires a policy issued under that province's rules. Within 30 days of moving you need to re-license and re-insure. Most national carriers handle the cross-province transfer in one phone call.",
      },
      {
        q: "Why is Newfoundland's auto insurance the most expensive in Atlantic?",
        a: 'Lower population density, fewer carriers competing, harsher weather, and higher claim costs per accident. Some communities also have higher fraud rates that affect the regional pool.',
      },
    ],
  },
  {
    slug: 'all-provinces',
    type: 'province',
    label: 'Compare All Provinces',
    region: 'Canada',
    eyebrow: 'NATIONAL RATE MAP',
    h1: 'Compare car insurance across Canada',
    subhead:
      "Auto insurance in Canada is provincially regulated — the rules and average premiums vary dramatically by province. Use our national rate map to see where your province ranks and what's driving the difference.",
    metaTitle: 'Canada Auto Insurance Rate Map — Compare All Provinces | TopRates.ca',
    metaDescription:
      "See average car insurance rates across all 10 provinces. Understand why Ontario premiums are 2x Quebec's and how to find the cheapest carrier in your province.",
    primaryStat: { label: 'Canadian avg premium', value: '$1,485/yr', hint: '2026 weighted average' },
    secondaryStats: [
      { label: 'Provinces covered', value: '10' },
      { label: 'Carriers nationwide', value: '50+' },
      { label: 'Quote inquiry time', value: '<2 min' },
    ],
    intro:
      "Canadian car insurance is regulated provincially, so a 35-year-old with a clean record will pay $700 in Quebec, $1,300 in Alberta, $1,800 in Ontario, and $2,100 in BC for nearly identical coverage. The differences come from how each province handles bodily-injury claims (public vs. private), fraud rates, and weather risk.",
    sections: [
      {
        heading: 'Why provincial premiums differ',
        body: "**Public injury coverage** (BC's ICBC, Manitoba's MPI, Saskatchewan's SGI, Quebec's SAAQ) puts injury claims into a pooled public system, which usually lowers private premiums but isn't always cheaper overall — you pay the public portion through your registration. **Private markets** (Ontario, Alberta, Atlantic) let carriers compete on price for everything, including injury coverage, leading to bigger spreads between cheap and expensive carriers.",
      },
      {
        heading: 'Cheapest to most expensive (2026 averages)',
        body: "Quebec ($717), Atlantic ($891), Alberta ($1,316), Ontario ($1,838), BC ($1,950). The Manitoba and Saskatchewan public systems are around $1,100-$1,300 depending on vehicle. Provincial rules also affect what coverage you must buy: Ontario mandates DCPD; Alberta doesn't. Some optional benefits in one province aren't available in another.",
      },
    ],
    faqs: [
      {
        q: 'Can I keep my insurance when I move provinces?',
        a: 'No. Each province requires a policy issued under its own regulations. You have 30-90 days (varies by province) to re-license and re-insure after a move.',
      },
      {
        q: 'Why is Ontario auto insurance so expensive?',
        a: 'Three reasons: a generous accident benefits regime that drives up settlement costs, high vehicle theft rates (especially in the GTA), and Brampton/Mississauga fraud claims that raise the regional risk pool. The July 2026 reform aims to address point #1 by making most accident benefits optional.',
      },
      {
        q: 'Which province has the cheapest car insurance?',
        a: "Quebec, by a wide margin. The average Quebec premium is roughly $717/yr versus the national average of $1,485/yr — a difference driven mostly by the SAAQ taking bodily-injury coverage out of the private market.",
      },
    ],
  },
];

/* ============================================================
   ONTARIO CITIES (6)
   ============================================================ */

const cities: LandingData[] = [
  {
    slug: 'brampton',
    type: 'city',
    label: 'Brampton Car Insurance',
    region: 'Brampton, Ontario',
    fsas: ['L6P', 'L6R', 'L6S', 'L6T', 'L6V', 'L6W', 'L6X', 'L6Y', 'L6Z'],
    eyebrow: 'BRAMPTON · ONTARIO',
    h1: 'Car insurance in Brampton',
    subhead:
      "Brampton has the highest average car insurance rates in Ontario — averaging $3,802/yr — driven by fraud rates, vehicle theft, and dense storage. This editorial guide breaks down what's driving those rates and the levers Brampton drivers have today.",
    metaTitle: 'Brampton Car Insurance — Why Premiums Are Highest in Ontario | TopRates.ca',
    metaDescription:
      "Brampton car insurance averages $3,802/yr — the highest in Ontario. Editorial guide to fraud, theft, and territory factors driving Brampton premiums. Independent Canadian insurance education.",
    primaryStat: { label: 'Avg Brampton premium', value: '$3,802/yr', hint: '2× Ontario average' },
    secondaryStats: [
      { label: 'Carriers covered editorially', value: '30+' },
      { label: 'Comparison launches', value: 'At launch' },
      { label: 'Quote inquiry time', value: '<2 min' },
    ],
    intro:
      "Brampton sits at the top of Ontario's auto-insurance ranking — and not in a good way. The average Brampton premium is roughly twice the Ontario average, due to a combination of fraud rates, high vehicle theft, dense urban storage, and a younger demographic. Many Brampton drivers haven't shopped competitively in the last 12 months — and Ontario carrier pricing varies enough between providers that periodic comparison is one of the biggest levers Brampton drivers have.",
    sections: [
      {
        heading: 'Why Brampton premiums are so high',
        body: "Three big drivers: **(1) Fraud claims** — Brampton has historically had the highest staged-collision rates in Ontario, which insurers price into the regional pool. **(2) Vehicle theft** — newer Hondas, Toyotas, and Lexus models stolen in 905-area neighborhoods drive up comprehensive premiums. **(3) Demographics** — younger driver base + high commute volumes into Toronto.",
      },
      {
        heading: 'How Brampton drivers actually save',
        body: "**Telematics programs** (Intact Drive, Belair Smart, Aviva Journey, Desjardins Adjusto) typically save 15-30% for safe Brampton drivers. **Bundling home + auto** saves another 10-20%. **Increasing your collision deductible** from $500 to $1,000 cuts collision by 8-12%. **Anti-theft devices** (after-market trackers, immobilizers) reduce comprehensive premiums on theft-prone vehicles. Combining these can cut a $3,800 premium below $2,500.",
      },
    ],
    faqs: [
      {
        q: 'Why is Brampton 2× the Ontario average?',
        a: "Three factors: claims frequency in the L6X/L6Y/L6Z postal codes is among the highest in Ontario, vehicle theft has spiked in the 905 since 2022, and the Brampton driver pool skews younger with shorter average insurance histories. All three feed into how carriers rate Brampton-territory rates.",
      },
      {
        q: 'Will the July 2026 reform help Brampton drivers?',
        a: "Yes — the reform makes most accident benefits optional. A typical Brampton driver could lower their annual premium by several hundred dollars by opting for the default $400/wk income replacement instead of the current mandatory $600/wk. Self-assessment matters: drivers with strong workplace disability coverage will benefit most.",
      },
      {
        q: "Should I avoid certain Brampton postal codes when buying a house?",
        a: "Insurance does vary by postal code (FSA-level rating). L6X tends to price highest; L6P and L6T are usually a few hundred dollars cheaper for the same driver. But the difference between cheap and expensive carriers within a single postal code is bigger than the difference between postal codes.",
      },
    ],
  },
  {
    slug: 'mississauga',
    type: 'city',
    label: 'Mississauga Car Insurance',
    region: 'Mississauga, Ontario',
    fsas: [
      'L4T', 'L4V', 'L4W', 'L4X', 'L4Y', 'L4Z',
      'L5A', 'L5B', 'L5C', 'L5E', 'L5G', 'L5H', 'L5J', 'L5K', 'L5L',
      'L5M', 'L5N', 'L5R', 'L5S', 'L5T', 'L5V', 'L5W',
    ],
    eyebrow: 'MISSISSAUGA · PEEL',
    h1: 'Car insurance in Mississauga',
    subhead:
      "Mississauga sits between Brampton's high rates and Toronto's mid-tier rates. The average premium is $2,489/yr — but variance between carriers runs over $1,000/yr for identical coverage.",
    metaTitle: 'Mississauga Car Insurance — Postal Code Pricing Guide | TopRates.ca',
    metaDescription:
      "Mississauga car insurance averages $2,489/yr. Editorial breakdown of how 30+ Ontario carriers price Mississauga by postal code, age, and vehicle. Independent Canadian insurance education.",
    primaryStat: { label: 'Avg Mississauga premium', value: '$2,489/yr' },
    secondaryStats: [
      { label: 'Carriers covered editorially', value: '30+' },
      { label: 'Quote inquiry time', value: '<2 min' },
      { label: 'Comparison launches', value: 'At launch' },
    ],
    intro:
      "Mississauga is Ontario's third-largest auto-insurance market by premium volume, and rates sit roughly $1,300/yr below Brampton but $400/yr above the Ontario average. Carrier pricing varies dramatically by L4-prefix postal code: Lakeview (L5G) is among the cheapest in Mississauga; Malton (L4T) is among the most expensive. Comparing carriers is where most Mississauga drivers find their savings.",
    sections: [
      {
        heading: 'Mississauga rate by area',
        body: "**Lower-rate areas:** Lakeview, Port Credit, Clarkson, Erin Mills (L5G, L5H, L5J, L5L) — typically $2,000-$2,300/yr for clean drivers. **Mid-rate areas:** Streetsville, Cooksville, Meadowvale (L5M, L5N, L5W) — typically $2,400-$2,700. **Higher-rate areas:** Malton, Northeast Mississauga (L4T, L4W) — closer to Brampton pricing at $2,800-$3,200.",
      },
      {
        heading: 'Top carriers serving Mississauga',
        body: "Intact, Wawanesa, Aviva, Desjardins, Allstate, Belairdirect, and Travelers all compete actively in Mississauga. Wawanesa often comes in lowest for clean-record drivers; Intact's telematics program (Intact Drive) is the strongest in the GTA; Belairdirect's online-only pricing is competitive for young drivers.",
      },
    ],
    faqs: [
      {
        q: 'Is Mississauga insurance cheaper than Toronto?',
        a: 'Slightly. Toronto core (M5/M6 codes) averages $2,200-$2,400; Mississauga averages $2,489. The difference comes down to commute patterns, vehicle theft rates, and parking situation — not a structural pricing gap.',
      },
      {
        q: 'Does carrier matter more than postal code in Mississauga?',
        a: 'Usually yes. The price spread between cheapest and most expensive carrier for the same driver in the same postal code is typically $800-$1,200/yr. Moving to a cheaper postal code within Mississauga saves maybe $300-$400/yr.',
      },
      {
        q: 'Will Mississauga rates drop after July 1, 2026?',
        a: "Most Mississauga drivers can lower their annual premium by several hundred dollars by opting out of the now-optional accident benefits, but only if they have strong workplace disability coverage to fall back on. Take the self-assessment quiz before your renewal.",
      },
    ],
  },
  {
    slug: 'scarborough',
    type: 'city',
    label: 'Scarborough & North York Car Insurance',
    region: 'Scarborough & North York, Toronto',
    fsas: [
      // Scarborough M1B-M1X
      'M1B', 'M1C', 'M1E', 'M1G', 'M1H', 'M1J', 'M1K', 'M1L', 'M1M',
      'M1N', 'M1P', 'M1R', 'M1S', 'M1T', 'M1V', 'M1W', 'M1X',
      // North York M2H-M2R
      'M2H', 'M2J', 'M2K', 'M2L', 'M2M', 'M2N', 'M2P', 'M2R',
      // North York M3A-M3N
      'M3A', 'M3B', 'M3C', 'M3H', 'M3J', 'M3K', 'M3L', 'M3M', 'M3N',
    ],
    eyebrow: 'TORONTO · SCARBOROUGH · NORTH YORK',
    h1: 'Car insurance in Scarborough & North York',
    subhead:
      "Scarborough (M1 postal codes) and North York (M2/M3) sit on Toronto's periphery with mid-tier auto insurance rates — averaging $2,200/yr but with major variance based on age, vehicle, and exact postal code.",
    metaTitle: 'Scarborough & North York Car Insurance — Toronto Suburb Rates | TopRates.ca',
    metaDescription:
      "Scarborough and North York car insurance averages $2,200/yr. Editorial coverage of how 30+ Ontario carriers price Toronto's eastern and northern suburbs. Independent Canadian insurance education.",
    primaryStat: { label: 'Avg M1/M2/M3 premium', value: '$2,200/yr' },
    secondaryStats: [
      { label: 'Carriers covered editorially', value: '30+' },
      { label: 'Comparison launches', value: 'At launch' },
      { label: 'Quote inquiry time', value: '<2 min' },
    ],
    intro:
      "Toronto's eastern suburbs (Scarborough) and northern suburbs (North York) make up the M1, M2, and M3 postal-code zones. Premiums are roughly mid-Toronto: lower than Brampton or downtown Toronto, but higher than 905 areas like Oakville or Markham. The variance across carriers is the biggest single factor — for the same driver, premiums can differ by hundreds of dollars depending on the carrier.",
    sections: [
      {
        heading: 'Toronto suburb rate breakdown',
        body: "**Scarborough (M1B-M1X):** averages $2,300/yr; eastern Scarborough (M1E, M1G) tends to price slightly lower than west (M1J, M1K). **North York (M2H-M2R, M3A-M3N):** averages $2,100/yr; Don Mills and Willowdale price lower than Jane and Finch corridor. **York (M6, M9):** mid-range; mostly tracks with North York pricing.",
      },
      {
        heading: 'TTC commuter discounts',
        body: "Many Scarborough and North York drivers commute by TTC and only use the car on weekends. Carriers like Wawanesa, Intact, and Belairdirect offer **low-mileage discounts** for drivers under 12,000 km/yr — often 15-20% off. Telematics programs verify driving patterns and can stack with the low-mileage discount.",
      },
    ],
    faqs: [
      {
        q: 'Are Scarborough rates higher than North York?',
        a: 'Slightly — about $200/yr higher on average, due to higher claims frequency in Scarborough East and West. But within either area, the carrier you pick matters more than which postal code you live in.',
      },
      {
        q: 'How do I know which carrier prices my area lowest?',
        a: 'Carriers segment Toronto into roughly 15 territories. Some over-price Scarborough relative to claims history; others under-price North York. The only way to find your cheapest is to compare quotes from at least 5-6 carriers in parallel.',
      },
      {
        q: 'Does the city of Toronto fee affect my premium?',
        a: 'No. The Vehicle Registration Tax is on plates/registration, not insurance. Your premium is rated by territory, not municipality.',
      },
    ],
  },
  {
    slug: 'vaughan',
    type: 'city',
    label: 'Vaughan & Markham Car Insurance',
    region: 'Vaughan, Markham, Richmond Hill',
    fsas: [
      // Vaughan
      'L4H', 'L4J', 'L4K', 'L4L',
      // Markham
      'L3P', 'L3R', 'L3S', 'L3T',
      // Richmond Hill
      'L4B', 'L4C', 'L4E', 'L4S',
    ],
    eyebrow: 'YORK REGION · 905',
    h1: 'Car insurance in Vaughan & Markham',
    subhead:
      "Vaughan, Markham, and Richmond Hill sit in the higher-premium 905 territory — averaging $2,300/yr. Newer luxury vehicles, higher theft rates, and longer commutes drive the rates up.",
    metaTitle: 'Vaughan & Markham Car Insurance — York Region Rates | TopRates.ca',
    metaDescription:
      "Vaughan, Markham, and Richmond Hill car insurance averages $2,300/yr. Editorial coverage of how 30+ Ontario carriers price York Region. Independent Canadian insurance education.",
    primaryStat: { label: 'Avg York Region premium', value: '$2,300/yr' },
    secondaryStats: [
      { label: 'Carriers covered editorially', value: '30+' },
      { label: 'Comparison launches', value: 'At launch' },
      { label: 'Quote inquiry time', value: '<2 min' },
    ],
    intro:
      "York Region — Vaughan, Markham, Richmond Hill, and surrounding municipalities — has Ontario's third-highest urban auto-insurance rates after Brampton and Toronto's central wards. The mix of newer luxury vehicles, longer 401/407 commutes into Toronto, and elevated comprehensive theft claims (especially Honda CR-Vs and Toyota Highlanders) all push premiums above the Ontario average.",
    sections: [
      {
        heading: 'York Region by city',
        body: "**Vaughan (L4H, L4J, L4K, L4L):** averages $2,400/yr; northern Vaughan (Kleinburg, Maple) prices similarly to Mississauga. **Markham (L3P, L3R, L3S, L3T):** averages $2,200/yr; Unionville and Thornhill price slightly lower. **Richmond Hill (L4B, L4C, L4E, L4S):** averages $2,150/yr; older neighborhoods price lowest.",
      },
      {
        heading: 'Why theft drives York Region pricing',
        body: "York Region was the epicentre of Ontario's 2022-2024 vehicle theft surge. Driveway thefts of Honda, Toyota, and Lexus SUVs added several hundred dollars to comprehensive premiums in affected postal codes. Anti-theft trackers (Tag, Foxtrack), garage parking, and Faraday-pouch key storage can knock $200-$400/yr off comprehensive for theft-prone vehicles.",
      },
    ],
    faqs: [
      {
        q: 'Why is my Vaughan premium higher than Toronto?',
        a: 'Two main reasons: York Region had a much higher rate of vehicle theft (especially of luxury SUVs) during the 2022-24 surge, and Vaughan/Markham drivers tend to own newer, more expensive vehicles. Both feed into higher comprehensive premiums.',
      },
      {
        q: 'Should I add anti-theft tracking after the surge?',
        a: 'For high-theft vehicles (Honda CR-V, RAV4, Highlander, Lexus RX), yes — most carriers give 5-15% off comprehensive for an after-market tracker like Tag or Foxtrack. The device costs $400-$600 plus a monthly fee, but pays for itself in 2-3 years on theft-prone vehicles.',
      },
      {
        q: 'Are Markham rates dropping as theft slows?',
        a: 'Slowly. Carriers update territory rates quarterly. Theft claims have plateaued since mid-2024, and 2026 territory rates are starting to reflect that. Renewing in 2026-27 should show 3-8% reduction on comprehensive in formerly high-theft postal codes.',
      },
    ],
  },
  {
    slug: 'eastern-ontario',
    type: 'city',
    label: 'Eastern Ontario Car Insurance',
    region: 'Ottawa, Kingston, Cornwall, Belleville',
    fsas: [
      // Ottawa K1
      'K1A', 'K1B', 'K1C', 'K1E', 'K1G', 'K1H', 'K1J', 'K1K', 'K1L',
      'K1M', 'K1N', 'K1P', 'K1R', 'K1S', 'K1T', 'K1V', 'K1W', 'K1X',
      'K1Y', 'K1Z',
      // Ottawa K2
      'K2A', 'K2B', 'K2C', 'K2E', 'K2G', 'K2H', 'K2J', 'K2K', 'K2L',
      'K2M', 'K2P', 'K2R', 'K2S', 'K2T', 'K2V', 'K2W',
      // Ottawa K4 (Orleans/Kanata fringe)
      'K4A', 'K4B', 'K4C', 'K4M', 'K4P', 'K4R',
      // Kingston K7
      'K7K', 'K7L', 'K7M', 'K7N', 'K7P',
      // Cornwall K6
      'K6H', 'K6J', 'K6K',
      // Belleville / Quinte K8 + K0K
      'K8N', 'K8P', 'K0K',
    ],
    eyebrow: 'OTTAWA · KINGSTON · CORNWALL',
    h1: 'Car insurance in Eastern Ontario',
    subhead:
      "Eastern Ontario — Ottawa, Kingston, Cornwall, Belleville and surrounding areas — has Ontario's lowest auto insurance rates, averaging $1,412/yr. Lower theft, less congestion, and more rural driving keep rates down.",
    metaTitle: 'Eastern Ontario Car Insurance — Ottawa, Kingston, Cornwall | TopRates.ca',
    metaDescription:
      "Eastern Ontario auto insurance averages $1,412/yr — Ontario's lowest. Editorial coverage of Ottawa, Kingston, Cornwall, Belleville and area carriers. Independent Canadian insurance education.",
    primaryStat: { label: 'Avg Eastern Ontario premium', value: '$1,412/yr', hint: "Lowest in ON" },
    secondaryStats: [
      { label: 'Carriers covered editorially', value: '30+' },
      { label: 'Comparison launches', value: 'At launch' },
      { label: 'Quote inquiry time', value: '<2 min' },
    ],
    intro:
      "If you live in Ottawa, Kingston, Cornwall, Belleville, or anywhere east of Toronto, you're in Ontario's cheapest auto-insurance territory. The average Eastern Ontario premium is roughly $1,412/yr — about 25% below the Ontario average and less than half of Brampton. Lower vehicle-theft rates, less congestion, and more highway driving (which has lower claim frequency than city driving) all keep premiums down.",
    sections: [
      {
        heading: 'Eastern Ontario by city',
        body: "**Ottawa (K1, K2, K4, K7):** averages $1,400/yr; the K1 core prices a bit higher, K2/K4 suburbs price lower. **Kingston (K7L-K7P):** averages $1,350/yr. **Cornwall (K6H, K6J, K6K):** averages $1,280/yr — among the cheapest in Ontario. **Belleville/Quinte (K8N, K8P, K0K):** averages $1,300/yr.",
      },
      {
        heading: 'Why Eastern Ontario is cheap',
        body: "Three structural reasons: **(1) Lower theft** — the GTA-area vehicle theft surge didn't reach Eastern Ontario at the same scale. **(2) Rural-skewing driving** — fewer parking-lot scrapes, fewer rear-enders, lower claims frequency overall. **(3) Smaller urban centers** — even Ottawa's downtown traffic is mild compared to Toronto's, which keeps urban-territory rates much lower.",
      },
    ],
    faqs: [
      {
        q: 'Are quotes from local Ottawa brokers cheaper than national carriers?',
        a: "Sometimes. Local brokers can access regional mutuals (like SGI Canada or Pembridge) that national comparison sites miss. Comparing both — national carriers AND local brokers — typically finds you the cheapest rate.",
      },
      {
        q: 'Why does Cornwall price lower than Ottawa?',
        a: 'Smaller population, less congestion, fewer claims per insured vehicle. Cornwall sits in a lower-rated territory than Ottawa, which has the busier traffic and higher claim frequency you find in any provincial capital.',
      },
      {
        q: 'Do federal employees in Ottawa get a discount?',
        a: 'Some carriers offer group-affinity discounts for federal employees, military, RCMP, and university staff. Discounts run 5-15%. Worth asking when you compare quotes — not all carriers advertise these openly.',
      },
    ],
  },
  {
    slug: 'ontario-cities',
    type: 'city',
    label: 'All Ontario Cities',
    region: 'Ontario',
    eyebrow: 'CITY DIRECTORY',
    h1: 'Car insurance by Ontario city',
    subhead:
      "Ontario car insurance is rated by territory, and territories don't always match city boundaries. Use our directory to find your local territory's average premium and the carriers that price it lowest.",
    metaTitle: 'Ontario Car Insurance by City — Full Directory | TopRates.ca',
    metaDescription:
      "Editorial directory of Ontario car insurance by city — Brampton, Mississauga, Toronto, Ottawa, Hamilton, London, and more. Independent Canadian insurance education.",
    primaryStat: { label: 'Ontario avg premium', value: '$1,838/yr' },
    secondaryStats: [
      { label: 'Cities covered', value: '40+' },
      { label: 'Carriers', value: '30+' },
      { label: 'Quote inquiry time', value: '<2 min' },
    ],
    intro:
      "Ontario uses a territorial rating system — your premium is partly determined by where you park your car overnight. Auto-insurance territories don't always match municipal boundaries: a single city can have multiple territory codes, and pricing can swing $500/yr between them. Use our city directory to see your local territory's average and the carriers that price it best.",
    sections: [
      {
        heading: 'Ontario cities at a glance',
        body: "**Highest:** Brampton ($3,802), Mississauga-Malton ($3,200), Toronto-Etobicoke ($2,400). **Mid-range:** Vaughan/Markham ($2,300), Toronto-Scarborough ($2,200), Hamilton ($1,950). **Lowest:** Ottawa ($1,400), Kingston ($1,350), Cornwall ($1,280), London ($1,650), Sudbury ($1,500).",
      },
      {
        heading: 'How territories work',
        body: "FSRA divides Ontario into about 60 territories, grouped roughly by claims experience. Carriers can choose to follow the FSRA grouping or use their own (more granular) territory codes. That's why two carriers can quote different prices for the same address — one might price it as Toronto Central, the other as Toronto-East. Comparing carriers is the only way to find which one prices your specific address most favorably.",
      },
    ],
    faqs: [
      {
        q: "Can I save money by using a different mailing address?",
        a: 'No. Insurance fraud — and you have to insure the vehicle where it is regularly parked overnight. Misrepresenting your address can void your policy and any claim.',
      },
      {
        q: 'Why does my premium change when I move within the same city?',
        a: "Territory codes are usually FSA-level (first 3 characters of postal code). Moving from M5V to M6K within Toronto can change your territory and adjust your premium up or down.",
      },
      {
        q: "Is condo parking cheaper than street parking?",
        a: "Yes — most carriers ask whether you park in a garage, driveway, or on the street. Garage parking typically saves 5-10% on comprehensive premiums; street parking adds 5-10%.",
      },
    ],
  },
];

/* ============================================================
   DRIVER TYPES (6)
   ============================================================ */

const drivers: LandingData[] = [
  {
    slug: 'new-canadian',
    type: 'driver',
    label: 'Car Insurance for New Canadians',
    region: 'New residents of Canada',
    eyebrow: 'NEW TO CANADA',
    h1: 'Car insurance for new Canadians',
    subhead:
      "Most insurers price new Canadians 2-3× higher than equivalent Canadian drivers because they don't recognize foreign driving history. We compare carriers that DO accept international records.",
    metaTitle: 'Car Insurance for New Canadians — Foreign Driving History | TopRates.ca',
    metaDescription:
      "New to Canada? Most carriers ignore your foreign driving history. Editorial guide to 30+ Canadian carriers, including those that accept international experience. Independent Canadian insurance education.",
    primaryStat: { label: 'Avg new-Canadian quote', value: '$5,200/yr', hint: 'Without intl. credit' },
    secondaryStats: [
      { label: 'Best-case quote', value: '$2,400/yr' },
      { label: 'Comparison launches', value: 'At launch' },
      { label: 'Quote inquiry time', value: '<2 min' },
    ],
    intro:
      "Recent immigrants to Canada often discover their international driving record means almost nothing to Canadian insurers. With no Canadian-licensed history, most carriers treat you like a brand-new G2 driver — pricing premiums at $5,000+/yr. But a small number of carriers accept verified foreign driving records and price new Canadians as the experienced drivers they actually are. That's the difference between $5,200 and $2,400 a year.",
    sections: [
      {
        heading: 'Who accepts foreign driving history',
        body: "**Allstate, Travelers, Aviva, and Wawanesa** will recognize verified foreign driving records from countries with comparable licensing standards (US, UK, Australia, Germany, Japan, Korea, India for some carriers). You typically need a letter of experience from your previous insurer, translated and notarized. **Intact, Belairdirect, and most direct-writers** generally don't accept foreign history — they'll quote you as new.",
      },
      {
        heading: 'How to build Canadian credit fast',
        body: "Even if your first carrier prices you as new, you can transition to better pricing in 12-24 months: **(1) Buy a basic policy from a carrier that doesn't surcharge new Canadians too aggressively** (often Wawanesa or a regional broker). **(2) Drive clean for 12-18 months.** **(3) Re-shop at every renewal.** Each year of clean Canadian record drops your premium 20-30%. Most new Canadians reach competitive pricing within 3 years.",
      },
    ],
    faqs: [
      {
        q: 'Will my Indian / Filipino / Pakistani driving record count?',
        a: "Some carriers (Wawanesa, Allstate) accept records from any country if you can produce a notarized letter of experience. Others limit acceptance to a list of approved countries. The only way to know is to compare — get quotes from 5-6 carriers and tell each one your full foreign history.",
      },
      {
        q: 'How long until I price like a Canadian driver?',
        a: "About 3 years if you start from zero. After 12 months clean you're treated as 'experienced'; after 24-36 months you'll qualify for more competitive pricing. Each accident-free year is worth 5-10% off your premium.",
      },
      {
        q: 'Is there a special insurance product for new Canadians?',
        a: 'No formal product, but several carriers offer programs that explicitly accept international history. Tell every quote agent that you have foreign driving experience — they should be able to apply a "new-to-Canada" rate program if their carrier has one.',
      },
    ],
  },
  {
    slug: 'new-driver',
    type: 'driver',
    label: 'Car Insurance for New Drivers',
    region: 'G1, G2, and brand-new licensed drivers',
    eyebrow: 'G1 / G2 / NEW LICENSE',
    h1: 'Car insurance for new drivers',
    subhead:
      "First-year G2 drivers in Ontario typically see quotes between $4,500 and $8,000/yr. Comparison + telematics + good carrier choice can drop that under $3,000.",
    metaTitle: 'Car Insurance for New Drivers — G1, G2, Beginners | TopRates.ca',
    metaDescription:
      "First-year drivers in Ontario can pay up to $8,000/yr. Editorial guide to telematics programs, parental-policy stacking, and what 30+ carriers do with new drivers. Independent Canadian insurance education.",
    primaryStat: { label: 'Avg new-driver quote', value: '$5,400/yr', hint: '17-24 with G2' },
    secondaryStats: [
      { label: 'Best-case quote', value: '$2,800/yr' },
      { label: 'With telematics', value: '$2,100/yr' },
      { label: 'Quote inquiry time', value: '<2 min' },
    ],
    intro:
      "If you've just got your G2 — congratulations. Now brace yourself: Ontario insurers price first-year drivers 2-3× higher than experienced drivers, often $5,000-$8,000/yr for a basic Honda Civic. The good news is that the gap between cheap and expensive carriers is even wider for new drivers than for experienced ones. Plus telematics programs are particularly generous for new drivers — often saving 20-35% in year one.",
    sections: [
      {
        heading: 'How to keep new-driver premiums under control',
        body: "**(1) Pick a low-rated vehicle.** A Honda Civic, Mazda 3, or Toyota Corolla insures cheaper than a Mustang, Civic Si, or Wrangler. **(2) Stay on parents' policy as long as possible.** Adding you as an occasional driver on a parent's policy is much cheaper than buying your own. **(3) Use telematics from day one.** Programs like Aviva Journey, Intact Drive, Belair Smart can save 15-30%. **(4) Take an MTO-approved driver-training course.** The certificate counts as 'experience' on most carrier rate tables — equivalent to about 6-12 months of clean record.",
      },
      {
        heading: 'When to switch off parents\' policy',
        body: "If you live with your parents, stay listed on their policy until you move out or buy your own car. Insurers care more about who drives the car most than whose name is on the title. Once you do go solo, you'll need 12-18 months of clean record before pricing drops noticeably. Each year clean shaves 10-20% off the premium.",
      },
    ],
    faqs: [
      {
        q: 'How much does a driver-training certificate save?',
        a: "Most Ontario insurers credit MTO-approved beginner driver education (BDE) as roughly 1 year of driving experience. That can drop a $5,500 quote down to $4,000-$4,500 for a 17-year-old.",
      },
      {
        q: 'Should I get my own policy or stay on my parents\'?',
        a: "Stay on theirs as long as you live at the same address and primarily drive a family vehicle. Splitting off into your own policy adds $1,500-$3,000/yr in most cases. Once you move out or buy your own car, you have to switch.",
      },
      {
        q: 'Will telematics actually save me money?',
        a: "Yes, if you drive moderately. Most programs guarantee a 5-10% sign-up discount and add up to 25-30% based on score after 6 months of monitoring. They penalize hard braking, late-night driving, and phone use. For most new drivers it's a clear win.",
      },
    ],
  },
  {
    slug: 'young-drivers',
    type: 'driver',
    label: 'Car Insurance for Young Drivers Under 25',
    region: 'Drivers under 25',
    eyebrow: 'UNDER 25',
    h1: 'Car insurance for young drivers under 25',
    subhead:
      "Drivers under 25 in Ontario pay 60-100% more than 30-year-olds for identical coverage. Telematics, good-student discounts, and aggressive comparison can close most of that gap.",
    metaTitle: 'Young Driver Car Insurance Under 25 — Lower Your Premium | TopRates.ca',
    metaDescription:
      "Under-25 drivers pay 60-100% more than older drivers. Editorial guide to telematics programs and good-student discounts across Ontario carriers. Independent Canadian insurance education.",
    primaryStat: { label: 'Avg <25 premium', value: '$3,400/yr' },
    secondaryStats: [
      { label: 'Best-case quote', value: '$1,900/yr' },
      { label: 'Good-student discount', value: 'up to 20%' },
      { label: 'Quote inquiry time', value: '<2 min' },
    ],
    intro:
      "Insurers consider drivers under 25 statistically higher-risk — and they price accordingly. A 22-year-old with a clean G license typically pays $2,800-$4,000/yr in Ontario for a basic sedan, compared to $1,400-$1,800 for a 30-year-old with the same record. The path to lower premiums runs through three things: telematics, a good-student or post-secondary discount, and ruthless year-over-year comparison.",
    sections: [
      {
        heading: 'Discounts most under-25 drivers miss',
        body: "**Good-student discount** — most carriers give 10-20% off for full-time students with a B+ average. Bring a transcript to your quote. **Post-secondary attendance discount** — some carriers add an additional 5-10% for university or college students who keep the car at parents' home during term. **Telematics** — Aviva Journey, Intact Drive, Belair Smart can stack 15-30% savings on top of all other discounts. **MTO-approved driver-training certificate** — counts as experience on most rate tables.",
      },
      {
        heading: 'When premiums actually start dropping',
        body: "Most Ontario carriers re-rate drivers at 25, 30, and 35. The 25 → 26 transition typically drops your premium 8-12%. The biggest drop is at 25 if you've maintained a clean record. By 30, you'll pay 25-35% less than at 22 for the same coverage. Compounding that with telematics, good-student, and clean-record discounts means today's $3,400 premium can become $1,800 in three years.",
      },
    ],
    faqs: [
      {
        q: 'Is it cheaper to drive my parents\' car than buy my own?',
        a: "Yes, by a lot. Adding a young driver as 'occasional' on a parent's policy adds $800-$1,500/yr. Buying your own policy as a primary driver costs $2,500-$4,000/yr standalone. Stay on the parental policy as long as you can.",
      },
      {
        q: 'Do all carriers offer good-student discounts?',
        a: 'Most do, but the threshold and savings vary. Aviva, Intact, Wawanesa, and Allstate all offer good-student discounts for B+ students; Belairdirect and Travelers also offer them for full-time post-secondary students. Bring your transcript.',
      },
      {
        q: 'My friend pays half what I do — same car, same age. Why?',
        a: "Probably (1) different carrier, (2) different driving record, (3) different territory (postal code), (4) telematics enrolled. The first two are the biggest. Compare quotes annually — your friend's carrier might price you 30% lower than yours does.",
      },
    ],
  },
  {
    slug: 'seniors',
    type: 'driver',
    label: 'Car Insurance for Seniors 65+',
    region: 'Drivers 65 and older',
    eyebrow: 'SENIORS · 65+',
    h1: 'Car insurance for seniors 65+',
    subhead:
      "Seniors with clean records often qualify for the lowest premiums of any age group — but only if they shop. Carriers price seniors very differently, and most senior drivers leave $400-$600/yr on the table by not comparing.",
    metaTitle: 'Senior Car Insurance 65+ — Mature Driver Discounts | TopRates.ca',
    metaDescription:
      "Senior drivers 65+ often qualify for the lowest premiums. Editorial coverage of senior-specific discounts across 30+ Canadian carriers. Independent Canadian insurance education.",
    primaryStat: { label: 'Avg senior premium', value: '$1,580/yr' },
    secondaryStats: [
      { label: 'Best-case quote', value: '$1,180/yr' },
      { label: 'Mature-driver discount', value: 'up to 15%' },
      { label: 'Quote inquiry time', value: '<2 min' },
    ],
    intro:
      "If you're 65 or older with a clean driving record, congratulations — you're in the demographic that insurers love. Decades of accident-free driving, lower mileage in retirement, and no commuting risk mean carriers compete hardest for your business. The catch: most senior drivers have been with the same carrier for 10+ years and are paying loyalty-tax pricing. Comparing once a year typically saves $300-$600.",
    sections: [
      {
        heading: 'Senior-specific discounts to ask about',
        body: "**Mature-driver discount** — most carriers give 5-15% off for drivers 50+ with 10+ years clean. **Low-mileage discount** — retired drivers under 12,000 km/yr qualify for 10-20% off with most carriers. **Bundling home + auto** — almost every senior owns their home; bundle savings run 15-20%. **MTO mature-driver course** — the 55-Alive course is recognized by some carriers for an additional 5%.",
      },
      {
        heading: 'When carriers start raising senior premiums',
        body: "Most carriers don't surcharge for age until 75-80, and even then only modestly. After 75, carriers typically require a doctor's note confirming fitness to drive at renewal. After 80, some carriers stop offering new policies altogether — but if you're already a customer, they continue your coverage. **Best practice: stay with a carrier that explicitly serves the 75+ market** — Wawanesa, Co-operators, and CAA Insurance have strong senior books.",
      },
    ],
    faqs: [
      {
        q: 'Will my premium go up at 75?',
        a: "Slightly. Most carriers add a small age surcharge between 75-79 (5-10%) and a larger one at 80+ (15-25%). But that's offset by clean-record credits and low-mileage discounts. Many seniors over 75 still pay less than 30-year-olds.",
      },
      {
        q: 'Can I keep driving after 80?',
        a: "Legally yes, with the MTO-required medical assessment. Insurance-wise yes, but with fewer carriers competing. Wawanesa, Co-operators, and CAA Insurance are the most senior-friendly. Some online-only carriers (Belairdirect, Sonnet) phase out coverage at 80.",
      },
      {
        q: "Is the 55-Alive driver course worth taking?",
        a: 'For the 5-10% discount it earns at participating insurers, often yes. The course also covers technology updates, road-rules changes, and physical-fitness considerations that genuinely make 70+ drivers safer. Two days, $50-$100, and recognized by Wawanesa, Aviva, and Co-operators.',
      },
    ],
  },
  {
    slug: 'high-risk',
    type: 'driver',
    label: 'High-Risk Car Insurance',
    region: 'Drivers with tickets, accidents, or DUIs',
    eyebrow: 'HIGH RISK · TICKETS · DUI · ACCIDENTS',
    h1: 'High-risk car insurance',
    subhead:
      "If you've had a DUI, multiple tickets, or recent at-fault accidents, standard carriers will decline or surcharge you heavily. Specialty carriers — Facility Association, Pafco, Echelon — exist for exactly your situation.",
    metaTitle: 'High-Risk Car Insurance — DUI, Tickets, Accidents | TopRates.ca',
    metaDescription:
      "High-risk drivers pay 3-5× standard premiums. Compare specialty carriers (Facility, Pafco, Echelon) and know when you can return to standard insurance.",
    primaryStat: { label: 'Avg high-risk premium', value: '$5,800/yr' },
    secondaryStats: [
      { label: 'Specialty carriers', value: '8+' },
      { label: 'Standard return', value: '3-5 yrs' },
      { label: 'Quote inquiry time', value: '<2 min' },
    ],
    intro:
      "If you've had a DUI, multiple speeding tickets, an at-fault accident in the last 3 years, or a license suspension, most standard insurers will decline you or quote unaffordable premiums. That's where Ontario's high-risk market exists — specialty carriers (Pafco, Echelon, Coachman, Jevco) and the Facility Association as last resort. Premiums run 3-5× standard rates, but the gap closes every year you drive clean.",
    sections: [
      {
        heading: 'Specialty carriers vs. Facility Association',
        body: "**Specialty carriers** like Pafco, Echelon, Coachman, and Jevco actively underwrite high-risk drivers — they'll price you, but expensively. Premiums typically $4,500-$7,000/yr for a single DUI, $6,000-$9,000 for multiple incidents. **Facility Association** is Ontario's insurer of last resort. Every standard carrier funds it. Premiums are highest, but Facility cannot decline you. Use Facility only if all specialty carriers decline.",
      },
      {
        heading: 'How to return to standard insurance',
        body: "After a single conviction or accident, most standard carriers will quote you again after 3-5 years of clean driving. After a DUI, the timeline is typically 6 years (the conviction stays on your driver abstract for 6 years). Each year of clean driving moves you down the high-risk tier — $7,000 in year 1 might be $5,500 in year 2 and $4,000 in year 3. Re-shop annually; don't auto-renew with a specialty carrier longer than necessary.",
      },
    ],
    faqs: [
      {
        q: 'How long does a DUI stay on my insurance record?',
        a: "On your driver abstract: 3 years for the conviction, 6 years for the offence date. On insurer records: most carriers consider 6-10 years. After 6 years clean, you should be back to standard pricing.",
      },
      {
        q: "What's an SR-22 / certificate of financial responsibility?",
        a: "Ontario doesn't use SR-22 (that's a US thing). After certain convictions in Ontario, you may need to demonstrate financial responsibility to the MTO when reinstating your license — your insurer files a Certificate of Insurance Liability with FSRA on your behalf.",
      },
      {
        q: 'Will the Facility Association cover me?',
        a: "Yes — by law it cannot decline a licensed Ontario driver. Premiums are the highest in the market and coverage is bare-bones (no rental car, lower limits). Use it only if all specialty carriers (Pafco, Echelon, Coachman, etc.) decline you.",
      },
    ],
  },
  {
    slug: 'rideshare',
    type: 'driver',
    label: 'Rideshare Car Insurance',
    region: 'Uber, Lyft, and rideshare drivers',
    eyebrow: 'UBER · LYFT · RIDESHARE',
    h1: 'Rideshare car insurance',
    subhead:
      "If you drive for Uber or Lyft without a rideshare endorsement, your standard policy is likely void during pickups. We compare carriers that explicitly cover rideshare and explain how the Uber/Lyft commercial policy interacts with your personal one.",
    metaTitle: 'Rideshare Car Insurance — Uber, Lyft, DoorDash | TopRates.ca',
    metaDescription:
      "Driving for Uber, Lyft, or DoorDash? Standard policies often exclude rideshare. Compare carriers with rideshare endorsements and stay covered.",
    primaryStat: { label: 'Rideshare endorsement add-on', value: '$15-40/mo' },
    secondaryStats: [
      { label: 'Carriers with endorsements', value: '8+' },
      { label: 'Coverage gap risk', value: 'High' },
      { label: 'Quote inquiry time', value: '<2 min' },
    ],
    intro:
      "Most personal Ontario auto policies explicitly exclude commercial use, including ridesharing. Uber and Lyft provide commercial coverage when you have a passenger or are en route to a pickup, but the gap — the period when the app is on but you haven't accepted a ride — is your responsibility. Without a proper rideshare endorsement, an accident during that gap leaves you with no coverage and possibly fraud allegations against your standard insurer.",
    sections: [
      {
        heading: 'How rideshare insurance actually works',
        body: "**Period 1 (app on, no ride accepted):** Uber/Lyft provide minimal coverage ($1M liability only). Your personal policy is typically void. **Periods 2-3 (en route to pickup, with passenger):** Uber/Lyft commercial policy provides full coverage. **Off the clock:** Personal policy applies. Most accidents happen in Period 1, where you have the least coverage. A rideshare endorsement on your personal policy fills that gap and adds $15-40/month to your premium.",
      },
      {
        heading: 'Carriers that offer rideshare endorsements',
        body: "**Intact, Aviva, Wawanesa, and Travelers** all offer Ontario rideshare endorsements. **Belairdirect** offers it through its Rideshare Insurance product. **Co-operators** has a 'Driving for Hire' option. Endorsements typically cover Uber, Lyft, Uber Eats, DoorDash, and Skip the Dishes. **What's NOT usually covered:** taxi-meter operation, livery, any hourly-rented vehicle.",
      },
    ],
    faqs: [
      {
        q: "If I don't tell my insurer I drive for Uber, what happens?",
        a: "If you have an accident with the app on, your insurer will likely deny the claim and may cancel your policy for material misrepresentation. You'd be on the hook for damages plus your own car. The endorsement at $15-40/mo is much cheaper than that exposure.",
      },
      {
        q: 'Does Uber\'s commercial coverage replace my personal policy?',
        a: "No — Uber covers you only during specific periods (active rides). You still need a personal policy for everything else, plus the rideshare endorsement to bridge the gap.",
      },
      {
        q: "I only do Uber Eats — do I still need an endorsement?",
        a: "Yes. Most personal policies treat food delivery the same as passenger rideshare — commercial use voids the personal policy during delivery. Some carriers offer a cheaper food-only delivery endorsement (~$10-20/mo) if you don't carry passengers.",
      },
    ],
  },
];

/* ============================================================
   EXPORT
   ============================================================ */

export const LANDING_PAGES: LandingData[] = [...provinces, ...cities, ...drivers];

export function getLandingBySlug(slug: string): LandingData | undefined {
  return LANDING_PAGES.find((p) => p.slug === slug);
}
