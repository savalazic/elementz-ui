import { getButtonColor } from '../buttonHelpers';
import { defaultTheme } from '../../../utilities/ThemeProvider';

describe('getButtonColor', () => {
  it('should return primary color when type is `primary`', () => {
    expect(getButtonColor({ type: 'primary', theme: defaultTheme })).toEqual(
      defaultTheme.primary,
    );
  });

  it('should return default color when type is not available', () => {
    expect(getButtonColor({ type: null, theme: defaultTheme })).toEqual(
      defaultTheme.default,
    );
  });
});
