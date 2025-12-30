import DepthContainer from "@/components/DepthContainer";

const Certification = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24 bg-canvas">
      <div className="max-w-4xl w-full">
        <DepthContainer depth="engraved" className="p-8 md:p-12 text-center">
          <h1 className="font-heading text-3xl md:text-5xl mb-4 text-text-highlight">
            Certification
          </h1>
          <p className="text-text-secondary text-base md:text-lg">
            We provide internationally recognized certification for all mineral exports, ensuring
            compliance with LME, GIA, and conflict‑free standards. Every shipment is verified and
            documented for transparency and trust.
          </p>
        </DepthContainer>
      </div>
    </section>
  );
};

export default Certification;
