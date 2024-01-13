export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }
    
    let j = i - jmpAmount;
    for(; j <= i; j++){
        if (breaks[j]) {
            return j;
        }
    }

    return -1;
}