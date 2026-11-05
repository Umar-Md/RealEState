import PageHero from "@/components/common/PageHero";
export const metadata = { title: "Privacy Policy" };
export default function Privacy() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="Information about how enquiry data is handled."
      />
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8 lg:px-12">
          <p className="text-sm leading-7 text-gray-600">
            This is a launch placeholder. SSP must provide and approve its
            privacy policy, including data collected, purpose, retention,
            processors, contact details and applicable rights, before collecting
            personal information through this website.
          </p>
        </div>
      </section>
    </>
  );
}
