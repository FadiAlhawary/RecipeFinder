/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useState } from 'react';
import ComboBox from '../Fields/ComboBox';
import { createListCollection, VStack } from '@chakra-ui/react';
import Alerts from '../Alerts/Alerts';
import CheckBoxList from '../Lists/CheckBoxList/CheckBoxList';
import { GetIngredientsBySearch } from '../Services/Smart MealServices';

interface IngredientsSearcherProps {
  withList?: boolean;
  setSelectedItems?: (items: any) => void;
  selectedItems?: any;
}
const IngredientsSearcher: React.FC<IngredientsSearcherProps> = ({
  withList,
  setSelectedItems,
  selectedItems,
}) => {
  const [error, setError] = useState<string>('');
  // Use { label, value } so ComboBox can display the name
  const [items, setItems] = useState<{ label: string; value: string }[]>([]);

  const itemsList = useMemo(
    () => createListCollection<{ label: string; value: string }>({ items }),
    [items],
  );
  const selectedList = useMemo(() => {
    const normalized =
      (selectedItems ?? []).map((i: any) =>
        typeof i === 'string'
          ? { label: i, value: i.trim().toLowerCase() }
          : {
              label: i.label ?? i.value,
              value: String(i.value ?? '')
                .trim()
                .toLowerCase(),
            },
      ) ?? [];
    return createListCollection<{ label: string; value: string }>({
      items: normalized,
    });
  }, [selectedItems]);

  const handleSearchIngredients = async (value: string) => {
    try {
      if ((value ?? '').trim().length < 2) return;
      const data: any[] = await GetIngredientsBySearch(value, 5);

      // Normalize API results: label = name, value = lowercased name (for keys/compare)
      const fetched = (data ?? [])
        .map((it: any) => {
          const name = typeof it === 'string' ? it : it?.name;
          if (!name) return null;
          const label = String(name).trim();
          const v = label.toLowerCase();
          return { label, value: v };
        })
        .filter(Boolean) as { label: string; value: string }[];

      // De-duplicate by value
      const map = new Map<string, { label: string; value: string }>();
      for (const it of fetched) {
        if (!map.has(it.value)) map.set(it.value, it);
      }

      // Include the raw input if not present
      const needle = value.trim().toLowerCase();
      if (needle && !map.has(needle)) {
        map.set(needle, { label: value.trim(), value: needle });
      }

      setItems(Array.from(map.values()));
    } catch (e) {
      setError(`Error fetching ingredients: ${e}`);
    }
  };

  return (
    <>
      <VStack>
        {error && <Alerts alertType="error" errorMessage={error} />}
        <ComboBox
          collection={itemsList}
          setInputValue={handleSearchIngredients}
          isLoading={false}
          error={error}
          onSelect={(item: any) => {
            if (!withList || !setSelectedItems) return;

            // Support either string or object from ComboBox
            const label =
              typeof item === 'string'
                ? item
                : item?.label ?? item?.value ?? '';
            const value =
              typeof item === 'string'
                ? item.trim().toLowerCase()
                : String(item?.value ?? item?.label ?? '')
                    .trim()
                    .toLowerCase();

            if (!value) return;
            setSelectedItems((prev: any[] = []) =>
              prev.some(
                (i: any) => String(i?.value ?? '').toLowerCase() === value,
              )
                ? prev
                : [...prev, { label: label || value, value }],
            );
          }}
        />
        {withList && <CheckBoxList collection={selectedList} />}
      </VStack>
    </>
  );
};
export default React.memo(IngredientsSearcher);
