import React from 'react';

export default function AListComponent() {
    return (
        <div style={{ margin: '30px 10px' }}>
            <h1>Kaffemerker</h1>
            <ul>
                <li style={{ color: 'blue' }}><a href="https://www.nespresso.com">Nespresso</a></li>
                <li style={{ color: 'blue' }} ><a href="https://www.lavazza.com">Lavazza</a></li>
                <li style={{ color: 'blue' }} ><a href="https://www.illy.com">Illy</a></li>
                <li style={{ color: 'blue' }}><a href="https://www.segafredo.com">Segafredo</a></li>
                <li style={{ color: 'blue' }}><a href="https://www.starbucks.com">Starbucks</a></li>
                <li style={{ color: 'blue' }}><a href="https://www.timhortons.com">Tim Hortons</a></li>
                <li style={{ color: 'blue' }}><a href="https://www.keurig.com">Keurig</a></li>
                <li style={{ color: 'blue' }}><a href="https://www.peets.com">Peet's Coffee</a></li>
                <li style={{ color: 'blue' }}><a href="https://www.deathwishcoffee.com">Death Wish Coffee</a></li>
                <li style={{ color: 'blue' }}><a href="https://www.bluebottlecoffee.com">Blue Bottle Coffee</a></li>
            </ul>
        </div>
    );
}
