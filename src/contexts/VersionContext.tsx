'use client';

import { createContext, useContext } from 'react';
import { type VersionId, getBasePath } from '@/lib/themes';

type VersionContextValue = {
  version: VersionId;
  basePath: string;
};

const VersionContext = createContext<VersionContextValue>({
  version: 'v1',
  basePath: '/v1',
});

export function VersionProvider({
  version,
  children,
}: {
  version: VersionId;
  children: React.ReactNode;
}) {
  return (
    <VersionContext.Provider value={{ version, basePath: getBasePath(version) }}>
      {children}
    </VersionContext.Provider>
  );
}

export function useVersion() {
  return useContext(VersionContext);
}

export function versionHref(basePath: string, hash: string) {
  return `${basePath}${hash}`;
}
