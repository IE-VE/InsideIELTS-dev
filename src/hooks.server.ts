import type { Handle } from '@sveltejs/kit';
import { DatabaseConnector } from '$lib/db/connector';

// Safe database wrapper that catches errors and returns mock responses
class SafeDatabaseConnector extends DatabaseConnector {
  constructor(db: any) {
    super(db);
  }

  async getSession(id: string) {
    try {
      return await super.getSession(id);
    } catch (error) {
      console.warn('Database error, using fallback:', error);
      return null;
    }
  }

  async getSessionRecordings(sessionId: string) {
    try {
      return await super.getSessionRecordings(sessionId);
    } catch (error) {
      console.warn('Database error, using fallback:', error);
      return [];
    }
  }

  async getSessionByEmail(email: string) {
    try {
      return await super.getSessionByEmail(email);
    } catch (error) {
      console.warn('Database error, using fallback:', error);
      return null;
    }
  }
}

// Mock database for development when D1 is not available
class MockDatabaseConnector {
  async getSession() { return null; }
  async getSessionRecordings() { return []; }
  async createSession() { throw new Error('Mock database - cannot create session'); }
  async updateSession() { throw new Error('Mock database - cannot update session'); }
  async getSessionByEmail() { return null; }
}

export const handle: Handle = async ({ event, resolve }) => {
  // Initialize database connection if platform and DB are available
  if (event.platform?.env?.DB) {
    event.locals.db = new SafeDatabaseConnector(event.platform.env.DB);
  } else {
    // In development, use mock database that returns null/empty results
    // This allows the page fallback logic to work
    event.locals.db = new MockDatabaseConnector() as any;
  }
  
  return resolve(event);
}