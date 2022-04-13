import Head from 'next/head';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Image from 'next/image';
import bookCover from '../public/cover.jpg';

export default function Home() {
  return (
    <div>
    <Head>
      <title>Van Amersfoortsch Beiersch tot Phoenix Brouwerij</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />

    <div className="container">
      <main>
        <article>
          <h1>Binnenkort in de winkel</h1>

          <h2>Van Amersfoortsch Beiersch tot Phoenix Brouwerij</h2>
            
            <div className="scroll-container">
              <div className="scroll__wrapper">
              <aside>
                <h3>Over het boek</h3>
                <ul>
                  <li>
                    <span>ISBN</span> 9 789464 374797</li>
                <li><span>Uitgegeven door:</span> Phetradico publishing - Hoogland</li>
                <li><span>Drukwerk:</span> BoekenGilde</li>
                <li><span>Uitvoering:</span> 571 pp, hardcover, 23x28 cm, full colour</li>
                <li><span>Verwachte prijs</span> Onder voorbehoud, €69</li>
                <li><span>Levering aan de handel</span> Via CB Culemborg</li>
              </ul>
            </aside>
            <picture>
              <Image className="image" src={bookCover} alt="Boekcover" />
            </picture>
            </div>
            <div className="scroll-container__content">
              <h3>Meer informatie</h3>
              <p>De Commissarissenboeken van de NV Phoenix Brouwerij zijn vijf boeken waarin de vergaderingen vanaf 1904 – handgeschreven! – zijn bijgehouden. De secretaris Reijer Struve, die vanaf 1883 tot 1953 bij de brouwerij werkzaam was, heeft grotendeels deze vergaderingen genotuleerd. Waar deze aanvankelijk elke maand plaatsvonden, werd dat in de loop der jaren minder. Eerst elke twee maanden, vervolgens om het half jaar en in de jaren dertig soms jaren niet. Pas vanaf 1945 is er weer sprake van regelmaat.</p>

              <p>De Commissarissenboeken zijn gered van de versnipperaar door de heer Kleiwegt, werkzaam bij de Oranjeboom Brouwerij in Rotterdam. Hij kreeg de opdracht de zolder leeg te ruimen en ontdekte daar heel veel historisch materiaal, dat hij keurig opborg en bewaarde. Het geheel kwam na de sloop van de Rotterdamse brouwerij terecht in Breda, waar ik een groot deel ervan in dozen terugvond in Kelder 3. Een tijd lang mocht ik de inhoud van de dozen thuis bestuderen. Het vormde de basis van het boek ‘Opvallend Anders’, over de geschiedenis van de Phoenix Brouwerij, dat in 2001 gepubliceerd werd door de Bataafsche Leeuw. Inmiddels zijn wij meer dan twintig jaar verder en is er meer kennis door de digitalisering van veel archieven. De Commissarissenboeken, die inmiddels in bruikleen van United Dutch Breweries bij het Archief Eemland liggen, heb ik met de nieuwe kennis als achtergrond opnieuw kunnen bestuderen.</p>

              <p>In de vergaderingen van de commissarissen kwam niet alles aan de orde wat je als onderzoeker zou willen weten. De documenten zijn wel belangrijk, omdat zij een licht werpen op de ontwikkeling van een middelgrote brouwerij en de marktverhoudingen vanuit dat perspectief. Er wordt vaak alleen gesproken over problemen, veel is er niet in terug te vinden, maar ook weer veel wel. Naast deze notulen uit de vergaderingen kwamen de aantekeningen van de exportmanager, Willem van Kleef, boven water. </p>

              <p>Vrij recent kwam daarbij een pakket brieven en foto’s van de familie Meursing. Vooral deze brieven brachten een fascinerend nieuw licht op de periode vanaf 1894 tot 1914. Ook kwam er de menselijke maat in. Het vervolg daarop tot het einde van de brouwerij kan met deze informatie ‘anders gelezen’ worden.</p>

              <p>De grote hoeveelheid informatie, waarvan ik dankbaar gebruikgemaakt heb, vormt een beeld van binnenuit van een relatief kleine lokale brouwerij, die een prachtig oeuvre aan iconisch reclamemateriaal heeft achtergelaten, met werk van Nico de Koo, Fré Cohen, Herbert Meyer Ricard en Koen van Os, opgenomen in dit boek. </p>
            </div>
          </div>
        </article>
      </main>
    </div>
    <Footer />
    </div>
  )
}
