import Head from 'next/head';
import React from 'react';
import { BASE_WEBSITE_TITLE } from '../data';

interface Props {
  prefix: string;
}

function PageTitle(props: Props) {
  const { prefix } = props;
  const title = `${prefix} - ${BASE_WEBSITE_TITLE}`;

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

export default PageTitle;
