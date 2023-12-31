const PowerRadix = require('power-radix')

const b59 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdeghijklmnopqrstuvwx".split('')

const raw = [
    "3N", "3p", "2l", "36", "1b", "3v", "26", "33",
    "1W", "49", "2a", "3g", "47", "04", "33", "3W",
    "21", "3M", "0F", "0X", "1g", "2H", "0x", "1R",
    "1n", "3I", "2r", "0P", "2U", "16", "2L", "2D",
    "1t", "1s", "3H", "0d", "0s", "1K", "2D", "05",
    "1K", "1O", "0S", "1D", "3o", "1L", "3J", "1G",
    "4D", "0G", "0L", "0x", "1Q", "2p", "2a", "1K",
    "4E", "1w", "2Q", "19", "1k", "3G", "24", "0p",
    "22", "4F", "0P", "3C", "3J", "1D", "2n", "1m",
    "2i", "1J", "3P", "2v", "1s", "2O", "0k", "1M",
    "2M", "0w", "3L", "3D", "2r", "0S", "1p", "15",
    "3V", "3e", "3I", "0n", "3u", "1O", "0u", "0Z",
    "3g", "2U", "1C", "0Y", "1N", "3n", "0W", "3Q",
    "22", "13", "0V", "3c", "0E", "34", "0W", "1t",
    "1D", "2N", "3H", "47", "0s", "2p", "0Z", "34",
    "0g", "3v", "1Q", "0s", "0D", "0K", "2h", "3D",
    "3L", "2x", "1Q", "20", "2n", "2L", "1C", "2p",
    "0A", "29", "3r", "0D", "45", "0k", "2e", "2W",
    "25", "3U", "1W", "2r", "46", "2s", "2X", "39",
    "3p", "0X", "0E", "1q", "0q", "4B", "49", "48",
    "3r", "3b", "3C", "1M", "1j", "0l", "4A", "48",
    "40", "3m", "4E", "0s", "2s", "1v", "3T", "0I",
    "3t", "2B", "2k", "2t", "2O", "0e", "2l", "1L",
    "28", "2a", "0J", "1L", "0c", "3C", "2o", "0X",
    "00", "2Z", "2d", "1T", "2u", "1t", "1j", "0l",
    "1o", "1E", "3T", "18", "3E", "1G", "27", "0L",
    "0v", "2t", "06", "11", "1A", "2U", "4B", "1O",
    "2M", "3d", "2S", "0x", "0w", "0q", "0p", "2V",
    "18", "0q", "1D", "49", "2O", "00", "1v", "2t",
    "1k", "3s", "3G", "21", "3w", "0W", "29", "2r",
    "2O", "2L", "0g", "3Y", "0M", "0u", "3i", "3C",
    "1r", "2c", "2q", "3o", "30", "0a", "39", "1K",

]

const base59 = [
    200, 227, 164, 183, 96, 233, 124, 180,
    91, 245, 154, 218, 243, 4, 180, 209,
    119, 199, 15, 33, 100, 135, 58, 86,
    107, 195, 170, 25, 148, 65, 139, 131,
    113, 112, 194, 39, 53, 79, 131, 5,
    79, 83, 28, 72, 226, 80, 196, 75,
    249, 16, 21, 58, 85, 168, 154, 79,
    250, 116, 144, 68, 104, 193, 122, 50,
    120, 251, 25, 189, 196, 72, 166, 106,
    161, 78, 202, 174, 112, 142, 45, 81,
    140, 57, 198, 190, 170, 28, 109, 64,
    208, 217, 195, 48, 232, 83, 55, 35,
    218, 148, 71, 34, 82, 225, 32, 203,
    120, 62, 31, 215, 14, 181, 32, 113,
    72, 141, 194, 243, 53, 168, 35, 181,
    41, 233, 85, 53, 13, 20, 160, 190,
    198, 176, 85, 118, 166, 139, 71, 168,
    10, 127, 229, 13, 241, 45, 158, 150,
    123, 207, 91, 170, 242, 171, 151, 186,
    227, 33, 14, 110, 51, 247, 245, 244,
    229, 214, 189, 81, 103, 46, 246, 244,
    236, 224, 250, 53, 171, 115, 206, 18,
    231, 129, 163, 172, 142, 40, 164, 80,
    126, 154, 19, 80, 38, 189, 167, 33,
    0, 153, 157, 88, 173, 113, 103, 46,
    108, 73, 206, 67, 191, 75, 125, 21,
    56, 172, 6, 60, 69, 148, 247, 83,
    140, 216, 146, 58, 57, 51, 50, 149,
    67, 51, 72, 245, 142, 0, 115, 172,
    104, 230, 193, 119, 234, 32, 127, 170,
    142, 139, 41, 211, 22, 55, 220, 189,
    111, 156, 169, 226, 177, 36, 186, 79
]
const base59lines = [
    [200, 227, 164, 183, 96, 233, 124, 180],
    [91, 245, 154, 218, 243, 4, 180, 209],
    [119, 199, 15, 33, 100, 135, 58, 86],
    [107, 195, 170, 25, 148, 65, 139, 131],
    [113, 112, 194, 39, 53, 79, 131, 5],
    [79, 83, 28, 72, 226, 80, 196, 75],
    [249, 16, 21, 58, 85, 168, 154, 79],
    [250, 116, 144, 68, 104, 193, 122, 50],
    [120, 251, 25, 189, 196, 72, 166, 106],
    [161, 78, 202, 174, 112, 142, 45, 81],
    [140, 57, 198, 190, 170, 28, 109, 64],
    [208, 217, 195, 48, 232, 83, 55, 35],
    [218, 148, 71, 34, 82, 225, 32, 203],
    [120, 62, 31, 215, 14, 181, 32, 113],
    [72, 141, 194, 243, 53, 168, 35, 181],
    [41, 233, 85, 53, 13, 20, 160, 190],
    [198, 176, 85, 118, 166, 139, 71, 168],
    [10, 127, 229, 13, 241, 45, 158, 150],
    [123, 207, 91, 170, 242, 171, 151, 186],
    [227, 33, 14, 110, 51, 247, 245, 244],
    [229, 214, 189, 81, 103, 46, 246, 244],
    [236, 224, 250, 53, 171, 115, 206, 18],
    [231, 129, 163, 172, 142, 40, 164, 80],
    [126, 154, 19, 80, 38, 189, 167, 33],
    [0, 153, 157, 88, 173, 113, 103, 46],
    [108, 73, 206, 67, 191, 75, 125, 21],
    [56, 172, 6, 60, 69, 148, 247, 83],
    [140, 216, 146, 58, 57, 51, 50, 149],
    [67, 51, 72, 245, 142, 0, 115, 172],
    [104, 230, 193, 119, 234, 32, 127, 170],
    [142, 139, 41, 211, 22, 55, 220, 189],
    [111, 156, 169, 226, 177, 36, 186, 79],
]

const base60 = [
    203, 231, 167, 186, 97, 237, 126, 183,
    92, 249, 156, 222, 247, 4, 183, 212,
    121, 202, 15, 33, 102, 137, 59, 87,
    109, 198, 173, 25, 150, 66, 141, 133,
    115, 114, 197, 39, 54, 80, 133, 5,
    80, 84, 28, 73, 230, 81, 199, 76,
    253, 16, 21, 59, 86, 171, 156, 80,
    254, 118, 146, 69, 106, 196, 124, 51,
    122, 255, 25, 192, 199, 73, 169, 108,
    164, 79, 205, 177, 114, 144, 46, 82,
    142, 58, 201, 193, 173, 28, 111, 65,
    211, 220, 198, 49, 236, 84, 56, 35,
    222, 150, 72, 34, 83, 229, 32, 206,
    122, 63, 31, 218, 14, 184, 32, 115,
    73, 143, 197, 247, 54, 171, 35, 184,
    42, 237, 86, 54, 13, 20, 163, 193,
    201, 179, 86, 120, 169, 141, 72, 171,
    10, 129, 233, 13, 245, 46, 160, 152,
    125, 210, 92, 173, 246, 174, 153, 189,
    231, 33, 14, 112, 52, 251, 249, 248,
    233, 217, 192, 82, 105, 47, 250, 248,
    240, 228, 254, 54, 174, 117, 209, 18,
    235, 131, 166, 175, 144, 40, 167, 81,
    128, 156, 19, 81, 38, 192, 170, 33,
    0, 155, 159, 89, 176, 115, 105, 47,
    110, 74, 209, 68, 194, 76, 127, 21,
    57, 175, 6, 61, 70, 150, 251, 84,
    142, 219, 148, 59, 58, 52, 51, 151,
    68, 52, 73, 249, 144, 0, 117, 175,
    106, 234, 196, 121, 238, 32, 129, 173,
    144, 141, 42, 214, 22, 56, 224, 192,
    113, 158, 172, 230, 180, 36, 189, 80
]
const base60lines = [
    [203, 231, 167, 186, 97, 237, 126, 183],
    [92, 249, 156, 222, 247, 4, 183, 212],
    [121, 202, 15, 33, 102, 137, 59, 87],
    [109, 198, 173, 25, 150, 66, 141, 133],
    [115, 114, 197, 39, 54, 80, 133, 5],
    [80, 84, 28, 73, 230, 81, 199, 76],
    [253, 16, 21, 59, 86, 171, 156, 80],
    [254, 118, 146, 69, 106, 196, 124, 51],
    [122, 255, 25, 192, 199, 73, 169, 108],
    [164, 79, 205, 177, 114, 144, 46, 82],
    [142, 58, 201, 193, 173, 28, 111, 65],
    [211, 220, 198, 49, 236, 84, 56, 35],
    [222, 150, 72, 34, 83, 229, 32, 206],
    [122, 63, 31, 218, 14, 184, 32, 115],
    [73, 143, 197, 247, 54, 171, 35, 184],
    [42, 237, 86, 54, 13, 20, 163, 193],
    [201, 179, 86, 120, 169, 141, 72, 171],
    [10, 129, 233, 13, 245, 46, 160, 152],
    [125, 210, 92, 173, 246, 174, 153, 189],
    [231, 33, 14, 112, 52, 251, 249, 248],
    [233, 217, 192, 82, 105, 47, 250, 248],
    [240, 228, 254, 54, 174, 117, 209, 18],
    [235, 131, 166, 175, 144, 40, 167, 81],
    [128, 156, 19, 81, 38, 192, 170, 33],
    [0, 155, 159, 89, 176, 115, 105, 47],
    [110, 74, 209, 68, 194, 76, 127, 21],
    [57, 175, 6, 61, 70, 150, 251, 84],
    [142, 219, 148, 59, 58, 52, 51, 151],
    [68, 52, 73, 249, 144, 0, 117, 175],
    [106, 234, 196, 121, 238, 32, 129, 173],
    [144, 141, 42, 214, 22, 56, 224, 192],
    [113, 158, 172, 230, 180, 36, 189, 80],
]

// console.log(base59lines.map(l => l.reduce((a,n) => a + n  ) % 29))

// const shifted = base60.map(n => (((n + 19) + 256) % 256) % 29)
// const shifted = base60.map(n => (((n - 41) + 256) % 256))

// console.log(shifted.join())

/*

I, N, O, OE, L, S, L, M, S

M,E,EO,TH,F,F,F,EA
*/
const converted = raw
    .map(n => Number(new PowerRadix(n, 60).toString(10)) )
    .map(n => (((((n - 41) + 256) % 256) % 60) % 29))
    // .map(n => new PowerRadix(n, 10).toString(60))
    // .map(n => String('0'+n).slice(-2))

console.log(converted.join())

// console.log(new PowerRadix(3301, 10).toString(60))
// console.log(new PowerRadix(1033, 10).toString(60))