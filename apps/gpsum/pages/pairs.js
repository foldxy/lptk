let seed = `
3N-3p-2l-36-1b-3v-26-33/
1W-49-2a-3g-47-04-33-3W/
21-3M-0F-0X-1g-2H-0x-1R/
1n-3I-2r-0P-2U-16-2L-2D/
1t-1s-3H-0d-0s-1K-2D-05/
1K-1O-0S-1D-3o-1L-3J-1G/
4D-0G-0L-0x-1Q-2p-2a-1K/
4E-1w-2Q-19-1k-3G-24-0p/
22-4F-0P-3C-3J-1D-2n-1m/
2i-1J-3P-2v-1s-2O-0k-1M/
2M-0w-3L-3D-2r-0S-1p-15/
3V-3e-3I-0n-3u-1O-0u-0Z/
3g-2U-1C-0Y-1N-3n-0W-3Q/
22-13-0V-3c-0E-34-0W-1t/
1D-2N-3H-47-0s-2p-0Z-34/
0g-3v-1Q-0s-0D-0K-2h-3D/
3L-2x-1Q-20-2n-2L-1C-2p/
0A-29-3r-0D-45-0k-2e-2W/
25-3U-1W-2r-46-2s-2X-39/
3p-0X-0E-1q-0q-4B-49-48/
3r-3b-3C-1M-1j-0l-4A-48/
40-3m-4E-0s-2s-1v-3T-0I/
3t-2B-2k-2t-2O-0e-2l-1L/
28-2a-0J-1L-0c-3C-2o-0X/
00-2Z-2d-1T-2u-1t-1j-0l/
1o-1E-3T-18-3E-1G-27-0L/
0v-2t-06-11-1A-2U-4B-1O/
2M-3d-2S-0x-0w-0q-0p-2V/
18-0q-1D-49-2O-00-1v-2t/
1k-3s-3G-21-3w-0W-29-2r/
2O-2L-0g-3Y-0M-0u-3i-3C/
1r-2c-2q-3o-30-0a-39-1K
`.replace(/\n/g, '').split(/\//g);

let pairs = seed.join('-').split('-')

const uniquePairs = [
    "00", "04", "05", "06", "0A", "0D", "0E",
    "0F", "0G", "0I", "0J", "0K", "0L", "0M",
    "0P", "0S", "0V", "0W", "0X", "0Y", "0Z",
    "0a", "0c", "0d", "0e", "0g", "0k", "0l",
    "0n", "0p", "0q", "0s", "0u", "0v", "0w",
    "0x", "11", "13", "15", "16", "18", "19",
    "1A", "1C", "1D", "1E", "1G", "1J", "1K",
    "1L", "1M", "1N", "1O", "1Q", "1R", "1T",
    "1W", "1b", "1g", "1j", "1k", "1m", "1n",
    "1o", "1p", "1q", "1r", "1s", "1t", "1v",
    "1w", "20", "21", "22", "24", "25", "26",
    "27", "28", "29", "2B", "2D", "2H", "2L",
    "2M", "2N", "2O", "2Q", "2S", "2U", "2V",
    "2W", "2X", "2Z", "2a", "2c", "2d", "2e",
    "2h", "2i", "2k", "2l", "2n", "2o", "2p",
    "2q", "2r", "2s", "2t", "2u", "2v", "2x",
    "30", "33", "34", "36", "39", "3C", "3D",
    "3E", "3G", "3H", "3I", "3J", "3L", "3M",
    "3N", "3P", "3Q", "3T", "3U", "3V", "3W",
    "3Y", "3b", "3c", "3d", "3e", "3g", "3i",
    "3m", "3n", "3o", "3p", "3r", "3s", "3t",
    "3u", "3v", "3w", "40", "45", "46", "47",
    "48", "49", "4A", "4B", "4D", "4E", "4F"
]

function generateRange() {
    const base = 'abcdefghijklmnopqrstuvwxyz'
    const ALPHA = base.toUpperCase()
    const alpha = base//.slice(0,24)

    let range = []

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 10; j++) {
            range.push('' + i + j)
        }
        for (let k = 0; k < 26; k++) {
            range.push('' + i + ALPHA[k])
        }
        for (let l = 0; l < 24; l++) {
            range.push('' + i + alpha[l])
        }
    }

    return range
}

export default function Pairs() {
    const range = generateRange().slice(0, 256)

    const cells = range.map((v, i) => {
        const used = uniquePairs.indexOf(v) > -1
        const count = !used ? 0 : pairs.filter(p => p === v).length
        const alpha = count * .25
        const styles = {
            color: used ? 'black' : 'black',
            backgroundColor: `rgba(255,0,255,${alpha})`,
            border: '1px solid #999',
            display: 'inline-block',
            padding: '10px 3px'
        }
        return (
            <span key={i} style={styles} data-used={used ? 1 : 0}>{v}</span>
        )

    })

    const gridStyles = {
        margin: '100px 20px',
        // width: '400px',
        display: 'grid',
        gridTemplateColumns: 'repeat(60, 40px)',
        // gridTemplateRows: 'repeat(16, 40px)',
        alignItems: 'center',
        textAlign: 'center',
        gap: '.25rem',
    }

    return (
        <>
            <div style={gridStyles}>
                {cells}
            </div>
        </>

    )
}

// const pattern = [
//     1,3,3,3,1,2,4,1,5,2,1,2,1,2,6,1,3,1,1,3,2,1,1,1,2,1,1,1,4, // ends w/ 0x
//     1,1,1,1,1,2,1,3,1,3,1,1,2,6,1,2,1,1,2,1,4,1,4,1,2,2,1,8,1,2,1, // ends with 1x
//     3,1,6,1,1,1,1,3,1,3,4,1,1,1,1,1,4,1,2,1,3,2,2,1,2,1,9,1,// ends w/ 2w
//     2,2,2,1,1,2,1,2,3,1,4,1,3,1,2,2,4,1,1,2,4,1,1,1,1,3,4,1,6,1, //ends w/ 3x
//     1,4,7,1,3 // ends w/ 4F



// ]

// console.log(pattern)

