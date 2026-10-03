import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const awardItems = [
  {
    image: '/images/award1.jpg',
    title: 'Recognition & appreciation',
    description: 'Business recognition and client service appreciation',
  },
  {
    image: '/images/LIC T.jpg',
    title: 'LIC recognition',
    description: 'Professional appreciation in the life insurance sector',
  },
  {
    image: '/images/Star Health T.jpg',
    title: 'Star Health recognition',
    description: 'Health insurance sector recognition',
  },
  {
    image: '/images/star health c.jpg',
    title: 'Star Health certificate',
    description: 'Recognition and certification display',
  },
  {
    image: '/images/Mutual Fund c.jpg',
    title: 'Mutual funds recognition',
    description: 'Mutual fund and advisory appreciation',
  },
];

const Arrow = ({ onClick, direction }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={direction === 'left' ? 'Previous awards' : 'Next awards'}
    className={`absolute top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-2 text-xl text-slate-700 shadow-sm transition hover:bg-white ${direction === 'left' ? 'left-2' : 'right-2'}`}
  >
    {direction === 'left' ? '‹' : '›'}
  </button>
);

const AwardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    pauseOnFocus: true,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
    accessibility: true,
    adaptiveHeight: true,
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft sm:p-8">
      <div className="mb-6 text-center">
        <p className="section-label">Recognition</p>
        <h2 className="section-heading">Professional recognition &amp; associations</h2>
      </div>

      <Slider {...settings}>
        {awardItems.map((item) => (
          <div key={item.title} className="px-2 sm:px-6">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <img src={process.env.PUBLIC_URL + item.image} alt={item.title} className="h-[320px] w-full object-contain bg-white p-4 sm:h-[420px]" />
            </div>
            <div className="mt-5 text-center">
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AwardSlider;
