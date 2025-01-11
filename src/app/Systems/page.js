"use client";

import React, { useState } from "react";
import Navbar from "../../componets/NavBar";
import Footer from "../../componets/Footer";

export default function SystemsPage() {
  const [activeCategory, setActiveCategory] = useState("poured-in-place");

  const renderCategoryContent = () => {
    switch (activeCategory) {
      case "poured-in-place":
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              POURED-IN-PLACE RUBBER SAFETY SURFACING
            </h2>
            <p className="text-gray-700 mb-4">
              Poured-In-Place safety surfacing has become the safety surfacing of
              choice for many of our clients due to the design flexibility options,
              seamless installation, and low maintenance requirements. The
              fabrication on-site provides many options, shapes, and thicknesses
              for almost any application. The material can be applied to slopes as
              steep as 30 degrees, which makes it perfect for mounds, hills, and
              other elevation changes.
            </p>
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Poured-in-Place Benefits
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Meets all playground fall heights requirements</li>
              <li>
                Seamless, UV resistant, slip resistant, drains quickly & easy to
                maintain
              </li>
              <li>Custom designs & colors</li>
              <li>ASTM & ADA approved</li>
              <li>
                Poured-in-Place safety surface can be installed both indoor and
                outdoor
              </li>
              <li>Proven durability</li>
              <li>
                Materials are finest TPV granules and 100% polyurethane binder
              </li>
              <li>7-year industry-best Warranty</li>
            </ul>
            <h3 className="text-lg font-bold text-blue-900 mb-4">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <img
                src="/img/cat1.jpg"
                alt="Gallery Image 1"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/img/cat2.jpg"
                alt="Gallery Image 2"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/img/cat3.jpg"
                alt="Gallery Image 3"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/img/cat4.jpg"
                alt="Gallery Image 4"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/img/cat5.jpg"
                alt="Gallery Image 5"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/img/cat6.jpg"
                alt="Gallery Image 6"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        );
      case "artificial-turf":
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              Synthetic Turf
            </h2>
            <p className="text-gray-700">
              Artificial turf is a durable and low-maintenance safety surfacing
              option that mimics the appearance of natural grass while providing
              the necessary safety features for playgrounds and sports areas.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4 mb-4">
              <li>Highly durable and weather-resistant</li>
              <li>Available in multiple colors and designs</li>
              <li>Requires minimal maintenance</li>
              <li>Safe and comfortable for children and athletes</li>
            </ul>
            <h3 className="text-lg font-bold text-blue-900 mb-4">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <img
                src="/img/turf1.jpg"
                alt="Synthetic Turf 1"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/img/turf2.jpg"
                alt="Synthetic Turf 2"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/img/turf3.jpg"
                alt="Synthetic Turf 3"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/img/turf4.jpg"
                alt="Synthetic Turf 4"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/img/turf5.jpg"
                alt="Synthetic Turf 5"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/img/turf6.jpg"
                alt="Synthetic Turf 6"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        );
      case "bonded-rubber-mulch":
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              Bonded Rubber Mulch
            </h2>
            <p className="text-gray-700">
              Bonded rubber mulch offers a natural look and excellent shock
              absorption, making it a popular choice for playgrounds and
              landscaped areas.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4 mb-4">
              <li>Eco-friendly and made from recycled materials</li>
              <li>Low maintenance and long-lasting</li>
              <li>Provides superior cushioning and safety</li>
              <li>Natural aesthetic for outdoor environments</li>
            </ul>
            <h3 className="text-lg font-bold text-blue-900 mb-4">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <img
                src="/img/mulch1.jpg"
                alt="Rubber Mulch 1"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/img/mulch2.jpg"
                alt="Rubber Mulch 2"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/img/mulch3.jpg"
                alt="Rubber Mulch 3"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/img/mulch4.jpg"
                alt="Rubber Mulch 4"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/img/mulch5.jpg"
                alt="Rubber Mulch 5"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/img/mulch6.jpg"
                alt="Rubber Mulch 6"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        );
      case "critical-fall-heights":
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              Equipment Installation
            </h2>
            <p className="text-gray-700 mb-4">
              Recreational Surfacing Inc. specializes in the professional
              installation of equipment for playgrounds, fitness areas, and
              indoor/outdoor recreational spaces. Our team ensures the proper
              and safe setup of all equipment and high-quality surfacing to meet
              industry standards and provide a secure environment for users of
              all ages.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Professional installation by experienced technicians</li>
              <li>Compliant with safety standards and regulations</li>
              <li>ADA (American Disability Association) compliant</li>
              <li>Customizable designs for unique spaces</li>
              <li>End-to-end service, from design to installation</li>
            </ul>
            <h3 className="text-lg font-bold text-blue-900 mb-4">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <img
                src="/img/equi1.webp"
                alt="Equipment Installation 1"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/img/equi2.jpg"
                alt="Equipment Installation 2"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/img/equi3.jpg"
                alt="Equipment Installation 3"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/img/equi4.jpg"
                alt="Equipment Installation 4"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/img/equi5.jpg"
                alt="Equipment Installation 5"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/img/equi6.jpg"
                alt="Equipment Installation 6"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />

      <section className="bg-gray-50 pt-36 pb-12">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-orange-600 mb-4">
              Safety Playground Surfacing
            </h1>
            <p className="text-gray-700 mb-4">
              One of the most important things that you can do when designing
              your playground is to provide safety surfacing. While proper
              safety surfacing will not prevent all injuries, it will greatly
              reduce the likelihood of life-threatening head injuries.
            </p>
          </div>
          <div className="lg:w-1/2 text-center">
            <img
              src="/img/img2.jpg"
              alt="Safety Playground"
              className="rounded-lg shadow-lg ml-6"
            />
          </div>
        </div>
      </section>

      <section className="bg-white shadow-md sticky top-16 z-40">
        <div className="container mx-auto px-6 flex justify-center space-x-6 py-4">
          <button
            className={`text-lg font-medium ${
              activeCategory === "poured-in-place"
                ? "text-orange-600"
                : "text-gray-700"
            } hover:text-orange-600 transition`}
            onClick={() => setActiveCategory("poured-in-place")}
          >
            Poured-In-Place
          </button>
          <button
            className={`text-lg font-medium ${
              activeCategory === "artificial-turf"
                ? "text-orange-600"
                : "text-gray-700"
            } hover:text-orange-600 transition`}
            onClick={() => setActiveCategory("artificial-turf")}
          >
            Synthetic Turf
          </button>
          <button
            className={`text-lg font-medium ${
              activeCategory === "bonded-rubber-mulch"
                ? "text-orange-600"
                : "text-gray-700"
            } hover:text-orange-600 transition`}
            onClick={() => setActiveCategory("bonded-rubber-mulch")}
          >
            Bonded Rubber Mulch
          </button>
          <button
            className={`text-lg font-medium ${
              activeCategory === "critical-fall-heights"
                ? "text-orange-600"
                : "text-gray-700"
            } hover:text-orange-600 transition`}
            onClick={() => setActiveCategory("critical-fall-heights")}
          >
            Equipment Installation
          </button>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">{renderCategoryContent()}</div>
      </section>

      <Footer />
    </div>
  );
}
