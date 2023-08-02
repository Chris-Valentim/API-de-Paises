const DetailedCountry = () => {
  return(
    <div className="flex flex-col m-8">
      <button className="bg-zinc-400 w-20">Back</button>
      <div className="flex justify-between items-center m-16">
        <img className="w-96 h-72" src={"https://flagcdn.com/al.svg"} alt="Imagem do País" />
        <div className="">
          <h1>Belgica</h1>
          <p>Native Name: <span>Belgie</span></p>
          <p>Population: <span>11.319.000</span></p>
          <p>Region: <span>Europe</span></p>
          <p>Sub Region<span>Western Europe</span></p>
          <p>Capital: <span>Brusseis</span></p>
          <p>Top Level Domain: <span>Be</span></p>
          <p>Currencies: <span>Euro</span></p>
          <p>Languages: <span>Dutch, French, German</span></p>
          <div>
            <p>Border Countries:</p>
            <button>France</button>
            <button>Germany</button>
            <button>Netherlands</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default DetailedCountry
