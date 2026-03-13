import { useQuery } from '@tanstack/react-query';
import { treatments as staticTreatments } from '@/data/siteContent';

export const useTreatments = () => {
    return useQuery({
        queryKey: ['treatments'],
        queryFn: async () => staticTreatments,
        staleTime: Infinity,
    });
};

export const useTreatment = (slug: string) => {
    return useQuery({
        queryKey: ['treatment', slug],
        queryFn: async () => staticTreatments.find((t) => t.slug === slug),
        staleTime: Infinity,
    });
};
