import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import MovieCard from '../components/MovieCard';
import OverView from '../components/OverView';
import MovieSection from '../components/MovieSection';

const MovieDetails = props => {
  const [details, setDetails] = useState({
    adult: false,
    backdrop_path: '/p1F51Lvj3sMopG948F5HsBbl43C.jpg',
    belongs_to_collection: {
      id: 131296,
      name: 'Thor Collection',
      poster_path: '/yw7gr7DhHHVTLlO8Se8uH17TDMA.jpg',
      backdrop_path: '/3KL8UNKFWgIKXzLHjwY0uwgjzYl.jpg',
    },
    budget: 250000000,
    genres: [
      {
        id: 28,
        name: 'Action',
      },
      {
        id: 12,
        name: 'Adventure',
      },
      {
        id: 14,
        name: 'Fantasy',
      },
    ],
    homepage: 'https://www.marvel.com/movies/thor-love-and-thunder',
    id: 616037,
    imdb_id: 'tt10648342',
    original_language: 'en',
    original_title: 'Thor: Love and Thunder',
    overview:
      'After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.',
    popularity: 8421.992,
    poster_path: '/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
    production_companies: [
      {
        id: 420,
        logo_path: '/hUzeosd33nzE5MCNsZxCGEKTXaQ.png',
        name: 'Marvel Studios',
        origin_country: 'US',
      },
      {
        id: 176762,
        logo_path: null,
        name: 'Kevin Feige Productions',
        origin_country: 'US',
      },
    ],
    production_countries: [
      {
        iso_3166_1: 'US',
        name: 'United States of America',
      },
    ],
    release_date: '2022-07-06',
    revenue: 705700000,
    runtime: 119,
    spoken_languages: [
      {
        english_name: 'English',
        iso_639_1: 'en',
        name: 'English',
      },
    ],
    status: 'Released',
    tagline: 'The one is not the only.',
    title: 'Thor: Love and Thunder',
    video: false,
    vote_average: 6.781,
    vote_count: 1821,
  });

  const [similar, setSimilar] = useState([
    {
      adult: false,
      backdrop_path: '/8eRscFbRYl681zDfkjv1jjW1KAA.jpg',
      genre_ids: [878, 28, 12],
      id: 1452,
      original_language: 'en',
      original_title: 'Superman Returns',
      overview:
        'Superman returns to discover his 5-year absence has allowed Lex Luthor to walk free, and that those he was closest to felt abandoned and have moved on. Luthor plots his ultimate revenge that could see millions killed and change the face of the planet forever, as well as ridding himself of the Man of Steel.',
      popularity: 34.024,
      poster_path: '/qIegbn6DSUYmggfwxOBNOVS35q.jpg',
      release_date: '2006-06-28',
      title: 'Superman Returns',
      video: false,
      vote_average: 5.708,
      vote_count: 3511,
    },
    {
      adult: false,
      backdrop_path: '/377px2mP8k3XCqhwqMlmIrYqaae.jpg',
      genre_ids: [14, 28],
      id: 1487,
      original_language: 'en',
      original_title: 'Hellboy',
      overview:
        'In the final days of World War II, the Nazis attempt to use black magic to aid their dying cause. The Allies raid the camp where the ceremony is taking place, but not before a demon—Hellboy—has already been conjured. Joining the Allied forces, Hellboy eventually grows to adulthood, serving the cause of good rather than evil.',
      popularity: 30.749,
      poster_path: '/kukfPWDRXVe7b4HFYMKnxKvMg18.jpg',
      release_date: '2004-04-02',
      title: 'Hellboy',
      video: false,
      vote_average: 6.651,
      vote_count: 5902,
    },
    {
      adult: false,
      backdrop_path: '/8VGaEXbTOGeWGW7IvzOf1j2rjet.jpg',
      genre_ids: [878, 12, 28, 35, 10751],
      id: 1497,
      original_language: 'en',
      original_title: 'Teenage Mutant Ninja Turtles II: The Secret of the Ooze',
      overview:
        'The Turtles and the Shredder battle once again, this time for the last cannister of the ooze that created the Turtles, which Shredder wants to create an army of new mutants.',
      popularity: 21.293,
      poster_path: '/Hyvvz9Z3le1is8a0EeFJQm0aSC.jpg',
      release_date: '1991-03-22',
      title: 'Teenage Mutant Ninja Turtles II: The Secret of the Ooze',
      video: false,
      vote_average: 6.1,
      vote_count: 867,
    },
    {
      adult: false,
      backdrop_path: '/nTrJd8NPkK9LfvfKHeuImKjdNEd.jpg',
      genre_ids: [878, 28, 12, 35, 10751],
      id: 1498,
      original_language: 'en',
      original_title: 'Teenage Mutant Ninja Turtles',
      overview:
        'A quartet of humanoid turtles, trained by their mentor in ninjitsu, must learn to work together to face the menace of Shredder and the Foot Clan.',
      popularity: 45.28,
      poster_path: '/shfAU6xIIEAEtsloIT3n9Fscz2E.jpg',
      release_date: '1990-03-30',
      title: 'Teenage Mutant Ninja Turtles',
      video: false,
      vote_average: 6.604,
      vote_count: 1375,
    },
    {
      adult: false,
      backdrop_path: '/iY8P5N4ENtE05ngDbY2k2TTmL3I.jpg',
      genre_ids: [28, 12, 35, 10751, 14, 878],
      id: 1499,
      original_language: 'en',
      original_title: 'Teenage Mutant Ninja Turtles III',
      overview:
        'The four turtles travel back in time to the days of the legendary and deadly samurai in ancient Japan, where they train to perfect the art of becoming one. The turtles also assist a small village in an uprising.',
      popularity: 25.024,
      poster_path: '/fwX5RdPDBFsbEAXc46DrvRz5Bca.jpg',
      release_date: '1993-03-17',
      title: 'Teenage Mutant Ninja Turtles III',
      video: false,
      vote_average: 5.4,
      vote_count: 617,
    },
    {
      adult: false,
      backdrop_path: '/wXzdoMyLYvz7AoXPGx5STZ1XZDd.jpg',
      genre_ids: [14, 35, 12],
      id: 1832,
      original_language: 'en',
      original_title: 'Dogma',
      overview:
        'The latest battle in the eternal war between Good and Evil has come to New Jersey in the late, late 20th Century. Angels, demons, apostles and prophets (of a sort) walk among the cynics and innocents of America and duke it out for the fate of humankind.',
      popularity: 13.452,
      poster_path: '/xI5beD8Td79E2uZNAxgd1gWWOEd.jpg',
      release_date: '1999-11-12',
      title: 'Dogma',
      video: false,
      vote_average: 6.895,
      vote_count: 2052,
    },
    {
      adult: false,
      backdrop_path: '/77P56ZcL8M9Cw7FIptMIGjhNJoj.jpg',
      genre_ids: [12, 878, 28],
      id: 1858,
      original_language: 'en',
      original_title: 'Transformers',
      overview:
        'Young teenager Sam Witwicky becomes involved in the ancient struggle between two extraterrestrial factions of transforming robots – the heroic Autobots and the evil Decepticons. Sam holds the clue to unimaginable power and the Decepticons will stop at nothing to retrieve it.',
      popularity: 20.522,
      poster_path: '/1P7w3AImoEOWJX7nn3fdaKDfEQA.jpg',
      release_date: '2007-06-27',
      title: 'Transformers',
      video: false,
      vote_average: 6.749,
      vote_count: 9518,
    },
    {
      adult: false,
      backdrop_path: '/uzIGtyS6bbnJzGsPL93WCF1FWm8.jpg',
      genre_ids: [12, 28, 14],
      id: 1865,
      original_language: 'en',
      original_title: 'Pirates of the Caribbean: On Stranger Tides',
      overview:
        "Captain Jack Sparrow crosses paths with a woman from his past, and he's not sure if it's love -- or if she's a ruthless con artist who's using him to find the fabled Fountain of Youth. When she forces him aboard the Queen Anne's Revenge, the ship of the formidable pirate Blackbeard, Jack finds himself on an unexpected adventure in which he doesn't know who to fear more: Blackbeard or the woman from his past.",
      popularity: 219.626,
      poster_path: '/keGfSvCmYj7CvdRx36OdVrAEibE.jpg',
      release_date: '2011-05-14',
      title: 'Pirates of the Caribbean: On Stranger Tides',
      video: false,
      vote_average: 6.525,
      vote_count: 12193,
    },
    {
      adult: false,
      backdrop_path: '/eGzzbfmnXMaa4LZnJVquP1llZ2R.jpg',
      genre_ids: [10749, 878, 53],
      id: 1903,
      original_language: 'en',
      original_title: 'Vanilla Sky',
      overview:
        "David Aames has it all: wealth, good looks and gorgeous women on his arm. But just as he begins falling for the warmhearted Sofia, his face is horribly disfigured in a car accident. That's just the beginning of his troubles as the lines between illusion and reality, between life and death, are blurred.",
      popularity: 26.333,
      poster_path: '/cAh2pCiNPftsY3aSqJuIOde7uWr.jpg',
      release_date: '2001-01-22',
      title: 'Vanilla Sky',
      video: false,
      vote_average: 6.794,
      vote_count: 3356,
    },
    {
      adult: false,
      backdrop_path: '/orV9H8t8lXY7BAvQR4tgv4LELGh.jpg',
      genre_ids: [12, 36, 28],
      id: 1911,
      original_language: 'en',
      original_title: 'The 13th Warrior',
      overview:
        'A Muslim ambassador exiled from his homeland, Ahmad ibn Fadlan finds himself in the company of Vikings. While the behavior of the Norsemen initially offends ibn Fadlan, the more cultured outsider grows to respect the tough, if uncouth, warriors. During their travels together, ibn Fadlan and the Vikings get word of an evil presence closing in, and they must fight the frightening and formidable force, which was previously thought to exist only in legend.',
      popularity: 36.814,
      poster_path: '/7pyhR5K1iv67daYw0DfsmsersKA.jpg',
      release_date: '1999-08-13',
      title: 'The 13th Warrior',
      video: false,
      vote_average: 6.654,
      vote_count: 1477,
    },
    {
      adult: false,
      backdrop_path: '/v6MVBFnQOscITvmAy5N5ras2JKZ.jpg',
      genre_ids: [878, 28, 12],
      id: 1924,
      original_language: 'en',
      original_title: 'Superman',
      overview:
        'Mild-mannered Clark Kent works as a reporter at the Daily Planet alongside his crush, Lois Lane. Clark must summon his superhero alter-ego when the nefarious Lex Luthor launches a plan to take over the world.',
      popularity: 41.631,
      poster_path: '/d7px1FQxW4tngdACVRsCSaZq0Xl.jpg',
      release_date: '1978-12-13',
      title: 'Superman',
      video: false,
      vote_average: 7.103,
      vote_count: 3082,
    },
    {
      adult: false,
      backdrop_path: '/kYd1ZMWvG9K2Jeop3XWXcTpJ2dB.jpg',
      genre_ids: [878, 28],
      id: 1927,
      original_language: 'en',
      original_title: 'Hulk',
      overview:
        'Bruce Banner, a genetics researcher with a tragic past, suffers massive radiation exposure in his laboratory that causes him to transform into a raging green monster when he gets angry.',
      popularity: 84.375,
      poster_path: '/qnngKqAcqfH2pBxDoKu5lxzSbTo.jpg',
      release_date: '2003-06-19',
      title: 'Hulk',
      video: false,
      vote_average: 5.517,
      vote_count: 4895,
    },
    {
      adult: false,
      backdrop_path: '/sLWUtbrpiLp23a0XDSiUiltdFPJ.jpg',
      genre_ids: [28, 12, 14],
      id: 1930,
      original_language: 'en',
      original_title: 'The Amazing Spider-Man',
      overview:
        "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents' disappearance – leading him directly to Oscorp and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is set on a collision course with Connors' alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
      popularity: 171.908,
      poster_path: '/fSbqPbqXa7ePo8bcnZYN9AHv6zA.jpg',
      release_date: '2012-06-23',
      title: 'The Amazing Spider-Man',
      video: false,
      vote_average: 6.672,
      vote_count: 15163,
    },
    {
      adult: false,
      backdrop_path: '/A8AK5bAMtU46hBKa3D6AvWRazLt.jpg',
      genre_ids: [28, 53, 80],
      id: 1948,
      original_language: 'en',
      original_title: 'Crank',
      overview:
        'Chev Chelios, a hit man wanting to go straight, lets his latest target slip away. Then he awakes the next morning to a phone call that informs him he has been poisoned and has only an hour to live unless he keeps adrenaline coursing through his body while he searches for an antidote.',
      popularity: 20.469,
      poster_path: '/toaY9CoMAy37QNv8HbbUqWS4X1Q.jpg',
      release_date: '2006-08-31',
      title: 'Crank',
      video: false,
      vote_average: 6.62,
      vote_count: 3028,
    },
    {
      adult: false,
      backdrop_path: '/r4yFYBEcV247B9VXi1307fIhVqN.jpg',
      genre_ids: [28, 35, 80],
      id: 2109,
      original_language: 'en',
      original_title: 'Rush Hour',
      overview:
        "When Hong Kong Inspector Lee is summoned to Los Angeles to investigate a kidnapping, the FBI doesn't want any outside help and assigns cocky LAPD Detective James Carter to distract Lee from the case. Not content to watch the action from the sidelines, Lee and Carter form an unlikely partnership and investigate the case themselves.",
      popularity: 70.872,
      poster_path: '/we7wOLVFgxhzLzUt0qNe50xdIQZ.jpg',
      release_date: '1998-09-18',
      title: 'Rush Hour',
      video: false,
      vote_average: 6.973,
      vote_count: 3801,
    },
    {
      adult: false,
      backdrop_path: '/einyYp4cHej4Nfo8ndE8mhQkKNu.jpg',
      genre_ids: [35],
      id: 2123,
      original_language: 'en',
      original_title: 'Me, Myself & Irene',
      overview:
        'Rhode Island State Trooper Charlie Baileygates has a multiple personality disorder. One personality is crazy and aggressive, while the other is more friendly and laid back. Both of these personalities fall in love with the same woman named Irene after Charlie loses his medication.',
      popularity: 45.688,
      poster_path: '/rvRrcbLbpn7UJGRH1JupgHOeJFq.jpg',
      release_date: '2000-06-22',
      title: 'Me, Myself & Irene',
      video: false,
      vote_average: 6.6,
      vote_count: 3177,
    },
    {
      adult: false,
      backdrop_path: '/fv4XvbQW2NDEXV8Zdxhmv0wHuu3.jpg',
      genre_ids: [28, 53, 14],
      id: 752,
      original_language: 'en',
      original_title: 'V for Vendetta',
      overview:
        'In a world in which Great Britain has become a fascist state, a masked vigilante known only as “V” conducts guerrilla warfare against the oppressive British government. When V rescues a young woman from the secret police, he finds in her an ally with whom he can continue his fight to free the people of Britain.',
      popularity: 37.944,
      poster_path: '/2ySXWBckQboalTZjhaLWRqc3gCN.jpg',
      release_date: '2006-02-23',
      title: 'V for Vendetta',
      video: false,
      vote_average: 7.899,
      vote_count: 12449,
    },
    {
      adult: false,
      backdrop_path: '/fQnV4H8Yd46nvyuoEaUgWmt9RjC.jpg',
      genre_ids: [35, 10751, 12],
      id: 772,
      original_language: 'en',
      original_title: 'Home Alone 2: Lost in New York',
      overview:
        "Instead of flying to Florida with his folks, Kevin ends up alone in New York, where he gets a hotel room with his dad's credit card—despite problems from a clerk and meddling bellboy. But when Kevin runs into his old nemeses, the Wet Bandits, he's determined to foil their plans to rob a toy store on Christmas eve.",
      popularity: 61.871,
      poster_path: '/uuitWHpJwxD1wruFl2nZHIb4UGN.jpg',
      release_date: '1992-11-19',
      title: 'Home Alone 2: Lost in New York',
      video: false,
      vote_average: 6.673,
      vote_count: 7870,
    },
    {
      adult: false,
      backdrop_path: '/g1EsYgp8GbdztpodCCa2n7xxc5S.jpg',
      genre_ids: [16, 10751, 35, 14, 12],
      id: 809,
      original_language: 'en',
      original_title: 'Shrek 2',
      overview:
        "Shrek, Fiona and Donkey set off to Far, Far Away to meet Fiona's mother and father. But not everyone is happy. Shrek and the King find it hard to get along, and there's tension in the marriage. The fairy godmother discovers that Shrek has married Fiona instead of her Son Prince Charming and sets about destroying their marriage.",
      popularity: 171.473,
      poster_path: '/2yYP0PQjG8zVqturh1BAqu2Tixl.jpg',
      release_date: '2004-05-19',
      title: 'Shrek 2',
      video: false,
      vote_average: 7.191,
      vote_count: 10172,
    },
    {
      adult: false,
      backdrop_path: '/wxkXCVGw61kbJAfP9SkxoETD0uz.jpg',
      genre_ids: [14, 12, 16, 35, 10751],
      id: 810,
      original_language: 'en',
      original_title: 'Shrek the Third',
      overview:
        'The King of Far Far Away has died and Shrek and Fiona are to become King & Queen. However, Shrek wants to return to his cozy swamp and live in peace and quiet, so when he finds out there is another heir to the throne, they set off to bring him back to rule the kingdom.',
      popularity: 108.487,
      poster_path: '/jaNe16gE9zdAYyVwRqmlmRKshHm.jpg',
      release_date: '2007-05-17',
      title: 'Shrek the Third',
      video: false,
      vote_average: 6.271,
      vote_count: 7529,
    },
  ]);

  const renderGenres = item => {
    return (
      <View style={styles.genresContainer}>
        <Text style={styles.genresTitle}>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: '#232323', flex: 1, padding: 10}}>
      <ScrollView>
        <View>
          <Text style={styles.movieTitle}>{details.original_title}</Text>
        </View>

        <FlatList
          horizontal={true}
          data={details.genres}
          renderItem={({item}) => {
            return renderGenres(item);
          }}
        />

        <OverView data={details.overview} />

        <MovieSection
          data={similar}
          title={"What's New"}
          viewMore={false}
          navigation={props.navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  movieTitle: {fontSize: 30, color: '#FFF', marginVertical: 10},

  genresContainer: {
    borderRadius: 5,
    backgroundColor: '#7A7A7A',
    margin: 5,
    height: 30,
    justifyContent: 'center',
  },
  genresTitle: {fontSize: 15, marginHorizontal: 10, color: '#FFF'},
});
