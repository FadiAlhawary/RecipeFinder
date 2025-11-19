import {
  useListboxContext,
  Flex,
  Checkmark,
  Listbox,
  type CollectionItem,
  type ListCollection,
  useListboxItemContext,
  type CheckmarkProps,
} from '@chakra-ui/react';

export function ListboxHeader({
  collection,
}: {
  collection: ListCollection<CollectionItem>;
}) {
  const listbox = useListboxContext();
  const isAllSelected = listbox.value.length === collection.items.length;
  const isSomeSelected =
    listbox.value.length > 0 && listbox.value.length < collection.items.length;

  const handleSelectAll = () => {
    if (isAllSelected) {
      listbox.setValue([]);
    } else {
      listbox.setValue(collection.items.map((item) => item.value));
    }
  };

  if (!collection) return null;

  return (
    <Flex
      as="button"
      onClick={handleSelectAll}
      px="3"
      gap="2"
      align="center"
      cursor="pointer"
      borderWidth="1px"
      minH="10"
      roundedTop="l2"
      mb="-1px">
      <Checkmark
        filled
        size="sm"
        checked={isAllSelected}
        indeterminate={isSomeSelected}
      />
      <Listbox.Label>Select Frameworks</Listbox.Label>
    </Flex>
  );
}
export const ListboxItemCheckmark = (props: CheckmarkProps) => {
  const itemState = useListboxItemContext();
  return (
    <Checkmark
      filled
      size="sm"
      checked={itemState.selected}
      disabled={itemState.disabled}
      {...props}
    />
  );
};
