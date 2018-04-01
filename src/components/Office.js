import React, { Component } from 'react';

import mf from '../assets/images/mf.jpg';

export default class Office extends Component {
  render() {
    return (
      <section id="kancelaria">
        <div className="row">
          <article className="col-10">
            <div>
              <img src={mf} alt="team" />
            </div>
            <div className="kanc-desc col-8">
              <h3>KANCELARIA</h3>
              <p>
                Kancelarię Miechowska Markiewicz Adwokaci tworzy zespół
                doświadczonych prawników świadczących kompleksowe usługi prawne
                na najwyższym poziomie, we wszystkich istotnych dziedzinach
                prawa zarówno dla polskich, jak i zagranicznych Klientów
                indywidualnych oraz podmiotów gospodarczych.
              </p>
              <p>
                Codzienną pracę opieramy na fundamentach adwokackiej etyki
                zawodowej, wszechstronnej wiedzy merytorycznej i bogatego
                doświadczenia zawodowego. Wyróżnia nas profesjonalizm i osobiste
                zaangażowanie w każdą z prowadzonych spraw, co w zestawieniu z
                naszą energią, entuzjazmem i kreatywnością pozwala na
                kompleksowe i zarazem innowacyjne podejście do indywidualnych
                potrzeb naszych Klientów oraz dużą elastyczność w świadczeniu
                przez nas usług prawnych.
              </p>
              <p>
                Lubimy pięknie mówić, ale potrafimy także słuchać. Lubimy mądrze
                pisać, ale przede wszystkim umiemy wyjaśniać i właściwie
                doradzać. Lubimy rozwiązywać problemy, ale wolimy zapobiegać ich
                powstawaniu. Lubimy wygrywać spory sądowe, ale kiedy tylko jest
                to możliwe nakłaniamy do mediacji.
              </p>
              <p>
                Przyjdź do nas i poznaj nas. Wysłuchamy, doradzimy i odciążymy
                Cię!
              </p>
            </div>
          </article>
        </div>
      </section>
    );
  }
}
