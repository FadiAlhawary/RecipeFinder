import {
  Combobox,
  Portal,
  HStack,
  Spinner,
  Span,
  type CollectionItem,
  type ListCollection,
  //  useListCollection,
  Button,
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
  title?: string;
  onSelect?: (item: CollectionItem | null) => void; // added
  // ...new props...
  onActionClick?: (input: string) => void;
  actionLabel?: string;
}

const ComboBox: React.FC<ComboBoxProps> = ({
  collection,
  setInputValue,
  isLoading,
  error,
  width = '320px',
  placeholder = 'Cheese, Eggs, Bread...',
  title = 'Search Ingredients',
  onSelect,
  onActionClick,
  actionLabel = 'Search',
}) => {
  const [currentInput, setCurrentInput] = React.useState('');

  return (
    <>
      <Combobox.Root
        width={width}
        collection={collection}
        placeholder={placeholder}
        // _selection='single' // ensure single selection
        onInputValueChange={(e) => {
          setInputValue(e.inputValue);
          setCurrentInput(e.inputValue);
        }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onValueChange={(e: any) => {
          const v = Array.isArray(e?.value) ? e.value[0] : e?.value;
          const selected =
            collection.items?.find((it) => it.value === v) ?? null;
          onSelect?.(selected);
        }}
        positioning={{ sameWidth: false, placement: 'bottom-start' }}>
        <Combobox.Label>{title}</Combobox.Label>

        <Combobox.Control>
          <Combobox.Input placeholder={placeholder} />
          <Combobox.IndicatorGroup>
            {onActionClick && (
              <Button
                size="xs"
                variant="ghost"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => onActionClick(currentInput)}>
                {actionLabel}
              </Button>
            )}
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
                  <Combobox.Item key={String(character.value)} item={character}>
                    <HStack justify="space-between" textStyle="sm">
                      <Span fontWeight="medium" truncate>
                        {character.value}
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
