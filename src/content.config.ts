import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const domain_dns = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/domain_dns" }),
    schema: z.object({
        title: z.string(),
    })
});

export const collections = { domain_dns };