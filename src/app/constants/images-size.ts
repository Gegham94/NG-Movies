import { environment } from '../../environments/environment';

const IMAGE_URL = environment.IMAGE_URL;

export const IMAGES_SIZES = {
  small: `${IMAGE_URL}/w185`,
  medium: `${IMAGE_URL}/w342`,
  large: `${IMAGE_URL}/original`
};
