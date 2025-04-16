
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/contact/ContactForm';
import { Mail, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-infernal-950 to-infernal-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-gothic mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Have questions about our Tiefling Name Generator? We'd love to hear from you.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-infernal-50 to-white p-6 rounded-lg border border-infernal-100 shadow-sm">
                <h3 className="flex items-center gap-2 text-xl font-gothic text-infernal-800 mb-4">
                  <Mail className="h-5 w-5 text-infernal-700" />
                  Contact Information
                </h3>
                <p className="text-gray-700 mb-2">
                  The fastest way to reach us is through the contact form on this page. We typically respond within 1-2 business days.
                </p>
                <p className="text-gray-500 text-sm">
                  For privacy and security reasons, we do not display our email address publicly.
                </p>
              </div>

              <div className="bg-gradient-to-br from-infernal-50 to-white p-6 rounded-lg border border-infernal-100 shadow-sm">
                <h3 className="flex items-center gap-2 text-xl font-gothic text-infernal-800 mb-4">
                  <MapPin className="h-5 w-5 text-infernal-700" />
                  Location
                </h3>
                <p className="text-gray-700">
                  Our team works remotely across the globe, united by our passion for Dungeons & Dragons and creating tools for the role-playing community.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-infernal-50 to-white p-6 rounded-lg border border-infernal-100 shadow-sm">
                <h3 className="flex items-center gap-2 text-xl font-gothic text-infernal-800 mb-4">
                  <Clock className="h-5 w-5 text-infernal-700" />
                  Response Time
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    </div>
                    <span>General inquiries: 1-2 business days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    </div>
                    <span>Technical support: 2-3 business days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    </div>
                    <span>Partnership inquiries: 3-5 business days</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-gothic text-infernal-800 mb-4">Common Reasons to Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 mx-auto bg-infernal-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-infernal-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="text-lg font-gothic text-infernal-800 mb-2">Questions</h3>
              <p className="text-gray-600 text-sm">
                Have questions about how our generator works or suggestions for improvement?
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 mx-auto bg-infernal-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-infernal-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
                </svg>
              </div>
              <h3 className="text-lg font-gothic text-infernal-800 mb-2">Technical Issues</h3>
              <p className="text-gray-600 text-sm">
                Experiencing problems with our name generator? Let us know so we can fix it.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 mx-auto bg-infernal-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-infernal-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-gothic text-infernal-800 mb-2">Partnerships</h3>
              <p className="text-gray-600 text-sm">
                Interested in collaborating or featuring our tool on your website? We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
