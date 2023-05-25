import alltingrauterne from '@/data/alltingrauterne';


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
                Rautur listum stundum
                {
                    alltingrauterne.map((lag, index) => {
                        return <li key={index}>{lag.navn}</li>
                    })
                }
            </div>
        </>
    )
}




