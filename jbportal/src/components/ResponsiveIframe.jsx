// components/ResponsiveIframe.js
import React from 'react';

const ResponsiveIframe = ({ src, title }) => (
  <div className="relative w-full pb-[56.25%] h-0">
    <iframe
      src={src}
      title={title}
      className="absolute top-0 left-0 w-full h-full"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>
);

export default ResponsiveIframe;
