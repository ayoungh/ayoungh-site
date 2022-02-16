import { Text, Spacer } from '@nextui-org/react';

export default function Now() {
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
        Now
      </Text>

      <Spacer y={3} />
      <Text>Currently working full time as a Software engineer.</Text>
      <Spacer y={3} />
    </div>
  );
}
