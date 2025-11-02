/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import ComboBox from '../Fields/ComboBox';
import { createListCollection } from '@chakra-ui/react';

interface IngredientsSearcherProps {}
const IngredientsSearcher: React.FC<IngredientsSearcherProps> = ({}) => {
  const t = createListCollection({
    items: [
      { key: '1', value: 'Cheese', label: 'Cheese' },
      { key: '2', value: 'Eggs', label: 'Eggs' },
      { key: '3', value: 'Bread', label: 'Bread' },
    ],
  });

  return (
    <>
      <ComboBox
        collection={t}
        setInputValue={function (value: any): void {
          throw new Error('Function not implemented.');
        }}
        isLoading={false}
        error={''}
      />
    </>
  );
};
export default React.memo(IngredientsSearcher);
