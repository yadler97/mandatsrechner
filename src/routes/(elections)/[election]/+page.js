import { error } from '@sveltejs/kit';

export async function load({ params }) {
    try {
        const module = await import(`../../../lib/elections/${params.election}.js`);
        return {
            ...module,
            slug: params.election
        };
    } catch (e) {
        throw error(404, 'Election not found');
    }
}