// import JSONDATA from '../../MOCK_DATA.json';

import { useState } from 'react';
import { Grid, Paper, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const Preference = (props) => {
  const [rating, setRating] = useState('');
  const [price, setPrice] = useState('');
  const [dietary, setDietary] = useState('');

  const handleDietary = event => {
    setDietary(event.target.value)
  }
  
  const handleRating = event => {
    setRating(event.target.value)
  }

  const handlePrice = event => {
    setPrice(event.target.value)
  }

  const handleFormInput = (e) => {
    e.preventDefault();
    console.log('getting the data')
  }


  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <FormControl component="fieldset" >
              <FormLabel component="rating">
                Rating
              </FormLabel>
              <Rating name="rating" defaultValue={2.5} precision={0.5} value={rating} onChange={handleRating} />
              <FormLabel component="Price">
                Price
              </FormLabel>
              <Rating name="price-rating" defaultValue={2.5} value={price} onChange={handlePrice} icon={<AttachMoneyIcon />} />
              <FormLabel component="DietaryOption">
                Dietary Option
              </FormLabel>
              <RadioGroup aria-label="dietary" name="dietary" value={dietary} onChange={handleDietary}>
                <FormControlLabel value="vegan" control={<Radio />} label="Vegan" />
                <FormControlLabel value="vegetarian" control={<Radio />} label="Vegetarian" />
                <FormControlLabel value="kosher" control={<Radio />} label="Kosher" />
                <FormControlLabel value="halal" control={<Radio />} label="Halal" />
                <FormControlLabel value="" control={<Radio />} label="none" />
              </RadioGroup>
              <Button variant="contained" color="primary" onClick={handleFormInput}>Next</Button>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    </div>
    // <div>
    //   <h3>Preference page</h3>
    //   {/* <input type="text" placeholder="Search..."></input>
    //   {JSONDATA.map((value, i) => {
    //     return <div><p> name: {value.name} </p></div>
    //   })} */}
    //   <form>
    //     {/* TODO: inputting perference
    //       INCLUDES - 
    //         LOCATION: SEARCH,  
    //         SEARCHBAR: SEARCH, 
    //         RATINGS: 1-5 STARS (HALF), 
    //         PRICE: DOLLAR 1-4, 
    //         SWITCHES: VEGAN, 
    //         VEGETARIAN, 
    //         KOSHER, 
    //         HALAL,
    //         send email to friend, form includes, name, nickname, email
    //         Switch for Deliver, take out
    //          */}
    //     <Grid container>
    //       <Grid item>

    //       </Grid>
    //       <Grid item></Grid>
    //       <Grid item></Grid>
    //     </Grid>
    //   </form>
    //   <p>user make choices of preference and click search <a href="/invite">here</a> to continue</p>
    // </div>
  );
}
export default Preference;

// for test purposes
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];