'use client';
import React from 'react';
import Accordion from '@/app/_components/accordion/accordion';

const accordionData = [
  {
    isExpanded: false,
    title: 'How to contact with riders emergency ?',
    contents: (
      <div>
        An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic
        (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is
        often used in articles, websites, email lists, and online forums where common questions tend
        to recur, for example through posts or queries by new users related to common knowledge
        gaps. The purpose of an FAQ is generally provide information.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'App installation failed, how to update system information?',
    contents: (
      <div>
        An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic
        (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is
        often used in articles, websites, email lists, and online forums where common questions tend
        to recur, for example through posts or queries by new users related to common knowledge
        gaps. The purpose of an FAQ is generally provide information.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Website reponse taking time, how to improve?',
    contents: (
      <div>
        An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic
        (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is
        often used in articles, websites, email lists, and online forums where common questions tend
        to recur, for example through posts or queries by new users related to common knowledge
        gaps. The purpose of an FAQ is generally provide information.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'New update fixed all bug and issues',
    contents: (
      <div>
        An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic
        (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is
        often used in articles, websites, email lists, and online forums where common questions tend
        to recur, for example through posts or queries by new users related to common knowledge
        gaps. The purpose of an FAQ is generally provide information.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container">
          <div className="text-black text-center text-2xl mb-10 dark:text-white">
            Frequently Asked Questions
          </div>
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                <Accordion items={accordionData} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default FAQ;
