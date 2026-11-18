import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../content/blogPosts';
import { Helmet } from 'react-helmet-async';

function renderBody(items) {
  return items.map((item, idx) => {
    switch (item.type) {
      case 'h2':
        return <h2 key={idx}>{item.content}</h2>;
      case 'h3':
        return <h3 key={idx}>{item.content}</h3>;
      case 'p':
        return <p key={idx}>{item.content}</p>;
      case 'faq':
        return (
          <details key={idx} className="faq-item">
            <summary className="faq-item__question">{item.question}</summary>
            <p className="faq-item__answer">{item.answer}</p>
          </details>
        );
      default:
        return null;
    }
  });
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="section">
        <div className="container text-center">
          <h1>Post not found</h1>
          <Link to="/blog" className="btn">Back to blog</Link>
        </div>
      </section>
    );
  }

  const related = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div>
      <Helmet>
        <title>{post.title} — Partners</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={`https://partners.dev/blog/${post.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            author: { '@type': 'Person', name: post.author.name },
            datePublished: post.pubDate,
            dateModified: post.updatedDate,
            articleSection: post.tags.join(', '),
            mainEntityOfPage: { '@type': 'WebPage', '@id': `https://partners.dev/blog/${post.slug}` },
          })}
        </script>
      </Helmet>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <h1 style={{ marginBottom: '16px' }}>{post.title}</h1>
            <div style={{ color: 'var(--ink-muted)', fontSize: '0.95rem', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <span>{post.pubDate.slice(0, 10)}</span>
              <span>{post.readTime}</span>
              <span>By {post.author.name}</span>
              <span className="tag">{post.tags[0]}</span>
            </div>
            <div className="code-block" style={{ marginTop: '24px' }}>
              <div className="code-block__header">Article</div>
              <div className="code-block__body">{post.description}</div>
            </div>
            <div style={{ marginTop: '32px' }}>
              {renderBody(post.body)}
            </div>
            <div style={{ marginTop: '64px', textAlign: 'center' }}>
              <h2 style={{ marginBottom: '16px' }}>More notes</h2>
              <div className="grid grid--2">
                {related.map((p) => (
                  <Link to={`/blog/${p.slug}`} key={p.slug} className="blog-card">
                    <div className="blog-card__image">
                      <span className="blog-card__image-label">{p.title.charAt(0)}</span>
                    </div>
                    <div className="blog-card__body">
                      <h3 className="blog-card__name">{p.title}</h3>
                      <p className="blog-card__tagline" style={{ marginTop: '8px', color: 'var(--ink-muted)', fontSize: '0.9rem' }}>{p.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
