import { useParams, Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { getPostBySlug, posts } from "@/data/posts";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ProgressBar } from "@/components/ui/ProgressBar";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string; level: number }[]>([]);
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getPostBySlug(slug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Find previous and next posts
  const currentIndex = posts.findIndex(p => p.slug === slug);
  const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  useEffect(() => {
    // Generate table of contents from the content
    const headings = post.content.match(/^#{2,3}\s+(.+)$/gm);
    if (headings) {
      const toc = headings.map((heading, index) => {
        const level = heading.match(/^#+/)?.[0].length || 2;
        const text = heading.replace(/^#+\s+/, '');
        const id = text.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-');
        return { id, text, level };
      });
      setTableOfContents(toc);
    }
  }, [post.content]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        // Fallback to copying URL
        navigator.clipboard.writeText(window.location.href);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // Convert markdown-like content to HTML-like JSX (simplified)
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      // Headers
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.substring(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        const text = line.substring(3);
        const id = text.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-');
        return <h2 key={index} id={id} className="text-2xl font-bold mt-8 mb-4">{text}</h2>;
      }
      if (line.startsWith('### ')) {
        const text = line.substring(4);
        const id = text.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-');
        return <h3 key={index} id={id} className="text-xl font-bold mt-6 mb-3">{text}</h3>;
      }

      // Code blocks
      if (line.startsWith('```')) {
        return null; // Simplified - would need proper code block handling
      }

      // Regular paragraphs
      if (line.trim() && !line.startsWith('-')) {
        return <p key={index} className="mb-4 leading-relaxed">{line}</p>;
      }

      // List items
      if (line.startsWith('- ')) {
        return <li key={index} className="mb-2">{line.substring(2)}</li>;
      }

      return null;
    }).filter(Boolean);
  };

  return (
    <>
      <ProgressBar />
      <div className="pt-16">
        {/* Back Button */}
        <section className="py-8 bg-background border-b border-border">
          <Container>
            <Button asChild variant="ghost" className="group">
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:translate-x-[-2px] transition-transform" />
                Back to Blog
              </Link>
            </Button>
          </Container>
        </section>

        {/* Article Header */}
        <section className="py-12 bg-gradient-surface">
          <Container size="md">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="tech">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {post.title}
              </h1>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime} min read
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleShare}
                  className="p-0 h-auto"
                >
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>

              <div className="aspect-video rounded-lg overflow-hidden shadow-hard">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.article>
          </Container>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <Container size="md">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Table of Contents */}
              {tableOfContents.length > 0 && (
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <h3 className="font-semibold mb-4">Table of Contents</h3>
                    <nav className="space-y-2">
                      {tableOfContents.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`block text-sm hover:text-primary transition-colors ${
                            item.level === 3 ? 'pl-4' : ''
                          }`}
                        >
                          {item.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              )}

              {/* Article Content */}
              <div className={`prose prose-lg max-w-none ${tableOfContents.length > 0 ? 'lg:col-span-3' : 'lg:col-span-4'}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-muted-foreground"
                >
                  {renderContent(post.content)}
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        {/* Navigation */}
        <section className="py-12 bg-surface border-t border-border">
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {previousPost ? (
                <Button asChild variant="ghost" className="group">
                  <Link to={`/blog/${previousPost.slug}`} className="flex items-center">
                    <ChevronLeft className="h-4 w-4 mr-2 group-hover:translate-x-[-2px] transition-transform" />
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">Previous Post</p>
                      <p className="font-medium line-clamp-1">{previousPost.title}</p>
                    </div>
                  </Link>
                </Button>
              ) : (
                <div />
              )}

              {nextPost && (
                <Button asChild variant="ghost" className="group">
                  <Link to={`/blog/${nextPost.slug}`} className="flex items-center">
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Next Post</p>
                      <p className="font-medium line-clamp-1">{nextPost.title}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-[2px] transition-transform" />
                  </Link>
                </Button>
              )}
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}