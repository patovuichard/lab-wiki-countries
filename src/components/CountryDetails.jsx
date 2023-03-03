import { useParams } from "react-router-dom"


function CountryDetails() {
  const params = useParams
  console.log(params)
  return (
    <div>CountryDetails</div>
  )
}

export default CountryDetails