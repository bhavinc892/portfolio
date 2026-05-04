export default function Home() {
  return (
    <div className="bg-white text-red-500 min-h-screen">
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm Bhavin Chauhan
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Frontend Engineer specializing in Performance, Payments & Scalable Systems.
          I build high-performance web apps handling real-world scale.
        </p>
        <div className="mt-8 flex gap-4">
          <button>View Projects</button>
          <button>Download Resume</button>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item}>
                <div className="rounded-2xl shadow-md">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">Project Title</h3>
                    <p className="text-gray-600 mt-2">
                      Short description of the project explaining problem and solution.
                    </p>
                    <div className="mt-4 text-sm text-gray-500">
                      React • Next.js • AWS
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Frontend</h3>
            <p className="text-gray-600">React, Next.js, Redux</p>
          </div>
          <div>
            <h3 className="font-semibold">Performance</h3>
            <p className="text-gray-600">Lazy Loading, Web Vitals</p>
          </div>
          <div>
            <h3 className="font-semibold">Payments</h3>
            <p className="text-gray-600">Stripe, Razorpay, 3DS</p>
          </div>
          <div>
            <h3 className="font-semibold">Backend</h3>
            <p className="text-gray-600">Node.js, AWS</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10">Experience</h2>

          <div className="space-y-6">
            <div className="rounded-2xl">
              <div className="p-6">
                <h3 className="font-semibold text-lg">BookMyShow</h3>
                <p className="text-gray-600 mt-2">
                  Improved performance by 50%, integrated payments, implemented CSP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Get in Touch</h2>
        <p className="text-gray-600 mt-4">
          bhavinc892@gmail.com
        </p>
        <div className="mt-6">
          <button>Contact Me</button>
        </div>
      </section>
    </div>
  );
}
