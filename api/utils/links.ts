import cyrillicToTranslit from 'cyrillic-to-translit-js';

export const generateLinkName = (name: string) => {
  const translit = new cyrillicToTranslit();
  return translit.transform(name ? `${name}` : '', '_');
};
