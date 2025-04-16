
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-infernal-950 to-infernal-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-gothic mb-4 text-center">Privacy Policy</h1>
          <p className="text-lg max-w-3xl mx-auto text-center opacity-90">
            Last Updated: April 16, 2023
          </p>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-infernal mx-auto">
            <p>
              At DnD Tiefling Name Generator, we respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2>Information We Collect</h2>
            <p>
              When you use our name generator, we may collect certain information automatically, including:
            </p>
            <ul>
              <li>Log data (such as IP address, browser type, pages visited)</li>
              <li>Device information (such as device type, operating system)</li>
              <li>Usage data (such as how you interact with our generator)</li>
            </ul>
            <p>
              If you choose to contact us via our contact form, we will collect:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Any information you provide in your message</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Provide and maintain our service</li>
              <li>Improve our website and user experience</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Monitor usage patterns and analyze trends</li>
              <li>Protect against malicious, deceptive, or fraudulent activity</li>
            </ul>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
              Cookies are files with small amounts of data that may include an anonymous unique identifier.
            </p>
            <p>
              Our website uses Google Analytics to help us understand how visitors use our site. The information collected is used to compile reports and help us improve the website. The cookies collect information in an anonymous form, including the number of visitors to the website, where visitors have come from, and the pages they visited.
            </p>
            <p>
              Our site also uses Google AdSense to serve ads. Google AdSense uses cookies to serve ads based on your visit to our site and other sites on the Internet. These cookies enable Google to display ads that may be relevant to you based on your browsing history.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              We may use third-party service providers to:
            </p>
            <ul>
              <li>Host our website</li>
              <li>Analyze site traffic and usage</li>
              <li>Serve advertisements</li>
              <li>Communicate with you</li>
            </ul>
            <p>
              These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>

            <h2>Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul>
              <li>The right to access, update, or delete your information</li>
              <li>The right to rectification (to correct information)</li>
              <li>The right to object (to processing of your information)</li>
              <li>The right to restriction (to restrict processing of your information)</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>

            <h2>Children's Privacy</h2>
            <p>
              Our service is not directed to anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through our <Link to="/contact" className="text-infernal-700 hover:text-infernal-900">Contact Page</Link>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicyPage;
