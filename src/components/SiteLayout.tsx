import type { VersionId } from '@/lib/themes';
import { VersionProvider } from '@/contexts/VersionContext';
import ThemeShell from '@/components/ThemeShell';
import ScrollProgress from '@/components/ScrollProgress';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VersionSwitcher from '@/components/VersionSwitcher';

export default function SiteLayout({
  version,
  children,
}: {
  version: VersionId;
  children: React.ReactNode;
}) {
  return (
    <ThemeShell version={version}>
      <VersionProvider version={version}>
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
        <VersionSwitcher />
      </VersionProvider>
    </ThemeShell>
  );
}
