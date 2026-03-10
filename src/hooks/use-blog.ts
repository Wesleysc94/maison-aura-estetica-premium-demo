import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { blogPosts as staticPosts } from '@/data/siteContent';

export const useBlogPosts = () => {
    return useQuery({
        queryKey: ['blog-posts'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('blog_posts')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching blog posts:', error);
                return staticPosts;
            }

            return data || staticPosts;
        },
    });
};

export const useBlogPost = (slug: string) => {
    return useQuery({
        queryKey: ['blog-post', slug],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('blog_posts')
                .select('*')
                .eq('slug', slug)
                .single();

            if (error) {
                console.error('Error fetching blog post:', error);
                return staticPosts.find(p => p.slug === slug);
            }

            return data || staticPosts.find(p => p.slug === slug);
        },
    });
};
