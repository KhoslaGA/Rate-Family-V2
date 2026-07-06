'use client';

import { useState, type FormEvent } from 'react';

/**
 * Life-insurance lead form.
 *
 * Captures the minimum-necessary information for KLC Group Canada Inc. to
 * follow up under their LLQP / FSRA-regulated framework. Submits to
 * /api/life-referral, which writes to Sanity and forwards to KLC via Resend.
 *
 * Three visual variants:
 *   inline  — default body card
 *   card    — bordered + shadow, ideal for sticky sidebars on long articles
 *   sidebar — left-teal-border accent, for hero or rail placement
 *
 * subPillar prop sets the default 'coverageInterest' value so visitors who
 * land on /learn/life/term/ (Phase 2) get the dropdown pre-selected to
 * 'term_life'. Phase 1 only the /life-insurance page renders this form, so
 * subPillar='general' is the default.
 */

const COVERAGE_OPTIONS = [
  { value: 'term_life', label: 'Term life insurance' },
  { value: 'whole_universal_life', label: 'Whole / universal life insurance' },
  { value: 'no_medical', label: 'No-medical / simplified-issue' },
  { value: 'super_visa', label: 'Super Visa insurance' },
  { value: 'critical_illness', label: 'Critical illness' },
  { value: 'disability_income', label: 'Disability income' },
  { value: 'long_term_care', label: 'Long-term care' },
  {
    value: 'segregated_funds',
    label: 'Segregated funds / insurance-based investment',
  },
  { value: 'annuities', label: 'Annuities' },
  { value: 'group_retirement', label: 'Group retirement plan' },
  { value: 'not_sure', label: 'Not sure — talk to me' },
];

type SubPillar =
  | 'term'
  | 'no-medical'
  | 'super-visa'
  | 'newcomers'
  | 'whole'
  | 'universal'
  | 'critical'
  | 'disability'
  | 'segregated'
  | 'annuities'
  | 'general';

const SUBPILLAR_DEFAULT_COVERAGE: Record<SubPillar, string> = {
  term: 'term_life',
  'no-medical': 'no_medical',
  'super-visa': 'super_visa',
  newcomers: 'not_sure',
  whole: 'whole_universal_life',
  universal: 'whole_universal_life',
  critical: 'critical_illness',
  disability: 'disability_income',
  segregated: 'segregated_funds',
  annuities: 'annuities',
  general: 'not_sure',
};

const CONSENT_TEXT = `I consent to KLC Group Canada Inc. (an FSRA-licensed Ontario life insurance advisory firm) and Webhub4u Inc. (operator of TopRates.ca) contacting me about the insurance products I've expressed interest in. I understand I can withdraw consent at any time. See the privacy policy for details.`;

type LifeLeadFormProps = {
  subPillar?: SubPillar;
  source?: string;
  variant?: 'inline' | 'card' | 'sidebar';
};

export function LifeLeadForm({
  subPillar = 'general',
  source = 'life_form',
  variant = 'inline',
}: LifeLeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get('name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      preferredContact: fd.get('preferredContact') ?? 'email',
      province: fd.get('province'),
      ageRange: fd.get('ageRange'),
      coverageInterest: fd.get('coverageInterest'),
      contactTimes: fd.getAll('contactTimes'),
      message: fd.get('message'),
      consented: fd.get('consented') === 'on',
      source,
      subPillar,
    };

    try {
      const res = await fetch('/api/life-referral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.');
        setSubmitting(false);
        return;
      }
      setSubmitted(true);
    } catch {
      setError('Network error. Please try again.');
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-cream rounded-2xl p-8 text-center">
        <h3 className="font-display font-black text-2xl text-navy mb-3">
          You&rsquo;re in good hands.
        </h3>
        <p className="text-mute leading-relaxed max-w-md mx-auto">
          A LLQP-licensed advisor at KLC Group Canada Inc. will reach out
          shortly to talk through your situation, walk you through illustrative
          quotes, and help you decide what makes sense.
        </p>
      </div>
    );
  }

  const containerClass =
    variant === 'card'
      ? 'bg-white border border-border rounded-2xl p-6 shadow-md'
      : variant === 'sidebar'
        ? 'bg-white border-l-4 border-teal p-6 rounded-r-2xl'
        : 'bg-white border border-border rounded-2xl p-8';

  return (
    <div className={containerClass}>
      <h3 className="font-display font-black text-2xl text-navy mb-2">
        Talk to a licensed advisor today
      </h3>
      <p className="text-sm text-mute mb-6">
        We&rsquo;ll connect you with a LLQP-licensed advisor at KLC Group
        Canada Inc.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            className="block text-sm font-bold text-navy mb-1"
            htmlFor="lifelead-name"
          >
            Name
          </label>
          <input
            id="lifelead-name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={100}
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
          />
        </div>

        <div>
          <label
            className="block text-sm font-bold text-navy mb-1"
            htmlFor="lifelead-email"
          >
            Email
          </label>
          <input
            id="lifelead-email"
            name="email"
            type="email"
            required
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
          />
        </div>

        <fieldset>
          <legend className="block text-sm font-bold text-navy mb-2">
            How would you prefer we reach you?
          </legend>
          <div className="flex gap-4 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="preferredContact"
                value="email"
                defaultChecked
              />
              Email
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="preferredContact" value="phone" />
              Phone
            </label>
          </div>
        </fieldset>

        <div>
          <label
            className="block text-sm font-bold text-navy mb-1"
            htmlFor="lifelead-phone"
          >
            Phone{' '}
            <span className="font-normal text-mute">
              (optional unless you prefer phone)
            </span>
          </label>
          <input
            id="lifelead-phone"
            name="phone"
            type="tel"
            placeholder="(416) 555-1234"
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              className="block text-sm font-bold text-navy mb-1"
              htmlFor="lifelead-province"
            >
              Province
            </label>
            <select
              id="lifelead-province"
              name="province"
              required
              defaultValue="ON"
              className="w-full px-3 py-2 border border-border rounded-md"
            >
              <option value="ON">Ontario</option>
              <option value="AB">Alberta</option>
              <option value="BC">British Columbia</option>
              <option value="MB">Manitoba</option>
              <option value="NB">New Brunswick</option>
              <option value="NL">Newfoundland and Labrador</option>
              <option value="NS">Nova Scotia</option>
              <option value="NT">Northwest Territories</option>
              <option value="NU">Nunavut</option>
              <option value="PE">Prince Edward Island</option>
              <option value="QC">Quebec</option>
              <option value="SK">Saskatchewan</option>
              <option value="YT">Yukon</option>
            </select>
          </div>

          <div>
            <label
              className="block text-sm font-bold text-navy mb-1"
              htmlFor="lifelead-age"
            >
              Age range
            </label>
            <select
              id="lifelead-age"
              name="ageRange"
              className="w-full px-3 py-2 border border-border rounded-md"
            >
              <option value="">Select…</option>
              <option value="18-29">18–29</option>
              <option value="30-44">30–44</option>
              <option value="45-59">45–59</option>
              <option value="60-69">60–69</option>
              <option value="70+">70+</option>
            </select>
          </div>
        </div>

        <div>
          <label
            className="block text-sm font-bold text-navy mb-1"
            htmlFor="lifelead-coverage"
          >
            What are you looking for?
          </label>
          <select
            id="lifelead-coverage"
            name="coverageInterest"
            defaultValue={SUBPILLAR_DEFAULT_COVERAGE[subPillar]}
            className="w-full px-3 py-2 border border-border rounded-md"
          >
            {COVERAGE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <fieldset>
          <legend className="block text-sm font-bold text-navy mb-2">
            Best times to contact you
          </legend>
          <div className="grid grid-cols-2 gap-2">
            {(
              [
                ['weekday_mornings', 'Weekday mornings'],
                ['weekday_afternoons', 'Weekday afternoons'],
                ['weekday_evenings', 'Weekday evenings'],
                ['weekends', 'Weekends'],
              ] as const
            ).map(([value, label]) => (
              <label key={value} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  name="contactTimes"
                  value={value}
                  className="rounded border-border"
                />
                {label}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label
            className="block text-sm font-bold text-navy mb-1"
            htmlFor="lifelead-message"
          >
            Anything else?{' '}
            <span className="font-normal text-mute">(optional)</span>
          </label>
          <textarea
            id="lifelead-message"
            name="message"
            rows={3}
            className="w-full px-3 py-2 border border-border rounded-md"
          />
        </div>

        <label className="flex items-start gap-2 text-xs text-mute leading-relaxed">
          <input
            type="checkbox"
            name="consented"
            required
            className="mt-1 rounded border-border"
          />
          <span>{CONSENT_TEXT}</span>
        </label>

        {error ? (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-navy text-white font-bold py-3 rounded-full hover:bg-teal transition disabled:opacity-50"
        >
          {submitting ? 'Submitting…' : 'Talk to a licensed advisor'}
        </button>
      </form>
    </div>
  );
}

export default LifeLeadForm;
