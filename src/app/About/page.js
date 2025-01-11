import Image from "next/image";
import Navbar from "../../componets/NavBar";
import Footer from "../../componets/Footer";

export default function AboutPage() {
  return (
    <div>
      {/* Navbar (Client Component) */}
      <Navbar />

      {/* Sección 1 */}
      <section className="bg-gray-50 py-20 mt-24">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:space-x-12 items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl font-bold text-orange-600 mb-4">
              Recreational Surfacing INC: Redefining Safe and Fun Playgrounds
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              At Recreational Surfacing INC, we stand as pioneers in the
              manufacturing and installation of rubberized playground safety
              surfacing.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our commitment to safety is paramount, and we achieve this by
              utilizing a blend of pre-consumer and post-consumer reclaimed
              material components...
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <Image
              
              alt="Playground Safety"
              className="rounded-lg shadow-lg w-4/5 lg:w-full"
            />
          </div>
        </div>
      </section>

      {/* Sección 2 */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:space-x-12 items-center">
          <div className="lg:w-1/2 flex justify-center mb-12 lg:mb-0">
            <img
              src="/public/img/core.png"
              alt="Core Values"
              className="rounded-lg shadow-lg w-4/5 lg:w-full"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-10">
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
              <li>
                <strong>Safety Paramount:</strong> Quality materials...
              </li>
              <li>
                <strong>Quality:</strong> Ensuring excellence...
              </li>
              <li>
                <strong>Communication:</strong> Transparent, clear...
              </li>
              <li>
                <strong>Team Work:</strong> Expecting teamwork...
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sección 3 */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-950 mb-10">
            Detailed Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-bold text-orange-600 mb-4">
                Diverse Applications
              </h3>
              <p className="text-gray-700">
                Poured-in-place, tile, and artificial turf systems...
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-bold text-orange-600 mb-4">
                Quality Materials and Installation
              </h3>
              <p className="text-gray-700">
                We use the best materials so our rubber play surfaces...
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-bold text-orange-600 mb-4">
                Seamless Project Management
              </h3>
              <p className="text-gray-700">
                Recreational Surfacing INC excels in project management...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4 */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
            Sustainability Matters
          </h2>
          <p className="text-lg text-gray-700 text-center mb-6">
            Recreational Surfacing INC adheres to the Consumer Product Safety...
          </p>
        </div>
      </section>

      {/* Footer (Client Component) */}
      <Footer />
    </div>
  );
}
