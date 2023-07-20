/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PageHeader from '@/app/components/PageHeader';
import WebVideo from '@/app/components/WebVideo';
import { latestVidContent } from '@/app/data';
import Image from 'next/image';

function Home() {
  return (
    <section className='bg-red-300 py-24 min-h-screen'>
      <PageHeader title='Welcome!' />
      <div>
        <p>
          Hi, I'm <strong>Brigham Andersen</strong> and{' '}
          <u>I'm addicted to giving my all</u>.
        </p>
        <p>
          I love solving the problem we hate most --
          <i> wasting time and money</i>.
        </p>
        <p>
          I can't stop thinking of how we can use technology to boost business
          productivity, so I've built a career for myself in software
          engineering and business. My passion and skills have helped numerous
          start-ups along with big name companies like Nike, Oracle,
          Chick-fil-A, McDonald's, and Walmart. I consider this career to be my
          gift to the world.
        </p>
        <p>Let's discuss how I can give my all to help you!</p>
      </div>
      <div>
        <Image
          src='/../public/profile-pic.webp'
          alt='Me'
          className='rounded-full' // w-full
          width={400} // FIXME
          height={400} // FIXME
        />
      </div>
      <div className='my-16'>
        {latestVidContent.map((vid) => (
          <WebVideo key={vid.url} title={vid.title} url={vid.url} />
        ))}
      </div>
    </section>
  );
}

export default Home;
