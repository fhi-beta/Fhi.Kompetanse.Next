import premierLeagueTeams from '@/data/premierLeagueTeams';


export default function MariusPage1() {


    return (
        <>
            <h2>MariusPage 1</h2>
            <AListServerComponent></AListServerComponent>
        </>

    )
}

function AListServerComponent() {
    return (
        <>
            <div style={{ margin: '20px' }}>
                A List Server Component
                {
                    premierLeagueTeams.map((lag, index) => {
                        return <li key={index}>{lag.navn}</li>
                    })
                }
            </div>
        </>
    )
}




