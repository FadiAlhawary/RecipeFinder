import { CachedDiet } from '@/enum';
import DescriptionList from '@/components/Lists/DescriptionList';
import React, { useState } from 'react';
import IngredientsSearcher from '@/components/Headers/IngredientsSearcher';

const Home = () => {
  const [selectedItems, setSelectedItems] = useState<{ value: string }[]>([]);

  return (
    <>
      <IngredientsSearcher
        withList
        setSelectedItems={setSelectedItems}
        selectedItems={selectedItems}
      />
      <DescriptionList
        items={CachedDiet}
        labelName="NameEn"
        descriptionName="Description"
        urlName="imageUrl"
      />
    </>
  );
};
export default React.memo(Home);
