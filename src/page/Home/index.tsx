import { Card } from "../../components/Card"
import { useFlags } from "../../hooks/useFlags"

const Home = () => {
  const { allFlags }  = useFlags()

  return (
    <div className='flex flex-wrap'>
      {allFlags.map((item) => (
          <Card
            // spread operator
            {...item}
            flags={item.flags.svg}
            name={item.name.common}
          />
        ))
      }
    </div>
  )
}

export { Home }