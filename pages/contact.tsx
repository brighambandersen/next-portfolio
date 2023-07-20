import IconLink from '@/app/components/IconLink';
import PageTitle from '@/app/components/PageTitle';
import { contactMethods } from '@/app/data';
import React from 'react';

function Contact() {
  return (
    <>
      <PageTitle prefix='Contact' />
      <h1>Contact Me</h1>
      <section className='py-24 min-h-screen'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
          {contactMethods.map((method) => (
            <IconLink
              key={method.name}
              icon={<method.icon className='w-full h-full' />}
              link={method.link}
              tooltipTitle={method.tooltipTitle}
              square
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Contact;
