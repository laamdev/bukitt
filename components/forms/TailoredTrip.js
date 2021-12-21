import { useState } from 'react';
import { useForm } from 'react-hook-form';

import FormLabel from '@/components/forms/Label';

export default function TailoredTrip() {
  const [serverError, setServerError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    if (submitting) {
      return false;
    }

    setSubmitting(true);
    setServerError('');

    const res = await fetch('/api/mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    const data = await res.json();

    if (data.error) {
      setServerError(data.error);
      setSuccess('');
    } else {
      setSuccess(
        'Your message has been successfully submitted. We will be in contact shortly.'
      );
      setServerError('');
    }

    setSubmitting(false);

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto space-y-8"
    >
      <div className="">
        <FormLabel htmlFor="name">Name</FormLabel>
        <div className="mt-1">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            placeholder="Name"
            {...register('name', { required: true, maxLength: 80 })}
            className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
          />
          {errors.name && <span role="alert">{errors.name.message}</span>}
        </div>
      </div>

      <div className="">
        <FormLabel htmlFor="email">Email</FormLabel>
        <div className="mt-1">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
          />
          {errors.email && <span role="alert">{errors.email.message}</span>}
        </div>
      </div>

      <div className="sm:col-span-6">
        <FormLabel
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </FormLabel>
        <div className="mt-1">
          <textarea
            id="message"
            name="message"
            rows={3}
            defaultValue={''}
            {...register('message', {})}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
          />
          {errors.message && <span role="alert">{errors.message.message}</span>}
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Write a few sentences about your request.
        </p>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={submitting}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-teal-600 tw-transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Submit
          </button>
          {serverError && <span>{serverError}</span>}
          {success && <span>{success}</span>}
        </div>
      </div>
    </form>
  );
}
