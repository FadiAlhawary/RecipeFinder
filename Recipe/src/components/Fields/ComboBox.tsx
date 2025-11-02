import {
  Combobox,
  Portal,
  HStack,
  Spinner,
  Span,
  type CollectionItem,
  type ListCollection,
} from '@chakra-ui/react';
import React from 'react';

interface ComboBoxProps {
  collection: ListCollection<CollectionItem>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setInputValue: (value: any) => void;
  isLoading: boolean;
  error: string;
  width?: string;
  placeholder?: string;
}
const ComboBox: React.FC<ComboBoxProps> = ({
  collection,
  setInputValue,
  isLoading,
  error,
  width = '320px',
  placeholder = 'Cheese, Eggs, Bread...',
}) => {
  return (
    <>
      <Combobox.Root
        width={width}
        collection={collection}
        placeholder={placeholder}
        onInputValueChange={(e) => setInputValue(e.inputValue)}
        positioning={{ sameWidth: false, placement: 'bottom-start' }}>
        <Combobox.Label>Search Star Wars Characters</Combobox.Label>

        <Combobox.Control>
          <Combobox.Input placeholder="Type to search" />
          <Combobox.IndicatorGroup>
            <Combobox.ClearTrigger />
            <Combobox.Trigger />
          </Combobox.IndicatorGroup>
        </Combobox.Control>

        <Portal>
          <Combobox.Positioner>
            <Combobox.Content minW="sm">
              {isLoading ? (
                <HStack p="2">
                  <Spinner size="xs" borderWidth="1px" />
                  <Span>Loading...</Span>
                </HStack>
              ) : error !== '' ? (
                <Span p="2" color="fg.error">
                  Error fetching
                </Span>
              ) : (
                collection.items?.map((character) => (
                  <Combobox.Item key={character.name} item={character}>
                    <HStack justify="space-between" textStyle="sm">
                      <Span fontWeight="medium" truncate>
                        {character.name}
                      </Span>
                      <Span color="fg.muted" truncate>
                        {character.height}cm / {character.mass}kg
                      </Span>
                    </HStack>
                    <Combobox.ItemIndicator />
                  </Combobox.Item>
                ))
              )}
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.Root>
    </>
  );
};
export default React.memo(ComboBox);
