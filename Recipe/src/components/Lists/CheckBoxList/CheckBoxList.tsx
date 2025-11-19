/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import {
  Box,
  Listbox,
  type CollectionItem,
  type ListCollection,
} from '@chakra-ui/react';
import { ListboxHeader, ListboxItemCheckmark } from './ListCheckBoxComp';

interface CheckBoxListProps {
  collection: ListCollection<CollectionItem>;
  value?: string[];
  onValueChange?: (value: string[]) => void;
}

const CheckBoxList: React.FC<CheckBoxListProps> = ({
  collection,
  value,
  onValueChange,
}) => {
  return (
    <>
      <Box maxW="320px">
        <Listbox.Root
          collection={collection}
          selectionMode="multiple"
          gap="0"
          // controlled selection
          value={value}
          onValueChange={(e: { value: string[] }) => onValueChange?.(e.value)}>
          <ListboxHeader collection={collection} />
          <Listbox.Content maxH="300px" roundedTop="0">
            {collection.items.map((item) => (
              <Listbox.Item item={item} key={item.value}>
                <ListboxItemCheckmark />
                <Listbox.ItemText>{item.value}</Listbox.ItemText>
              </Listbox.Item>
            ))}
          </Listbox.Content>
        </Listbox.Root>
      </Box>
    </>
  );
};
export default React.memo(CheckBoxList);
