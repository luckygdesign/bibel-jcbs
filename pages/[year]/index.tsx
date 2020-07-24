import {useRouter} from "next/router"
const YearPage = () => {

const router = useRouter()
const {year} = router.query
	return (
		<div>
<h1>Jahresübersicht</h1>
<p>{year}</p>
</div>
	
	)
}

export default YearPage;
