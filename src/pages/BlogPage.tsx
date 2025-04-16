
import Layout from '@/components/layout/Layout';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  // Sample blog posts
  const blogPosts = [
    {
      id: 'tiefling-naming-conventions',
      title: 'Tiefling Naming Conventions in D&D 5e',
      excerpt: 'Explore the various naming traditions and conventions for Tieflings across different D&D campaign settings.',
      date: 'April 12, 2023',
      category: 'Lore',
      imageUrl: '/blog-tiefling-names.jpg'
    },
    {
      id: 'tiefling-subrace-guide',
      title: 'The Complete Guide to Tiefling Subraces',
      excerpt: 'From Asmodeus to Zariel lineages - understanding the different tiefling subraces and their unique traits.',
      date: 'March 28, 2023',
      category: 'Character Building',
      imageUrl: '/blog-tiefling-subraces.jpg'
    },
    {
      id: 'roleplaying-tieflings',
      title: 'Roleplaying a Tiefling: Embracing the Outsider',
      excerpt: 'Tips and storytelling advice for bringing your tiefling character to life at the gaming table.',
      date: 'March 15, 2023',
      category: 'Roleplaying',
      imageUrl: '/blog-roleplaying-tieflings.jpg'
    },
    {
      id: 'famous-tieflings',
      title: 'Famous Tieflings in D&D Lore and Literature',
      excerpt: 'From Mollymauk Tealeaf to Farideh - exploring the most iconic tiefling characters from novels and actual play shows.',
      date: 'February 22, 2023',
      category: 'Lore',
      imageUrl: '/blog-famous-tieflings.jpg'
    },
    {
      id: 'tiefling-class-combos',
      title: 'Best Class Options for Tiefling Characters',
      excerpt: 'Analyzing the mechanical and thematic synergies between tiefling racial traits and various class options.',
      date: 'February 8, 2023',
      category: 'Character Building',
      imageUrl: '/blog-tiefling-classes.jpg'
    },
    {
      id: 'tiefling-origins',
      title: 'The Origin of Tieflings: A Historical Perspective',
      excerpt: 'Tracing the evolution of tieflings from their introduction in Planescape to their current form in 5th edition.',
      date: 'January 25, 2023',
      category: 'D&D History',
      imageUrl: '/blog-tiefling-origins.jpg'
    }
  ];

  // Categories for filtering (would be interactive in a real implementation)
  const categories = ['All', 'Lore', 'Character Building', 'Roleplaying', 'D&D History'];

  return (
    <Layout>
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
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm ${
                  category === 'All' 
                    ? 'bg-infernal-700 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 bg-infernal-100 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-infernal-900/20 to-infernal-950/60 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-white/70" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium text-infernal-700 px-2 py-1 bg-infernal-50 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-gothic text-infernal-800 mb-3">{post.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-infernal-700 hover:text-infernal-900 inline-flex items-center gap-1 font-medium text-sm"
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
