import PageHeader from '@/app/components/PageHeader';
import PageTitle from '@/app/components/PageTitle';
import { RESUME_GDRIVE_URL } from '@/app/data';
import React from 'react';

function Resume() {
  return (
    <section className='bg-red-600 py-24 min-h-screen'>
      <PageTitle prefix='Resume' />
      <PageHeader title='My Resume' />
      <iframe
        src={RESUME_GDRIVE_URL}
        title='Resume - Brigham Andersen'
        className='h-3/4 w-full border-none'
      />
    </section>
  );
}

export default Resume;
