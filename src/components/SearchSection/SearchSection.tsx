import SearchBar from './SearchBar';
import styles from './SearchSection.module.scss';

const SearchSection = () => {
  return(
  <div className={styles.root}>
    <h1>How can we help?</h1>
    <SearchBar />
  </div>
  )
}

export default SearchSection;
