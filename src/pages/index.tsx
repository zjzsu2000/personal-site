import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

const writing = [
  {
    title: 'Prompts Are Boundaries, Not Remote Controls',
    href: '/writing/prompts-are-boundaries-not-remote-controls',
    meta: 'AI workflow',
  },
  {
    title: "I'm Building Handoff Reader - Here's Why",
    href: '/writing/building-handoff-reader-heres-why',
    meta: 'Building in public',
  },
];

function CapabilityCard({title, children}: {title: string; children: React.ReactNode}) {
  return (
    <section className={styles.card}>
      <h3>{title}</h3>
      <p>{children}</p>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="AI-native workflows"
      description="Backend and platform engineer building AI-native workflows with checkpoints, boundaries, and cross-model review."
    >
      <main>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>Backend & Platform Engineering / AI-native Workflows</p>
            <h1>I make AI go from fast to reliable.</h1>
            <p className={styles.subtitle}>
              Backend & platform engineer building AI-native workflows with checkpoints,
              boundaries, and cross-model review. Currently building Handoff Reader.
            </p>
            <div className={styles.actions}>
              <Link className="button button--primary" to="/projects">
                See Handoff Reader
              </Link>
              <Link className="button button--secondary" to="/writing">
                Read Writing
              </Link>
            </div>
          </div>
          <div className={styles.diagram} aria-label="Handoff Reader seven-section schema preview">
            {['Goal', 'State', 'Done', 'Next', 'Files', 'Boundaries', 'Questions'].map((item, index) => (
              <div className={styles.diagramRow} key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.grid3}>
            <CapabilityCard title="Backend / Platform">
              I build reliable systems, tools, and workflows around real constraints.
            </CapabilityCard>
            <CapabilityCard title="AI-native Workflows">
              I use checkpoints, explicit boundaries, and controlled loops to make AI work auditable.
            </CapabilityCard>
            <CapabilityCard title="Risk & Systems Thinking">
              I care about what can fail, who owns the fallback, and where the boundary belongs.
            </CapabilityCard>
          </div>
        </section>

        <section className={clsx(styles.section, styles.featured)}>
          <div>
            <p className={styles.eyebrow}>Featured Project</p>
            <h2>Handoff Reader</h2>
            <p>Reliable, evidence-grounded handoffs between AI coding sessions.</p>
            <p>
              Handoff Reader was built and submitted to OpenAI Build Week—a
              provider-neutral tool for reliable context transfer between AI
              coding sessions.
            </p>
            <p>
              Handoff Reader turns live repository state into portable, validated handoffs
              for the next AI coding session.
            </p>
            <p className={styles.status}>OpenAI Build Week submission · Building in public</p>
          </div>
          <div className={styles.actionsInline}>
            <Link className="button button--primary" to="/projects">
              View Project
            </Link>
            <a
              className="button button--secondary"
              href="https://devpost.com/software/handoff-reader"
              target="_blank"
              rel="noopener noreferrer"
            >
              Devpost
            </a>
            <a
              className="button button--secondary"
              href="https://github.com/zjzsu2000/handoff-reader"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="button button--secondary"
              href="https://youtu.be/LfG8cb-LElw"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Selected Writing</p>
            <h2>Recent Notes</h2>
          </div>
          <div className={styles.writingList}>
            {writing.map((item) => (
              <Link className={styles.writingItem} to={item.href} key={item.href}>
                <span>{item.meta}</span>
                <strong>{item.title}</strong>
              </Link>
            ))}
          </div>
        </section>

        <section className={clsx(styles.section, styles.aboutStrip)}>
          <p>
            I write about AI-native engineering workflows, judgment, and systems thinking.
          </p>
          <Link to="/about">More about me</Link>
        </section>
      </main>
    </Layout>
  );
}
