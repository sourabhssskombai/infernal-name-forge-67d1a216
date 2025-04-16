
import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { ChevronLeft, Calendar, Clock, ExternalLink } from 'lucide-react';

interface BlogPostProps {
  title: string;
  date: string;
  content: React.ReactNode;
  readingTime?: string;
  canonicalUrl: string;
}

const BlogPost = ({ title, date, content, readingTime = '8 min read', canonicalUrl }: BlogPostProps) => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Blog
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        
        <div className="flex items-center gap-4 text-gray-600 text-sm">
          <span className="inline-flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </span>
          <span className="inline-flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {readingTime}
          </span>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="prose prose-lg max-w-none">
        {content}
      </div>

      <Separator className="my-8" />

      <div className="bg-gray-50 p-6 rounded-lg mt-8">
        <h2 className="text-xl font-semibold mb-3">Generate Your Own Tiefling Name</h2>
        <p className="text-gray-600 mb-4">
          Ready to create a unique name for your Tiefling character? Try our Tiefling Name Generator!
        </p>
        <Button 
          asChild
          className="bg-primary hover:bg-primary/90 text-white"
        >
          <Link to="/">Generate Tiefling Name</Link>
        </Button>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <p>
          Canonical URL:{' '}
          <a 
            href={canonicalUrl}
            className="text-primary hover:text-primary/80 inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {canonicalUrl}
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </p>
      </div>
    </article>
  );
};

export default BlogPost;
