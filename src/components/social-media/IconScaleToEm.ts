import { scale } from './types';

export function scaleToEm(iconScale: scale) {
  const SCALE_MULTIPLIER = 2;

  switch (iconScale) {
    case 'small':
      return 1 * SCALE_MULTIPLIER;
    case 'medium':
      return 2 * SCALE_MULTIPLIER;
    case 'large':
      return 3 * SCALE_MULTIPLIER;
  }
}
