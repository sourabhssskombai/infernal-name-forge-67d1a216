
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <Helmet>
        <title>Page Not Found | D&D Tiefling Name Generator</title>
        <meta name="description" content="Sorry, the page you're looking for doesn't exist. Return to our Tiefling Name Generator to create unique names for your D&D characters." />
      </Helmet>

      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-gothic text-infernal-800 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
          <Button asChild className="bg-infernal-700 hover:bg-infernal-800">
            <Link to="/">Return to Tiefling Name Generator</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
