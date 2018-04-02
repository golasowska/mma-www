import React, { Component } from 'react';

import mm from '../assets/images/magda.jpg';
import fm from '../assets/images/filip.jpg';

export default class Leaders extends Component {
  render() {
    return (
      <section id="zespol">
        <div className="row">
          <div className="col-12">
            <h3>ZESPÓŁ</h3>
          </div>
        </div>

        <div className="row">
          <article className="col-5 employee">
            <img src={mm} alt="Magdalena Miechowska" />
            <p className="name">Magdalena Miechowska</p>
            <p className="lawyer">Adwokat</p>
            <div className="desc-det">
              <p>
                Członek Krakowskiej Izby Adwokackiej od 2012 r. Ukończyła studia
                prawnicze na Wydziale Prawa i Administracji Uniwersytetu
                Jagiellońskiego, a następnie odbyła aplikację adwokacką przy
                Okręgowej Radzie Adwokackiej w Krakowie. Obecna na rynku usług
                prawnych od 2009 roku. Wieloletnie doświadczenie zawodowe
                zdobywała w renomowanych kancelariach prawnych, gdzie zajmowała
                się zarówno obsługą prawną spółek handlowych, jak i klientów
                indywidualnych, których z powodzeniem reprezentowała w licznych
                sporach sądowych. W swojej praktyce koncentruje się na
                zagadnieniach prawnych dotyczących nieruchomości oraz szeroko
                pojętym prawie inwestycji budowlanych, obejmującym tak obrót
                nieruchomościami oraz kwestie cywilnoprawne, jak i właściwe
                postępowania administracyjne. Posiada także bogate doświadczenie
                w prowadzeniu spraw z zakresu prawa rodzinnego, zwłaszcza spraw
                rozwodowych oraz spraw dotyczących podziału majątku dorobkowego
                małżonków.
              </p>
              <p>
                Prelegent szkoleń z zakresu budowania świadomości prawnej, prawa
                pracy oraz problematyki prawnej dotyczącej nieruchomości.
              </p>
              <ul>
                Specjalizacje:
                <li>Prawo cywilne</li>
                <li>Prawo rodzinne</li>
                <li>Nieruchomości i proces inwestycji budowlanych</li>
              </ul>
              <p>Mail:</p>
              <p>Telefon: 600993430</p>
            </div>
            <i className="fa fa-arrow-down" />
          </article>

          <article className="col-5 employee">
            <img src={fm} alt="Filip Markiewicz" />
            <p className="name">Filip Markiewicz</p>
            <p className="lawyer">Adwokat</p>
            <div className="desc-det">
              <p>
                Członek Krakowskiej Izby Adwokackiej od 2012 roku. Absolwent
                Wydziału Prawa i Administracji Uniwersytetu Jagiellońskiego na
                kierunkach: Prawo oraz Administracja. Ukończył również studia
                podyplomowe z zakresu Prawa Medycznego i Bioetyki na Wydziale
                Prawa i Administracji Uniwersytetu Jagiellońskiego. Od ponad 6
                lat zawodowo zajmuje się świadczeniem usług prawnych dla
                podmiotów gospodarczych oraz klientów indywidulanych, również w
                języku angielskim. Doświadczenie zawodowe zdobywał, pracując w
                renomowanych kancelariach prawnych w Krakowie, dzięki czemu
                posiada bogate doświadczenie m.in. w prowadzeniu sporów sądowych
                w szeroko rozumianych sprawach cywilnych, a także w sprawach z
                zakresu prawa pracy. Specjalizuje się ponadto w prawie karnym
                zarówno w aspektach materialnoprawnych, jak i procesowych,
                oferując w tym zakresie obronę podejrzanego i oskarżonego, jak
                również reprezentację interesów pokrzywdzonego, na wszystkich
                etapach postępowania karnego.
              </p>
              <ul>
                Specjalizacje:
                <li>Prawo karne</li>
                <li>Prawo pracy i ubezpieczeń społecznych</li>
                <li>Prawo medyczne i farmaceutyczne</li>
              </ul>
              <p>Mail:</p>
              <p>Telefon: 609515766</p>
            </div>
            <i className="fa fa-arrow-down" />
          </article>
        </div>
      </section>
    );
  }
}
