import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { classNames } from '@/utils/helpers';
import { phoneRegExp } from '@/utils/regex';

import BtnInquiryForm from '@/components/shared/buttons/BtnInquiryForm';
import FormError from '@/components/forms/FormError';

const schema = yup
  .object()
  .shape({
    firstName: yup.string().required('Please enter a first name.'),
    lastName: yup.string().required('Please enter a last name.'),
    email: yup
      .string()
      .email('Please enter a valid email.')
      .required('Please enter an email.'),
    phone: yup
      .string()
      .required('Please enter a phone number.')
      .matches(phoneRegExp, 'Please enter a valid phone number.')
      .min(5, 'The phone number is too short.')
      .max(15, 'The phone number is too long.'),
    group: yup
      .number()
      .typeError('Please enter a group size.')
      .required()
      .positive()
      .integer(),
    startDate: yup
      .date()
      .min(
        new Date(Date.now() - 86400000),
        'The trip start date cannot be in the past'
      )
      .required()
      .typeError('Please enter a trip start date.'),
    endDate: yup
      .date()
      .min(
        new Date(Date.now() - 86400000),
        'The trip end date cannot be in the past'
      )
      .required()
      .typeError('Please enter a trip end date.'),
    message: yup.string().required('Please enter an inquiry message.'),
  })
  .required();

export default function InquiryForm({ destinations, experiences }) {
  const [agreed, setAgreed] = useState(false);
  const [serverError, setServerError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const sortedDestinations = destinations.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      category: 'Experience',
    },
    resolver: yupResolver(schema),
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
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        category: formData.category,
        product: formData.product,
        group: formData.group,
        startDate: formData.startDate,
        endDate: formData.endDate,
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
    <div className="bg-neutral-50 rounded-2xl shadow-md py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-12">
      <div className="relative max-w-3xl mx-auto">
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
                  {...register('firstName')}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-neutral-300 rounded-md"
                />
                <div className="h-3">
                  {errors?.firstName?.message && (
                    <FormError>{errors?.firstName?.message}</FormError>
                  )}
                </div>
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
                  {...register('lastName')}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-neutral-300 rounded-md"
                />
                <div className="h-3">
                  {errors?.lastName?.message && (
                    <FormError>{errors?.lastName?.message}</FormError>
                  )}
                </div>
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
                  {...register('email')}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-neutral-300 rounded-md"
                />
                <div className="h-3">
                  {errors?.email?.message && (
                    <FormError>{errors?.email?.message}</FormError>
                  )}
                </div>
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
                  {...register('phone')}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-neutral-300 rounded-md"
                />
                <div className="h-3">
                  {errors?.phone?.message && (
                    <FormError>{errors?.phone?.message}</FormError>
                  )}
                </div>
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
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-neutral-300 rounded-md cursor-pointer"
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
                htmlFor="group"
                className="block text-xl font-mono uppercase font-medium text-neutral-700"
              >
                Group Size
              </label>
              <div className="mt-1">
                <input
                  id="group"
                  name="group"
                  type="number"
                  min={1}
                  max={20}
                  {...register('group', {
                    required: true,
                    min: 1,
                    max: 20,
                  })}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-neutral-300 rounded-md"
                />
                <div className="h-3">
                  {errors?.group?.message && (
                    <FormError>{errors?.group?.message}</FormError>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="startDate"
                className="block text-xl font-medium font-mono uppercase text-neutral-700"
              >
                Travel Start Date
              </label>
              <div className="mt-1">
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  {...register('startDate', { required: true })}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-neutral-300 rounded-md cursor-pointer"
                />
                <div className="h-3">
                  {errors?.startDate?.message && (
                    <FormError>{errors?.startDate?.message}</FormError>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="endDate"
                className="block text-xl font-mono uppercase font-medium text-neutral-700"
              >
                Travel End Date
              </label>
              <div className="mt-1">
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  {...register('endDate', { required: true })}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-neutral-300 rounded-md cursor-pointer"
                />
                <div className="h-3">
                  {errors?.endDate?.message && (
                    <FormError>{errors?.endDate?.message}</FormError>
                  )}
                </div>
              </div>
            </div>

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
                <div className="h-3">
                  {errors?.message?.message && (
                    <FormError>{errors?.message?.message}</FormError>
                  )}
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="shrink-0">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-brand-600' : 'bg-neutral-200',
                      'relative inline-flex shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500'
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
            <div className="sm:col-span-2 mx-auto">
              <BtnInquiryForm
                disabled={submitting || agreed === false}
                btnLinkText="Let's Talk"
                primary
              />

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
