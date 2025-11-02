import React, { useState } from 'react';
import {
  Flex,
  Listbox,
  Box,
  Text,
  Image,
  createListCollection,
} from '@chakra-ui/react';
interface DescriptionListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  labelName: string;
  descriptionName: string;
  urlName: string;
}
const DescriptionList: React.FC<DescriptionListProps> = ({
  items,
  labelName,
  descriptionName,
  urlName,
}) => {
  const collection = createListCollection({
    items: items.map((item) => ({
      key: String(item.Id ?? item[labelName]),
      value: String(item[labelName]), // use label as stable value
      label: item[labelName],
      description: item[descriptionName],
      url: item[urlName],
    })),
  });

  const [selectedValue, setSelectedValue] = useState<string>(
    String(items?.[0]?.[labelName] ?? ''),
  );
  const handleSelectionChange = (details: { value: string[] }) => {
    if (details.value?.length) setSelectedValue(details.value[0]);
  };

  const currentItem = items.find(
    (it) => String(it[labelName]) === selectedValue,
  );

  return (
    <>
      <Flex gap="6" maxW="800px">
        <Listbox.Root
          maxW="2xs"
          collection={collection}
          value={selectedValue ? [selectedValue] : []}
          onValueChange={handleSelectionChange}
          variant="solid">
          <Listbox.Content border="0">
            {collection.items.map((it) => (
              <Listbox.Item item={it} key={it.key}>
                <Listbox.ItemText>{it.label}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            ))}
          </Listbox.Content>
        </Listbox.Root>

        <Box flex="1">
          {currentItem && (
            <Box>
              <Text fontSize="lg" fontWeight="semibold" mb="3">
                {currentItem[labelName]}
              </Text>
              {currentItem[urlName] && (
                <Image
                  src={currentItem[urlName]}
                  alt={currentItem[labelName]}
                  borderRadius="md"
                  maxH="400px"
                  width="full"
                  objectFit="cover"
                />
              )}
              <Text fontSize="sm" color="fg.muted" mt="2">
                {currentItem[descriptionName]}
              </Text>
            </Box>
          )}
        </Box>
      </Flex>
    </>
  );
};
export default React.memo(DescriptionList);
