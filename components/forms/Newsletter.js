import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import BtnNewsletter from '@/components/shared/buttons/BtnNewsletter';
import FormSuccess from '@/components/forms/FormSuccess';
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
  })
  .required();

export default function Newsletter() {
  const [agreed, setAgreed] = useState(false);
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
      setSuccess('Thanks for subscribing!');
      setServerError('');
    }

    setSubmitting(false);

    reset();
  };

  return (
    <>
      {!success ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-x-12 gap-y-10"
        >
          <div className="col-span-2 lg:col-span-1">
            <label
              htmlFor="firstName"
              className="block font-mono text-xl font-medium uppercase text-slate-700"
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
                className="block w-full rounded-md border-slate-300 py-3 px-4 shadow-sm focus:border-brand-500 focus:ring-brand-500"
              />
              <div className="h-3">
                {errors?.firstName?.message && (
                  <FormError>{errors?.firstName?.message}</FormError>
                )}
              </div>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <label
              htmlFor="lastName"
              className="block font-mono text-xl font-medium uppercase text-slate-700"
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
                className="block w-full rounded-md border-slate-300 py-3 px-4 shadow-sm focus:border-brand-500 focus:ring-brand-500"
              />
              <div className="h-3">
                {errors?.lastName?.message && (
                  <FormError>{errors?.lastName?.message}</FormError>
                )}
              </div>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <label
              htmlFor="email"
              className="block font-mono text-xl font-medium uppercase text-slate-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              {...register('email')}
              className="mt-1 block w-full rounded-md border-slate-300 py-3 px-4 shadow-sm focus:border-brand-500 focus:ring-brand-500"
            />
            <div className="h-3">
              {errors?.email?.message && (
                <FormError>{errors?.email?.message}</FormError>
              )}
            </div>
          </div>

          <div className="col-span-2 flex items-center justify-center space-x-3 lg:col-span-1">
            <Switch
              checked={agreed}
              onChange={setAgreed}
              className={classNames(
                agreed ? 'bg-brand-600' : 'bg-slate-200',
                'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2'
              )}
            >
              <span className="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                className={classNames(
                  agreed ? 'translate-x-5' : 'translate-x-0',
                  'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                )}
              />
            </Switch>

            <p className="text-base text-slate-500">
              I&apos;m happy to receive emails from Bukitt *
            </p>
          </div>

          <div className="col-span-2 mx-auto">
            <div>
              <BtnNewsletter
                disabled={submitting || agreed === false}
                btnLinkText="Let's Talk"
                primary
              >
                Subscribe
              </BtnNewsletter>
            </div>

            <div className="h-3">
              {/* {errors?.email?.message && (
            <FormError>{errors?.email?.message}</FormError>
          )} */}
              {serverError && <FormError>{serverError}</FormError>}
              {success && <FormSuccess>{success}</FormSuccess>}
            </div>
          </div>
        </form>
      ) : (
        <div className="mx-auto mt-12 max-w-3xl text-center text-3xl font-bold uppercase text-brand">
          {success}
        </div>
      )}
    </>
  );
}
