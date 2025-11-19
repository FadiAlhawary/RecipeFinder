import { Button, Card, Image } from '@chakra-ui/react';

import React from 'react';
import DynamicModal from './DynamicModal';

interface DynamicCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const DynamicCard: React.FC<DynamicCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Card.Root maxW="sm" overflow="hidden">
        <Image src={imageUrl} />
        <Card.Body gap="2">
          <Card.Title>{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
        </Card.Body>
        <Card.Footer gap="2">
          <Button variant="solid" onClick={() => setOpen(true)}>
            Show Ingredients now
          </Button>
          <Button variant="ghost">Add to Favorites</Button>
        </Card.Footer>
      </Card.Root>

      {/* Dialog FIX */}
      <DynamicModal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={title}
        content={<p>{description}</p>}
        showCloseButton={true}
        showOkButton={true}
        onOk={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </>
  );
};

export default React.memo(DynamicCard);
