const Card = () => {
	return (
		<div className="flex flex-col justify-center bg-zinc-50 w-56 h-64 m-auto mt-10 rounded-md shadow">
			<div className="flex justify-center items-center">
				<img className="w-52 h-32"
					src={'https://flagcdn.com/w320/al.png'}
					alt="Imagem do País"
				/>
			</div>
			<div className="m-2.5">
				<h1 className="text-1xl font-semibold pb-2.5">
					Albânia
				</h1>
				<div className="text-xs">
					<p>Population: <span className="text-stone-600">2.800.000</span></p>
					<p>Region: <span className="text-stone-600">Europe</span></p>
					<p>Capital: <span className="text-stone-600">Tirana</span></p>
				</div>
			</div>
		</div>
	)
}

export default Card
