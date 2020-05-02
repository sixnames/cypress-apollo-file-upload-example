import { FileUpload } from 'graphql-upload';
import { ReadStream } from 'fs';

export interface ImageInterface {
  url: string;
  width: number;
  alt: string;
  title: string;
}

export interface ImageArgsInterface {
  width?: number;
  quality?: number | 'auto';
}

export interface AssetInterface {
  publicId: string;
  format: string;
  url: string;
  index: number;
  width: number;
  height: number;
}

export interface Assets {
  data: AssetInterface[];
}

export interface StoreImageInterface {
  file: FileUpload;
  fileName: string;
  index?: number;
  sizes?: { [key: string]: number };
}

export interface StoreTestImageInterface {
  url: string;
  fileName: string;
  index?: number;
  sizes?: { [key: string]: number };
  extension?: string;
}

export interface GetBufferFromFileStreamInterface {
  stream: ReadStream;
  callback: (buffer: Buffer) => void;
  reject: (reason: any) => void;
}

export interface StoreImageResultInterface {
  regular: string;
  retina: string;
}

export interface SaveJimpOriginalInterface {
  callback: (result: StoreImageResultInterface) => void;
  fileBuffer: Buffer;
  fileName: string;
  index?: number;
  size: number | null;
  reject: (reason: any) => void;
}
