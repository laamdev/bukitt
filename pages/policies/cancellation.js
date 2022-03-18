import Layout from '@/components/navigation/Layout';

export default function CancellationPolicyPage() {
  return (
    <Layout>
      <div className="tw-section prose prose-lg mx-auto">
        <h1 className="font-mono font-bold uppercase">
          Changes and Cancellation Policy
        </h1>

        <p>
          By making a Trip Reservation with Bukitt, you accept and agree to the
          relevant change, cancellation and no-show policy of the Trip supplier,
          and to any additional terms and conditions.
        </p>

        <p>
          The general cancellation and no-show policy of each Trip supplier is
          made available during the reservation procedure and in the
          confirmation email or ticket (if applicable).
        </p>

        <p>
          You can make a request for change or cancel your booking by email to:{' '}
          <a href="mailto:hello@bukitt.com">hello@bukitt.com</a>
        </p>

        <p>
          Note that certain rates, fees, or special offers are not eligible for
          cancellation, refund, or change. Applicable city/tourist tax may still
          be charged by the Trip Provider in the event of a no-show or charged
          cancellation.
        </p>

        <h2>General conditions</h2>

        <p>
          <strong>Changes:</strong> You can change your guest’s name, bed type,
          smoking preference, special requests, accessibility options, room
          type, and number of guests by Bukitt. Trip suppliers may impose other
          changes and/or cancellation fees. Charges vary by reservation.
        </p>
        <p>
          You agree to pay any supplier required cancellation or change fees
          that you incur. In limited cases, some properties do not permit
          changes to or cancellations of reservations after they are made. You
          agree to abide by the terms and conditions imposed with respect to
          your prepaid property reservations.
        </p>
        <p>
          <strong>No-Show:</strong> If you do not show for the first night of
          your reservation but plan to check-in for subsequent nights in the
          reservation, you must confirm the reservation with Bukitt no later
          than the original date of check-in to prevent cancellation of the
          whole booking. If you do not confirm the booking changes with Bukitt
          the whole booking may be canceled and refunds will only be due to you
          in line with the Rules and Restrictions of each particular trip
          supplier
        </p>
        <p>
          <strong>Refunds:</strong> In some cases, Bukitt could be unable to
          refund the initial reservation fee when a tour operator charges the
          above-mentioned fee and Bukitt is unable to find a new guest for a
          specific spot.
        </p>
        <p>
          Bukitt will do the best efforts for our guest to refund the total
          amount received. Note that certain rates, fees, or special offers are
          not eligible for cancellation, refund, or change. In the event that a
          supplier or specific location is unable to honor your booking, Bukitt
          will not be liable for any cost incurred due to relocation.
        </p>
        <p>
          For more information or guidance, please email:{' '}
          <a href="mailto:hello@bukitt.com">hello@bukitt.com</a>
        </p>
      </div>
    </Layout>
  );
}
