export default function About() {
  return (
    <main className="md:mx-6">
      <section className="py-6">
        <h1 className="text-4xl font-neuton py-4">About me</h1>
        <p>
          Here is a little more about me and what's brought me to this point...
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4">
        <div className="col-span-6 px-16">
          <p>
            Hello! I'm Graeme, a Registered Paramedic with over ten years of
            hands-on experience providing emergency medical care in both
            Australia and the United Kingdom. Recently, I made a career pivot
            and retrained as a full-stack software developer, with a particular
            focus on frontend development, design, and enhancing user
            experience. My journey is fueled by a profound interest in the
            intersection of healthcare and technology. While I still value my
            roots in emergency medicine, I'm excited to explore how software
            development can revolutionize healthcare delivery. My goal is to
            leverage technology to improve access to healthcare and make a
            tangible difference in people's lives.
          </p>
        </div>
        <div className="col-span-6 bg-gray-200"></div>
      </section>
    </main>
  );
}
