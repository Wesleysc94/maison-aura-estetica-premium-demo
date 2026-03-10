import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { clinic } from '@/data/siteContent';

export const useTestimonials = () => {
    return useQuery({
        queryKey: ['testimonials'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('testimonials')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching testimonials:', error);
                return clinic.testimonials;
            }

            return data || clinic.testimonials;
        },
    });
};
