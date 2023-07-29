const canonEFLensDataSet = [
    {
        maker: "Canon",
        name: "CANON EF70-300mm F4-5.6 IS II USM",
        mount: "EF",
        focalLength: [70, 300],
    },
];
const hoge = [
    {
        maker: "Fujifilm",
        name: "XF10-24mmF4 R OIS WR",
        mount: "X",
        focalLength: [10, 24],
    },
    {
        id: "0085126585754",
        maker: "SIGMA",
        name: "18-50mm F2.8 DC DN",
        mount: "X",
        focalLength: [18, 50],
    },
    {
        maker: "Tokina",
        name: "AT-X 11-20 PRO DX CAF",
        mount: "EF-S",
        focalLength: [11, 20],
    },
];
export const lensDataSet = [
    ...canonRFLensDataSet,
    ...canonEFLensDataSet,
    ...canonEFSLensDataSet,
    ...hoge,
];
