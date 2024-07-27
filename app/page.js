import Image from "next/image";
import profilePic from "../public/profile.jpg"; // Assuming you have an image in the public directory

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <header className="max-w-5xl bg-white w-full p-4 shadow-md flex justify-between items-center mx-auto">
        <h1 className="text-xl font-bold">Robin</h1>
        <nav className="space-x-4">
          <a href="/" className="text-blue-500 hover:underline">Home</a>
          <a href="/resume" className="text-blue-500 hover:underline">Resume</a>
          <a href="/contact" className="text-blue-500 hover:underline">Contact</a>
        </nav>
      </header>
      
      <div className="flex flex-col items-center p-12 pt-24">
        <div className="max-w-2xl w-full text-center bg-white p-8 rounded-lg shadow-lg">

          {/* Profile Image */}
          <div className="mb-4">
            <Image
              src={profilePic}
              alt="Profile Picture"
              className="rounded-full mx-auto"
              width={150}
              height={150}
            />
          </div>

          {/* Name */}
          <h2 className="text-2xl font-bold mb-2">Robin Cui</h2>

          {/* Title */}
          <p className="text-gray-600 mb-4">CTO & Full-stack Developer</p>

          {/* Summary */}
          <p className="mb-4">
            Robin, a seasoned CTO & Full-stack developer with over 18 years in the IT industry, has honed expertise in building and managing high-performing development teams. With extensive experience, Robin has a comprehensive understanding of company operations, enabling effective collaboration with team members, colleagues, and superiors.
          </p>

          {/* Social links */}
          <div className="flex space-x-4 justify-center">
            <a href="https://www.linkedin.com/in/robincui" target="_blank" className="text-blue-400 hover:underline">
              LinkedIn
            </a>
            <a href="https://github.com/cuihonglei" target="_blank" className="text-blue-400 hover:underline">
              GitHub
            </a>
            <a href="https://www.upwork.com/freelancers/honglei" target="_blank" className="text-blue-400 hover:underline">
              Upwork
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
