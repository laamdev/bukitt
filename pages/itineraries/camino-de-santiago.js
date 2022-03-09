import { IoArrowForwardOutline, IoStopwatchOutline } from 'react-icons/io5';
import { MdOutlineHiking, MdOutlineShowChart } from 'react-icons/md';

import Layout from '@/components/navigation/Layout';
import ElevationChart from '@/components/charts/ElevationChart';

import {
  stage1,
  stage2,
  stage3,
  stage4,
  stage5,
  stage6,
  stage7,
} from '@/data/camino-elevation';

export default function CaminodeSantiagoItineraryPage() {
  return (
    <>
      <section className="tw-section">
        <div className="mx-auto max-w-5xl">
          <h3 className="flex items-center gap-x-3 text-2xl font-bold">
            1. O&apos;Cebreiro
            <span>
              <IoArrowForwardOutline className="text-brand" />
            </span>
            Triacastela
          </h3>
          <p className="mt-3">
            We will start our walk in O&apos;Cebreiro, home to pallozas
            (straw-roofed houses) and the sanctuary of the Eucharistic miracle.
            O&apos;Cebreiro is the first village in Galicia, it has just over
            1,200 inhabitants and sits at 1,293 meters (4242 ft). On our way to
            Triacastela we will go through some ups and downs until we will
            reach Alto de Poio, the highest peak of the Camino in Galicia at
            4380ft with amazing views. It&apos;s all downhill from there through
            forests and the river valley. Most of the walking today is on paths
            and tracks with only a small amount on minor roads. There are lots
            of places for food and water along the way.
          </p>
        </div>

        <div className="mx-auto mt-12 grid w-full grid-cols-3 gap-x-1 divide-x-2 rounded-2xl bg-slate-100 py-3 text-center shadow-md lg:w-fit-content lg:gap-x-4 lg:text-left">
          <div className="col-span-1 flex flex-col items-center justify-center px-6 py-3 lg:flex-row lg:py-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 lg:mr-3">
              <MdOutlineHiking className="h-5 w-5 text-slate-900" />
            </div>
            <div className="mt-1 lg:mt-0">
              <h4 className="text-sm lg:text-lg">Length</h4>
              <h5 className="text-base font-bold lg:text-xl">21.8 km</h5>
            </div>
          </div>

          <div className="col-span-1 flex flex-col items-center justify-center px-6 py-3 text-center lg:flex-row lg:py-0 lg:text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 lg:mr-3">
              <MdOutlineShowChart className="h-5 w-5 text-slate-900" />
            </div>
            <div className="mt-1 lg:mt-0">
              <h4 className="text-sm lg:text-lg">Difficulty</h4>
              <h5 className="text-base font-bold lg:text-xl">Med-High</h5>
            </div>
          </div>

          <div className="col-span-1 flex flex-col items-center justify-center px-6 py-3 text-center lg:flex-row lg:py-0 lg:text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 lg:mr-3">
              <IoStopwatchOutline className="h-5 w-5 text-slate-900" />
            </div>
            <div className="mt-1 lg:mt-0">
              <h4 className="text-sm lg:text-lg">Duration</h4>
              <h5 className="text-base font-bold lg:text-xl">4h 25min</h5>
            </div>
          </div>
        </div>

        <ElevationChart data={stage1} className="mt-12 max-w-6xl" />

        <div className="mx-auto mt-6 max-w-3xl text-center">
          <p className="text-lg lg:text-2xl">
            Starts on high at O&apos;Cebreiro with many up and downs. First, you
            climb Alto de San Roque and after that, the Alto del Poio. From
            there it continues downhill until Triacastela. The slopes are not
            pronounced but they are frequent.
          </p>
        </div>
      </section>

      <section className="tw-section mx-auto max-w-5xl">
        <h3 className="flex items-center gap-x-3 text-2xl font-bold">
          2. Triacastela
          <span>
            <IoArrowForwardOutline className="text-brand" />
          </span>
          Sarria
        </h3>
        <p className="mt-3">
          We will start our walk in Triacastela. It gets its name from the three
          castles that once stood here, none of which exist today. This stage
          has two route options, the San Xil and the Samos route. Both options
          are beautifully mystical. San Xil is 7km shorter while Samos is
          flatter and quieter and leads to the Benedictine monastery, one of the
          largest and oldest Galician monastic foundations, whose origins date
          back to the sixth century.
        </p>
        <ElevationChart data={stage2} className="mt-12" />
      </section>

      <section className="tw-section mx-auto max-w-5xl">
        <h3 className="flex items-center gap-x-3 text-2xl font-bold">
          3. Sarria
          <span>
            <IoArrowForwardOutline className="text-brand" />
          </span>
          Portomarín
        </h3>
        <p className="mt-3">
          We will start our walk in Sarria. Sarria marks the last 100 km until
          Santiago. Most of today&apos;s walk will be through wooded areas and
          passing through many villages including Barbadelo, Peruscallo,
          Morgade, Ferrerios, A Pena, Mercadoiro and Vilcha. At the end of the
          journey, we will cross the Miño river into Portomarín, a riverside
          village.
        </p>
        <ElevationChart data={stage3} className="mt-12" />
      </section>

      <section className="tw-section mx-auto max-w-5xl">
        <h3 className="flex items-center gap-x-3 text-2xl font-bold">
          4. Portomarín
          <span>
            <IoArrowForwardOutline className="text-brand" />
          </span>
          Palas de Rei
        </h3>
        <p className="mt-3">
          We will start our walk in Portomarín, a town that dates back to the
          Romans. Many structures you see in Portomarín were moved block by
          block up the mountain from the old village to the current village. The
          old village was flooded in the 1960s to build the Belesar reservoir.
          This stage will take you through the region of Monterroso and Palas de
          Rei. This stage takes you mostly through paved roads and consists of a
          steady uphill climb.
        </p>
        <ElevationChart data={stage4} className="mt-12" />
      </section>

      <section className="tw-section mx-auto max-w-5xl">
        <h3 className="flex items-center gap-x-3 text-2xl font-bold">
          5. Palas de Rei
          <span>
            <IoArrowForwardOutline className="text-brand" />
          </span>
          Arzúa
        </h3>
        <p className="mt-3">
          We will start our walk in Palas de Rei. During this stage, you will
          leave the Lugo province and enter A Coruña. Today&apos;s trek will be
          long but mostly flat through wooded trails. We will pass through
          Melide, a great stop for some Galician gastronomy. In Melide the
          Primitive Way joins the French Way filling the town with incredible
          Camino energy.
        </p>
        <ElevationChart data={stage5} className="mt-12" />
      </section>

      <section className="tw-section mx-auto max-w-5xl">
        <h3 className="flex items-center gap-x-3 text-2xl font-bold">
          6. Arzúa
          <span>
            <IoArrowForwardOutline className="text-brand" />
          </span>
          O Pedrouzo
        </h3>
        <p className="mt-3">
          We will start our walk in Arzúa. This stage is short and almost flat.
          During the second half of the stage, be careful, as you will need to
          cross the main road several times. This stage takes you through quiet
          forest paths with eucalyptus groves and sleepy villages.
        </p>
        <ElevationChart data={stage6} className="mt-12" />
      </section>

      <section className="tw-section mx-auto max-w-5xl">
        <h3 className="flex items-center gap-x-3 text-2xl font-bold">
          6. O Pedrouzo
          <span>
            <IoArrowForwardOutline className="text-brand" />
          </span>
          Santiago
        </h3>
        <p className="mt-3">
          We will start our walk in O Pedrouzo. The final stage of the Camino is
          filled with energy and emotion. Santiago de Compostela awaits the
          pilgrims&apos; arrival after a 19km trajectory. Monte de Gozo is the
          first place from where you can see the spires of the Cathedral. From
          here, you descent to the city where you’ll be able to witness this
          UNESCO World Heritage Site up-close. Marvel at the architecture and
          relish the wonderful atmosphere in this cultural and spiritual mecca.
        </p>
        <ElevationChart data={stage7} className="mt-12" />
      </section>
    </>
  );
}
