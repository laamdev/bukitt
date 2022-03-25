import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Switch } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IoCheckmarkOutline } from 'react-icons/io5';

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
  const [agreedContact, setAgreedContact] = useState(false);
  const [agreedMailingList, setAgreedMailingList] = useState(false);
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
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      category: 'Experience',
    },
    resolver: yupResolver(schema),
  });

  const watchCategory = watch('category');

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
        'Your inquiry message has been successfully submitted. Our travel concierge will contact you shortly!'
      );
      setServerError('');
    }

    if (agreedMailingList) {
      const res = await fetch('/api/subscribe', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
        }),
      });

      const data = await res.json();

      if (data.error) {
        setServerError(data.error);
        setSuccess('');
      } else {
        setSuccess(
          "Thanks for subscribing! 🥳 We've sent a welcome email to your inbox. If you can't find it, please check your promotions and spam folders and add us to your favorites so you won't miss any of our travel treats!"
        );
        setServerError('');
      }
    }

    setSubmitting(false);

    reset();
  };

  return (
    <div className="mt-6 overflow-hidden  rounded-2xl bg-slate-50 py-16 px-4 shadow-md sm:px-6 lg:mt-12 lg:px-8 lg:py-12">
      <div className="relative mx-auto max-w-3xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <AnimatePresence>
            {!success ? (
              <motion.div
                className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div>
                  <label htmlFor="firstName" className="tw-inquiry-form-label">
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="given-name"
                      {...register('firstName')}
                      className="block w-full rounded-md border-slate-300 py-3 px-4 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                    />
                    <div className="h-3">
                      {errors?.firstName?.message && (
                        <FormError>{errors?.firstName?.message}</FormError>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="lastName" className="tw-inquiry-form-label">
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      autoComplete="family-name"
                      {...register('lastName')}
                      className="block w-full rounded-md border-slate-300 py-3 px-4 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                    />
                    <div className="h-3">
                      {errors?.lastName?.message && (
                        <FormError>{errors?.lastName?.message}</FormError>
                      )}
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="tw-inquiry-form-label">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      {...register('email')}
                      className="block w-full rounded-md border-slate-300 py-3 px-4 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                    />
                    <div className="h-3">
                      {errors?.email?.message && (
                        <FormError>{errors?.email?.message}</FormError>
                      )}
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="tw-inquiry-form-label">
                    Phone
                  </label>
                  <div className="mt-1">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="phone"
                      {...register('phone')}
                      className="block w-full rounded-md border-slate-300 py-3 px-4 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                    />
                    <div className="h-3">
                      {errors?.phone?.message && (
                        <FormError>{errors?.phone?.message}</FormError>
                      )}
                    </div>
                  </div>
                </div>

                <fieldset className="sm:col-span-2">
                  <legend className="tw-inquiry-form-label">Category</legend>
                  {/* <p className="text-sm text-slate-500">
                These are delivered via SMS to your mobile phone.
              </p> */}
                  <div className="mt-3 flex flex-col gap-y-6 lg:flex-row lg:gap-x-12">
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
                        <span className="tw-inquiry-form-checkbox">
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
                        <span className="tw-inquiry-form-checkbox">
                          Destination
                        </span>
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="category-tailored"
                        name="category"
                        type="radio"
                        value="Tailored"
                        {...register('category')}
                        className="tw-radio-btn"
                      />
                      <label htmlFor="category-tailored" className="ml-3">
                        <span className="tw-inquiry-form-checkbox">
                          Tailored
                        </span>
                      </label>
                    </div>
                  </div>
                </fieldset>

                {watchCategory && (
                  <fieldset className="sm:col-span-2">
                    <label htmlFor="product">
                      {watchCategory === 'Experience' && (
                        <span className="tw-inquiry-form-label">
                          Experience
                        </span>
                      )}
                      {watchCategory === 'Destination' && (
                        <span className="tw-inquiry-form-label">
                          Destination
                        </span>
                      )}
                      {watchCategory === 'Tailored' && (
                        <span className="tw-inquiry-form-label">Tailored</span>
                      )}
                    </label>

                    <select
                      id="product"
                      name="product"
                      {...register('product')}
                      className="block w-full cursor-pointer rounded-md border-slate-300 py-3 px-4 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                    >
                      {watchCategory === 'Experience' && (
                        <>
                          {sortedExperiences.map((experience) => (
                            <option
                              key={experience.name}
                              value={experience.name}
                            >
                              {experience.name}
                            </option>
                          ))}
                        </>
                      )}
                      {watchCategory === 'Destination' && (
                        <>
                          {sortedDestinations.map((destination) => (
                            <option
                              key={destination.name}
                              value={destination.name}
                            >
                              {destination.name}
                            </option>
                          ))}
                        </>
                      )}
                      {watchCategory === 'Tailored' && (
                        <>
                          <option value="Single Destination">
                            Single Destination
                          </option>
                          <option value="Multiple Destinations">
                            Multiple Destinations
                          </option>
                        </>
                      )}
                    </select>
                  </fieldset>
                )}

                <div className="sm:col-span-2">
                  <label htmlFor="group" className="tw-inquiry-form-label">
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
                      className="block w-full rounded-md border-slate-300 py-3 px-4 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                    />
                    <div className="h-3">
                      {errors?.group?.message && (
                        <FormError>{errors?.group?.message}</FormError>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="startDate" className="tw-inquiry-form-label">
                    Travel Start Date
                  </label>
                  <div className="mt-1">
                    <input
                      type="date"
                      name="startDate"
                      id="startDate"
                      {...register('startDate', { required: true })}
                      className="block w-full cursor-pointer rounded-md border-slate-300 py-3 px-4 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                    />
                    <div className="h-3">
                      {errors?.startDate?.message && (
                        <FormError>{errors?.startDate?.message}</FormError>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="endDate" className="tw-inquiry-form-label">
                    Travel End Date
                  </label>
                  <div className="mt-1">
                    <input
                      type="date"
                      name="endDate"
                      id="endDate"
                      {...register('endDate', { required: true })}
                      className="block w-full cursor-pointer rounded-md border-slate-300 py-3 px-4 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                    />
                    <div className="h-3">
                      {errors?.endDate?.message && (
                        <FormError>{errors?.endDate?.message}</FormError>
                      )}
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="tw-inquiry-form-label">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      {...register('message', {})}
                      className="block w-full rounded-md border border-slate-300 py-3 px-4 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                    />
                    <div className="h-3">
                      {errors?.message?.message && (
                        <FormError>{errors?.message?.message}</FormError>
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <Switch
                        checked={agreedContact}
                        onChange={setAgreedContact}
                        className={classNames(
                          agreedContact ? 'bg-brand-600' : 'bg-slate-200',
                          'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2'
                        )}
                      >
                        <span className="sr-only">Agree to contact.</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            agreedContact ? 'translate-x-5' : 'translate-x-0',
                            'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                          )}
                        />
                      </Switch>
                    </div>
                    <div className="ml-3">
                      <p>Can we contact and use your info to plan the trip?*</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <Switch
                        checked={agreedMailingList}
                        onChange={setAgreedMailingList}
                        className={classNames(
                          agreedMailingList ? 'bg-brand-600' : 'bg-slate-200',
                          'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2'
                        )}
                      >
                        <span className="sr-only">
                          Agree to mailing list subscription.
                        </span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            agreedMailingList
                              ? 'translate-x-5'
                              : 'translate-x-0',
                            'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                          )}
                        />
                      </Switch>
                    </div>
                    <div className="ml-3">
                      <p>
                        Subscribe to our inspirational luxury travel mailing
                        list.
                      </p>
                      {/* <p className="text-base text-slate-500">
                        By selecting this, you agree to the{' '}
                        <Link href="/policies/privacy-policy">
                          <a className="font-medium text-slate-700 underline">
                            privacy
                          </a>
                        </Link>
                        <span> and </span>
                        <Link href="/policies/cookie-policy">
                          <a className="font-medium text-slate-700 underline">
                            cookie
                          </a>
                        </Link>
                        <span> policies.</span>
                      </p> */}
                    </div>
                  </div>
                </div>

                <div className="mx-auto mt-12 flex flex-col items-center justify-center sm:col-span-2">
                  <BtnInquiryForm
                    isSubmitting={isSubmitting}
                    disabled={isSubmitting || agreedContact === false}
                    primary
                  >
                    {isSubmitting ? 'Submitting' : "Let's Talk"}
                  </BtnInquiryForm>
                  {serverError && <span>{serverError}</span>}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-2 mx-auto flex max-w-sm flex-col items-center gap-y-3 text-center text-xl font-medium lg:gap-y-6"
              >
                <IoCheckmarkOutline className="h-12 w-12 rounded-full bg-green-700 px-1 text-white lg:h-16 lg:w-16" />
                <span className="text-green-700">{success}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
}
