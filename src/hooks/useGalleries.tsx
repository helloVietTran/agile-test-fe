import { useQuery } from '@tanstack/react-query';
import { getGalleries } from '@/api/galleryApi';

export const useGalleries = () => {
  return useQuery({
    queryKey: ['galleries'],
    queryFn: getGalleries,
  });
};
