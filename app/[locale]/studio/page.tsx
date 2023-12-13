import AboutSectionOne from '@/app/_components/About/AboutSectionOne';
import AboutSectionTwo from '@/app/_components/About/AboutSectionTwo';
import Breadcrumb from '@/app/_components/Common/Breadcrumb';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page | Free Next.js Template for Startup and SaaS',
  description: 'This is About Page for Startup Nextjs Template',
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Studio Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
