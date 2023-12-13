import Banner from '@/app/_components/Banner/Banner';
import Breadcrumb from '@/app/_components/Common/Breadcrumb';
import Courses from '@/app/_components/Courses/Courses';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page | Free Next.js Template for Startup and SaaS',
  description: 'This is About Page for Startup Nextjs Template',
  // other metadata
};

const CoursePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Cousre Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <Banner />
      <Courses />
    </>
  );
};

export default CoursePage;
