import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Locale } from '../types';
import Container from '../_components/Container';
import Image from 'next/image';
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';
import Features from '../_components/Features';
import Testimonials from '../_components/Testimonials';

export default async function Home({ params: { locale } }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Home');
  const features = [
    {
      name: 'Push to deploy',
      description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'SSL certificates',
      description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
      icon: LockClosedIcon,
    },
    {
      name: 'Simple queues',
      description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Advanced security',
      description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
      icon: FingerPrintIcon,
    },
  ];
  return (
    <Container>
      <main className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
        <div className="py-6 md:order-1 hidden md:block">
          <Image src={'/hero.png'} width="400" height="400" alt="STS in the air" loading="eager" />
        </div>
        <div>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
            Hurry up and join, sts helps greatness
          </h1>
          <p className="text-lg mt-4 text-slate-600 max-w-xl">
            sts is a starter template for startups, marketing websites & landing pages.
            <wbr /> Built with Astro.build, TailwindCSS & Alpine.js. You can quickly create any
            website with this starter.
          </p>
        </div>
      </main>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              what can we service
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget
              egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <Features />
      <Testimonials />
    </Container>
  );
}
