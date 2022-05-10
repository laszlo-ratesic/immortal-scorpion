import React from 'react';
import 'react-awesome-button/dist/themes/theme-c137.css';
import AwesomeButton from 'react-awesome-button/src/components/AwesomeButton';

import useHotKeysDialog from '@/store/hotkeys';
import useTheme from '@/store/theme';

export default function AwesomeHotKeyButton() {
  const [theme] = useTheme();
  const [, hotKeysDialogActions] = useHotKeysDialog();

  return (
    <AwesomeButton
      onPress={hotKeysDialogActions.open}
      type={theme === 'light' ? 'primary' : 'secondary'}
    >
      Alt + /
    </AwesomeButton>
  );
}
