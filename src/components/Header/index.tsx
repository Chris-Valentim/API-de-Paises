import { BsMoon } from "react-icons/bs";
const Header = () => {
    return ( 
			<div className="w-full h-20 flex items-center shadow">
				<div className="py-3 px-10 w-full flex justify-between items-center">
					<p className="font-sans-nunito text-2xl font-bold">Where in the World</p>
					<div className="flex items-center gap-2">
						<BsMoon style={{fontWeight:'semibold'}}/>
						<p className="font-sans-nunito text-md font-semibold">Dark Mode</p>
					</div>
				</div>
			</div>
    )
}

export { Header }