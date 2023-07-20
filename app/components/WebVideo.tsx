import React from 'react';

interface Props {
  title: string;
  url: string;
}

function WebVideo(props: Props) {
  const { title, url } = props;

  return (
    <div className='my-10 h-500'>
      <iframe
        width='100%'
        height='100%'
        title={title}
        src={url}
        allowFullScreen
        className='border-none'
      />
    </div>
  );
}

export default WebVideo;
