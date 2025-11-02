import DynamicCard from '@/components/DynamicCard';
import { CachedDiet } from '@/enum';
import DescriptionList from '@/components/DescriptionList';
import React from 'react';
import IngredientsSearcher from '@/components/Headers/IngredientsSearcher';

const Home = () => {
  return (
    <>
    <IngredientsSearcher/>
      {/* <Button onClick={fun}>CLick me </Button> */}
      {/* <DynamicCard
        title="Healthy food"
        description="This is a description for healthy food."
        imageUrl="https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg"
      /> */}
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
