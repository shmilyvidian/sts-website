import Container from '@/app/_components/Container';
import { Locale } from '@/app/types';
import Link from 'next/link';

export default function Studio({ params: { locale } }: { params: { locale: Locale } }) {
  return (
    <Container>
      <Link href={`/${locale}`}>Studio</Link>
    </Container>
  );
}
