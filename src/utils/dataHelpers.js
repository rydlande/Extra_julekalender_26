export const isDoorOpen = (day) => {
    const today = new Date();
    return day <= today.getDate() && today.getMonth() === 10;
};