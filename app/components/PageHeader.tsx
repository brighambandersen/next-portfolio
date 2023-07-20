import React, { ReactElement } from 'react';

interface Props {
  title: string;
  iconLink?: ReactElement;
}

function PageHeader(props: Props) {
  const { title, iconLink } = props;

  return (
    <div className='flex items-center'>
      <h1 className='text-4xl'>{title}</h1>
      {iconLink && <div className='ml-4'>{iconLink}</div>}
    </div>
  );
}

export default PageHeader;
