import { useState, useCallback } from 'react';
import { createConsultationRequest } from '../services/consultationService.js';

const INITIAL_STATE = { name: '', email: '', phone: '', message: '' };

export function useConsultationForm() {
  const [values, setValues] = useState(INITIAL_STATE);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState(null);

  const updateField = useCallback((field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  }, []);

  const reset = useCallback(() => {
    setValues(INITIAL_STATE);
    setStatus('idle');
    setErrorMessage(null);
  }, []);

  const submit = useCallback(async (event) => {
    event?.preventDefault?.();
    setStatus('submitting');
    setErrorMessage(null);

    try {
      // NOTE: until the backend endpoint exists, this call will fail in the
      // browser network tab — that's expected. Swap the mock below for the
      // real call once /api/consultations is live.
      await createConsultationRequest(values);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  }, [values]);

  return { values, updateField, submit, reset, status, errorMessage };
}
