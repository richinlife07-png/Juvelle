import { api } from './api.js';

/**
 * Expected future backend contract (adjust to match the real API):
 *
 * POST /api/consultations
 * body: { name: string, email: string, phone?: string, message?: string }
 * 201 -> { id: string, name: string, email: string, status: 'pending', createdAt: string }
 */
export async function createConsultationRequest(payload) {
  return api.post('/consultations', payload);
}
