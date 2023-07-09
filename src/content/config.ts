import { defineCollection, z } from 'astro:content';

const resume = defineCollection({
	schema: z.object({
		title: z.string(),
	}),
});


export const collections = { resume };
