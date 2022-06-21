
import { Image, Text, styled } from '@nextui-org/react';
import fetcher from '@libs/fetcher';
import useSWR from 'swr';

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

export const Photo = ({ id }: { id: string }) => {
  const { data } = useSWR<photo>(`/api/unsplash/photos/${id}`, fetcher);
  console.log(data);

const SubtleGrey  = styled(Text, { color: '$grey11 !important', padding: '0 4px' });

  return (
    <div>
      {data && (
        <div>
          {data.description && <Text>{data.description}</Text>}
          <Image
            showSkeleton
            width={320}
            height={180}
            maxDelay={10000}
            src={data.urls.regular}
            alt={data.description && data.description}
            objectFit="cover"
          />
          <SubtleGrey small i>
            f/{data.exif.aperture} - {data.exif.exposure_time} - {data.exif.iso}
          </SubtleGrey>
          <Text small i css={{ color: 'gray11' }}>
            {data.exif.model}
            {data.exif.name}
          </Text>
        </div>
      )}
    </div>
  );
};
