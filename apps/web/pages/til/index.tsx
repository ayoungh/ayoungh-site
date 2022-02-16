import { Text, Spacer } from '@nextui-org/react';

export default function Til() {
  return (
    <div>
      <Text
        h2
        size={25}
        css={{
          textGradient: '45deg, $red500 50%, $blue500 30%',
        }}
        weight="bold"
      >
        Today I learnt
      </Text>

      <Spacer y={3} />
      <Text>Coming soon...</Text>
      <Text>I am always trying to learn new things!</Text>
      <Spacer y={3} />
    </div>
  );
}
