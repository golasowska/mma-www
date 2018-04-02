import mm from '../assets/images/magda.jpg';
import fm from '../assets/images/filip.jpg';

export default function() {
  return [
    {
      name: 'Magdalena Miechowska',
      photo: `${mm}`,
      profession: 'Adwokat',
      description:
        'Członek Krakowskiej Izby Adwokackiej od 2012 r. Ukończyła studia prawnicze na Wydziale Prawa i Administracji Uniwersytetu Jagiellońskiego, a następnie odbyła aplikację adwokacką przy Okręgowej Radzie Adwokackiej w Krakowie. Obecna na rynku usług prawnych od 2009 roku. Wieloletnie doświadczenie zawodowe zdobywała w renomowanych kancelariach prawnych, gdzie zajmowała się zarówno obsługą prawną spółek handlowych, jak i klientów indywidualnych, których z powodzeniem reprezentowała w licznych sporach sądowych. W swojej praktyce koncentruje się na zagadnieniach prawnych dotyczących nieruchomości oraz szeroko pojętym prawie inwestycji budowlanych, obejmującym tak obrót nieruchomościami oraz kwestie cywilnoprawne, jak i właściwe postępowania administracyjne. Posiada także bogate doświadczenie w prowadzeniu spraw z zakresu prawa rodzinnego, zwłaszcza spraw rozwodowych oraz spraw dotyczących podziału majątku dorobkowego małżonków. Prelegent szkoleń z zakresu budowania świadomości prawnej, prawa pracy oraz problematyki dotyczącej nieruchomości.',
      specialization: [
        'Prawo cywilne',
        'Prawo rodzinne',
        'Nieruchomości i proces inwestycji budowlanych'
      ],
      mail: 'mail@mail.com',
      phone: 600993430
    },

    {
      name: 'Filip Markiewicz',
      photo: `${fm}`,
      profession: 'Adwokat',
      description:
        'Członek Krakowskiej Izby Adwokackiej od 2012 roku. Absolwent Wydziału Prawa i Administracji Uniwersytetu Jagiellońskiego na kierunkach: Prawo oraz Administracja. Ukończył również studia podyplomowe z zakresu Prawa Medycznego i Bioetyki na Wydziale Prawa i Administracji Uniwersytetu Jagiellońskiego. Od ponad 6 lat zawodowo zajmuje się świadczeniem usług prawnych dla podmiotów gospodarczych oraz klientów indywidulanych, również w języku angielskim. Doświadczenie zawodowe zdobywał, pracując w renomowanych kancelariach prawnych w Krakowie, dzięki czemu posiada bogate doświadczenie m.in. w prowadzeniu sporów sądowych w szeroko rozumianych sprawach cywilnych, a także w sprawach z zakresu prawa pracy. Specjalizuje się ponadto w prawie karnym zarówno w aspektach materialnoprawnych, jak i procesowych, oferując w tym zakresie obronę podejrzanego i oskarżonego, jak również reprezentację interesów pokrzywdzonego, na wszystkich etapach postępowania karnego.',
      specialization: [
        'Prawo karne',
        'Prawo pracy i ubezpieczeń społecznych',
        'Prawo medyczne i farmaceutyczne'
      ],
      mail: 'mail@mail.com',
      phone: 609515766
    }
  ];
}
