import { Image, Text, styled } from '@nextui-org/react';
import fetcher from '@libs/fetcher';
import useSWR from 'swr';
import { whiteA } from '@radix-ui/colors';

type photo = {
  color?: string;
  created_at?: string;
  id?: string;
  likes: number;
  description: string;
  exif: {
    aperture: string;
    exposure_time: string;
    focal_length: string;
    iso: number;
    make: string;
    model: string;
    name: string;
  };
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
};

const StyledPhoto = styled('div', {
  background: 'white',
  padding: '8px',
});

export const Photo = ({ id }: { id: string }) => {
  const { data: photo } = useSWR<photo>(`/api/unsplash/photos/${id}`, fetcher);
  console.log(photo);

  const SubtleGrey = styled(Text, {
    color: '$grey11 !important',
    padding: '0 4px',
  });

  const StyledTitle = styled('div', {
    height: '32px',
    padding: '4px 0 8px 0'
  })

  return (
    <StyledPhoto>
      {photo && (
        <div>
          <Image
            showSkeleton
            width={320}
            height={180}
            maxDelay={10000}
            src={photo.urls.regular}
            alt={photo.description && photo.description}
            objectFit="cover"
          />
          <StyledTitle>
            {photo.description && <Text>{photo.description}</Text>}
          </StyledTitle>
          <SubtleGrey small i>
            f/{photo.exif.aperture} - {photo.exif.exposure_time} - {photo.exif.iso}
          </SubtleGrey>
          <Text small i css={{ color: 'gray11' }}>
            {photo.exif.model}
            {photo.exif.name}
          </Text>
        </div>
      )}
    </StyledPhoto>
  );
};
