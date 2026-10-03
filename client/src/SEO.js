import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SITE_URL = 'https://licanand.com';

const routeMetadata = {
  '/': {
    title: 'Anand Deshmukh | Financial & Insurance Advisor in Pune',
    description:
      'Anand Deshmukh is a financial and insurance advisor in Pimpri, Pune helping individuals and families with practical guidance on insurance, investment planning and financial decisions.',
    canonical: `${SITE_URL}/`,
    ogTitle: 'Anand Deshmukh | Financial & Insurance Advisor',
    ogDescription:
      'Financial planning, insurance and investment guidance for individuals and families in Pune and Pimpri.',
    ogType: 'website',
    twitterCard: 'summary',
  },
  '/about': {
    title: 'About Anand Deshmukh | Financial & Insurance Advisor',
    description:
      'Learn about Anand Deshmukh, a financial and insurance advisor in Pimpri, Pune offering practical guidance around financial planning, life insurance, health protection and investment conversations.',
    canonical: `${SITE_URL}/about`,
    ogTitle: 'About Anand Deshmukh',
    ogDescription:
      'A people-first approach to financial planning, insurance guidance and long-term decision-making for families and individuals.',
    ogType: 'website',
    twitterCard: 'summary',
  },
  '/services': {
    title: 'Financial & Insurance Services | Anand Deshmukh',
    description:
      'Explore financial planning, life insurance, health insurance, general insurance and mutual fund guidance from Anand Deshmukh in Pune.',
    canonical: `${SITE_URL}/services`,
    ogTitle: 'Financial & Insurance Services',
    ogDescription:
      'Life insurance, health insurance, general insurance and investment planning services for individuals and families.',
    ogType: 'website',
    twitterCard: 'summary',
  },
  '/services/life-insurance': {
    title: 'Life Insurance & LIC Advisor | Anand Deshmukh',
    description:
      'Life insurance guidance and practical discussions around family protection, long-term planning and financial security with Anand Deshmukh.',
    canonical: `${SITE_URL}/services/life-insurance`,
    ogTitle: 'Life Insurance & LIC Advisor',
    ogDescription:
      'Understand life insurance needs, family responsibilities and long-term protection planning in a clear, practical way.',
    ogType: 'website',
    twitterCard: 'summary',
  },
  '/services/health-insurance': {
    title: 'Health Insurance & Mediclaim Advisor | Anand Deshmukh',
    description:
      'Health insurance and mediclaim guidance for individuals and families in Pune, with clear discussions on medical-expense planning and coverage considerations.',
    canonical: `${SITE_URL}/services/health-insurance`,
    ogTitle: 'Health Insurance & Mediclaim Advisor',
    ogDescription:
      'Practical guidance on coverage needs, exclusions and health-risk planning for everyday financial security.',
    ogType: 'website',
    twitterCard: 'summary',
  },
  '/services/general-insurance': {
    title: 'General Insurance Advisor | Anand Deshmukh',
    description:
      'General insurance guidance for vehicle, property, travel and everyday risk cover considerations relevant to life in Pune and Pimpri.',
    canonical: `${SITE_URL}/services/general-insurance`,
    ogTitle: 'General Insurance Advisor',
    ogDescription:
      'Practical guidance to understand non-life insurance needs and relevant protection strategies.',
    ogType: 'website',
    twitterCard: 'summary',
  },
  '/services/mutual-funds': {
    title: 'Mutual Funds & Investment Planning | Anand Deshmukh',
    description:
      'Mutual fund and investment planning guidance focused on goals, time horizon and risk awareness for a wider financial plan.',
    canonical: `${SITE_URL}/services/mutual-funds`,
    ogTitle: 'Mutual Funds & Investment Planning',
    ogDescription:
      'Goal-based investment guidance with a practical explanation of risk, time horizon and long-term planning.',
    ogType: 'website',
    twitterCard: 'summary',
  },
  '/reviews': {
    title: 'Client Reviews | Anand Deshmukh',
    description:
      'Read client feedback and practical insights from Anand Deshmukh, a financial and insurance advisor serving Pune and Pimpri.',
    canonical: `${SITE_URL}/reviews`,
    ogTitle: 'Client Reviews',
    ogDescription:
      'A view of client feedback and guidance experiences from a practical financial and insurance advisory relationship.',
    ogType: 'website',
    twitterCard: 'summary',
  },
  '/awards': {
    title: 'Awards & Recognition | Anand Deshmukh',
    description:
      'A record of recognition and milestones connected to Anand Deshmukh’s advisory work and financial services in Pune.',
    canonical: `${SITE_URL}/awards`,
    ogTitle: 'Awards & Recognition',
    ogDescription:
      'Recognition and milestones associated with a long-term advisory practice focused on service and clarity.',
    ogType: 'website',
    twitterCard: 'summary',
  },
  '/blogs': {
    title: 'Life Insurance Insights & Blog Articles | Anand Deshmukh',
    description:
      'Educational articles on life insurance, financial planning, protection and informed decision-making from Anand Deshmukh in Pimpri, Pune.',
    canonical: `${SITE_URL}/blogs`,
    ogTitle: 'Life Insurance Insights & Blogs',
    ogDescription:
      'Clear, practical guidance on insurance planning, family protection and important financial decision points.',
    ogType: 'website',
    twitterCard: 'summary',
  },
  '/recommendations': {
    title: 'Market & Product Insights | Anand Deshmukh',
    description:
      'Market observations and product-category guidance around insurance, mutual funds and broader financial planning with a focus on suitability and informed decision-making.',
    canonical: `${SITE_URL}/recommendations`,
    ogTitle: 'Market & Product Insights',
    ogDescription:
      'A practical, education-first perspective on market trends, product comparisons and relevant financial considerations.',
    ogType: 'website',
    twitterCard: 'summary',
  },
  '/contact': {
    title: 'Contact Anand Deshmukh | Financial & Insurance Advisor',
    description:
      'Contact Anand Deshmukh in Pimpri, Pune for practical guidance on insurance, financial planning and investment conversations.',
    canonical: `${SITE_URL}/contact`,
    ogTitle: 'Contact Anand Deshmukh',
    ogDescription:
      'Reach out for a conversation about your financial and insurance needs in Pune and Pimpri.',
    ogType: 'website',
    twitterCard: 'summary',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Anand Deshmukh',
    description:
      'Privacy information for website visitors, enquiries and analytics usage on the Anand Deshmukh financial and insurance advisory website.',
    canonical: `${SITE_URL}/privacy-policy`,
    ogTitle: 'Privacy Policy',
    ogDescription:
      'Plain-language privacy information for website visitors and enquiry correspondence.',
    ogType: 'website',
    twitterCard: 'summary',
  },
  '/terms': {
    title: 'Terms of Use | Anand Deshmukh',
    description:
      'Website terms covering general informational content, product information and the role of the Anand Deshmukh advisory website.',
    canonical: `${SITE_URL}/terms`,
    ogTitle: 'Terms of Use',
    ogDescription:
      'General website terms and information for visitors to the Anand Deshmukh advisory website.',
    ogType: 'website',
    twitterCard: 'summary',
  },
  '/disclaimer': {
    title: 'Financial & Insurance Disclaimer | Anand Deshmukh',
    description:
      'Important financial and insurance disclaimer information covering general planning guidance, product terms and market risk disclosures.',
    canonical: `${SITE_URL}/disclaimer`,
    ogTitle: 'Financial & Insurance Disclaimer',
    ogDescription:
      'General educational disclaimer covering insurance, investments and financial guidance on the Anand Deshmukh website.',
    ogType: 'website',
    twitterCard: 'summary',
  },
  default: {
    title: 'Anand Deshmukh | Financial & Insurance Advisor',
    description:
      'Financial planning, insurance and investment guidance for individuals and families in Pimpri, Pune, Maharashtra.',
    canonical: `${SITE_URL}/`,
    ogTitle: 'Anand Deshmukh | Financial & Insurance Advisor',
    ogDescription:
      'Financial planning, insurance and investment guidance for individuals and families in Pune and Pimpri.',
    ogType: 'website',
    twitterCard: 'summary',
  },
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Anand Deshmukh',
  legalName: 'Anand Deshmukh',
  url: SITE_URL,
  email: 'licanand1@gmail.com',
  telephone: '+91-8698405919',
  description:
    'Financial and insurance advisor based in Pimpri, Pune, Maharashtra, providing guidance on financial planning, insurance and investment decisions.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Pimpri, Pune - 411017',
    addressLocality: 'Pimpri',
    addressRegion: 'Maharashtra',
    postalCode: '411017',
    addressCountry: 'IN',
  },
  areaServed: ['Pimpri', 'Pune', 'Maharashtra', 'India'],
  sameAs: ['https://licanand.com/'],
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Anand Deshmukh',
  jobTitle: 'Financial & Insurance Advisor',
  url: SITE_URL,
  email: 'licanand1@gmail.com',
  telephone: '+91-8698405919',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pimpri',
    addressRegion: 'Maharashtra',
    postalCode: '411017',
    addressCountry: 'IN',
  },
  areaServed: 'Pune, Maharashtra, India',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Anand Deshmukh | Financial & Insurance Advisor',
  url: SITE_URL,
  description:
    'Financial planning, insurance and investment guidance for individuals and families in Pimpri and Pune.',
  publisher: {
    '@type': 'Person',
    name: 'Anand Deshmukh',
  },
};

const serviceSchemas = {
  '/services/life-insurance': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Life Insurance & LIC Advisor',
    serviceType: 'Life Insurance',
    provider: { '@type': 'Person', name: 'Anand Deshmukh' },
    areaServed: 'Pune, Maharashtra, India',
    url: `${SITE_URL}/services/life-insurance`,
    description: 'Guidance around life insurance and family protection planning tailored to personal responsibilities and goals.',
  },
  '/services/health-insurance': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Health Insurance & Mediclaim Advisor',
    serviceType: 'Health Insurance',
    provider: { '@type': 'Person', name: 'Anand Deshmukh' },
    areaServed: 'Pune, Maharashtra, India',
    url: `${SITE_URL}/services/health-insurance`,
    description: 'Practical guidance on health insurance, mediclaim and healthcare expense planning for individuals and families.',
  },
  '/services/general-insurance': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'General Insurance Advisor',
    serviceType: 'General Insurance',
    provider: { '@type': 'Person', name: 'Anand Deshmukh' },
    areaServed: 'Pune, Maharashtra, India',
    url: `${SITE_URL}/services/general-insurance`,
    description: 'Guidance for vehicle, property, travel and other relevant general insurance considerations.',
  },
  '/services/mutual-funds': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Mutual Funds & Investment Planning',
    serviceType: 'Mutual Fund Investment Guidance',
    provider: { '@type': 'Person', name: 'Anand Deshmukh' },
    areaServed: 'Pune, Maharashtra, India',
    url: `${SITE_URL}/services/mutual-funds`,
    description: 'Goal-based investment guidance for mutual funds, risk awareness and long-term financial planning.',
  },
};

const getBreadcrumbItems = (pathname) => {
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');

  const items = [{ label: 'Home', to: '/' }];

  if (normalizedPath.startsWith('/services')) {
    items.push({ label: 'Services', to: '/services' });
    if (normalizedPath !== '/services') {
      const current = normalizedPath
        .split('/')
        .filter(Boolean)
        .pop();
      const label = current
        .split('-')
        .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
        .join(' ');
      items.push({ label });
    }
  } else if (normalizedPath !== '/') {
    const labelMap = {
      '/about': 'About',
      '/reviews': 'Reviews',
      '/awards': 'Awards',
      '/blogs': 'Blogs',
      '/recommendations': 'Recommendations',
      '/contact': 'Contact',
    };
    const label = labelMap[normalizedPath] || 'Page';
    items.push({ label });
  }

  return items;
};

const buildSchemaForPath = (pathname) => {
  const baseSchemas = [websiteSchema, businessSchema, personSchema];
  const serviceSchema = serviceSchemas[pathname];

  if (serviceSchema) {
    baseSchemas.push(serviceSchema);
  }

  const breadcrumbItems = getBreadcrumbItems(pathname);
  if (breadcrumbItems.length > 1) {
    const breadcrumbList = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: item.to ? `${SITE_URL}${item.to === '/' ? '' : item.to}` : undefined,
      })),
    };
    baseSchemas.push(breadcrumbList);
  }

  return baseSchemas;
};

const setMetaTag = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const setLinkTag = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const clearSchemaScripts = () => {
  document.head.querySelectorAll('script[data-seo="schema"]').forEach((node) => node.remove());
};

export const Breadcrumbs = ({ items }) => (
  <nav aria-label="Breadcrumb" className="container-shell pt-6">
    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
      {items.map((item, index) => (
        <li key={`${item.label}-${index}`} className="flex items-center gap-2">
          {index < items.length - 1 ? (
            <Link to={item.to || '/'} className="transition hover:text-brand-700">
              {item.label}
            </Link>
          ) : (
            <span aria-current="page" className="font-medium text-slate-800">
              {item.label}
            </span>
          )}
          {index < items.length - 1 && <span aria-hidden="true">›</span>}
        </li>
      ))}
    </ol>
  </nav>
);

const SEO = () => {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const metadata = routeMetadata[pathname] || routeMetadata.default;
    document.title = metadata.title;

    setMetaTag('meta[name="description"]', {
      name: 'description',
      content: metadata.description,
    });
    setMetaTag('meta[name="robots"]', {
      name: 'robots',
      content: 'index,follow,max-image-preview:large',
    });
    setMetaTag('meta[name="author"]', {
      name: 'author',
      content: 'Anand Deshmukh',
    });
    setMetaTag('meta[property="og:title"]', {
      property: 'og:title',
      content: metadata.ogTitle,
    });
    setMetaTag('meta[property="og:description"]', {
      property: 'og:description',
      content: metadata.ogDescription,
    });
    setMetaTag('meta[property="og:url"]', {
      property: 'og:url',
      content: metadata.canonical,
    });
    setMetaTag('meta[property="og:type"]', {
      property: 'og:type',
      content: metadata.ogType,
    });
    setMetaTag('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: 'Anand Deshmukh',
    });
    setMetaTag('meta[property="og:locale"]', {
      property: 'og:locale',
      content: 'en_IN',
    });
    setMetaTag('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: metadata.twitterCard,
    });
    setMetaTag('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: metadata.ogTitle,
    });
    setMetaTag('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: metadata.ogDescription,
    });
    setLinkTag('link[rel="canonical"]', {
      rel: 'canonical',
      href: metadata.canonical,
    });

    clearSchemaScripts();
    const schemaData = buildSchemaForPath(pathname);
    schemaData.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seo = 'schema';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [pathname]);

  return null;
};

export default SEO;
export { routeMetadata };
