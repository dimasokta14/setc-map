import {useQuery, gql} from '@apollo/client'

const CARS = gql`
  query cars {
    title,
    brand
  }
`;

const Cars = () => {
  const { loading, error, data } = useQuery(CARS)

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error ...</p>

  return data.map(({title, brand}) => (
    <div>
      <p>
        {title} : {brand}
      </p>
    </div>
  ))
}

export default Cars