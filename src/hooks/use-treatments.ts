import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { treatments as staticTreatments } from '@/data/siteContent';

export const useTreatments = () => {
    return useQuery({
        queryKey: ['treatments'],
        queryFn: async () => {
            if (!supabase) {
                return staticTreatments;
            }

            const { data, error } = await supabase
                .from('treatments')
                .select('*')
                .order('name');

            if (error) {
                console.error('Error fetching treatments:', error);
                return staticTreatments;
            }

            return data.map(t => ({
                ...t,
                idealFor: t.ideal_for,
            })) || staticTreatments;
        },
    });
};

export const useTreatment = (slug: string) => {
    return useQuery({
        queryKey: ['treatment', slug],
        queryFn: async () => {
            if (!supabase) {
                return staticTreatments.find(t => t.slug === slug);
            }

            const { data, error } = await supabase
                .from('treatments')
                .select('*')
                .eq('slug', slug)
                .single();

            if (error || !data) {
                if (error) console.error('Error fetching treatment:', error);
                return staticTreatments.find(t => t.slug === slug);
            }

            return {
                ...data,
                idealFor: data.ideal_for,
            };
        },
    });
};
