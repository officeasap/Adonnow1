import DepthContainer from "@/components/DepthContainer";

const Logistics = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24 bg-canvas">
      <div className="max-w-4xl w-full">
        <DepthContainer depth="engraved" className="p-8 md:p-12 text-center">
          <h1 className="font-heading text-3xl md:text-5xl mb-4 text-text-highlight">
            Logistics
          </h1>
          <p className="text-text-secondary text-base md:text-lg">
            Our logistics division ensures secure, compliant, and efficient transport of minerals
            from source to global markets. We manage road, rail, and port operations with full
            certification and documentation.
          </p>
        </DepthContainer>
      </div>
    </section>
  );
};

export default Logistics;
