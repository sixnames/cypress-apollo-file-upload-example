import { FileUpload } from 'graphql-upload';
import { ReadStream } from 'fs';

export interface StoreUploadsInterface {
  files: FileUpload[];
  fileName: string;
  toPath?: string;
  urlPath?: string;
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
