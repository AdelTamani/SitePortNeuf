import FadeIn from './FadeIn'

export default function MediaSection() {
  return (
    <section className="media-section section-padding bg-dark">
      <div className="container center">
        <FadeIn>
          <span className="section-label light">Presse</span>
          <h2 className="section-title light">Le Domaine dans les médias</h2>
          <blockquote className="media-quote">
            «&nbsp;Près de 3,5&nbsp;M$ pour la réalisation d&apos;un projet touristique à
            Pont-Rouge&nbsp;»
          </blockquote>
          <a
            href="https://tourismexpress.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
          >
            Lire l&apos;article
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
