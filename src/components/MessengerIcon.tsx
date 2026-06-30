import type { ReactNode } from 'react';
import Image from 'next/image';

type MessengerId = 'telegram' | 'max' | 'whatsapp';

const ICONS: Record<MessengerId, string> = {
  telegram: '/icons/telegram.png',
  max: '/icons/max.png',
  whatsapp: '/icons/whatsapp.png',
};

const sizeMap = { sm: 28, md: 32, lg: 36 } as const;

export function MessengerIcon({
  id,
  size = 'md',
  className = '',
}: {
  id: MessengerId;
  size?: keyof typeof sizeMap;
  className?: string;
}) {
  const px = sizeMap[size];

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${className}`}
      style={{ width: px, height: px }}
    >
      <Image
        src={ICONS[id]}
        alt=""
        width={px}
        height={px}
        className="w-full h-full object-contain"
        draggable={false}
      />
    </span>
  );
}
