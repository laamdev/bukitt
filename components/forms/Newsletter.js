import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import BtnNewsletter from '@/components/shared/buttons/BtnNewsletter';
import FormSuccess from '@/components/forms/FormSuccess';
import FormError from '@/components/forms/FormError';

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('Please enter a valid email.')
      .required('Please enter an email.'),
  })
  .required();

export default function Newsletter() {
  const [serverError, setServerError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (formData) => {
    if (submitting) {
      return false;
    }

    setSubmitting(true);
    setServerError('');

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: formData.email }),
    });

    const data = await res.json();

    if (data.error) {
      setServerError(data.error);
      setSuccess('');
    } else {
      setSuccess('Please check your email to confirm your subscription.');
      setServerError('');
    }

    setSubmitting(false);

    reset();
  };

  return (
    <div>
      <h5 className="text-neutral-200 text-2xl font-medium font-mono uppercase">
        Newsletter
      </h5>
      <p className="mt-1 text-base text-neutral-300">
        Get your dose of Bukitt travel sent to your inbox monthly.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          {...register('email', {
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Enter an email',
            },
          })}
          type="email"
          aria-label="Email for newsletter"
          className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-white focus:border-white focus:placeholder-neutral-400"
        />

        <div className="mt-3 md:mt-4 lg:mt-6 rounded-md sm:shrink-0 w-fit-content">
          <BtnNewsletter btnLinkText="Subscribe" disabled={submitting} />
        </div>
        <div className="h-3">
          {errors?.email?.message && (
            <FormError>{errors?.email?.message}</FormError>
          )}
          {serverError && <FormError>{serverError}</FormError>}
          {success && <FormSuccess>{success}</FormSuccess>}
        </div>
      </form>
    </div>
  );
}
