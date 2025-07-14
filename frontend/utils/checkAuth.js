'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

// Optional: if you want a reusable hook
export default function useAuthCheck() {
  const router = useRouter();

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/protected', {
          withCredentials: true, // must send cookies
        });

        if (res.status !== 200) {
          throw new Error('Unauthorized');
        }
      } catch (err) {
        console.warn('Redirecting: not authenticated');
        router.push('/');
      }
    };

    verify();
  }, []);
}