const runData =  (toldo, name, value) => {
    const data = {
        cofreGaviota: {
            total: {
                total: 0,
                lona: -17,
                enrolle: -15.5,
                caracola: -16.5,
                vuelo: -16.5
            },
            lona: {
                total: 17,
                lona: 0,
                enrolle: 1.5,
                caracola: 0.5,
                vuelo: 0.5
            }

        }

    }

    let result = data[toldo][name];
    Object.keys(result).forEach((val) =>result[val] = result[val]+value);
    return result;
}