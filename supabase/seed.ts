import { supabase } from '../src/integrations/supabase/client';
import { treatments, blogPosts, clinic } from '../src/data/siteContent';

const { testimonials } = clinic;

async function seed() {
    console.log('Starting seed...');

    // Seed treatments
    for (const t of treatments) {
        const { error } = await supabase.from('treatments').upsert({
            slug: t.slug,
            name: t.name,
            category: t.category,
            excerpt: t.excerpt,
            ideal_for: t.idealFor,
            duration: t.duration,
            recovery: t.recovery,
            benefits: t.benefits,
            steps: t.steps,
        }, { onConflict: 'slug' });
        if (error) console.error(`Error seeding treatment ${t.slug}:`, error);
    }

    // Seed blog posts
    for (const p of blogPosts) {
        const { error } = await supabase.from('blog_posts').upsert({
            slug: p.slug,
            category: p.category,
            title: p.title,
            excerpt: p.excerpt,
            read_time: p.readTime,
        }, { onConflict: 'slug' });
        if (error) console.error(`Error seeding post ${p.slug}:`, error);
    }

    // Seed testimonials
    for (const test of testimonials) {
        const { error } = await supabase.from('testimonials').insert({
            name: test.name,
            role: test.role,
            quote: test.quote,
        });
        if (error) console.error(`Error seeding testimonial from ${test.name}:`, error);
    }

    console.log('Seed finished.');
}

seed();
