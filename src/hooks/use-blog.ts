import { useQuery } from '@tanstack/react-query';
import { blogPosts as staticPosts } from '@/data/siteContent';

export const useBlogPosts = () => {
    return useQuery({
        queryKey: ['blog-posts'],
        queryFn: async () => staticPosts,
        staleTime: Infinity,
    });
};

export const useBlogPost = (slug: string) => {
    return useQuery({
        queryKey: ['blog-post', slug],
        queryFn: async () => staticPosts.find((p) => p.slug === slug),
        staleTime: Infinity,
    });
};
