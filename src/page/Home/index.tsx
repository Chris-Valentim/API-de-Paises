import { Card } from "../../components/Card"
import { useFlags } from "../../hooks/useFlags"


const Home = () => {

  const { allFlags }  = useFlags()

  return (
    <div className='flex flex-wrap'>
      {allFlags.map((item) => (
        <Card capital={item.capital} flags={item.flags.svg} name={item.name.common} population={item.population} region={item.region} />
        ))}
    </div>
  )
}

export { Home }