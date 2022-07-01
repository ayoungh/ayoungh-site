import { Image, Text, styled, Loading, Grid, Spacer } from '@nextui-org/react';
import fetcher from '@libs/fetcher';
import useSWR from 'swr';
import { whiteA } from '@radix-ui/colors';
import { Photo } from '@components/Photo';

type stats = {
downloads:{
    total:number,
    historical:{
        change:number;
        average:number;
        resolution:string;
        quantity:number;
        // values:[{"date":"2022-06-01","value":15},{"date":"2022-06-02","value":8},{"date":"2022-06-03","value":4},{"date":"2022-06-04","value":4},{"date":"2022-06-05","value":4},{"date":"2022-06-06","value":9},{"date":"2022-06-07","value":3},{"date":"2022-06-08","value":4},{"date":"2022-06-09","value":18},{"date":"2022-06-10","value":29},{"date":"2022-06-11","value":2},{"date":"2022-06-12","value":2},{"date":"2022-06-13","value":13},{"date":"2022-06-14","value":9},{"date":"2022-06-15","value":19},{"date":"2022-06-16","value":6},{"date":"2022-06-17","value":4},{"date":"2022-06-18","value":5},{"date":"2022-06-19","value":6},{"date":"2022-06-20","value":7},{"date":"2022-06-21","value":2},{"date":"2022-06-22","value":6},{"date":"2022-06-23","value":6},{"date":"2022-06-24","value":2},{"date":"2022-06-25","value":4},{"date":"2022-06-26","value":2},{"date":"2022-06-27","value":8},{"date":"2022-06-28","value":7},{"date":"2022-06-29","value":5},{"date":"2022-06-30","value":6}]}},"views":{"total":1811905,"historical":{"change":20628,"average":688,"resolution":"days","quantity":30,"values":[{"date":"2022-06-01","value":950},{"date":"2022-06-02","value":889},{"date":"2022-06-03","value":791},{"date":"2022-06-04","value":451},{"date":"2022-06-05","value":522},{"date":"2022-06-06","value":826},{"date":"2022-06-07","value":845},{"date":"2022-06-08","value":899},{"date":"2022-06-09","value":992},{"date":"2022-06-10","value":819},{"date":"2022-06-11","value":518},{"date":"2022-06-12","value":508},{"date":"2022-06-13","value":940},{"date":"2022-06-14","value":800},{"date":"2022-06-15","value":812},{"date":"2022-06-16","value":763},{"date":"2022-06-17","value":620},{"date":"2022-06-18","value":0},{"date":"2022-06-19","value":440},{"date":"2022-06-20","value":731},{"date":"2022-06-21","value":811},{"date":"2022-06-22","value":723},{"date":"2022-06-23","value":683},{"date":"2022-06-24","value":657},{"date":"2022-06-25","value":429},{"date":"2022-06-26","value":418},{"date":"2022-06-27","value":667},{"date":"2022-06-28","value":689},{"date":"2022-06-29","value":675},{"date":"2022-06-30","value":760}]
        }
    }
};

type photo = {
  color?: string;
  created_at?: string;
  id?: string;
  likes: number;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
};



export const UnsplashPhotos = () => {
  const { data: stats } = useSWR<stats>(`/api/unsplash/stats`, fetcher);
  const { data: photos } = useSWR<photo[]>('/api/unsplash/photos', fetcher);
  console.log(stats, photos);

  return (
    <>
      {!stats && <Loading size="xs" />}

      {stats && (
        <div>
          {stats.downloads.historical.change} Downloads this month
          {/* {stats.downloads.historical.average} Average */}
        </div>
      )}

      {!photos && <Loading size="xs" />}

      {photos && (
        <Grid.Container gap={2}>
          {photos?.length &&
            photos?.map((photo) => (
              <>
                <Grid
                  xs={12}
                  sm={6}
                  md={3}
                  xl={2}
                  key={photo.id}
                  css={{ padding: '4px 0' }}
                >
                  <Photo id={photo.id} />
                </Grid>
                <Spacer x={1} />
              </>
            ))}
        </Grid.Container>
      )}
    </>
  );
};
