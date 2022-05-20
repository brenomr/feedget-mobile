import React from 'react';
import { Text, View } from 'react-native';

import { Copyrights } from '../Copyrights';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { FeedbackType } from '../Widget';
import { Option } from '../Option';
import { styles } from './styles';

interface Props {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function Options({ onFeedbackTypeChanged }: Props) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
      >
        Deixe seu feedback
      </Text>

      <View style={styles.options}>
        {
          Object.entries(feedbackTypes).map(([key, value]) => (
            <Option
              image={value.image}
              key={key}
              onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
              title={value.title}
            />
          ))
        }
      </View>
      <Copyrights />
    </View>
  );
}