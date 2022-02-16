import { Text, Spacer, Grid, Card } from '@nextui-org/react';

export default function Books() {
  return (
    <div>
      <Text
        h2
        size={25}
        css={{
          textGradient: '45deg, $red500 -20%, $blue500 90%',
        }}
        weight="bold"
      >
        Books - I have read and am going to read
      </Text>
      <Spacer y={3} />
      <Text>Some of my favourites so far:</Text>
      <Grid.Container gap={3}>
        <Grid>
          <Card>Ready Player one</Card>
        </Grid>
        <Grid>
          <Card>It's all in your head - Russ</Card>
        </Grid>
        <Grid>
          <Card>Atomic Habits</Card>
        </Grid>
      </Grid.Container>
    </div>
  );
}
