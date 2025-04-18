
import Layout from '@/components/layout/Layout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 'tiefling-naming-conventions',
    title: 'Tiefling Naming Conventions in D&D 5e',
    excerpt: 'Explore the various naming traditions and conventions for Tieflings across different D&D campaign settings.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tiefling-subrace-guide',
    title: 'The Complete Guide to Tiefling Subraces',
    excerpt: 'From Asmodeus to Zariel lineages - understanding the different tiefling subraces and their unique traits.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'roleplaying-tieflings',
    title: 'Roleplaying a Tiefling: Embracing the Outsider',
    excerpt: 'Tips and storytelling advice for bringing your tiefling character to life at the gaming table.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'famous-tieflings',
    title: 'Famous Tieflings in D&D Lore and Literature',
    excerpt: 'From Mollymauk Tealeaf to Farideh - exploring the most iconic tiefling characters from novels and actual play shows.',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tiefling-class-combos',
    title: 'Best Class Options for Tiefling Characters',
    excerpt: 'Analyzing the mechanical and thematic synergies between tiefling racial traits and various class options.',
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tiefling-origins',
    title: 'The Origin of Tieflings: A Historical Perspective',
    excerpt: 'Tracing the evolution of tieflings from their introduction in Planescape to their current form in 5th edition.',
    imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80'
  }
];

const BlogPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>D&D Tiefling Character Building Resources & Guides | Blog</title>
        <meta name="description" content="Explore comprehensive guides on Tiefling character creation, naming conventions, roleplaying tips, and official D&D lore. Expert insights and practical advice for your next character." />
        <link rel="canonical" href="https://dndtieflingnamegenerator.com/blog" />
      </Helmet>
      
      <div className="bg-gradient-to-b from-infernal-950 to-infernal-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-gothic mb-6">Tiefling Articles & Resources</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Explore our collection of articles on Tiefling lore, character building, and roleplaying advice
          </p>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="relative bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 group transition-transform hover:shadow-xl hover:-translate-y-1"
              >
                <div className="h-48 w-full">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Remove broken overlay */}
                <div className="p-6">
                  <h2 className="text-xl font-gothic text-infernal-800 mb-3">{post.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="story-link text-infernal-700 hover:text-infernal-900 inline-flex items-center gap-1 font-medium text-sm"
                  >
                    Read More 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-6">
              More articles coming soon! Check back regularly for updates.
            </p>
            <Button className="bg-infernal-700 hover:bg-infernal-800 text-white">
              <Link to="/" className="inline-flex items-center gap-2">
                Back to Name Generator
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
