import React, { useEffect } from 'react';
import Banner from '@/components/banner';

export { Page };


function Page() {
  
  let key = import.meta.env.VITE_SOME_KEY;
  let url = import.meta.env.VITE_URL;
  console.log("Url is " + url);
  console.log("Key is  " + key);

  const projectsRef = React.useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    if (projectsRef && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <Banner
        heroTitle
        title="lorem asdadas dasldjlaksdjaskljdas"
        description={import.meta.env.VITE_SOME_KEY}
        image="/assets/eth.png"
        buttonText="Explore Projects"
        buttonPress={scrollToProjects}
      />
    </main>
  );
}