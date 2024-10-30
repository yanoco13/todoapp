'use client';

import { useRouter } from 'next/navigation';

export default function NavigationButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/second-page');
  };

  return (
    <button onClick={handleClick}>
      Login
    </button>
  );
}