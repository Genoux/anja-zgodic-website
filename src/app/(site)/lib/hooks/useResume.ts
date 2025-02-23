// lib/hooks/useResume.ts
import { useQuery } from '@tanstack/react-query';
import { client } from '@/sanity/lib/client';
import { resumeQuery } from '@/app/(site)/lib/queries';

export function useResume() {
  return useQuery({
    queryKey: ['resume'],
    queryFn: async () => await client.fetch(resumeQuery),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}