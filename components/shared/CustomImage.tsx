import Image, { ImageProps } from 'next/image';

export default function CustomImage(props: ImageProps) {
  return <Image suppressHydrationWarning {...props} />;
}
