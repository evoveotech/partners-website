import { FAQS } from '../content/config';

export default function FaqPage() {
  return (
    <div>
      <section className="section" style={{ background: '#0b0b0b', color: '#fff' }}>
        <div className="container">
          <div className="section-heading" style={{ color: '#fff' }}>
            <h1 style={{ color: '#fff' }}>FAQ</h1>
            <p style={{ color: '#6b6b6b' }}>Got a question? We&apos;ve got answers.</p>
          </div>
          <div className="grid grid--2" style={{ gap: '24px' }}>
            {FAQS.map((faq, idx) => (
              <details key={idx} className="faq-item" style={{ border: '1px solid #2a2a2a', borderRadius: '12px', marginBottom: '16px' }}>
                <summary className="faq-item__question" style={{ fontWeight: 600, color: '#fff', cursor: 'pointer', padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '16px', listStyle: 'none', cursor: 'pointer' }}>
                  <span style={{ color: '#4f46e5', fontSize: '1.2rem' }}>+</span>
                  {faq.question}
                </summary>
                <p className="faq-item__answer" style={{ color: '#6b6b6b', fontSize: '0.96rem', lineHeight: '1.6', padding: '0 20px 20px' }}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
