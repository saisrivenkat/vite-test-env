import React, { useRef } from 'react';
import './index.css';
import Banner, { BannerContent } from '../../components/banner';
import AboutBlurb from '../../components/aboutBlurb';

export { Page };

const AboutBlurbs = [
  {
    title: 'Apply',
    description: 'Apply to list your project on our launchpad. Submit the required details for review.',
    image: '/assets/icon-apply.png',
  },
  {
    title: 'Interview',
    description:
      'Once your project passes our initial due diligence you will be invited for an interview with a representative from our team.',
    image: '/assets/icon-interview.png',
  },
  {
    title: 'Raising',
    description:
      'If everything checks out you will select your preferred sale modalities, price, and date. Raising for your project is that easy.',
    image: '/assets/icon-raising.png',
  },
];

function Page() {
  const newsletterRef = React.useRef<HTMLDivElement>(null);

  const scrollToNewsletter = () => {
    if (newsletterRef && newsletterRef.current) {
      newsletterRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <Banner
        title="asdasdasdas"
        description="sdasdasda"
        image="/assets/about.svg"
        buttonPress={scrollToNewsletter}
        buttonText="Join the newsletter"
      />
      <div className="md:grid grid-cols-2	items-center">
        <ul className="md:mr-20">
          {AboutBlurbs.map((blurb, index) => (
            <AboutBlurb
              title={blurb.title}
              description={blurb.description}
              image={blurb.image}
              key={blurb.title}
              selected={index === 0}
            />
          ))}
        </ul>
        <BannerContent
          title="dkasjdlasjdlasjdlasjdlsakjdlaskjdlaksdjaskldkjlaskdjalskdjals kdjlas dslajdlsajdlkjasdlkasjdl jalkdjlksa jldasjd jasjd ljadlskjd alsdjk aldja skdjasldj alskdkjlas jdals jd"
          description="dkasjdlasjdlasjdlasjdlsakjdlaskjdlaksdjaskldkjlaskdjalskdjals kdjlas dslajdlsajdlkjasdlkasjdl jalkdjlksa jldasjd jasjd ljadlskjd alsdjk aldja skdjasldj alskdkjlas jdals jd"
          buttonPress={scrollToNewsletter}
          buttonText="Join the newsletter"
        />
      </div>
      <Banner
        title="dkasjdlasjdlasjdlasjdlsakjdlaskjdlaksdjaskldkjlaskdjalskdjals kdjlas dslajdlsajdlkjasdlkasjdl jalkdjlksa jldasjd jasjd ljadlskjd alsdjk aldja skdjasldj alskdkjlas jdals jd"
        description="dkasjdlasjdlasjdlasjdlsakjdlaskjdlaksdjaskldkjlaskdjalskdjals kdjlas dslajdlsajdlkjasdlkasjdl jalkdjlksa jldasjd jasjd ljadlskjd alsdjk aldja skdjasldj alskdkjlas jdals jd"
        image="/assets/about-2.svg"
        buttonPress={scrollToNewsletter}
        buttonText="dkasjdlasjdlasjdlasjdlsakjdlaskjdlaksdjaskldkjlaskdjalskdjals kdjlas dslajdlsajdlkjasdlkasjdl jalkdjlksa jldasjd jasjd ljadlskjd alsdjk aldja skdjasldj alskdkjlas jdals jd"
      />
    </main>
  );
}
