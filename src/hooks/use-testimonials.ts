import { useQuery } from '@tanstack/react-query';
import { clinic } from '@/data/siteContent';

export const useTestimonials = () => {
    return useQuery({
        queryKey: ['testimonials'],
        queryFn: async () => clinic.testimonials,
        staleTime: Infinity,
    });
};
