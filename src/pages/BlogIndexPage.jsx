import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../content/blogPosts';

export default function BlogIndexPage() {
  const featured = BLOG_POSTS.filter((p) => p.featured);
  const rest = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h1>Engineering blog</h1>
            <p>
              Notes on performance, architecture, accessibility, and the quiet craft of shipping software that lasts.
            </p>
          </div>
          <div className="grid grid--2">
            {featured.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-card">
                <div className="blog-card__image">
                  <span className="blog-card__image-label">{post.title.charAt(0)}</span>
                </div>
                <div className="blog-card__body">
                  <h3 className="blog-card__name">{post.title}</h3>
                  <p className="blog-card__tagline" style={{ marginTop: '8px', color: 'var(--ink-muted)', fontSize: '0.9rem' }}>{post.description}</p>
                  <p className="blog-card__meta">
                    <span style={{ fontWeight: 400, color: 'var(--ink-faint)' }}>{post.pubDate.slice(0, 4)}</span>
                    <span style={{ fontWeight: 400, color: 'var(--ink-faint)' }}>{post.readTime}</span>
                    <span className="tag tag--accent">{post.tags[0]}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
          {rest.length > 0 && (
            <div style={{ marginTop: '48px' }}>
              <h2 style={{ marginBottom: '24px' }}>More notes</h2>
              <div className="grid grid--2">
                {rest.map((post) => (
                  <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-card">
                    <div className="blog-card__image">
                      <span className="blog-card__image-label">{post.title.charAt(0)}</span>
                    </div>
                    <div className="blog-card__body">
                      <h3 className="blog-card__name">{post.title}</h3>
                      <p className="blog-card__tagline" style={{ marginTop: '8px', color: 'var(--ink-muted)', fontSize: '0.9rem' }}>{post.description}</p>
                      <p className="blog-card__meta">
                        <span style={{ fontWeight: 400, color: 'var(--ink-faint)' }}>{post.pubDate.slice(0, 4)}</span>
                        <span style={{ fontWeight: 400, color: 'var(--ink-faint)' }}>{post.readTime}</span>
                        <span className="tag">{post.tags[0]}</span>
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
