# Toprates.ca - Usage Examples

## Component Examples

### 1. Button Component

```tsx
import { Button } from '@/components/ui/Button';

// Primary button (default)
<Button>Get a Quote</Button>

// Different variants
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="accent">Special Offer</Button>
<Button variant="outline">Learn More</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// As a link
<Button href="/quote" variant="secondary" size="lg">
  Start Your Quote
</Button>

// With onClick handler
<Button onClick={() => openModal()}>
  Open Details
</Button>

// Loading state
<Button disabled>
  {isLoading ? 'Processing...' : 'Submit'}
</Button>
```

### 2. Card Component

```tsx
import {
  Card,
  CardImage,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/Card';

// Complete card example
<Card>
  <CardImage
    src="/auto-insurance.jpg"
    alt="Auto Insurance Coverage"
    width={400}
    height={250}
  />
  <CardHeader>
    <CardTitle>Auto Insurance</CardTitle>
    <CardDescription>
      Comprehensive protection for your vehicle
    </CardDescription>
  </CardHeader>
  <CardContent>
    <ul className="space-y-2 text-sm text-gray-600">
      <li>✓ Collision coverage</li>
      <li>✓ Comprehensive coverage</li>
      <li>✓ Liability protection</li>
      <li>✓ 24/7 roadside assistance</li>
    </ul>
  </CardContent>
  <CardFooter className="flex gap-2">
    <Button variant="primary" className="flex-1">
      Get Quote
    </Button>
    <Button variant="outline" className="flex-1">
      Learn More
    </Button>
  </CardFooter>
</Card>

// Minimal card
<Card>
  <CardContent>
    <p>Simple content card</p>
  </CardContent>
</Card>
```

### 3. Input Component

```tsx
import { Input } from '@/components/ui/Input';
import { useState } from 'react';

function QuoteForm() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Clear error on change
    if (errors.email) {
      setErrors({ ...errors, email: '' });
    }
  };

  return (
    <Input
      label="Email Address"
      type="email"
      placeholder="john@example.com"
      value={email}
      onChange={handleEmailChange}
      error={errors.email}
      helperText="We'll send your quote here"
      required
    />
  );
}
```

### 4. Badge Component

```tsx
import { Badge } from '@/components/ui/Badge';

// Status badges
<Badge variant="success">Approved</Badge>
<Badge variant="warning">Pending Review</Badge>
<Badge variant="error">Requires Action</Badge>

// Category badges
<Badge variant="primary">Auto Insurance</Badge>
<Badge variant="secondary">Home Insurance</Badge>
<Badge variant="accent">Featured</Badge>

// In a list
<div className="flex gap-2 flex-wrap">
  {categories.map((cat) => (
    <Badge key={cat} variant="outline">
      {cat}
    </Badge>
  ))}
</div>
```

---

## Contact Form Example

```tsx
import ContactForm from '@/components/shared/ContactForm';

export default function ContactPage() {
  const handleSuccess = () => {
    console.log('Form submitted successfully!');
    // Trigger notification, scroll to success message, etc.
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#1a365d] mb-2">
          Contact Our Agents
        </h1>
        <p className="text-gray-600 mb-8">
          Get personalized insurance quotes from our licensed brokers
        </p>
        
        <ContactForm onSuccess={handleSuccess} />
      </div>
    </section>
  );
}
```

---

## SEO Implementation Examples

### 1. Page with SEO Metadata

```tsx
// src/app/auto-insurance/page.tsx
import { generateSEO, generateArticleSchema } from '@/components/shared/SEO';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Auto Insurance in Canada | Toprates.ca',
  description: 'Compare auto insurance quotes from top Canadian providers. Get rates in minutes with our free online tool.',
  keywords: ['auto insurance', 'car insurance', 'Canada', 'online quotes'],
  ogImage: '/og-auto-insurance.jpg',
  canonicalUrl: 'https://toprates.ca/auto-insurance',
});

export default function AutoInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateArticleSchema({
              title: 'How to Choose the Right Auto Insurance',
              description: 'A comprehensive guide to selecting auto insurance coverage.',
              imageUrl: 'https://toprates.ca/images/auto-guide.jpg',
              datePublished: '2024-01-15T10:00:00Z',
              dateModified: '2024-04-10T14:30:00Z',
              authorName: 'John Smith',
              authorUrl: 'https://toprates.ca/authors/john-smith',
            })
          ),
        }}
      />
      
      <main>
        {/* Page content */}
      </main>
    </>
  );
}
```

### 2. Layout with Organization Schema

```tsx
// src/app/layout.tsx
import { generateSEO, generateOrganizationSchema } from '@/components/shared/SEO';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Toprates.ca - Canadian Insurance Broker',
  description: 'Get instant insurance quotes from Toprates.ca, Canada\'s trusted online insurance broker.',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### 3. FAQ Page with Schema

```tsx
import { generateFAQSchema } from '@/components/shared/SEO';

const faqs = [
  {
    question: 'How quickly can I get a quote?',
    answer: 'You can get an instant quote in just 2-3 minutes by answering a few basic questions about your insurance needs.',
  },
  {
    question: 'Are your quotes binding?',
    answer: 'No, our quotes are estimates. The final price depends on information verified by the insurer.',
  },
  {
    question: 'Do you compare multiple insurers?',
    answer: 'Yes, we get quotes from top Canadian insurance companies to help you find the best rate.',
  },
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />
      
      <main>
        <h1>Frequently Asked Questions</h1>
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </main>
    </>
  );
}
```

---

## Sanity Integration Examples

### 1. Fetch and Display Blog Posts

```tsx
// src/app/blog/page.tsx
import { client } from '@/lib/sanity/client';
import { getAllPostsQuery } from '@/lib/sanity/queries';
import {
  Card,
  CardImage,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { getImageUrl } from '@/lib/sanity/image';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';

export default async function BlogPage() {
  const posts = await client.fetch(getAllPostsQuery);

  return (
    <section className="py-12">
      <h1 className="text-4xl font-bold mb-8">Insurance Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post._id}>
            <CardImage
              src={getImageUrl(post.mainImage, 400)}
              alt={post.mainImage.alt}
            />
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>
                By {post.author.name} • {formatDate(post.publishedAt, 'long')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button href={`/blog/${post.slug.current}`} variant="primary">
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
```

### 2. Single Blog Post with Full Content

```tsx
// src/app/blog/[slug]/page.tsx
import { client } from '@/lib/sanity/client';
import { getPostBySlugQuery } from '@/lib/sanity/queries';
import { generateSEO, generateArticleSchema } from '@/components/shared/SEO';
import { getImageUrl } from '@/lib/sanity/image';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import type { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await client.fetch(getPostBySlugQuery, { slug: params.slug });
  
  return generateSEO({
    title: post.title,
    description: post.excerpt,
    ogImage: getImageUrl(post.mainImage, 1200),
    canonicalUrl: `https://toprates.ca/blog/${post.slug.current}`,
    publishedDate: post.publishedAt,
    modifiedDate: post._updatedAt,
    authorName: post.author.name,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await client.fetch(getPostBySlugQuery, { slug: params.slug });

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    imageUrl: getImageUrl(post.mainImage, 1200),
    datePublished: post.publishedAt,
    dateModified: post._updatedAt,
    authorName: post.author.name,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <article className="max-w-4xl mx-auto py-12 px-4">
        {/* Hero Image */}
        <Image
          src={getImageUrl(post.mainImage, 1200)}
          alt={post.mainImage.alt}
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg mb-8"
          priority
        />

        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
          <Image
            src={getImageUrl(post.author.image, 50)}
            alt={post.author.name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold text-[#1a365d]">{post.author.name}</p>
            <p className="text-sm text-gray-600">
              {formatDate(post.publishedAt, 'long')}
            </p>
          </div>
        </div>

        {/* Title and Excerpt */}
        <h1 className="text-4xl font-bold text-[#1a365d] mb-4">
          {post.title}
        </h1>
        <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p>

        {/* Categories */}
        {post.categories && (
          <div className="flex gap-2 mb-8 flex-wrap">
            {post.categories.map((cat) => (
              <Badge key={cat._id} variant="secondary">
                {cat.title}
              </Badge>
            ))}
          </div>
        )}

        {/* Body Content */}
        <div className="prose prose-lg max-w-none">
          {/* Render Sanity portable text here */}
          {/* Install @portabletext/react for this */}
        </div>
      </article>
    </>
  );
}
```

---

## Form Validation Examples

```tsx
import { Input } from '@/components/ui/Input';
import { isValidEmail, isValidPhoneCA, isValidPostalCodeCA } from '@/lib/utils';
import { useState } from 'react';

function InsuranceQuoteForm() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    postalCode: '',
  });
  
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!isValidPhoneCA(formData.phone)) {
      newErrors.phone = 'Please enter a valid Canadian phone number';
    }

    if (!isValidPostalCodeCA(formData.postalCode)) {
      newErrors.postalCode = 'Please enter a valid Canadian postal code';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Submit form
      console.log('Form is valid!', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={errors.email}
      />
      
      <Input
        label="Phone"
        type="tel"
        placeholder="(555) 123-4567"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        error={errors.phone}
        helperText="Canadian phone number required"
      />
      
      <Input
        label="Postal Code"
        placeholder="M5V 3A8"
        value={formData.postalCode}
        onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
        error={errors.postalCode}
      />
      
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## Complete Page Example

```tsx
// src/app/insurance-types/home/page.tsx
import { generateSEO } from '@/components/shared/SEO';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEO({
  title: 'Home Insurance | Toprates.ca',
  description: 'Get affordable home insurance quotes. Protect your property with comprehensive coverage from top Canadian insurers.',
  keywords: ['home insurance', 'homeowners insurance', 'property insurance'],
});

export default function HomeInsurancePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a365d] to-[#0d9488] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Home Insurance</h1>
          <p className="text-xl mb-8">
            Protect what matters most with comprehensive home insurance coverage
          </p>
          <Button variant="accent" size="lg">
            Get Your Quote
          </Button>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1a365d] mb-8">
          Types of Coverage
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverageTypes.map((coverage) => (
            <Card key={coverage.id}>
              <CardHeader>
                <CardTitle>{coverage.name}</CardTitle>
                <CardDescription>{coverage.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{coverage.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-8">
            Why Choose Toprates?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="flex gap-4">
                <div className="text-2xl text-[#0d9488]">✓</div>
                <div>
                  <h3 className="font-bold text-[#1a365d] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8">
            Get a free quote in minutes. No personal information required to compare rates.
          </p>
          <Button variant="primary" size="lg">
            Compare Quotes Now
          </Button>
        </div>
      </section>
    </main>
  );
}

const coverageTypes = [
  {
    id: 1,
    name: 'Dwelling Coverage',
    subtitle: 'Protect your structure',
    description: 'Coverage for the physical structure of your home against fire, theft, and natural disasters.',
  },
  {
    id: 2,
    name: 'Personal Property',
    subtitle: 'Protect your belongings',
    description: 'Coverage for your personal items and furniture inside your home.',
  },
  {
    id: 3,
    name: 'Liability Protection',
    subtitle: 'Legal protection',
    description: 'Covers legal fees and damages if someone is injured on your property.',
  },
];

const features = [
  {
    id: 1,
    title: 'Instant Quotes',
    description: 'Get quotes from multiple insurers in minutes without any commitment.',
  },
  {
    id: 2,
    title: 'Expert Advisors',
    description: 'Our licensed brokers are available to answer your questions.',
  },
  {
    id: 3,
    title: 'Best Rates',
    description: 'We compare top insurers to find you the most competitive pricing.',
  },
  {
    id: 4,
    title: 'Easy Application',
    description: 'Simple, transparent process with no hidden fees or surprises.',
  },
];
```

---

## Tips & Best Practices

1. **Always use the utility functions** for validation and formatting
2. **Leverage Sanity schemas** for consistent content structure
3. **Use SEO helpers** on every page for better Google rankings
4. **Responsive design first** - test on mobile before desktop
5. **Keep forms simple** - only ask necessary information
6. **Use the brand colors** consistently across pages
7. **Optimize images** - use `getImageUrl()` for Sanity images
8. **Type everything** - take advantage of full TypeScript support
