import { TestOkurTheme } from '../../modules';
import { isUndefined } from '../../utils';

export const getColorForCustomValue = (theme: TestOkurTheme, disabled?: boolean, filled?: boolean): string => {
  if (disabled) {
    return theme.palette.inkLighter;
  }
  if (filled) {
    return theme.colors.colorTextInput;
  }

  return theme.colors.colorPlaceholderInput;
};

export const getColorForSelect = (theme: TestOkurTheme, filled?: boolean, customValueText?: string): string => {
  if (!isUndefined(customValueText)) {
    return 'transparent !important';
  }
  return filled ? theme.colors.colorTextInput : theme.palette.inkLight;
};