"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../componets/NavBar";
import Footer from "../../componets/Footer";

export default function SystemsPage() {
  const [activeCategory, setActiveCategory] = useState("poured-in-place");

  // Leer hash de URL para activar categoría
  useEffect(() => {
    const hash = window.location.hash; // Ej: "#poured-in-place"
    if (hash) {
      setActiveCategory(hash.replace("#", ""));
    }
  }, []);

  // Clases para imágenes con tamaño uniforme en las galerías
  const imageClasses = "w-full h-48 object-cover rounded-lg shadow-lg";

  const renderCategoryContent = () => {
    switch (activeCategory) {
      case "poured-in-place":
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              POURED-IN-PLACE RUBBER SAFETY SURFACING
            </h2>
            <p className="text-gray-700 mb-4">
              Poured-In-Place safety surfacing has become the safety surfacing
              of choice for many of our clients due to the design flexibility
              options, seamless installation, and low maintenance requirements.
              The fabrication on-site provides many options, shapes, and
              thicknesses for almost any application. The material can be
              applied to slopes as steep as 30 degrees, which makes it perfect
              for mounds, hills, and other elevation changes.
            </p>
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Poured-in-Place Benefits
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Meets all playground fall heights requirements</li>
              <li>
              Seamless, UV resistant, slip resistant, drains quickly & easy to maintain
              </li>
              <li>Custom designs & colors</li>
              <li>ASTM & ADA approved</li>
              <li>Poured-in-Place safety surface can be installed both indoor and outdoor</li>
              <li>Proven durability</li>
              <li>Materials are finest TPV granules and 100% polyurethane binder</li>
              <li>7-year industry-best Warranty</li>
            </ul>
            <h3 className="text-lg font-bold text-blue-900 mb-4">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "cat1.jpeg",
                "cat2.webp",
                "cat3.jpeg",
                "cat4.webp",
                "cat5.jpeg",
                "cat6.jpeg",
              ].map((file, i) => (
                <img
                  key={i}
                  src={`/img/${file}`}
                  alt={`Poured gallery ${i + 1}`}
                  className={imageClasses}
                />
              ))}
            </div>
          </div>
        );

      case "artificial-turf":
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              Synthetic Turf
            </h2>
            <p className="text-gray-700 mb-4">
              A playground should be a safe place for your children to run and
              play, however sooner or later your kids are going to end up on the
              ground or taking a fall when they’re playing. Artificial turf
              offers the perfect solution for playground surfacing. Whether you
              are a day care facility, community play area, public park, or
              private playground area, we have been testing our products for
              years to ensure that we produce only the best artificial turf
              surface for these applications. We have systems available that can
              meet any desired fall height rating up to 12 feet! Artificial turf
              is softer and safer than gravel, dirt, wood mulch or natural grass
              and is practically maintenance-free. You can feel confident that
              your children will have a safe play surface when you choose
              artificial turf to cover your playground. Our advanced primary
              backing allows maximum drainage and is environmentally friendly.
              Combine this with our premium fibers and industry leading turf
              technology and you get the absolute best surface on the playground
              market today. Synthetic turf systems are designed from the ground
              up for safety. With our PolyGreen padding, antimicrobial infill
              and other safety features, these systems have been used to
              successfully surface millions of square feet of commercial
              playgrounds. If you want the peace of mind of going with a proven
              system, playground turf for your backyard.
            </p>
            <h3 className="text-lg font-bold text-blue-900 mb-4">Benefits</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Padded underlayment</li>
              <li>Reduces allergic reactions</li>
              <li>Drains quickly</li>
              <li>Safer than playground mulch</li>
              <li>Eliminates ongoing maintenance</li>
              <li>Environmentally friendly</li>
            </ul>
            <h3 className="text-lg font-bold text-blue-900 mb-4">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <img
                  key={i}
                  src={`/img/turf${i}.webp`}
                  alt={`Turf gallery ${i}`}
                  className={imageClasses}
                />
              ))}
            </div>
          </div>
        );

      case "bonded-rubber-mulch":
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              Bonded Rubber Mulch
            </h2>
            <p className="text-gray-700 mb-4">
              Discover the beauty of nature and safety combined with Bonded
              Rubber Mulch safety surfacing—an innovative solution for creating
              unique trails, paths, and playground surfaces. Our one-step pour
              system offers a cost-effective, long-lasting, safe, and durable
              option for playgrounds, parks, zoos, horse walking/training
              facilities, and more. Bonded Rubber Mulch is a spectacular choice
              that seamlessly blends into natural settings while providing
              unmatched safety. Its versatility allows it to be easily combined
              with EPDM product inlays, extending design possibilities and
              enhancing the overall aesthetic appeal of any space. One of the
              key characteristics of Bonded Rubber Mulch is its ability to
              accommodate piling and sloping, creating a natural ground setting
              that deceives passersby until they step onto the surface and
              experience its anti-fatigue qualities with each step. At
              Recreational Surfacing, we take safety seriously. Our Bonded
              Rubber Mulch meets and exceeds shock-absorbing properties as
              outlined in ASTM F-1292-96 and ASTM F-1951-99. It also adheres to
              standard specifications for Impact Attenuation of Surface Systems
              under and around playground equipment. Rest assured that when you
              choose Bonded Rubber Mulch, you’re selecting a surface that not
              only enhances the aesthetics of your space but also prioritizes
              the safety and well-being of those who play and walk on it.
            </p>
            <h3 className="text-lg font-bold text-blue-900 mb-4">Data</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>One-layer system – mixed, poured, and troweled on-site</li>
              <li>Available in 7 colors (colors can be mixed)</li>
              <li>Porous system</li>
              <li>
                May be installed over Type 2 road base, concrete, or asphalt
              </li>
              <li>
                Typically used outdoors in walkways, tree wells, and landscaping
              </li>
              <li>ASTM F1292 for head impact protection</li>
              <li>ASTM F1951 for accessibility</li>
              <li>Available for our Ecore™ TRUcircularity™ Program</li>
            </ul>
            <h3 className="text-lg font-bold text-blue-900 mb-4">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {["rub1", "rub7", "rub3", "rub4", "rub5", "rub6"].map(
                (name, i) => (
                  <img
                    key={i}
                    src={`/img/${name}.webp`}
                    alt={`Rubber mulch ${i + 1}`}
                    className={imageClasses}
                  />
                )
              )}
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
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <img
                  key={i}
                  src={`/img/equi${i}${i < 3 ? ".JPG" : ".webp"}`}
                  alt={`Equipment ${i}`}
                  className={imageClasses}
                />
              ))}
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
      {/* Hero */}
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
              src="/img/principal.webp"
              alt="Safety Playground"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Nav Buttons */}
      <section className="bg-white shadow-md sticky top-16 z-40">
        <div className="container mx-auto px-6 flex justify-center space-x-6 py-4">
          {[
            { key: "poured-in-place", label: "Poured-In-Place" },
            { key: "artificial-turf", label: "Synthetic Turf" },
            { key: "bonded-rubber-mulch", label: "Bonded Rubber Mulch" },
            { key: "critical-fall-heights", label: "Equipment Installation" },
          ].map((btn) => (
            <button
              key={btn.key}
              className={`text-lg font-medium ${
                activeCategory === btn.key ? "text-orange-600" : "text-gray-700"
              } hover:text-orange-600 transition`}
              onClick={() => setActiveCategory(btn.key)}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">{renderCategoryContent()}</div>
      </section>

      <Footer />
    </div>
  );
}
