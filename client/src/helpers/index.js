// Добавить ноль при значении секунд меньше 10
export function getSeconds(sec) {
    if (sec < 10) {
        return '0' + sec
    } else {
        return sec
    }
}
