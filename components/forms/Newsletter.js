import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Newsletter() {
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
    <div className="mt-8 xl:mt-0">
      <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
        Subscribe to our newsletter
      </h3>
      <p className="mt-4 text-base text-gray-300">
        The latest news, articles, and resources, sent to your inbox monthly.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-1.5 sm:space-y-3"
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          {...register('email', {
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
          type="email"
          placeholder="john@email.com"
          aria-label="Email for newsletter"
          className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
        />
        {errors.email && <span role="alert">{errors.email.message}</span>}

        <div className="rounded-md sm:mt-0 sm:flex-shrink-0 w-fit-content">
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary"
          >
            Subscribe
          </button>
          {serverError && <span className="text-white">{serverError}</span>}
          {success && <span className="text-white">{success}</span>}
        </div>
      </form>
    </div>
  );
}
