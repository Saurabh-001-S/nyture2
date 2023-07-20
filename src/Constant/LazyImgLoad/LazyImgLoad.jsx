import React, { useEffect, useRef } from 'react';

const LazyImgLoad = ({ src, CName }) => {
      const imageRef = useRef();

      useEffect(() => {
            const observer = new IntersectionObserver(
                  (entries) => {
                        entries.forEach((entry) => {
                              if (entry.isIntersecting) {
                                    entry.target.src = src;
                                    observer.unobserve(entry.target);
                              }
                        });
                  },
                  { rootMargin: '0px 0px 100px 0px' }
            );

            if (imageRef.current) {
                  observer.observe(imageRef.current);
            }

            return () => {
                  if (imageRef.current) {
                        observer.unobserve(imageRef.current);
                  }
            };
      }, [src]);

      return (
            <img ref={imageRef} src={''} alt={'Loading...'} className={CName} />
      )
}

export default LazyImgLoad;