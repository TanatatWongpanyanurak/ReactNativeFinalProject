import * as React from 'react';
import { FAB, Portal, Provider,icon } from 'react-native-paper';
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          iconName='plus'
          actions={[
            { iconName: 'plus', onPress: () => console.log('Pressed add') },
            {
              iconName: 'star',
              label: 'Star',
              onPress: () => console.log('Pressed star'),
            },
            {
              iconName: 'email',
              label: 'Email',
              onPress: () => console.log('Pressed email'),
            },
            {
              iconName: 'bell',
              label: 'Remind',
              onPress: () => console.log('Pressed notifications'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
};

export default HomeScreen;