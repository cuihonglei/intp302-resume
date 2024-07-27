export default function Resume() {
  return (
    <main className="min-h-screen bg-gray-100">
      <header className="max-w-5xl bg-white w-full p-4 shadow-md flex justify-between items-center mx-auto mb-8">
        <h1 className="text-xl font-bold">{"Resume"}</h1>
        <nav className="space-x-4">
          <a href="/" className="text-blue-500 hover:underline">Home</a>
          <a href="/resume" className="text-blue-500 hover:underline">Resume</a>
          <a href="/contact" className="text-blue-500 hover:underline">Contact</a>
        </nav>
      </header>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Work Exprerience */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">CTO & Full-stack Developer</h3>
            <p className="text-gray-600">Freelance - Calgary, AB | July 2021 to Present</p>
            <p>
              Finished over 20 projects, and collaborated with people all around the world. Got the Expert-Vetted badge as one of the top 1% freelancers in the software development field. Having 100% Job Success and all 5 stars. Please check my Upwork profile for more details.
              <a href="https://www.upwork.com/freelancers/honglei" target="_blank" className="text-blue-500 hover:underline ml-2">
                Upwork Profile
              </a>
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Co-Founder & CTO</h3>
            <p className="text-gray-600">AI Design - Beijing | February 2019 to July 2021</p>
            <p>
              Researched how to use AI technology for game art design. Focused on the 3D modeling aspects, such as Modeling, UV unwrapping, Texture drawing, etc. Used skills in Deep learning, Reinforcement learning, Pytorch, Blender, etc.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">CTO</h3>
            <p className="text-gray-600">Block 12 - Beijing | May 2018 to January 2019</p>
            <p>
              Built and managed software and hardware development teams. Led Product Managers, Art Designers, Software Engineers, and Hardware Engineers in building mobile apps, web apps, and IoT devices.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Co-Founder & CTO</h3>
            <p className="text-gray-600">Red Fire - Beijing | January 2014 to April 2018</p>
            <p>
              As a CTO and Co-Founder, built and managed a game development team, then led the team developing web and mobile games. As a Game Director and Full-stack Game Developer, designed and implemented the core systems of these games.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">College diploma in Software Development</h3>
            <p className="text-gray-600">Southern Alberta Institute of Technology - Calgary, AB | January 2023 to August 2024</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">{"Bachelor's in Mechanical Engineering"}</h3>
            <p className="text-gray-600">University of Science and Technology Beijing - Beijing | September 2001 to July 2005</p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="list-disc pl-5">
            <li>Leadership</li>
            <li>Entrepreneurship</li>
            <li>Software development</li>
            <li>C++</li>
            <li>Go</li>
            <li>Python</li>
            <li>JavaScript</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
