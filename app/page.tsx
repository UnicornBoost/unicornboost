import FAQSection from "@/components/faq-section";
import PricingCard from "@/components/pricing-card";
import ServiceSection from "@/components/service-section";
import ServiceSectionTwo from "@/components/service-section-two";
import { LucideBadgeCheck } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="flex flex-col items-center py-16 md:w-4/5 md:px-0 px-4 mx-auto">
        <div className="flex flex-col md:gap-6 gap-3 items-center justify-center">
          <h1 className="md:text-6xl text-2xl font-semibold md:text-left text-center">
            Elevate your business with
          </h1>
          <div className="space-y-4 md:text-left text-center">
            <h3 className="md:text-2xl text-base">
              Software Development as a service (SDaaS)
            </h3>
            <h3 className="md:text-2xl text-base">
              AI/ML Development as a service (AIDaaS)
            </h3>
            <h3 className="md:text-2xl text-base">
              Customer Support as a service (CSaaS)
            </h3>
          </div>
        </div>
        <p className="md:w-3/4 mx-auto md:px-0 px-4 text-center md:mt-20 mt-10 md:text-base text-xs">
          At Unicorn Boost we provide software system developement, AI/ ML
          system development and customer support as a Service to help startups
          and growing businesses to stand out in a crowded market
        </p>
      </header>
      <section
        id="service"
        className="md:py-16 pb-16 space-y-8 md:w-4/5 px-4 md:px-0 mx-auto"
      >
        <h4 className="font-semibold text-center ">
          Choose one or more plan(s)
        </h4>
        <div className="grid md:grid-cols-3 grid-cols-1 place-items-center gap-4 md:gap-0">
          <div className="bg-black/60 p-4 rounded flex flex-col gap-4 md:w-[300px]">
            <h3 className="md:text-xl">Software Development as a service</h3>
            <a
              href="#"
              className="bg-green-500 text-black px-4 py-2 text-center text-xs md:text-base rounded font-medium"
            >
              Subscribe
            </a>
          </div>
          <div className="bg-black/60 p-4 rounded flex flex-col gap-4 md:w-[300px]">
            <h3 className="md:text-xl">AI/ML Development as a service</h3>
            <a
              href="#"
              className="bg-green-500 text-black px-4 py-2 text-center rounded font-medium text-xs md:text-base"
            >
              Subscribe
            </a>
          </div>
          <div className="bg-black/60 p-4 rounded flex flex-col gap-4 md:w-[300px]">
            <h3 className="md:text-xl">Customer Support as a service</h3>
            <a
              href="#"
              className="bg-green-500 text-black px-4 py-2 text-center rounded font-medium text-xs md:text-base"
            >
              Subscribe
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center pt-4">
          <a
            href="#"
            className="bg-green-500 text-black md:text-lg text-sm px-8 py-2 text-center rounded-full font-medium"
          >
            Book a call
          </a>
        </div>
      </section>
      <section className="bg-white text-black py-16">
        <div className="md:w-4/5 md:px-0 px-4 md:text-base text-sm mx-auto space-y-4">
          <p>
            Our subscription product UnicornBoost allows you access to immense
            software development, ML systems development, customer support and
            UI/UX development services replacing unreliable freelancers and
            expensive agencies for one flat monthly fee. We specialise in speed
            of delivery and excel when working{" "}
            <strong>
              with our clients in an async nature.The annual cost of a full-time
              senior developer, ML engineer, customer support manager is twice
              or more than twice our subscription based prices, that&apos;s not
              including benefits!
            </strong>
          </p>
          <p className="text-green-800 font-medium">
            You may not always have enough work to keep them busy and you
            can&apos;t easily stop paying them, not only is UnicornBoost cheaper
            over a 12 month period but you can cancel at any time!
          </p>
        </div>
      </section>
      <ServiceSection />
      <section className="bg-white text-black py-16">
        <div className="md:w-4/5 md:px-0 px-4 mx-auto md:space-y-16 space-y-12">
          <div className="bg-green-200 p-16 rounded space-y-4">
            <h3 className="md:text-xl text-sm font-medium text-center">
              The unlimited software development subscription has revolutionized
              our workflow by providing extra aid to our team, allowing us to
              seamlessly materialize our UIs.
            </h3>
            <div className="text-center text-xs md:text-base">
              <p>Product Lead, Augustine Kan</p>
              <p className="text-xs">Glovo, after using our SDaaS</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="font-medium md:text-lg text-sm text-center">
              Our team has worked with the best companies and startups
            </p>
            <div className="flex md:flex-row flex-col justify-center items-center">
              <Image
                src="/images/glovo.png"
                alt="glovo"
                width={150}
                height={150}
                objectFit="cover"
                objectPosition="center"
              />
              <Image
                src="/images/ecobank.png"
                alt="glovo"
                width={200}
                height={200}
                objectFit="cover"
                objectPosition="center"
              />
              <Image
                src="/images/lernexe.png"
                alt="glovo"
                width={100}
                height={100}
                objectFit="cover"
                objectPosition="center"
              />
              <Image
                src="/images/cienet.png"
                alt="glovo"
                width={80}
                height={80}
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
      </section>
      <ServiceSectionTwo />
      <section className="bg-white text-black py-16">
        <div className="md:w-4/5 px-4 md:px-0 mx-auto space-y-16">
          <h3 className="font-semibold text-center text-lg">
            How does it work
          </h3>
          <h2 className="md:text-2xl text-lg font-bold text-center">
            Unlimited projects, one fixed monthly rate
          </h2>
          <div className="flex md:flex-row flex-col items-center gap-16">
            <div className="space-y-4 flex-1">
              <div>
                <h4 className="font-medium text-sm md:text-base">
                  Request unlimited design through Email, Jira, Stork AI etc
                </h4>
                <p className="md:text-base text-sm">
                  Subscribe to a plan and gain access to an unlimited software &
                  AI development backlog, allowing you to explore countless
                  ideas and projects.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-sm md:text-base">
                  Pick an active task
                </h4>
                <p className="md:text-base text-sm">
                  The active task is our priority and will be addressed before
                  other tasks. You have the flexibility to choose which task you
                  want us to focus on actively.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-sm md:text-base">
                  Recieve completed design within 24-36 hours
                </h4>
                <p className="md:text-base text-sm">
                  Experience fast and efficient design delivery, start receiving
                  one task at a time within a swift 24 to 36 hours.
                </p>
              </div>
            </div>
            <div className="md:w-[40%] flex items-center justify-center">
              <Image
                src="/images/bulk-mail.svg"
                alt="bulk mail"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="plans" className="py-16 w-4/5 mx-auto space-y-16">
        <div className="flex justify-center items-center">
          <h2 className="text-lg bg-white px-8 py-2 rounded-full text-black text-center">
            Plans
          </h2>
        </div>
        <div className="space-y-8">
          <h3 className="text-sm md:text-base">
            Software Development <br />
            as a service
          </h3>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 place-items-center">
            <PricingCard
              title="Devcinch Basic"
              message="Supercharge your software development with our Value plan! Our value plan can get you input from a developer right away!"
              pricing="459"
              href="#"
              days="Minimum 2 Day(s) Dev /month"
            />
            <PricingCard
              title="Devcinch Standard"
              message="Supercharge your software development with our Value plan! Our value plan can get you input from a developer right away!"
              pricing="959"
              href="#"
              planInfo="All from Basic"
              days="Minimum 6 Day(s) Dev /month"
            />
            <PricingCard
              title="Devcinch Plus"
              message="Supercharge your software development with our Standard plan! Our most popular Standard plan is like having your own senior engineer and UI/UX developer."
              pricing="4,599"
              href="#"
              planInfo="All from Basic"
              days="Minimum 14 Day(s) Dev /month"
              popular={true}
            />
          </div>
        </div>
        <div className="space-y-8">
          <h3 className="text-sm md:text-base">
            AI/ML Development <br />
            as a Service.
          </h3>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 place-items-center">
            <PricingCard
              title="Basic"
              message="
              Supercharge your software development with our Value plan! Our value plan can get you data analyst right away!"
              pricing="659"
              href="#"
              days="Minimum 3 Day(s) Dev /month"
              additionalInfo="Includes data analysis, BI analysis works only"
            />
            <PricingCard
              title="Standard"
              message="Supercharge your software development with our Basic plan! Our value plan can get you data analyst, data scientist right away!"
              pricing="1,159"
              href="#"
              planInfo="All from Basic"
              days="Minimum 7 Day(s) Dev /month"
              additionalInfo="Also data science  and data engineering works"
            />
            <PricingCard
              title="Plus"
              message="Supercharge your ML systems development with our Plus plan! Our most popular Standard plan is like having your own senior AI and data team"
              pricing="5,599"
              href="#"
              planInfo="All from Basic"
              days="Minimum 20 Day(s) Dev /month"
              popular={true}
              additionalInfo="From data analysis to LLM to Z, we've got all your Data needs covered."
            />
          </div>
        </div>
        <div className="space-y-8">
          <h3 className="text-sm md:text-base">
            Customer Support <br />
            as a Service.
          </h3>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 place-items-center">
            <PricingCard
              title="Basic"
              message="Supercharge your support systems with our Basic plan! Our value plan can get you input from a developer right away!"
              pricing="259"
              href="#"
              planInfo="24/7 live chat support"
              days="20 tickets per month"
              social="5 phone calls per month"
            />
            <PricingCard
              title="Standard"
              message="Supercharge your support systems with our Basic plan! Our value plan can get you input from a developer right away!"
              pricing="559"
              href="#"
              planInfo="24/7 live chat support"
              days="Unlimited tickets per month"
              social="50 phone calls per month"
            />
            <PricingCard
              title="Plus"
              message="Supercharge your support systems with our Basic plan! Our value plan can get you input from a developer right away!"
              pricing="759"
              href="#"
              planInfo="Virtual Assistantship"
              days="Unlimited tickets per month"
              social="CRM and support management"
              popular={true}
              additionalInfo="24/7 live chat, phone, and video call support"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <h3 className="font-semibold text-black bg-white rounded-full px-4 py-2">
            New
          </h3>
          <div className="bg-white p-4 text-black rounded-sm flex flex-col justify-center items-center gap-6">
            <h3 className="font-semibold text-xl text-center">
              Design as a Service
            </h3>
            <div className="flex items-center gap-2">
              <p className="text-xl font-bold">$3,559</p>
              <p className="flex flex-col text-sm">
                <span>Per</span>
                <span className="-mt-2">Month</span>
              </p>
            </div>
            <div>
              <a
                href="#"
                className="bg-green-500 w-full text-black px-8 py-2 text-center rounded font-medium"
              >
                Get Started
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div>
                  <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
                </div>
                <p className="text-sm">Unlimited backlog requests</p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
                </div>
                <p className="text-sm">Two active request at a time</p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
                </div>
                <p className="text-sm">Unlimited brands</p>
              </div>

              <div className="flex items-center gap-2">
                <div>
                  <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
                </div>
                <p className="text-sm">
                  Unlimited users on Trello, Stork Ai or Slack
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
                </div>
                <p className="text-sm">40 stock photos from shutterstock</p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <LucideBadgeCheck size={18} fill="#00DD80" color="white" />
                </div>
                <p className="text-sm">
                  Easy credit-card payments • Pause or cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQSection />
      <section className="bg-white text-black py-16">
        <div className="w-4/5 mx-auto md:space-y-16 space-y-8">
          <h3 className="font-semibold text-center text-lg">
            Tools and languages
          </h3>
          <div className="w-full md:h-[400px] h-[200px] bg-[url(/images/tools.png)] bg-no-repeat bg-contain bg-center"></div>
        </div>
      </section>
      <section className="py-16 space-y-8 md:w-4/5 px-4 md:px-0 mx-auto">
        <div className="bg-white text-black p-8 flex flex-col justify-center items-center gap-4 rounded">
          <h2 className="md:text-3xl text-xl text-center font-bold">
            Get started in seconds
          </h2>
          <p className="text-center md:text-base text-sm">
            Get your first software from our engineers within a few days,
            hassle-free. <br />
            No need to go through proposals or sign contracts.
          </p>
          <div className="flex items-center justify-center pt-4">
            <a
              href="#"
              className="bg-green-500 text-black md:text-lg text-sm px-8 py-2 text-center rounded-full font-medium"
            >
              Book a call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
