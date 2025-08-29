import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = sequence(async ({ event, resolve }) => {
        // Only initialize database in production/Cloudflare environment
        if (event.platform?.env?.DB) {
                try {
                        const { DatabaseConnector } = await import('$lib/db/connector');
                        const db = new DatabaseConnector(event.platform.env.DB);
                        event.locals.db = db;
                } catch (error) {
                        console.warn('Database initialization failed:', error);
                }
        }

        // Skip admin auth in development
        if (event.url.pathname.startsWith('/admin') && event.platform?.env?.ADMIN_PASSWORD) {
                const authHeader = event.request.headers.get('authorization');
                const expectedAuth = `Basic ${btoa(`admin:${event.platform.env.ADMIN_PASSWORD}`)}`;

                if (!authHeader || authHeader !== expectedAuth) {
                        return new Response('Unauthorized', {
                                status: 401,
                                headers: {
                                        'WWW-Authenticate': 'Basic realm="Admin Access"'
                                }
                        });
                }
        }

        const response = await resolve(event);
        return response;
});