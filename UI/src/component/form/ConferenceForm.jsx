import React, { useState } from 'react';

const ConferenceForm = () => {
  const [isReviewing, setIsReviewing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', age: '', gender: '', address: '',
    phone: '', email: '', parish: '', shirtSize: '', dietaryRestrictions: '',
    sponsorSouvenir: '', bookedHotel: '', needsTransport: '',
    flightNumber: '', arrivalDate: '', arrivalTime: '', arrivalPeriod: 'AM',
    departureDate: '', departureTime: '', departurePeriod: 'AM',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReview = (e) => {
    e.preventDefault();
    setIsReviewing(true);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Submitted Successfully!");
    console.log("Final Registration Data:", formData);
  };

  const labelClass = "block text-base font-bold text-gray-700 mb-1";
  const inputClass = "w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5 text-base border bg-white";
  const radioLabel = "flex items-center space-x-2 text-base cursor-pointer";

  // Helper component for the review summary rows
  const ReviewRow = ({ label, value }) => (
    <div className="flex justify-between border-b py-2 text-sm md:text-base">
      <span className="font-bold text-gray-600">{label}:</span>
      <span className="text-gray-900 font-medium">{value || 'N/A'}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg border border-gray-200">
        
        {/* Header */}
        <div className="bg-blue-800 p-6 text-center rounded-t-lg">
          <h1 className="text-2xl font-bold text-white uppercase tracking-wide">
            {isReviewing ? "Review Registration" : "MTVEA National Conference Registration"}
          </h1>
        </div>

        {!isReviewing ? (
          /* --- EDITING MODE --- */
          <form onSubmit={handleReview} className="p-8 space-y-8">
            
            {/* 1. Personal Info */}
            <section>
              <h2 className="text-xl font-bold text-blue-800 border-b pb-2 mb-5">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div><label className={labelClass}>First Name *</label><input required name="firstName" value={formData.firstName} onChange={handleChange} className={inputClass} /></div>
                <div><label className={labelClass}>Last Name *</label><input required name="lastName" value={formData.lastName} onChange={handleChange} className={inputClass} /></div>
                <div><label className={labelClass}>Age *</label><input required type="number" name="age" value={formData.age} onChange={handleChange} className={inputClass} /></div>
                <div>
                  <label className={labelClass}>Gender *</label>
                  <select required name="gender" value={formData.gender} onChange={handleChange} className={inputClass}>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="md:col-span-2"><label className={labelClass}>Address *</label><input required name="address" value={formData.address} onChange={handleChange} className={inputClass} /></div>
                <div><label className={labelClass}>Phone Number *</label><input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} /></div>
                <div><label className={labelClass}>Email Address *</label><input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} /></div>
                <div className="md:col-span-2"><label className={labelClass}>Parish Name *</label><input required name="parish" value={formData.parish} onChange={handleChange} className={inputClass} /></div>
              </div>
            </section>

            {/* 2. Preferences */}
            <section>
              <h2 className="text-xl font-bold text-blue-800 border-b pb-2 mb-5">Conference Preferences</h2>
              <div className="space-y-5">
                <div>
                  <label className={labelClass}>Shirt Size *</label>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {['Adult S', 'Adult M', 'Adult L', 'Adult XL', 'Adult XXL', 'Youth S', 'Youth M'].map(size => (
                      <label key={size} className={radioLabel}>
                        <input type="radio" name="shirtSize" value={size} checked={formData.shirtSize === size} onChange={handleChange} className="w-4 h-4 text-blue-600" required />
                        <span>{size}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Dietary Restrictions (If none put N/A)</label>
                  <input name="dietaryRestrictions" value={formData.dietaryRestrictions} placeholder="e.g. None" onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Sponsor a souvenir page?</label>
                  <div className="flex space-x-6 mt-1">
                    {['Yes', 'No'].map(opt => (
                      <label key={opt} className={radioLabel}>
                        <input type="radio" name="sponsorSouvenir" value={opt} checked={formData.sponsorSouvenir === opt} onChange={handleChange} className="w-4 h-4" />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Logistics (All fields included) */}
            <section>
              <h2 className="text-xl font-bold text-blue-800 border-b pb-2 mb-5">Accommodations + Transport</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className={labelClass}>Hotel booked?</label>
                  <div className="flex space-x-4 mt-1">
                    {['Yes', 'No'].map(opt => (
                      <label key={opt} className={radioLabel}>
                        <input type="radio" name="bookedHotel" value={opt} checked={formData.bookedHotel === opt} onChange={handleChange} className="w-4 h-4" />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Need transport to Airport?</label>
                  <div className="flex space-x-4 mt-1">
                    {['Yes', 'No'].map(opt => (
                      <label key={opt} className={radioLabel}>
                        <input type="radio" name="needsTransport" value={opt} checked={formData.needsTransport === opt} onChange={handleChange} className="w-4 h-4" />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {formData.needsTransport === 'Yes' && (
                <div className="p-5 bg-blue-50 rounded-lg border border-blue-100 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className={labelClass}>Flight Number *</label>
                    <input required name="flightNumber" value={formData.flightNumber} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Arrival Date *</label>
                    <input required type="date" name="arrivalDate" value={formData.arrivalDate} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Time of Arrival *</label>
                    <div className="flex">
                      <input required type="text" placeholder="HH:MM" name="arrivalTime" value={formData.arrivalTime} onChange={handleChange} className="w-full rounded-l-md border-gray-300 p-2 border" />
                      <select name="arrivalPeriod" value={formData.arrivalPeriod} onChange={handleChange} className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-md px-2 font-bold">
                        <option>AM</option><option>PM</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Departure Date *</label>
                    <input required type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Time of Departure *</label>
                    <div className="flex">
                      <input required type="text" placeholder="HH:MM" name="departureTime" value={formData.departureTime} onChange={handleChange} className="w-full rounded-l-md border-gray-300 p-2 border" />
                      <select name="departurePeriod" value={formData.departurePeriod} onChange={handleChange} className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-md px-2 font-bold">
                        <option>AM</option><option>PM</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* 4. Payment */}
            <section>
              <h2 className="text-xl font-bold text-blue-800 border-b pb-2 mb-5">Payment Method</h2>
              <div className="flex flex-col sm:flex-row gap-6">
                {['Online', 'During Participation'].map(method => (
                  <label key={method} className={radioLabel}>
                    <input required type="radio" name="paymentMethod" value={method} checked={formData.paymentMethod === method} onChange={handleChange} className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-lg">{method}</span>
                  </label>
                ))}
              </div>
            </section>

            <button type="submit" className="w-full bg-blue-800 text-white font-bold py-4 rounded-md hover:bg-blue-900 transition shadow-lg text-xl uppercase">
              Review Information
            </button>
          </form>
        ) : (
          /* --- REVIEW MODE (Cross-checked Summary) --- */
          <div className="p-8 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-blue-800 border-b pb-2 mb-3">Personal & Contact</h3>
              <ReviewRow label="Full Name" value={`${formData.firstName} ${formData.lastName}`} />
              <ReviewRow label="Age / Gender" value={`${formData.age} / ${formData.gender}`} />
              <ReviewRow label="Email" value={formData.email} />
              <ReviewRow label="Phone" value={formData.phone} />
              <ReviewRow label="Address" value={formData.address} />
              <ReviewRow label="Parish" value={formData.parish} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-800 border-b pb-2 mb-3">Preferences</h3>
              <ReviewRow label="Shirt Size" value={formData.shirtSize} />
              <ReviewRow label="Dietary Restrictions" value={formData.dietaryRestrictions} />
              <ReviewRow label="Sponsor Souvenir" value={formData.sponsorSouvenir} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-800 border-b pb-2 mb-3">Logistics & Flight Info</h3>
              <ReviewRow label="Hotel Booked" value={formData.bookedHotel} />
              <ReviewRow label="Needs Transport" value={formData.needsTransport} />
              {formData.needsTransport === 'Yes' && (
                <div className="mt-2 bg-gray-50 p-4 rounded-md">
                  <ReviewRow label="Flight Number" value={formData.flightNumber} />
                  <ReviewRow label="Arrival" value={`${formData.arrivalDate} at ${formData.arrivalTime} ${formData.arrivalPeriod}`} />
                  <ReviewRow label="Departure" value={`${formData.departureDate} at ${formData.departureTime} ${formData.departurePeriod}`} />
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-800 border-b pb-2 mb-3">Final Selection</h3>
              <ReviewRow label="Payment Method" value={formData.paymentMethod} />
            </div>

            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <button onClick={() => setIsReviewing(false)} className="flex-1 bg-gray-200 text-gray-800 font-bold py-4 rounded-md hover:bg-gray-300 transition text-lg">
                Go Back & Edit
              </button>
              <button onClick={handleSubmit} className="flex-1 bg-green-600 text-white font-bold py-4 rounded-md hover:bg-green-700 transition shadow-md text-lg">
                Confirm & Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConferenceForm;