import React, { useState } from 'react';

const ConferenceForm = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', age: '', gender: '', address: '',
    phone: '', email: '', parish: '', shirtSize: '', dietaryRestrictions: '',
    sponsorSouvenir: '', bookedHotel: '', needsTransport: '',
    flightNumber: '', arrivalDate: '', arrivalTime: '', arrivalPeriod: 'AM',
    departureDate: '', departureTime: '', departurePeriod: 'AM',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const labelClass = "block text-base font-bold text-gray-700 mb-1";
  const inputClass = "w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5 text-base border bg-white";
  const radioLabel = "flex items-center space-x-2 text-base cursor-pointer";

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg border border-gray-200">
        
        {/* Form Title */}
        <div className="bg-blue-800 p-6 text-center rounded-t-lg">
          <h1 className="text-2xl font-bold text-white uppercase tracking-wide">
            MTVEA National Conference Registration
          </h1>
        </div>

        <form className="p-8 space-y-8">
          
          {/* Section 1 — Personal Information */}
          <section>
            <h2 className="text-xl font-bold text-blue-800 border-b pb-2 mb-5">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div><label className={labelClass}>First Name *</label><input required name="firstName" onChange={handleChange} className={inputClass} /></div>
              <div><label className={labelClass}>Last Name *</label><input required name="lastName" onChange={handleChange} className={inputClass} /></div>
              <div><label className={labelClass}>Age *</label><input required type="number" name="age" onChange={handleChange} className={inputClass} /></div>
              <div>
                <label className={labelClass}>Gender *</label>
                <select required name="gender" onChange={handleChange} className={inputClass}>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="md:col-span-2"><label className={labelClass}>Address *</label><input required name="address" onChange={handleChange} className={inputClass} /></div>
              <div><label className={labelClass}>Phone Number *</label><input required type="tel" name="phone" onChange={handleChange} className={inputClass} /></div>
              <div><label className={labelClass}>Email Address *</label><input required type="email" name="email" onChange={handleChange} className={inputClass} /></div>
              <div className="md:col-span-2"><label className={labelClass}>Parish Name *</label><input required name="parish" onChange={handleChange} className={inputClass} /></div>
            </div>
          </section>

          {/* Section 2 — Preferences */}
          <section>
            <h2 className="text-xl font-bold text-blue-800 border-b pb-2 mb-5">Conference Preferences</h2>
            <div className="space-y-5">
              <div>
                <label className={labelClass}>Shirt Size *</label>
                <div className="flex flex-wrap gap-4 mt-2">
                  {['Adult S', 'Adult M', 'Adult L', 'Adult XL', 'Adult XXL', 'Youth S', 'Youth M'].map(size => (
                    <label key={size} className={radioLabel}>
                      <input type="radio" name="shirtSize" value={size} onChange={handleChange} className="w-4 h-4 text-blue-600" required />
                      <span>{size}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelClass}>Dietary Restrictions(If none put N/A)</label>
                <input name="dietaryRestrictions" placeholder="e.g. None" onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Sponsor a souvenir page?</label>
                <div className="flex space-x-6 mt-1">
                  {['Yes', 'No'].map(opt => (
                    <label key={opt} className={radioLabel}><input type="radio" name="sponsorSouvenir" value={opt} onChange={handleChange} className="w-4 h-4" /><span>{opt}</span></label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 — Logistics */}
          <section>
            <h2 className="text-xl font-bold text-blue-800 border-b pb-2 mb-5">Accommodations + Transport</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className={labelClass}>Hotel booked?</label>
                <div className="flex space-x-4 mt-1">
                  {['Yes', 'No'].map(opt => (
                    <label key={opt} className={radioLabel}><input type="radio" name="bookedHotel" value={opt} onChange={handleChange} className="w-4 h-4" /><span>{opt}</span></label>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelClass}>Need airport transport?</label>
                <div className="flex space-x-4 mt-1">
                  {['Yes', 'No'].map(opt => (
                    <label key={opt} className={radioLabel}><input type="radio" name="needsTransport" value={opt} onChange={handleChange} className="w-4 h-4" /><span>{opt}</span></label>
                  ))}
                </div>
              </div>
            </div>

            {formData.needsTransport === 'Yes' && (
              <div className="p-5 bg-blue-50 rounded-lg border border-blue-100 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className={labelClass}>Flight Number *</label>
                  <input required name="flightNumber" onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Arrival Date *</label>
                  <input required type="date" name="arrivalDate" onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Time of Arrival *</label>
                  <div className="flex">
                    <input required type="text" placeholder="HH:MM" name="arrivalTime" onChange={handleChange} className="w-full rounded-l-md border-gray-300 p-2 text-base border" />
                    <select name="arrivalPeriod" onChange={handleChange} className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-md px-2 font-bold">
                      <option>AM</option>
                      <option>PM</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Departure Date *</label>
                  <input required type="date" name="departureDate" onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Time of Departure *</label>
                  <div className="flex">
                    <input required type="text" placeholder="HH:MM" name="departureTime" onChange={handleChange} className="w-full rounded-l-md border-gray-300 p-2 text-base border" />
                    <select name="departurePeriod" onChange={handleChange} className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-md px-2 font-bold">
                      <option>AM</option>
                      <option>PM</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </section>

          <button type="submit" className="w-full bg-blue-800 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-900 transition shadow-sm text-lg">
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConferenceForm;