const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative z-10 flex flex-col md:flex-row-reverse items-center text-center p-8 md:p-16 md:px-20 max-w-7xl mx-auto"
      >
        <video
          src="/src/assets/hero-section-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full md:w-2/3 outline-none object-cover border-transparent border-2"
        ></video>

        <h1 className="text-3xl md:text-5xl font-bold text-textMain mt-8">
          Host your meeting with world-class amenities. Starting at{" "}
          <span className="font-bold text-secondary">₹199/-</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
