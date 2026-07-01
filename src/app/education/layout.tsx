import SiteLayout from '@/components/SiteLayout';

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteLayout version="v1">{children}</SiteLayout>;
}
