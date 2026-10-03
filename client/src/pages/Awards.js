import React from 'react';
import AwardSlider from '../components/AwardSlider';

const awardItems = [
  {
    title: 'Recognition & appreciation',
    description: 'Business recognition and client service appreciation',
    image: '/images/award1.jpg',
    alt: 'Award and recognition display',
  },
  {
    title: 'LIC recognition',
    description: 'Professional appreciation in the life insurance sector',
    image: '/images/LIC T.jpg',
    alt: 'LIC recognition display',
  },
  {
    title: 'Star Health recognition',
    description: 'Health insurance sector recognition',
    image: '/images/Star Health T.jpg',
    alt: 'Star Health recognition display',
  },
  {
    title: 'Star Health certificate',
    description: 'Recognition and certification display',
    image: '/images/star health c.jpg',
    alt: 'Star Health certificate display',
  },
  {
    title: 'Mutual funds recognition',
    description: 'Mutual fund and advisory appreciation',
    image: '/images/Mutual Fund c.jpg',
    alt: 'Mutual funds recognition display',
  },
];

const Awards = () => {
  return (
    <div className="bg-slate-50 pb-20">
      <section className="pt-28 pb-14">
        <div className="container-shell">
          <p className="section-label">Awards &amp; recognition</p>
          <h1 className="section-heading text-4xl sm:text-5xl">Professional recognition and associations</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            A selection of recognitions and professional associations connected with Anand Deshmukh’s advisory work. The wording below reflects only what is clearly readable in the display materials.
          </p>
        </div>
      </section>

      <div className="container-shell">
        <AwardSlider />
      </div>

      <section className="container-shell mt-14">
        <div className="grid gap-6 lg:grid-cols-2">
          {awardItems.map((item) => (
            <article key={item.title} className="card-surface overflow-hidden">
              <img src={process.env.PUBLIC_URL + item.image} alt={item.alt} className="h-72 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-900">{item.title}</h2>
                <p className="mt-3 text-base leading-7 text-slate-700">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Awards;
