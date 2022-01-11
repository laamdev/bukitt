import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { useForm } from 'react-hook-form';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function EnquiryForm({ destinations, experiences }) {
  const [agreed, setAgreed] = useState(false);
  const [serverError, setServerError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const sortedDestinations = destinations.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      category: 'Experience',
    },
  });

  const watchCategory = watch('category'); // you can supply default value as second argument

  const sortedExperiences = experiences.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

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
        // name: formData.name,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
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
        'Your message has been successfully submitted. We will contact you at your email shortly.'
      );
      setServerError('');
    }

    setSubmitting(false);

    reset();
  };

  return (
    <div className="bg-neutral-50 rounded-2xl shadow-md py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        {/* <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Contact sales
          </h2>
          <p className="mt-4 text-lg leading-6 text-neutral-500">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
            massa dictumst amet. Sapien tortor lacus arcu.
          </p>
        </div> */}
        {/* <div className="mt-12"> */}
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8"
          >
            <div>
              <label
                htmlFor="firstName"
                className="block text-xl font-medium font-mono uppercase text-neutral-700"
              >
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  {...register('firstName', { required: true, maxLength: 80 })}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-neutral-300 rounded-md"
                />
                {errors.firstName && (
                  <span role="alert">{errors.firstName.message}</span>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-xl font-mono uppercase font-medium text-neutral-700"
              >
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="family-name"
                  {...register('lastName', { required: true, maxLength: 80 })}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-neutral-300 rounded-md"
                />
                {errors.name && (
                  <span role="alert">{errors.lastName.message}</span>
                )}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-xl font-mono uppercase font-medium text-neutral-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  {...register('email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-neutral-300 rounded-md"
                />
                {errors.email && (
                  <span role="alert">{errors.email.message}</span>
                )}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="phone"
                className="block text-xl font-mono uppercase font-medium text-neutral-700"
              >
                Phone
              </label>
              <div className="mt-1">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="phone"
                  {...register('phone', {
                    required: true,
                    pattern: /^\+(?:[0-9] ?){6,14}[0-9]$/,
                  })}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-neutral-300 rounded-md"
                />
                {errors.phone && (
                  <span role="alert">{errors.phone.message}</span>
                )}
              </div>
            </div>

            <fieldset className="sm:col-span-2">
              <legend className="block text-xl font-mono uppercase font-medium text-neutral-700">
                Category
              </legend>
              {/* <p className="text-sm text-neutral-500">
                These are delivered via SMS to your mobile phone.
              </p> */}
              <div className="mt-3 flex space-x-12">
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
                    <span className="block text-sm font-medium text-neutral-700">
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
                    <span className="block text-sm font-medium text-neutral-700">
                      Destination
                    </span>
                  </label>
                </div>
              </div>
            </fieldset>

            {watchCategory && (
              <fieldset className="sm:col-span-2">
                <label htmlFor="product">
                  {watchCategory === 'Experience' && (
                    <span className="block text-xl font-mono uppercase font-medium text-neutral-700">
                      Experience
                    </span>
                  )}
                  {watchCategory === 'Destination' && (
                    <span className="block text-xl font-mono uppercase font-medium text-neutral-700">
                      Destination
                    </span>
                  )}
                </label>

                <select
                  id="product"
                  name="product"
                  {...register('product')}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-neutral-300 rounded-md"
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

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-xl font-mono uppercase font-medium text-neutral-700"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  {...register('message', {})}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border border-neutral-300 rounded-md"
                />
                {errors.message && (
                  <span role="alert">{errors.message.message}</span>
                )}
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-brand-600' : 'bg-neutral-200',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500'
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-3">
                  <p className="text-base text-neutral-500">
                    By selecting this, you agree to the{' '}
                    <a
                      href="#"
                      className="font-medium text-neutral-700 underline"
                    >
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a
                      href="#"
                      className="font-medium text-neutral-700 underline"
                    >
                      Cookie Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={submitting || agreed === false}
                className={`tw-btn w-full justify-center border-brand text-brand hover:text-white disabled:opacity-75 disabled:hover:bg-white disabled:hover:text-brand`}
              >
                Let&apos;s talk
              </button>
              <div className="flex justify-center">
                {serverError && <span className="mt-6">{serverError}</span>}
                {success && <span className="mt-6 text-sm ">👌 {success}</span>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
