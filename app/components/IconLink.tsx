import React, { ReactElement } from 'react';

interface Props {
  link: string;
  icon: ReactElement;
  tooltipTitle?: string | ReactElement;
  square?: boolean;
}

function IconLink(props: Props) {
  const { icon, link, tooltipTitle, square = false } = props;

  return (
    <a
      href={link}
      aria-label={link}
      target='_blank'
      rel='noopener noreferrer'
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      role='button'
      style={{ textDecoration: 'none' }}
    >
      {icon}
    </a>
  );
}

export default IconLink;
