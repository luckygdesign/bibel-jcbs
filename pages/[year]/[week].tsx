import {useRouter} from "next/router";
const WeekPage = () => {
const {year, week} = useRouter().query
	return (

		<div>

	<h1>Hallo Welt</h1>
<p>{year +  week}</p>	
</div>	
	
	)
} 

export default WeekPage
