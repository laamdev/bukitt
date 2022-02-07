import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import SectionHeading from '@/components/shared/SectionHeading';
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

export default function NewsletterSection({ heading, body }) {
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
    <section className="tw-section bg-slate-100" id="newsletter">
      <SectionHeading className="text-center">{heading}</SectionHeading>
      <p className="text-center text-lg lg:text-2xl">{body}</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-12  max-w-3xl"
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <div className="flex">
          <input
            id="email"
            {...register('email', {
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Enter an email',
              },
            })}
            type="email"
            placeholder="Email Address"
            aria-label="Email for newsletter"
            className="tw-transition w-full min-w-0 appearance-none rounded-md border-2 border-brand bg-transparent py-2 px-4 text-base text-slate-900 placeholder-slate-500 hover:bg-white focus:border-brand focus:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-brand"
          />

          <BtnNewsletter disabled={submitting} className="ml-3 lg:ml-6">
            Subscribe
          </BtnNewsletter>
        </div>
        <div className="h-3">
          {errors?.email?.message && (
            <FormError>{errors?.email?.message}</FormError>
          )}
          {serverError && <FormError>{serverError}</FormError>}
          {success && <FormSuccess>{success}</FormSuccess>}
        </div>
      </form>
    </section>
  );
}
