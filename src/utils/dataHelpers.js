export const isDoorOpen = (day) => {
    const today = new Date();
    return day <= today.getDate() && today.getMonth() === 11;
};

export const isDoorOpenAdmin = (day) => {
    const today = new Date();
    return day <= today.getDate() && today.getMonth() === 10;
};