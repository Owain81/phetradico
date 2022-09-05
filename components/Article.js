import Image from "next/image";
import bookCover from "../public/cover.jpg";

export default function Article() {
  return (
    <>
      <article>
        <h1>Van Amersfoortsch Beiersch tot Phoenix Brouwerij</h1>
        <h2>Onno Kleefkens</h2>
        <h3>In de winkel verwacht vanaf de eerste weken van oktober</h3>

        <div className="scroll-container">
          <div className="scroll__wrapper">
            <aside>
              <h4>Over het boek</h4>
              <ul>
                <li>
                  <span>ISBN:</span> 9 789464 374797
                </li>
                <li>
                  <span>Uitgegeven door:</span> Phetradico - Hoogland
                </li>
                <li>
                  <span>Drukwerk:</span> Wilco - Amersfoort
                </li>
                <li>
                  <span>Uitvoering:</span> 576 pp, hardcover, 23x28 cm, full
                  colour
                </li>
                <li>
                  <span>Prijs:</span> €59.90
                </li>
              </ul>

              <p>
                Reservering en bestellen via{" "}
                <a
                  href="mailto:bestellen@phetradico.com"
                  rel="noopener norefferer"
                >
                  bestellen@phetradico.com
                </a>
              </p>

              <p>
                Bij de reservering opgeven: Naam (evt. bedrijf), Adres, E-mail,
                Tel. Nummer. Graag vermelden indien afwijkend bezorgadres.
              </p>

              <p>
                Evt. nadere informatie te bevragen bij:{" "}
                <a href="mailto:info@phetradico.com" rel="noopener norefferer">
                  info@phetradico.com
                </a>
              </p>
            </aside>
            <picture>
              <Image className="image" src={bookCover} alt="Boekcover" />
            </picture>
          </div>
          <div className="scroll-container__content">
            <h4>Meer over het boek</h4>
            <p>Een nieuw verhaal met vele honderden illustraties.</p>

            <p>
              De geschiedenis van de Amersfoortse Phoenix Brouwerij wordt in dit
              rijk geïllustreerde boek uitgebreid verteld. Op basis van het vele
              beschikbare materiaal wordt een beeld geschetst over hoe een
              kleine brouwerij zich staande tracht te houden in de stormachtige
              ontwikkelingen van de Nederlandse markt in de twintigste eeuw,
              waarin vele collega’s ten onder gingen.
            </p>

            <p>
              Het is het verhaal van een brouwerij, die in een tomeloze wil tot
              overleven op beslissende momenten met vernieuwende oplossingen
              kwam. In het begin als Amersfoortsche Beijersch-Bierbrouwerij kwam
              men met het eerste Pilsener bier in Nederland en in 1918 als
              Phoenix Brouwerij met het eerste alcoholvrije bier, onder de naam
              Malto.
            </p>

            <p>
              In haar oriëntatie op verkoop via de winkelsector van op de
              brouwerij gebotteld bier, wijkt de aanpak van Phoenix sterk af van
              dat van het gros van de traditioneel ingestelde brouwerijen. In
              deze marktaanpak is vanaf de twintiger jaren een prachtig oeuvre
              ontstaan aan iconisch reclamemateriaal, met werk van Nico de Koo,
              Fré Cohen, Herbert Meyer Ricard en Koen van Os. De door hen
              ontwikkelde affiches, etiketten en folders, waarvan veel is
              opgenomen in dit boek, behoren vandaag tot geliefde verzamelaars
              objecten.
            </p>

            <p>
              De Commissarissenboeken van de brouwerij vormen de basis van het
              boek, zoals dat gedeeltelijk ook was bij de eerdere publicatie uit
              2001 over Phoenix Brouwerij onder de titel ‘Opvallend Anders’.
              Inmiddels zijn wij meer dan twintig jaar verder en is er meer
              kennis door de digitalisering van veel archieven. Daarnaast is er
              ook veel informatie vrijgekomen uit andere voornamelijk privé
              bronnen. Dit maakt dat dit nieuwe boek een compleet nieuw beeld
              werpt op ‘bijna 100 jaar Amersfoortse biergeschiedenis’.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
