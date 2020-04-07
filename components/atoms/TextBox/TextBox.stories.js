import React from 'react';
import TextBox from './TextBox';

export default {
  component: TextBox,
  title: 'Text Box',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => <TextBox content='Hello world!' />;
