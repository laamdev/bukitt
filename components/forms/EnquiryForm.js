import { useState } from 'react';
import { useForm } from 'react-hook-form';

import FormLabel from '@/components/forms/Label';

export default function EnquiryForm({ destinations, experiences }) {
  const [serverError, setServerError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const sortedDestinations = destinations.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  const sortedExperiences = experiences.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const watchCategory = watch('category'); // you can supply default value as second argument

  const onSubmit = async (formData) => {
    if (submitting) {
      return false;
    }

    setSubmitting(true);
    setServerError('');

    console.log(JSON.stringify(formData, null, 2));

    const res = await fetch('/api/mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        category: formData.category,
        product: formData.product,
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

  console.log('watchCategory', watchCategory);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto space-y-8"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          placeholder="Jon Doe"
          {...register('name', { required: true, maxLength: 80 })}
          className="focus:ring-paradiso focus:border-paradiso flex-grow block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
        />
        {errors.name && <span role="alert">{errors.name.message}</span>}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          placeholder="my@email.com"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          className="focus:ring-paradiso focus:border-paradiso flex-grow block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
        />
        {errors.email && <span role="alert">{errors.email.message}</span>}
      </div>

      <fieldset className="mt-6">
        <legend className="text-base font-medium text-gray-900">
          Category
        </legend>
        <p className="text-sm text-gray-500">
          These are delivered via SMS to your mobile phone.
        </p>
        <div className="mt-4 space-y-4">
          <div className="flex items-center">
            <input
              id="category-experience"
              name="category"
              type="radio"
              value="Experience"
              {...register('category')}
              className="tw-radio-btn"
            />
            <label htmlFor="category-experience" className="ml-3">
              <span className="block text-sm font-medium text-gray-700">
                Experience
              </span>
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="category-destination"
              name="category"
              type="radio"
              value="Destination"
              {...register('category')}
              className="tw-radio-btn"
            />
            <label htmlFor="category-destination" className="ml-3">
              <span className="block text-sm font-medium text-gray-700">
                Destination
              </span>
            </label>
          </div>
        </div>
      </fieldset>

      {watchCategory && (
        <fieldset className="mt-6">
          <label
            htmlFor="product"
            className="block text-sm font-medium text-gray-700"
          >
            {watchCategory === 'Experience' && <span>Experience</span>}
            {watchCategory === 'Destination' && <span>Destination</span>}
          </label>

          <select
            id="product"
            name="product"
            {...register('product')}
            className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-paradiso focus:border-paradiso sm:text-sm"
          >
            {watchCategory === 'Experience' && (
              <>
                {sortedExperiences.map((experience) => (
                  <option key={experience.name} value={experience.name}>
                    {experience.name}
                  </option>
                ))}
              </>
            )}
            {watchCategory === 'Destination' && (
              <>
                {sortedDestinations.map((destination) => (
                  <option key={destination.name} value={destination.name}>
                    {destination.name}
                  </option>
                ))}
              </>
            )}
          </select>
        </fieldset>
      )}

      <div className="sm:col-span-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <div className="mt-3">
          <textarea
            id="message"
            name="message"
            rows={3}
            defaultValue={''}
            placeholder="Let's talk..."
            {...register('message', {})}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
          />
          {errors.message && <span role="alert">{errors.message.message}</span>}
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Write a few sentences about your request.
        </p>
      </div>

      <div className="mt-6 flex flex-col justify-end">
        <button type="submit" disabled={submitting} className="tw-btn">
          Submit
        </button>
        {serverError && <span className="mt-6">{serverError}</span>}
        {success && <span className="mt-6">{success}</span>}
      </div>
    </form>
  );
}
