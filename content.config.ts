import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
    collections: {
        partners: defineCollection({
            type: 'data',
            source: 'partner/*.json',
            schema: z.object({ id: z.string(), slug: z.string() }),
        }),
    },
});
