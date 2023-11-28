import AboutSectionOne from '@/app/_components//About/AboutSectionOne';
import AboutSectionTwo from '@/app/_components//About/AboutSectionTwo';
import Blog from '@/app/_components//Blog';
import Brands from '@/app/_components//Brands';
import ScrollUp from '@/app/_components//Common/ScrollUp';
import Contact from '@/app/_components//Contact';
import Features from '@/app/_components//Features';
import Hero from '@/app/_components//Hero';
import Pricing from '@/app/_components//Pricing';
import Testimonials from '@/app/_components//Testimonials';
import Video from '@/app/_components//Video';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Next.js Template for Startup and SaaS',
  description: 'This is Home for Startup Nextjs Template',
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
