import { InfiniteSlider } from '../components/ui/infinite-slider';
import { useState } from 'react';

function Placeholder() {
  return <div className='w-[120px] h-[120px] rounded-[4px] bg-gray-300 animate-pulse'></div>;
}

function ImageWithLoader({ src, alt }: { src: string; alt: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className='w-[120px] h-[120px] relative'>
      {!isLoaded && <Placeholder />}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full rounded-[4px] object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}

export function Slider() {
  return (
    <InfiniteSlider durationOnHover={75} gap={24}>
      <ImageWithLoader src='/berita/1.jpeg' alt='Dean blunt - Black Metal 2' />
      <ImageWithLoader src='/slider/1.webp' alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2' />
      <ImageWithLoader src='/slider/ojek.jpg' alt='Yung Lean - Stardust' />
      <ImageWithLoader src='/slider/3.jpeg' alt='Lana Del Rey - Ultraviolence' />
      <ImageWithLoader src='/slider/4.webp' alt='A$AP Rocky - Tailor Swift' />
      <ImageWithLoader src='/slider/5.webp' alt='Midnight Miami (feat Konvy) - Nino Paid, Konvy' />
    </InfiniteSlider>
  );
}
