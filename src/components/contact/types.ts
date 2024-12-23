import { ChangeEvent, FormEvent } from 'react';

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormProps {
  formData: FormData;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent) => void;
}