import './NoResults.css';

interface Props {
  term: string;
}

export const NoResults = ({ term }) => {

  return (
    <p className="NoResults">
      Your search for "{ term }" do not have any matches.
      Try different keywords. Remember that you can search here only for movies.
    </p>
  );
};