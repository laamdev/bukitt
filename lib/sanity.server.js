import { createClient } from 'next-sanity';
import { sanityConfig } from '@/lib/config';

export const sanityClient = createClient(sanityConfig);
