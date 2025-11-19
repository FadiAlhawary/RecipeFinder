import React from 'react';
import { Alert } from '@chakra-ui/react';

interface Alerts {
  alertType: 'error' | 'warning' | 'info' | 'success';
  errorMessage: string;
  alertTitle?: string;
}
const Alerts: React.FC<Alerts> = ({
  alertType = 'error',
  errorMessage,
  alertTitle = 'Error',
}) => {
  return (
    <>
      <Alert.Root status={alertType}>
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>{alertTitle}</Alert.Title>
          <Alert.Description>{errorMessage}</Alert.Description>
        </Alert.Content>
      </Alert.Root>
    </>
  );
};
export default React.memo(Alerts);
