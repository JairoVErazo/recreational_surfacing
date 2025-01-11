import Navbar from "../../componets/NavBar";
import Footer from "../../componets/Footer";

export default function ClientsPage() {
  return (
    <div>
      <Navbar />

      {/* Sección 1 */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center mt-24">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">
            Recreational Surfacing INC Clients
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            As the premier provider of safety playground and recreational
            surfacing solutions in the United States...
          </p>
        </div>
      </section>

      {/* Sección 2 */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
            <img
              src="/img/administrators.png"
              alt="For School Administrators"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-black mb-2">
              For School Administrators...
            </h3>
            <p className="text-gray-700">
              With a rich history of installing thousands of playground...
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
            <img
              src="/img/architects.png"
              alt="For Architects & Planners"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-black mb-2">
              For Architects & Planners
            </h3>
            <p className="text-gray-700">
              Recreational Surfacing INC is a trusted partner to architects...
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
            <img
              src="/img/developers.png"
              alt="For Developers"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-black mb-2">
              For Developers
            </h3>
            <p className="text-gray-700">
              Recreational Surfacing INC is a trusted partner to developers...
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
