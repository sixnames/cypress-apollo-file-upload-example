/* eslint-disable @typescript-eslint/camelcase */
import { Assets, ImageArgsInterface, ImageInterface } from '../types';
import cloudinary from 'cloudinary';

interface MainImageResolverInterface {
  name: string;
  assets?: Assets;
}

function mainImageResolver<T extends MainImageResolverInterface>(
  { assets, name }: T,
  { width, quality = 'auto' }: ImageArgsInterface,
): ImageInterface | null {
  if (assets) {
    const mainAsset = assets.data.find(({ index }) => index === 0);
    if (mainAsset) {
      return {
        width: width || mainAsset.width,
        alt: name,
        title: name,
        url: cloudinary.v2.url(mainAsset.publicId, {
          width,
          fetch_format: 'auto',
          quality,
        }),
      };
    }

    return null;
  }
  return null;
}

export default mainImageResolver;
