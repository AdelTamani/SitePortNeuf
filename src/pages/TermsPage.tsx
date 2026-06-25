import { Link } from 'react-router-dom'

export default function TermsPage() {
  return (
    <article className="legal-page section-padding">
      <div className="container legal-container">
        <nav className="legal-breadcrumb" aria-label="Fil d'Ariane">
          <Link to="/">Accueil</Link>
          <span aria-hidden="true">/</span>
          <span>Termes et conditions</span>
        </nav>

        <header className="legal-header">
          <h1 className="legal-title">Termes et conditions</h1>
          <p className="legal-updated">
            <strong>Dernière mise à jour :</strong> 20 septembre 2023
          </p>
        </header>

        <div className="legal-content">
          <h2>Acceptation des termes</h2>
          <p>
            En accédant à ce site Web, vous acceptez d&apos;être lié par ces termes et conditions,
            ainsi que par toutes les lois et réglementations applicables. Si vous n&apos;acceptez pas
            ces termes, veuillez ne pas utiliser ce site.
          </p>

          <h2>Utilisation autorisée</h2>
          <p>
            Vous acceptez d&apos;utiliser ce site Web uniquement à des fins légales et conformément
            à ces termes et conditions. Vous ne devez pas utiliser ce site de manière à porter
            atteinte aux droits d&apos;autrui, à violer les lois en vigueur ou à nuire au
            fonctionnement du site.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            Le contenu présent sur ce site Web, y compris les textes, les images, les graphiques, les
            logos et les vidéos, est protégé par les lois sur la propriété intellectuelle et est la
            propriété du Domaine du Grand-Portneuf. Vous ne pouvez pas reproduire, distribuer,
            modifier ou utiliser ce contenu sans autorisation écrite préalable.
          </p>

          <h2>Liens vers des sites tiers</h2>
          <p>
            Ce site Web peut contenir des liens vers des sites Web tiers. Ces liens sont fournis
            uniquement à titre de référence. Nous n&apos;avons aucun contrôle sur le contenu de ces
            sites tiers et déclinons toute responsabilité quant à leur exactitude, leur fiabilité ou
            leur disponibilité. L&apos;accès à ces sites tiers se fait à vos propres risques.
          </p>

          <h2>Collecte de données personnelles</h2>
          <p>
            Nous collectons et traitons les données personnelles conformément à notre{' '}
            <Link to="/politique-de-confidentialite">politique de confidentialité</Link>. En
            utilisant ce site, vous consentez à la collecte et à l&apos;utilisation de vos données
            personnelles conformément à notre politique de confidentialité.
          </p>

          <h2>Exclusion de responsabilité</h2>
          <p>
            Nous nous efforçons de maintenir les informations sur ce site à jour et exactes, mais
            nous ne donnons aucune garantie quant à leur exactitude, leur exhaustivité ou leur
            actualité. Nous déclinons toute responsabilité pour tout préjudice ou dommage résultant
            de l&apos;utilisation de ce site ou de son contenu.
          </p>

          <h2>Modifications des termes et conditions</h2>
          <p>
            Nous nous réservons le droit de modifier ces termes et conditions à tout moment. Les
            modifications prendront effet dès leur publication sur ce site. Il vous incombe de
            consulter régulièrement ces termes et conditions pour vous tenir informé des
            éventuelles modifications.
          </p>

          <h2>Résiliation</h2>
          <p>
            Nous nous réservons le droit de résilier ou de restreindre votre accès à ce site Web,
            sans préavis ni responsabilité, pour quelque raison que ce soit, y compris en cas de
            violation de ces termes et conditions.
          </p>
        </div>
      </div>
    </article>
  )
}
